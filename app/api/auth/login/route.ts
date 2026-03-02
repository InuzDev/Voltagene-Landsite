import { pool } from "app/lib/db";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
   const { email, password } = await request.json();

   if (!email.endsWith("@voltagene.com")) {
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

   if (!user) {
      return NextResponse.json(
         { error: "Credenciales invalidas" },
         { status: 401 },
      );
   }

   const isValid = await bcrypt.compare(password, user.password);

   if (!isValid) {
      return NextResponse.json(
         { error: "Credenciales invalidas" },
         { status: 401 },
      );
   }

   return NextResponse.json({ success: true, role: user.role });
}
