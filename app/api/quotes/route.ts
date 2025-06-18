import { LRUCache } from "lru-cache";
import { NextResponse } from "next/server";

const rateLimit = new LRUCache<string, boolean>({
   max: 1000, // Handle 1000 IPs
   ttl: 1000 * 60 // 1 minute
 });
 

export async function POST(req: Request) {
   const forwarded = req.headers.get('x-forwarded-for')
   const ip = forwarded?.split(',')[0]?.trim() || req.headers.get('x-real-ip') || req.headers.get('cf-connecting-ip') || "unknown"

    if (rateLimit.has(ip)) {
      return NextResponse.json(
         { error: "Too many request. Please wait before sending another one"},
         { status: 429 }
      )
    }

    rateLimit.set(ip, true) // Set this IP as "seen"
    const Quotedata = await req.json()
    const { firstName, lastName, phoneNumber, energyProvider } = Quotedata;

    if (![firstName, lastName, phoneNumber, energyProvider].every(Boolean)) {
      return NextResponse.json(
        { error: "Por favor, completa todos los campos | Please fill in all fields." },
        { status: 400 }
      );
    }
    

    return NextResponse.json({success: true})
}