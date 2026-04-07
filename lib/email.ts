import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendContactConfirmation = async (
  email: string,
  name: string,
  service: string
) => {
  try {
    const result = await resend.emails.send({
      from: 'WMK Auto Garage <noreply@wmkautorepairing.com>',
      to: email,
      subject: 'We received your message - WMK Auto Garage',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: #1E2128; color: #F5C518; padding: 20px; text-align: center; border-radius: 8px; }
              .content { padding: 20px; background: #f9f9f9; margin: 20px 0; border-radius: 8px; }
              .footer { text-align: center; color: #666; font-size: 12px; margin-top: 20px; }
              .cta { background: #F5C518; color: #1E2128; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block; margin: 10px 0; font-weight: bold; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>WMK Auto Garage</h1>
                <p>Elite Auto Repair Specialists</p>
              </div>

              <div class="content">
                <h2>Thank You, ${name}!</h2>
                <p>We received your inquiry about <strong>${service}</strong>.</p>

                <p>Our team will review your request and get back to you within 24 hours.</p>

                <p><strong>In the meantime, you can:</strong></p>
                <ul>
                  <li>Call us: <a href="tel:+971554762284">+971 55 476 2284</a></li>
                  <li>WhatsApp us: <a href="https://wa.me/971554762284">Chat on WhatsApp</a></li>
                  <li>Visit us: 18 Street, Ras Al Khor Industrial Area 2, Dubai</li>
                </ul>

                <p><strong>Our Hours:</strong><br>
                Saturday - Thursday: 10:00 AM - 10:00 PM<br>
                Friday: CLOSED</p>
              </div>

              <div class="footer">
                <p>WMK Auto Repairing Garage LLC<br>
                18 Street, Ras Al Khor Industrial Area 2, Dubai, UAE<br>
                Phone: +971 55 476 2284</p>
              </div>
            </div>
          </body>
        </html>
      `,
    })

    return result
  } catch (error) {
    console.error('Error sending confirmation email:', error)
    throw error
  }
}

export const sendAdminNotification = async (
  name: string,
  phone: string,
  carBrand: string,
  service: string,
  message: string
) => {
  try {
    const adminEmail = process.env.ADMIN_EMAIL || 'admin@wmkautorepairing.com'

    const result = await resend.emails.send({
      from: 'WMK Auto Garage <noreply@wmkautorepairing.com>',
      to: adminEmail,
      subject: `New contact form submission from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: #1E2128; color: #F5C518; padding: 20px; text-align: center; border-radius: 8px; }
              .details { padding: 20px; background: #f9f9f9; margin: 20px 0; border-radius: 8px; }
              .detail-row { margin: 10px 0; padding: 10px; background: white; border-left: 4px solid #F5C518; }
              .label { font-weight: bold; color: #1E2128; }
              .footer { text-align: center; color: #666; font-size: 12px; margin-top: 20px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>New Contact Form Submission</h1>
              </div>

              <div class="details">
                <div class="detail-row">
                  <span class="label">Name:</span> ${name}
                </div>
                <div class="detail-row">
                  <span class="label">Phone:</span> <a href="tel:${phone}">${phone}</a>
                </div>
                <div class="detail-row">
                  <span class="label">Car Brand:</span> ${carBrand}
                </div>
                <div class="detail-row">
                  <span class="label">Service:</span> ${service}
                </div>
                <div class="detail-row">
                  <span class="label">Message:</span><br>
                  ${message.replace(/\n/g, '<br>')}
                </div>
              </div>

              <div class="footer">
                <p>This is an automated notification from WMK Auto Garage contact form.</p>
              </div>
            </div>
          </body>
        </html>
      `,
    })

    return result
  } catch (error) {
    console.error('Error sending admin notification:', error)
    throw error
  }
}
