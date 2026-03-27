import Project from '@/lib/models/project.model';

export async function getAllProjects(filters = {}, page = 1, limit = 10) {
    // Construir el filtro solo con los campos que llegaron
    const query = {};
    if (filters.category !== undefined) query.category = filters.category;
    if (filters.featured !== undefined) query.featured = filters.featured;

    // Cuántos documentos saltar según la página
    const skip = (page - 1) * limit;

    // Buscar proyectos con filtro, orden y paginación
    const projects = await Project.find(query)
        .sort({ featured: -1, createdAt: -1 }) // destacados primero, luego más recientes
        .skip(skip)
        .limit(limit)
        .lean();

    // Total de documentos que coinciden (sin paginación)
    const total = await Project.countDocuments(query);

    return { projects, page, limit, total };
}

export async function createProject(data) {
    return await Project.create(data);
}
