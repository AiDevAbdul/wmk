import { prisma } from "@/lib/prisma";
import { sendContactConfirmation, sendAdminNotification } from "@/lib/email";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, carBrand, service, message, email } = body;

    if (!name || !phone || !service || !message || !email) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Create contact submission
    const submission = await prisma.contactSubmission.create({
      data: {
        name,
        phone,
        carBrand: carBrand || "Not specified",
        service,
        message,
      },
    });

    // Send confirmation email to user
    try {
      await sendContactConfirmation(email, name, service);
    } catch (emailError) {
      console.error("Failed to send confirmation email:", emailError);
      // Don't fail the submission if email fails
    }

    // Send admin notification
    try {
      await sendAdminNotification(name, phone, carBrand || "Not specified", service, message);
    } catch (emailError) {
      console.error("Failed to send admin notification:", emailError);
      // Don't fail the submission if email fails
    }

    return NextResponse.json(submission, { status: 201 });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to submit contact form" },
      { status: 500 }
    );
  }
}
