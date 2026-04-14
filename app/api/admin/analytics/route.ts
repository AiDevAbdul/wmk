import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { auth } from "@/lib/auth"

export async function GET(request: Request) {
  const session = await auth(request);

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(request.url)
    const range = searchParams.get("range") || "30d"

    // Calculate date range
    const endDate = new Date()
    const startDate = new Date()

    switch (range) {
      case "7d":
        startDate.setDate(endDate.getDate() - 7)
        break
      case "30d":
        startDate.setDate(endDate.getDate() - 30)
        break
      case "90d":
        startDate.setDate(endDate.getDate() - 90)
        break
      case "1y":
        startDate.setFullYear(endDate.getFullYear() - 1)
        break
      default:
        startDate.setDate(endDate.getDate() - 30)
    }

    // Get analytics events from database
    const events = await prisma.analyticsEvent.findMany({
      where: {
        timestamp: {
          gte: startDate,
          lte: endDate,
        },
      },
      orderBy: { timestamp: "desc" },
    })

    // Calculate metrics
    const phoneClicks = events.filter(e => e.eventType === "phone_click").length
    const whatsappClicks = events.filter(e => e.eventType === "whatsapp_click").length
    const formSubmissions = events.filter(e => e.eventType === "form_submit").length
    const pageViews = events.filter(e => e.eventType === "page_view").length

    // Group by event type
    const eventsByType = events.reduce((acc: any, event) => {
      if (!acc[event.eventType]) {
        acc[event.eventType] = 0
      }
      acc[event.eventType]++
      return acc
    }, {})

    // Group by page
    const pageStats = events.reduce((acc: any, event) => {
      if (!acc[event.page]) {
        acc[event.page] = 0
      }
      acc[event.page]++
      return acc
    }, {})

    // Get contact submissions for conversion rate
    const contactSubmissions = await prisma.contactSubmission.findMany({
      where: {
        createdAt: {
          gte: startDate,
          lte: endDate,
        },
      },
    })

    const conversionRate = pageViews > 0 ? ((contactSubmissions.length / pageViews) * 100).toFixed(2) : "0"

    return NextResponse.json({
      dateRange: { startDate, endDate },
      metrics: {
        pageViews,
        phoneClicks,
        whatsappClicks,
        formSubmissions,
        contactSubmissions: contactSubmissions.length,
        conversionRate: parseFloat(conversionRate),
      },
      eventsByType,
      pageStats,
      topPages: Object.entries(pageStats)
        .sort(([, a], [, b]) => (b as number) - (a as number))
        .slice(0, 10)
        .map(([page, count]) => ({ page, count })),
    })
  } catch (error) {
    console.error("Error fetching analytics:", error)
    return NextResponse.json({ error: "Failed to fetch analytics" }, { status: 500 })
  }
}
