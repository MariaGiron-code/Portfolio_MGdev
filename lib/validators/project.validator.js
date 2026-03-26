import { z } from 'zod';

/**
 * Zod schema for creating a new project.
 *
 * Required fields:
 * - `title`       — non-empty string
 * - `description` — non-empty string
 * - `techStack`   — non-empty array of strings
 * - `category`    — one of: 'frontend' | 'backend' | 'fullstack' | 'mobile'
 * - `featured`    — boolean
 *
 * Optional fields:
 * - `repoUrl` — valid URL
 * - `liveUrl` — valid URL
 *
 * Extra keys are rejected (`.strict()`).
 */
export const createProjectSchema = z.object({
  title:       z.string().min(1),
  description: z.string().min(1),
  techStack:   z.array(z.string()).min(1),
  category:    z.enum(['frontend', 'backend', 'fullstack', 'mobile']),
  featured:    z.boolean(),
  repoUrl:     z.url().optional(),
  liveUrl:     z.url().optional(),
}).strict();

/**
 * Zod schema for validating GET /api/projects query parameters.
 *
 * All fields are optional:
 * - `category` — one of: 'frontend' | 'backend' | 'fullstack' | 'mobile'
 * - `featured` — coerced from the string `'true'`/`'false'` to a boolean
 * - `page`     — integer ≥ 1 (coerced from string)
 * - `limit`    — integer between 1 and 20 (coerced from string)
 */
export const queryProjectSchema = z.object({
  category: z.enum(['frontend', 'backend', 'fullstack', 'mobile']).optional(),
  featured: z.preprocess(
    (val) => val === 'true' ? true : val === 'false' ? false : val,
    z.boolean().optional()
  ),
  page:  z.preprocess(Number, z.number().int().min(1)).optional(),
  limit: z.preprocess(Number, z.number().int().min(1).max(20)).optional(),
});
