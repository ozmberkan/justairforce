import { z } from "zod";

export const registerscheme = z.object({
  displayName: z.string(),
  email: z.string(),
  password: z.string(),
});

export const loginscheme = z.object({
  email: z.string(),
  password: z.string(),
});
