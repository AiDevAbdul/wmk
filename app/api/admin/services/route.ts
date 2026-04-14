import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";

export async function GET(request: Request) {
  const session = await auth(request);

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const services = await prisma.service.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(services);
  } catch (error) {
    console.error("Services GET error:", error);
    return NextResponse.json(
      { error: "Failed to fetch services" },
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
    const { nameEn, nameAr, slug, description, descriptionAr, brands } = body;

    const service = await prisma.service.create({
      data: {
        nameEn,
        nameAr,
        slug,
        description,
        descriptionAr,
        brands: JSON.stringify(brands || []),
        faq: JSON.stringify([]),
      },
    });

    return NextResponse.json(service, { status: 201 });
  } catch (error) {
    console.error("Services POST error:", error);
    return NextResponse.json(
      { error: "Failed to create service" },
      { status: 500 }
    );
  }
}
