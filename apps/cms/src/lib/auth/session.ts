import { headers } from "next/headers";
import { auth } from "./auth";

export async function getServerSession() {
  console.log("[getServerSession] Starting session fetch...");
  try {
    const reqHeaders = await headers();
    console.log("[getServerSession] Request headers host:", reqHeaders.get("host"));
    const session = await auth.api.getSession({
      headers: reqHeaders,
    });
    console.log("[getServerSession] Session fetched successfully:", !!session);
    return session;
  } catch (error) {
    console.error("[getServerSession] Error getting server session:", error);
    return null;
  }
}
