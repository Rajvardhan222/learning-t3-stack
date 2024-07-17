import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

import { db } from "@/server/db";
export const user = createTRPCRouter({
  createUser : publicProcedure.input(z.object({
    name : z.string(),
    email : z.string().email(),
    password : z.string()
  }))
  .mutation(async ({input})=>{
const response = await db.users.create({
    data : {
        name : input.name,
        email : input.email,
        password : input.password
    }
})
return response
  }),

  loginUser : publicProcedure.input(z.object({
    email : z.string(),
    password : z.string()
  }))
  .mutation(async({input}) =>{
    const user = await db.users.findUnique({
      where : {
        email : input.email
      },
      select : {
        id : true,
        name : true,
        email : true,
        password : true
      }
    })
    if (!user ||!(verifyPassword(input.password,user.password))) {
      throw new Error("Invalid credentials")
    }
    return user
  })
});

let verifyPassword =  (password,dbPassword) => {
  console.log(password,dbPassword);
  
      return password === dbPassword
}