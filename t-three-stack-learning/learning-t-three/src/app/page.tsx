import Link from "next/link";

import { api, HydrateClient } from "@/trpc/server";
import { useUserContext } from "./_components/Context";
import { useRouter } from "next/navigation";
import RouteHandler from "./_components/RouteHandler";

export default function Home() {
  // const hello = await api.post.hello({ text: "rajvardhan" });

  return (
    <HydrateClient>
      <RouteHandler></RouteHandler>
    </HydrateClient>
  );
}
