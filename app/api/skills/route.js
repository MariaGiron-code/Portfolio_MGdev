import { connectDB } from '@/lib/db';
import { withErrorHandler } from '@/lib/utils/errors';
import { successResponse, errorResponse } from '@/lib/utils/response'
import { getAllSkills, createSkill } from '@/lib/services/skill.service';
import { createSkillSchema } from '@/lib/validators/skill.validator';

export const GET = withErrorHandler(async() => {
    await connectDB()
    const skill = await getAllSkills()
        return successResponse(skill, 200)
})

export const POST = withErrorHandler(async(request) =>{
    await connectDB()
    const body = await request.json()
    const result = createSkillSchema.safeParse(body)

    if(!result.success){
        return errorResponse('Error! No se pudo crear la skill', 400)
    }
    const skill = await createSkill(result.data)
        return successResponse(skill, 201)
})