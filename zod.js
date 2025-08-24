const zod = require('zod');
function validate(obj) {
    const schema = zod.object({
        email:zod.string().email(),
        password:zod.string().min(8)
    })

    const  response = schema.safeParse(obj);
    console.log(response);
}
validate({
    email:"shayab@gmail.com",
    password:"123456787"
});


//---------------------------------------
// 1. Use Schemas with Strong Rules
// Instead of just checking type, you can add constraints:


// const userSchema = z.object({
//   name: z.string()
//     .min(3, "Name must be at least 3 characters")
//     .max(50, "Name must be less than 50 characters")
//     .regex(/^[A-Za-z\s]+$/, "Name can only contain letters and spaces"),
  
//   email: z.string()
//     .email("Invalid email format"),
  
//   password: z.string()
//     .min(8, "Password must be at least 8 characters")
//     .regex(/[A-Z]/, "Must contain an uppercase letter")
//     .regex(/[a-z]/, "Must contain a lowercase letter")
//     .regex(/[0-9]/, "Must contain a number"),
  
//   age: z.number()
//     .int()
//     .gte(18, "Must be at least 18 years old"),
// });