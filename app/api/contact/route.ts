import { NextResponse } from "next/server";

export async function POST(req: Request) {
   const data = await req.json()
   const { name, email, message } = data;

   if (!name || !email || !message) {
      return NextResponse.json({ errpr: "All fields are required. " }), { status: 400 }
   }

   return NextResponse.json({ success: true })
}