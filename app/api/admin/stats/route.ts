import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";

export async function GET(request: Request) {
  const session = await auth(request);

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const now = new Date();
    const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
    const sixtyDaysAgo = new Date(now.getTime() - 60 * 24 * 60 * 60 * 1000);

    const [
      services,
      blogPosts,
      contacts,
      newContacts,
      contactsThisPeriod,
      contactsPrevPeriod,
      pageViewsThisPeriod,
      pageViewsPrevPeriod,
      recentContacts,
    ] = await Promise.all([
      prisma.service.count(),
      prisma.blogPost.count(),
      prisma.contactSubmission.count(),
      prisma.contactSubmission.count({ where: { status: "new" } }),
      prisma.contactSubmission.count({ where: { createdAt: { gte: thirtyDaysAgo } } }),
      prisma.contactSubmission.count({ where: { createdAt: { gte: sixtyDaysAgo, lt: thirtyDaysAgo } } }),
      prisma.analyticsEvent.count({ where: { eventType: "page_view", timestamp: { gte: thirtyDaysAgo } } }),
      prisma.analyticsEvent.count({ where: { eventType: "page_view", timestamp: { gte: sixtyDaysAgo, lt: thirtyDaysAgo } } }),
      prisma.contactSubmission.findMany({
        orderBy: { createdAt: "desc" },
        take: 5,
        select: { id: true, name: true, phone: true, service: true, carBrand: true, status: true, createdAt: true },
      }),
    ]);

    const contactsTrend =
      contactsPrevPeriod > 0
        ? Math.round(((contactsThisPeriod - contactsPrevPeriod) / contactsPrevPeriod) * 100)
        : contactsThisPeriod > 0
        ? 100
        : 0;

    const pageViewsTrend =
      pageViewsPrevPeriod > 0
        ? Math.round(((pageViewsThisPeriod - pageViewsPrevPeriod) / pageViewsPrevPeriod) * 100)
        : pageViewsThisPeriod > 0
        ? 100
        : 0;

    return NextResponse.json({
      services,
      blogPosts,
      contacts,
      newContacts,
      pageViews: pageViewsThisPeriod,
      contactsTrend,
      pageViewsTrend,
      recentContacts,
    });
  } catch (error) {
    console.error("Stats API error:", error);
    return NextResponse.json(
      { error: "Failed to fetch stats" },
      { status: 500 }
    );
  }
}
