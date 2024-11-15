"use client";

import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  router.push("/rock-scissors-paper/recommend");

  return null;
}
