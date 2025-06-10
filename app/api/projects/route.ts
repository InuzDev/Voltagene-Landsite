import { projects } from "app/lib/const";
import { NextResponse } from "next/server";

export async function GET() {
   return NextResponse.json(projects)
}