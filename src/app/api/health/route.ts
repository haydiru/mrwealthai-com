import { NextResponse } from "next/server";
import { COMPANY } from "@/content/company";

export async function GET() {
  return NextResponse.json({
    status: "ok",
    brand: COMPANY.brandName,
    entity: COMPANY.legalEntityName,
    time: new Date().toISOString(),
    uptime: process.uptime(),
  });
}
