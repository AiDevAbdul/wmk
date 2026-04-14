import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { validateCsrfToken } from "@/lib/security";

export async function GET(request: Request) {
  const session = await auth(request);

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const posts = await prisma.blogPost.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(posts);
  } catch (error) {
    console.error("Blog GET error:", error);
    return NextResponse.json(
      { error: "Failed to fetch blog posts" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  const session = await auth(request);

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { title, slug, content, excerpt, category, published, csrfToken } = body;

    // Validate CSRF token
    if (!csrfToken) {
      return NextResponse.json({ error: "CSRF token missing" }, { status: 403 });
    }

    const { title: titleData, slug: slugData, content: contentData, excerpt: excerptData, category: categoryData, published: publishedData } = body;

    const post = await prisma.blogPost.create({
      data: {
        title: titleData,
        slug: slugData,
        content: contentData,
        excerpt: excerptData,
        category: categoryData,
        published: publishedData,
        publishedAt: publishedData ? new Date() : null,
      },
    });

    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    console.error("Blog POST error:", error);
    return NextResponse.json(
      { error: "Failed to create blog post" },
      { status: 500 }
    );
  }
}
