require("dotenv").config({ path: ".env.local" });
const bcrypt = require("bcryptjs");
const { Pool } = require("@neondatabase/serverless");

const pool = new Pool({
   connectionString: process.env.DATABASE_URL,
});

async function createUser() {
   const name = "David";
   const surname = "Jorge";
   const email = "info@voltagene.com";
   const role = "Ingeniero principal de software";
   const password = process.env.ADMIN_PASSWORD;

   if (!password) {
      throw new Error("ADMIN_PASSWORD is not defined in .env.local");
   }

   const hashedPassword = await bcrypt.hash(password, 10);

   await pool.query(
      `INSERT INTO EmployeeUsers (name, surname, email, role, password)
      VALUES ($1, $2, $3, $4, $5)`,
      [name, surname, email, role, hashedPassword],
   );

   console.log(`User ${email} created successfully`);
   process.exit(0);
}

createUser().catch((err) => {
   console.error("Error creating user: ", err);
   process.exit(1);
});
