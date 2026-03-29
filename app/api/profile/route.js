import { connectDB } from '@/lib/db';
import { withErrorHandler } from '@/lib/utils/errors';
import { successResponse, errorResponse } from '@/lib/utils/response';
import { getProfile, createProfile, updateProfile } from '@/lib/services/profile.service';
import { createProfileSchema, updateProfileSchema } from '@/lib/validators/profile.validator';

export const GET = withErrorHandler(async () => {
  await connectDB();
  const profile = await getProfile();
  return successResponse(profile, 200);
});

export const POST = withErrorHandler(async (request) => {
  await connectDB();
  const body = await request.json();
  const result = createProfileSchema.safeParse(body);

  if (!result.success) {
    return errorResponse('Datos de perfil inválidos', 400);
  }

  const profile = await createProfile(result.data);
  return successResponse(profile, 201);
});

export const PUT = withErrorHandler(async (request) => {
  await connectDB();
  const body = await request.json();
  const result = updateProfileSchema.safeParse(body);

  if (!result.success) {
    return errorResponse('El perfil no se pudo actualizar', 400);
  }

  const profile = await updateProfile(result.data);
  return successResponse(profile, 200);
});
