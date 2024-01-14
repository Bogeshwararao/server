const {z}= require("zod");

const signupSchema = z.object({
    username: z
    .string({ required_error:"Name is required"})
    .trim()
    .nullable()
    .min(3,{message:"Name must be atleast of 3 char"})
    .max(255,{message:"Name must be more than 255 char"}),
    email: z
    .string({ required_error:"email is required"})
    .trim()
    .email({message:"email is invalid"})
    .min(3,{message:"email must be atleast of 3 char"})
    .max(255,{message:"email must be more than 255 char"}),
    phone: z
    .string({ required_error:"phone is required"})
    .trim()
    .min(10,{message:"phone must be atleast of 10 char"})
    .max(20,{message:"phone must be more than 20 char"}),
    password: z
    .string({ required_error:"password is required"})
    .min(7,{message:"password must be atleast of 6 char"})
    .max(1024,{message:"password can't be greater than 1024 character"}),
})

module.exports = signupSchema;