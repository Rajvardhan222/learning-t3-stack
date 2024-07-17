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
  })
});