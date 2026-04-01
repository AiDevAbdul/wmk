import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";

export async function GET() {
  const session = await auth();

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const events = await prisma.analyticsEvent.findMany();

    // Calculate metrics
    const totalVisitors = new Set(events.map((e) => e.userId)).size;
    const pageViews = events.filter((e) => e.eventType === "page_view").length;
    const phoneClicks = events.filter((e) => e.eventType === "phone_click").length;
    const whatsappClicks = events.filter((e) => e.eventType === "whatsapp_click").length;

    const contacts = await prisma.contactSubmission.count();

    // Top pages
    const pageViewEvents = events.filter((e) => e.eventType === "page_view");
    const pageMap = new Map<string, number>();
    pageViewEvents.forEach((e) => {
      pageMap.set(e.page, (pageMap.get(e.page) || 0) + 1);
    });

    const topPages = Array.from(pageMap.entries())
      .map(([page, views]) => ({ page, views }))
      .sort((a, b) => b.views - a.views)
      .slice(0, 10);

    return NextResponse.json({
      totalVisitors,
      pageViews,
      phoneClicks,
      whatsappClicks,
      contactSubmissions: contacts,
      topPages,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch analytics" },
      { status: 500 }
    );
  }
}
