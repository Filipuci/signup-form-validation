import z from "zod"


export const schema = z.object({
  name:
    z.string()
      .nonempty('Required field')
      .min(2, 'Name must be at least 2 characters long')
      .max(10, 'Name must be at most 10 characters long'),
  email:
    z.string()
      .nonempty('Required field')
      .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Invalid email address'),
  password:
    z.string()
      .nonempty('Required field')
      .min(8, 'Password must be at least 8 characters long')
})

export type SignUpInputs = z.infer<typeof schema>