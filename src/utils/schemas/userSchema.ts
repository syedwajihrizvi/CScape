import { z } from 'zod'

const registerSchema = {
    email: z.string().email({message: "Invalid Email Address"}),
    firstName: z.string().min(2),
    lastName: z.string().min(2),
    password: z.string().refine(val => {
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(val)
    }, {message: "Password is not valid"})
}

export {registerSchema}
