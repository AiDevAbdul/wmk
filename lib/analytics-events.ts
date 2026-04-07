import { prisma } from "@/lib/prisma"

export async function trackEvent(
  eventType: "page_view" | "phone_click" | "whatsapp_click" | "form_submit",
  page: string,
  metadata?: Record<string, any>
) {
  try {
    await prisma.analyticsEvent.create({
      data: {
        eventType,
        page,
        metadata: metadata ? JSON.stringify(metadata) : null,
        timestamp: new Date(),
      },
    })
  } catch (error) {
    console.error("Error tracking event:", error)
  }
}

export async function trackPhoneClick(page: string) {
  return trackEvent("phone_click", page, { action: "phone_click" })
}

export async function trackWhatsAppClick(page: string) {
  return trackEvent("whatsapp_click", page, { action: "whatsapp_click" })
}

export async function trackFormSubmit(page: string, service: string) {
  return trackEvent("form_submit", page, { service })
}

export async function trackPageView(page: string) {
  return trackEvent("page_view", page)
}
