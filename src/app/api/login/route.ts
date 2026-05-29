import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  // 🔐 хардкод (потім можна з БД)
  if (email === "admin@test.com" && password === "123456") {
    const res = NextResponse.json({ ok: true });

    res.cookies.set("admin", "true", {
      httpOnly: true,
      path: "/",
    });

    return res;
  }

  return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
}
