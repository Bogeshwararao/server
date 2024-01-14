const { z } = require('zod');

const signupSchema = z.object({
    username: z.string({ required_error: 'Name is required' })
        .trim()
        .nullable()
        .refine((value) => value === null || (typeof value === 'string' && value.length >= 3), {
            message: 'Name must be at least 3 characters',
        })
        .refine((value) => value === null || (typeof value === 'string' && value.length <= 255), {
            message: 'Name must be less than 255 characters',
        }),

    email: z.string({ required_error: 'Email is required' })
        .trim()
        .email({ message: 'Email is invalid' })
        .nullable()
        .refine((value) => value === null || (typeof value === 'string' && value.length >= 3), {
            message: 'Email must be at least 3 characters',
        })
        .refine((value) => value === null || (typeof value === 'string' && value.length <= 255), {
            message: 'Email must be less than 255 characters',
        }),

    phone: z.string({ required_error: 'Phone is required' })
        .trim()
        .nullable()
        .refine((value) => value === null || (typeof value === 'string' && value.length >= 10), {
            message: 'Phone must be at least 10 characters',
        })
        .refine((value) => value === null || (typeof value === 'string' && value.length <= 20), {
            message: 'Phone must be less than 20 characters',
        }),

    password: z.string({ required_error: 'Password is required' })
        .trim()
        .nullable()
        .refine((value) => value === null || (typeof value === 'string' && value.length >= 7), {
            message: 'Password must be at least 7 characters',
        })
        .refine((value) => value === null || (typeof value === 'string' && value.length <= 1024), {
            message: 'Password can\'t be greater than 1024 characters',
        }),
});

module.exports = signupSchema;
