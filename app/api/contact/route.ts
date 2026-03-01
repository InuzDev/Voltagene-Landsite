import { neon } from "@neondatabase/serverless";
import { LRUCache } from "lru-cache";
import { NextRequest, NextResponse } from "next/server";

// Limit the rate of the user, max 1 request per IP per minute
const rateLimit = new LRUCache<string, boolean>({
   max: 500,
   ttl: 1000 * 60,
});

export async function POST(req: NextRequest) {
   try {
      // Detect the user IP
      const forwarded = req.headers.get("x-forwarded-for");
      const ip =
         forwarded?.split(",")[0]?.trim() ||
         req.headers.get("x-real-ip") ||
         req.headers.get("cf-connecting-ip") ||
         "unknonw";

      if (rateLimit.has(ip)) {
         return NextResponse.json(
            {
               error: "Too many requests. Please wait before sending another message.",
            },
            { status: 429 },
         );
      }

      rateLimit.set(ip, true);

      const data = await req.json();
      const { name, surname, email, phone_number, topic, message } = data;

      // Validation of the user input
      if (!name || !surname || !email || !phone_number || !topic || !message) {
         return NextResponse.json(
            {
               error: "Missing parameters | Hay parametros faltantes o vacios.",
            },
            { status: 400 },
         );
      }

      // insert the input of the user into the database.
      const sql = neon(process.env.DATABASE_URL!);

      await sql`
         INSERT INTO ContactFormResponse(name, surname, email, phone_number, topic, message)
         VALUES (${name}, ${surname}, ${email}, ${phone_number}, ${topic}, ${message})
      `;

      return NextResponse.json(
         { succes: true, message: "Form submitted into DB successfully" },
         { status: 201 },
      );
   } catch (error) {
      console.error("Database error: ", error);

      return NextResponse.json(
         { success: false, message: "Internal server error." },
         { status: 500 },
      );
   }
}
