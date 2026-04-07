import { BetaAnalyticsDataClient } from "@google-analytics/data"

const client = new BetaAnalyticsDataClient({
  projectId: process.env.GOOGLE_ANALYTICS_PROJECT_ID,
  credentials: process.env.GOOGLE_ANALYTICS_CREDENTIALS
    ? JSON.parse(process.env.GOOGLE_ANALYTICS_CREDENTIALS)
    : undefined,
})

export async function getAnalyticsData(propertyId: string, startDate: string, endDate: string) {
  try {
    const response = await client.runReport({
      property: `properties/${propertyId}`,
      dateRanges: [
        {
          startDate,
          endDate,
        },
      ],
      metrics: [
        { name: "activeUsers" },
        { name: "screenPageViews" },
        { name: "bounceRate" },
        { name: "averageSessionDuration" },
      ],
      dimensions: [{ name: "date" }],
    })

    return response
  } catch (error) {
    console.error("Error fetching GA4 data:", error)
    throw error
  }
}

export async function getTopPages(propertyId: string, startDate: string, endDate: string) {
  try {
    const response = await client.runReport({
      property: `properties/${propertyId}`,
      dateRanges: [
        {
          startDate,
          endDate,
        },
      ],
      metrics: [{ name: "screenPageViews" }, { name: "bounceRate" }],
      dimensions: [{ name: "pagePath" }],
      orderBys: [
        {
          metric: { metricName: "screenPageViews" },
          desc: true,
        },
      ],
      limit: 10,
    })

    return response
  } catch (error) {
    console.error("Error fetching top pages:", error)
    throw error
  }
}

export async function getTrafficSource(propertyId: string, startDate: string, endDate: string) {
  try {
    const response = await client.runReport({
      property: `properties/${propertyId}`,
      dateRanges: [
        {
          startDate,
          endDate,
        },
      ],
      metrics: [{ name: "screenPageViews" }],
      dimensions: [{ name: "sessionSource" }],
      orderBys: [
        {
          metric: { metricName: "screenPageViews" },
          desc: true,
        },
      ],
    })

    return response
  } catch (error) {
    console.error("Error fetching traffic source:", error)
    throw error
  }
}

export async function getConversions(propertyId: string, startDate: string, endDate: string) {
  try {
    const response = await client.runReport({
      property: `properties/${propertyId}`,
      dateRanges: [
        {
          startDate,
          endDate,
        },
      ],
      metrics: [{ name: "eventCount" }],
      dimensions: [{ name: "eventName" }],
      dimensionFilter: {
        filter: {
          fieldName: "eventName",
          stringFilter: {
            matchType: "BEGINS_WITH",
            value: "conversion_",
          },
        },
      },
    })

    return response
  } catch (error) {
    console.error("Error fetching conversions:", error)
    throw error
  }
}
