import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { origin } = new URL(request.url);
  const response = NextResponse.redirect(`${origin}/admin`);
  response.cookies.delete("admin_session");
  return response;
}
