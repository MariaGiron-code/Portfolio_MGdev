import Skill from '@/lib/models/skill.model';

export async function getAllSkills(){
    return await Skill.find()
}

export async function createSkill(data) {
    return await Skill.create(data)  
}