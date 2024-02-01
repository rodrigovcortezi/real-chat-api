import { z } from 'zod'

export const createUserSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})

export type CreateUserRequest = z.infer<typeof createUserSchema>