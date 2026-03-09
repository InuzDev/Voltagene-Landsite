import { Pool } from "@neondatabase/serverless";

const connectionString = process.env.NODE_ENV === 'production' ? process.env.PRODUCTION_DATABASE_URL : process.env.DEVELOPMENT_DATABASE_URL;

// Export the pool of the database.
export const pool = new Pool({
   connectionString,
})
