import Link from "next/link";


import { api, HydrateClient } from "@/trpc/server";
import { LatestPost } from "./_components/post";

export default async function Home() {
  // const hello = await api.post.hello({ text: "rajvardhan" });


  

  return (
    <HydrateClient>
     
   
      <LatestPost/>
    
    </HydrateClient>
  );
}
