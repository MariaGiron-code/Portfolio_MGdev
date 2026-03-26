import { z } from 'zod';

/**
 * Zod schema for creating a new skill entry.
 *
 * Required fields:
 * - `name`     — non-empty string
 * - `category` — non-empty string (e.g. 'frontend', 'backend', 'devops')
 *
 * Optional fields:
 * - `level` — proficiency level string (e.g. 'beginner', 'intermediate', 'advanced')
 *
 * Extra keys are rejected (`.strict()`).
 */
export const createSkillSchema = z.object({
  name:     z.string().min(1),
  category: z.string().min(1),
  level:    z.string().optional(),
}).strict();
