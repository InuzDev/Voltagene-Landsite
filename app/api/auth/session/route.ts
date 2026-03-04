export const runtime = "nodejs";

import { pool } from "app/lib/db";
import { jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

const JWTSECRET = new TextEncoder().encode(process.env.JWT_SECRET);

export async function GET() {
   try {
      const cookieStore = await cookies();
      const token = cookieStore.get("session")?.value;

      if (!token) {
         return NextResponse.json(
            { error: "No session found" },
            { status: 401 },
         );
      }

      // Verify JWTSECRET
      const { payload } = await jwtVerify(token, JWTSECRET);

      // Verify user still exists in data base.
      const result = await pool.query(
         "SELECT id, name, surname, email, role FROM EmployeeUsers WHERE id = $1",
         [payload.id],
      );

      const user = result.rows[0];

      if (!user) {
         return NextResponse.json({ error: "User not found" }, { status: 401 });
      }

      return NextResponse.json({
         authenticated: true,
         user: {
            id: user.id,
            name: user.name,
            surname: user.surname,
            email: user.email,
            role: user.role,
         },
      });
      // If something fails, get error.
   } catch (error) {
      return NextResponse.json(
         { error: "Invalid or expired session" },
         { status: 401 },
      );
   }
}
