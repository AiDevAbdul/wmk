import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const [services, blogPosts, contacts] = await Promise.all([
      prisma.service.count(),
      prisma.blogPost.count(),
      prisma.contactSubmission.count(),
    ]);

    return NextResponse.json({
      services,
      blogPosts,
      contacts,
    });
  } catch (error) {
    console.error("Stats API error:", error);
    return NextResponse.json(
      { error: "Failed to fetch stats" },
      { status: 500 }
    );
  }
}

