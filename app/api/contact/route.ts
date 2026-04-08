import { prisma } from "@/lib/prisma";
import { sendContactConfirmation, sendAdminNotification } from "@/lib/email";
import { trackFormSubmit } from "@/lib/analytics-events";
import { sanitizeInput, validateEmail, validatePhone, checkRateLimit } from "@/lib/security";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    // Get client IP for rate limiting
    const ip = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown";

    // Rate limit: 5 submissions per minute per IP
    if (!checkRateLimit(`contact-form:${ip}`, 5, 60000)) {
      return NextResponse.json(
        { error: "Too many submissions. Please try again later." },
        { status: 429 }
      );
    }

    const body = await request.json();
    let { name, phone, carBrand, service, message, email, page } = body;

    // Validate required fields
    if (!name || !phone || !service || !message || !email) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Sanitize inputs
    name = sanitizeInput(name);
    phone = sanitizeInput(phone);
    carBrand = sanitizeInput(carBrand || "");
    service = sanitizeInput(service);
    message = sanitizeInput(message);
    email = sanitizeInput(email);

    // Validate email format
    if (!validateEmail(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Validate phone format
    if (!validatePhone(phone)) {
      return NextResponse.json(
        { error: "Invalid phone format" },
        { status: 400 }
      );
    }

    // Validate message length (prevent spam)
    if (message.length < 10 || message.length > 5000) {
      return NextResponse.json(
        { error: "Message must be between 10 and 5000 characters" },
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

    // Track form submission
    try {
      await trackFormSubmit(page || "/contact", service);
    } catch (trackError) {
      console.error("Failed to track form submission:", trackError);
      // Don't fail the submission if tracking fails
    }

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
