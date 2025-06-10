import { LRUCache } from "lru-cache";
import { NextResponse } from "next/server";

const rateLimit = new LRUCache<string, boolean>({
   max: 5, // max IPs
   ttl: 1000 * 60 // 1 minute
})


export async function POST(req: Request) {
   const forwarded = req.headers.get('x-forwarded-for')
   const ip = forwarded?.split(',')[0]?.trim() || req.headers.get('x-real-ip') || req.headers.get('cf-connecting-ip') || "unknown"

   if (rateLimit.has(ip)) {
      return NextResponse.json(
         { error: "Too many requests. Please wait before sending another message" },
         { status: 429 }
      )
   }

   rateLimit.set(ip, true) // Set this IP as "seen"
   const data = await req.json()
   const { firstName, lastName, email, subject, message } = data;

   if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json({ error: "Hay parametros que faltan | There are missing parameters. " }), { status: 400 }
   }

   return NextResponse.json({ success: true })
}