import { z } from 'zod';

/**
 * Zod schema for creating a new contact message.
 *
 * All fields are required and trimmed before validation:
 * - `name`    — min 2 characters
 * - `email`   — valid email address
 * - `subject` — min 3 characters
 * - `message` — min 10, max 1000 characters
 *
 * Extra keys are rejected (`.strict()`).
 */
export const createContactSchema = z.object({
  name:    z.string().min(2).trim(),
  email:   z.email().trim(),
  subject: z.string().min(3).trim(),
  message: z.string().min(10).max(1000).trim(),
}).strict();
