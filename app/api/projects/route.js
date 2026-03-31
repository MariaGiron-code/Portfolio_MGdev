import { connectDB } from '@/lib/db'
import { withErrorHandler } from '@/lib/utils/errors'
import { successResponse, errorResponse } from '@/lib/utils/response'
import { getAllProjects, createProject } from '@/lib/services/project.service'
import { createProjectSchema, queryProjectSchema } from '@/lib/validators/project.validator'

export const GET = withErrorHandler(async (request) => {
  await connectDB()
  
  // Extraer query params de la URL
  const { searchParams } = new URL(request.url)
  const rawQuery = {
    category: searchParams.get('category') ?? undefined,
    featured: searchParams.get('featured') ?? undefined,
    page:     searchParams.get('page') ?? undefined,
    limit:    searchParams.get('limit') ?? undefined,
  }

  // Validar los query params
  const result = queryProjectSchema.safeParse(rawQuery)
  if (!result.success) {
    return errorResponse('Parámetros de consulta inválidos', 400)
  }

  const { category, featured, page = 1, limit = 10 } = result.data
  const filters = {}
  if (category !== undefined) filters.category = category
  if (featured !== undefined) filters.featured = featured

  const data = await getAllProjects(filters, page, limit)
  return successResponse(data, 200)
})

export const POST = withErrorHandler(async(request) => {
    await connectDB()
    const body = await request.json()
    const result = createProjectSchema.safeParse(body)

    if(!result.success){
        return errorResponse('Datos del proyecto inválidos', 400)
    }
    const proyect = await createProject(result.data)
        return successResponse(proyect, 201)
})