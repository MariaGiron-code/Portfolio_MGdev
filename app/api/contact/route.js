import { connectDB } from '@/lib/db'
import { withErrorHandler } from '@/lib/utils/errors'
import { successResponse, errorResponse } from '@/lib/utils/response'
import { saveContactMessage } from '@/lib/services/contact.service'
import { createContactSchema } from '@/lib/validators/contact.validator'
import { NextResponse } from 'next/server'

export const POST = withErrorHandler(async (request) => {
  await connectDB()
  const body = await request.json()
  const result = createContactSchema.safeParse(body)

  if (!result.success) {
    return errorResponse('Datos del mensaje inválidos', 400)
  }
  const message = await saveContactMessage(result.data)
  return successResponse(message, 201)
})

// Todos los demás métodos devuelven 405 Method Not Allowed
export async function GET() {
  return NextResponse.json({ success: false, data: null, error: 'Método no permitido' }, { status: 405 })
}

export async function PUT() {
  return NextResponse.json({ success: false, data: null, error: 'Método no permitido' }, { status: 405 })
}

export async function DELETE() {
  return NextResponse.json({ success: false, data: null, error: 'Método no permitido' }, { status: 405 })
}
