import Experience from '@/lib/models/experience.model';

export async function getAllExperience() {
    const all = await Experience.find({}).lean();

    // Posiciones actuales: endDate es null 
    const current = all.filter(e => !e.endDate);

    // Posiciones pasadas: tienen fecha de fin, ordenadas de más reciente a más antigua
    const past = all
        .filter(e => e.endDate)
        .sort((a, b) => new Date(b.endDate) - new Date(a.endDate));

    return [...current, ...past];
}

export async function createExperience(data) {
    return await Experience.create(data);
}
