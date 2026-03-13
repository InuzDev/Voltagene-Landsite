import { neon } from "@neondatabase/serverless";
import { LRUCache } from "lru-cache";
import { NextRequest, NextResponse } from "next/server";

const ConnectionString =
   process.env.NODE_ENV === "production"
      ? process.env.PRODUCTION_DATABASE_URL
      : process.env.DEVELOPMENT_DATABASE_URL;

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
         "unknown";

      if (process.env.NODE_ENV !== "development" && rateLimit.has(ip)) {
         return NextResponse.json(
            {
               error: "Too many requests. Please wait before sending another message.",
            },
            { status: 429 },
         );
      }

      rateLimit.set(ip, true);

      const connectionString =
         process.env.NODE_ENV === "production"
            ? process.env.PRODUCTION_DATABASE_URL
            : process.env.DEVELOPMENT_DATABASE_URL;

      if (!connectionString) {
         throw new Error(
            `No DB connection string. NODE_ENV=${process.env.NODE_ENV}`,
         );
      }

      const sql = neon(connectionString);

      const data = await req.json();
      const {
         name,
         surname,
         email,
         phone_number,
         energy_distributor,
         message,
      } = data;

      console.log({
         name,
         surname,
         email,
         phone_number,
         energy_distributor,
         message,
      });

      // Validation of the user input
      if (
         !name ||
         !surname ||
         !phone_number ||
         !energy_distributor ||
         !message
      ) {
         return NextResponse.json(
            {
               error: "Missing parameters | Hay parametros faltantes o vacios.",
            },
            { status: 400 },
         );
      }

      await sql`
        INSERT INTO QuoteFormResponse(name, surname, email, phone_number, energy_distributor, message)
        VALUES (${name}, ${surname}, ${email}, ${phone_number}, ${energy_distributor}, ${message})
      `;

      return NextResponse.json(
         { success: true, message: "Form submitted into DB successfully" },
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
