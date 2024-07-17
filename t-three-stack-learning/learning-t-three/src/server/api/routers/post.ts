

import { createTRPCRouter } from "@/server/api/trpc";
import { user } from "./user";

export const postRouter = createTRPCRouter({
  user : user
});
