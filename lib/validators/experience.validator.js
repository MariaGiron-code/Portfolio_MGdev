import { z } from 'zod';

// Validates the body for creating a new experience entry.
// Enforces cross-field date logic: endDate must not precede startDate.
export const createExperienceSchema = z.object({
  company:      z.string().min(2),
  role:         z.string().min(1),
  startDate:    z.string().date(),
  // null = current position (no end date yet)
  endDate:      z.string().date().nullable().optional(),
  location:     z.string().optional(),
  description:  z.string().optional(),
  technologies: z.array(z.string()).optional(),
}).strict().refine(
  (data) => {
    // Skip date comparison if endDate is absent (current position)
    if (!data.endDate) return true;
    return new Date(data.startDate) <= new Date(data.endDate);
  },
  { message: 'endDate must be greater than or equal to startDate', path: ['endDate'] }
);
