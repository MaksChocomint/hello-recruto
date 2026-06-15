import type { NextRequest } from "next/server";

export function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  const name = searchParams.get("name") || "Recruto";
  const message = searchParams.get("message") || "Давай дружить";

  return new Response(`Hello ${name}! ${message}!`, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
