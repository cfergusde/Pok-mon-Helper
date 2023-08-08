// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  // Setting cookies in response.
  // This will be sent back to the browser.
  if (searchParams.get("location") !== null) {
    const res = NextResponse.redirect(new URL("/home", req.url));
    console.log("in middleware:", searchParams.get("location"));
    res.cookies.set("pokehelper-location", searchParams.get("location")!, {
      path: "/",
    });
    console.log(res.cookies.get("pokehelper-location"));
    return res;
  }
}
