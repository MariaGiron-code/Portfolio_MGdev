import { z } from 'zod';

/**
 * Zod schema for creating a new profile document.
 *
 * Required fields:
 * - `name`        — 2–20 characters
 * - `role`        — min 3 characters, trimmed
 * - `description` — 3–1000 characters, trimmed
 * - `email`       — valid email, trimmed
 * - `location`    — 5–30 characters, trimmed
 *
 * Optional fields (all trimmed/validated as URLs where applicable):
 * - `cvUrl`, `githubUrl`, `linkedinUrl` — valid URLs
 * - `whatsapp` — plain string
 *
 * Extra keys are rejected (`.strict()`).
 */
export const createProfileSchema = z.object({
  name:        z.string().min(2).max(20),
  role:        z.string().min(3).trim(),
  description: z.string().min(3).max(1000).trim(),
  email:       z.email().trim(),
  location:    z.string().min(5).max(30).trim(),
  cvUrl:       z.url().optional(),
  githubUrl:   z.url().optional(),
  linkedinUrl: z.url().optional(),
  whatsapp:    z.string().optional(),
}).strict();

/**
 * Zod schema for partially updating an existing profile document.
 *
 * All fields from `createProfileSchema` are optional here, but at least one
 * must be present (enforced via `.refine()`).
 *
 * Extra keys are rejected (`.strict()`).
 */
export const updateProfileSchema = z.object({
  name:        z.string().min(2).max(20).optional(),
  role:        z.string().min(3).trim().optional(),
  description: z.string().min(3).max(1000).trim().optional(),
  email:       z.email().trim().optional(),
  location:    z.string().min(5).max(30).trim().optional(),
  cvUrl:       z.url().optional(),
  githubUrl:   z.url().optional(),
  linkedinUrl: z.url().optional(),
  whatsapp:    z.string().optional(),
}).strict().refine(
  (data) => Object.keys(data).length > 0,
  { message: 'Al menos un campo es requerido' }
);

