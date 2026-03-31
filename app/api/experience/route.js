import { connectDB } from '@/lib/db'
import { withErrorHandler } from '@/lib/utils/errors'
import { successResponse, errorResponse } from '@/lib/utils/response'
import { getAllExperience, createExperience } from '@/lib/services/experience.service'
import { createExperienceSchema } from '@/lib/validators/experience.validator'

export const GET = withErrorHandler(async () => {
  await connectDB()
  const experience = await getAllExperience()
  return successResponse(experience, 200)
})

export const POST = withErrorHandler(async (request) => {
  await connectDB()
  const body = await request.json()
  const result = createExperienceSchema.safeParse(body)

  if (!result.success) {
    return errorResponse('Datos de experiencia inválidos', 400)
  }
  const experience = await createExperience(result.data)
  return successResponse(experience, 201)
})
