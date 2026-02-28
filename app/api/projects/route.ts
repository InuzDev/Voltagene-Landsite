import { Projects } from "app/const/const";
import { NextResponse } from "next/server";

export async function GET() {
   return NextResponse.json(Projects);
}
