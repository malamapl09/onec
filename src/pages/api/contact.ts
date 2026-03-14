import type { APIRoute } from 'astro'

export const prerender = false

const FIELD_LIMITS: Record<string, number> = {
  nombre: 100,
  email: 254,
  empresa: 200,
  telefono: 20,
  asunto: 100,
  mensaje: 2000,
}

export const POST: APIRoute = async ({ request }) => {
  try {
    // Origin / Referer check
    const origin = request.headers.get('origin') || request.headers.get('referer') || ''
    const url = new URL(request.url)
    const allowedHosts = [url.host, 'localhost', '127.0.0.1']
    let originAllowed = false
    try {
      const originUrl = new URL(origin)
      originAllowed = allowedHosts.some(
        (h) => originUrl.hostname === h || originUrl.hostname.endsWith(`.${h}`),
      )
    } catch {
      originAllowed = false
    }
    if (!originAllowed) {
      return new Response(
        JSON.stringify({ error: 'Origen no permitido.' }),
        { status: 403, headers: { 'Content-Type': 'application/json' } },
      )
    }

    const formData = await request.formData()

    // Honeypot check — silently succeed for bots
    const honeypot = formData.get('website')?.toString() || ''
    if (honeypot) {
      return new Response(
        JSON.stringify({ success: true, message: 'Mensaje enviado correctamente. Nos pondremos en contacto pronto.' }),
        { status: 200, headers: { 'Content-Type': 'application/json' } },
      )
    }

    const nombre = formData.get('nombre')?.toString().trim()
    const email = formData.get('email')?.toString().trim()
    const empresa = formData.get('empresa')?.toString().trim() || 'No especificada'
    const telefono = formData.get('telefono')?.toString().trim() || 'No proporcionado'
    const asunto = formData.get('asunto')?.toString().trim() || 'Consulta general'
    const mensaje = formData.get('mensaje')?.toString().trim()

    if (!nombre || !email || !mensaje) {
      return new Response(
        JSON.stringify({ error: 'Nombre, email y mensaje son requeridos.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } },
      )
    }

    // Input length validation
    const fields: Record<string, string> = { nombre, email, empresa, telefono, asunto, mensaje }
    for (const [field, value] of Object.entries(fields)) {
      const max = FIELD_LIMITS[field]
      if (max && value.length > max) {
        return new Response(
          JSON.stringify({ error: `El campo "${field}" excede el límite de ${max} caracteres.` }),
          { status: 400, headers: { 'Content-Type': 'application/json' } },
        )
      }
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: 'Por favor ingresa un email válido.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } },
      )
    }

    // Structured log without PII message body
    console.info('Contact form submission received', {
      nombre,
      email,
      asunto,
      timestamp: new Date().toISOString(),
    })

    // TODO: Integrate with email service (Resend, SendGrid, etc.)
    // to send email to info@onec.org.do

    return new Response(
      JSON.stringify({ success: true, message: 'Mensaje enviado correctamente. Nos pondremos en contacto pronto.' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } },
    )
  } catch {
    return new Response(
      JSON.stringify({ error: 'Error al procesar el formulario. Por favor intenta de nuevo.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } },
    )
  }
}
