export const runtime = "nodejs";

import { pool } from "app/lib/db";
import bcrypt from "bcryptjs";
import { LRUCache } from "lru-cache";
import { NextResponse, NextRequest } from "next/server";

const rateLimit = new LRUCache<string, boolean>({
   max: 500,
   ttl: 1000 * 60,
});

export async function POST(request: NextRequest) {
   try {
      const forwarded = request.headers.get("x-forwarded-for");
      const ip =
         forwarded?.split(",")[0]?.trim() ||
         request.headers.get("x-real-ip") ||
         request.headers.get("cf-connecting-ip") ||
         "unknown";

      const { email, password } = await request.json();

      if (typeof email !== "string" || typeof password !== "string") {
         return NextResponse.json(
            { error: "Valores ingresados invalidos" },
            { status: 400 },
         );
      }

      const normalizedEmail = email.toLowerCase().trim();
      const key = `${ip}:${normalizedEmail}`;

      if (rateLimit.has(key)) {
         return NextResponse.json(
            {
               error: "Too many requests. Please wait before sending another message",
            },
            { status: 429 },
         );
      }

      rateLimit.set(ip, true);

      if (!normalizedEmail.endsWith("@voltagene.com")) {
         return NextResponse.json(
            { error: "Acceso no autorizado" },
            { status: 401 },
         );
      }

      const result = await pool.query(
         "SELECT * FROM EmployeeUsers WHERE email = $1",
         [email],
      );

      const user = result.rows[0];

      const hash =
         user?.password ||
         "$2a$10$invalidinvalidinvalidinvalidinvalidinvalidinvalidinvalid";

      const isValid = await bcrypt.compare(password, hash);

      if (!user || !isValid) {
         return NextResponse.json(
            { error: "Credenciales invalidas" },
            { status: 401 },
         );
      }

      return NextResponse.json({ success: true, role: user.role });
   } catch (error) {
      console.error("Error interno. Por, favor, intentarlo mas tarde", error);

      return NextResponse.json(
         { success: false, message: "Internal server error" },
         { status: 500 },
      );
   }
}
