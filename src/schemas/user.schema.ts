import * as z from "zod";

export const createUserSchema = z.object({
  name: z.string({ required_error: "Name is required" }),
  email: z.string({ required_error: "Email is required" }),
  telephone: z.string({ required_error: "Phone is required" }),
});

export const loginUserSchema = z.object({
  email: z
    .string({
      required_error: "Email address is required",
    })
    .email("Invalid email address"),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(8, "Invalid email or password"),
});

// export type CreateUserInput = Omit<
//   TypeOf<typeof createUserSchema>["body"],
//   "passwordConfirm"
// >;

export type LoginUserInput = z.TypeOf<typeof loginUserSchema>;
export type CreateUserInput = z.TypeOf<typeof createUserSchema>;
