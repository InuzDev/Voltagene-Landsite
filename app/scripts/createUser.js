require("dotenv").config({ path: ".env.local" });

const ws = require("ws");
const bcrypt = require("bcryptjs");
const { Pool, neonConfig } = require("@neondatabase/serverless");

neonConfig.webSocketConstructor = ws;

const pool = new Pool({
   connectionString: process.env.DATABASE_URL,
});

const { ADMIN_NAME, ADMIN_SURNAME, ADMIN_EMAIL, ADMIN_ROLE, ADMIN_PASSWORD } =
   process.env;

async function createUser() {
   const name = ADMIN_NAME;
   const surname = ADMIN_SURNAME;
   const email = ADMIN_EMAIL;
   const role = ADMIN_ROLE;
   const password = ADMIN_PASSWORD;

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
   await pool.end();
   process.exit(0);
}

createUser().catch((err) => {
   console.error("Error creating user: ", err);
   process.exit(1);
});
