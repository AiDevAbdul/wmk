"use client"

import { useEffect } from "react"

export function useAnalytics() {
  useEffect(() => {
    // Track page view
    if (typeof window !== "undefined") {
      const trackPageView = async () => {
        try {
          await fetch("/api/analytics/track", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              eventType: "page_view",
              page: window.location.pathname,
            }),
          })
        } catch (error) {
          console.error("Failed to track page view:", error)
        }
      }

      trackPageView()
    }
  }, [])

  const trackPhoneClick = async () => {
    try {
      await fetch("/api/analytics/track", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          eventType: "phone_click",
          page: typeof window !== "undefined" ? window.location.pathname : "/",
        }),
      })
    } catch (error) {
      console.error("Failed to track phone click:", error)
    }
  }

  const trackWhatsAppClick = async () => {
    try {
      await fetch("/api/analytics/track", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          eventType: "whatsapp_click",
          page: typeof window !== "undefined" ? window.location.pathname : "/",
        }),
      })
    } catch (error) {
      console.error("Failed to track WhatsApp click:", error)
    }
  }

  return { trackPhoneClick, trackWhatsAppClick }
}
