import Profile from '@/lib/models/profile.model';
import { ConflictError, NotFoundError } from '@/lib/utils/errors';

export async function getProfile(){
    return await Profile.findOne()
}

export async function createProfile(data){
    const existing = await Profile.findOne()
    if(existing) throw new ConflictError('Perfil already exists')
        return await Profile.create(data)
}

export async function updateProfile(data){
    const updated = await Profile.findOneAndUpdate({}, data,{ new: true })
    if (!updated) throw new NotFoundError('No exist any profile')
        return updated
}