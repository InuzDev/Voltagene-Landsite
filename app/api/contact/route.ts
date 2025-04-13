import { NextResponse } from "next/server";

export async function POST(req: Request) {
   const data = await req.json()
   const { firstName, lastName, email, subject, message } = data;

   if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json({ error: "Hay parametros que faltan / There are missing parameters. " }), { status: 400 }
   }

   return NextResponse.json({ success: true })
}