import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";

export async function GET(request: Request) {
  const session = await auth(request);

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const settings = await prisma.siteSettings.upsert({
      where: { id: "1" },
      update: {},
      create: { id: "1" },
    });

    return NextResponse.json(settings);
  } catch (error) {
    console.error("Settings GET error:", error);
    return NextResponse.json({ error: "Failed to fetch settings" }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  const session = await auth(request);

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { csrfToken, ...data } = body;

    if (!csrfToken) {
      return NextResponse.json({ error: "CSRF token missing" }, { status: 403 });
    }

    const allowed = ["phone", "whatsapp", "email", "address", "addressAr", "hours", "latitude", "longitude"];
    const update = Object.fromEntries(
      Object.entries(data).filter(([k]) => allowed.includes(k))
    );

    const settings = await prisma.siteSettings.upsert({
      where: { id: "1" },
      update,
      create: { id: "1", ...update },
    });

    return NextResponse.json(settings);
  } catch (error) {
    console.error("Settings PUT error:", error);
    return NextResponse.json({ error: "Failed to save settings" }, { status: 500 });
  }
}
