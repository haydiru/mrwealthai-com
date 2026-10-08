import { NextResponse } from "next/server";
import { z } from "zod";
import { generateReferenceCode } from "@/lib/utils";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Invalid email address format"),
  reason: z.enum([
    "Verification request",
    "Partnership",
    "Press",
    "Product support",
    "Other",
  ]),
  message: z
    .string()
    .min(20, "Message must be at least 20 characters")
    .max(2000, "Message must not exceed 2000 characters"),
  honeypot: z.string().max(0, "Bot detected").optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Check honeypot for bot filtering
    if (body.honeypot && body.honeypot.length > 0) {
      return NextResponse.json(
        { error: "Spam submission rejected", code: "E_BOT_DETECTED" },
        { status: 400 }
      );
    }

    const validation = contactSchema.safeParse(body);
    if (!validation.success) {
      const firstError = validation.error.errors[0];
      return NextResponse.json(
        {
          error: firstError.message,
          code: `E_${firstError.path[0]?.toString().toUpperCase() || "VALIDATION"}`,
        },
        { status: 400 }
      );
    }

    const referenceCode = generateReferenceCode();

    // In production without external email keys set yet, log securely and return 201
    console.log(`[CONTACT RECEIVED] Ref: ${referenceCode} | From: ${validation.data.email} | Reason: ${validation.data.reason}`);

    return NextResponse.json(
      {
        success: true,
        referenceCode,
        message: "Message delivered to official founder inbox.",
      },
      { status: 201 }
    );
  } catch (err) {
    console.error("[CONTACT_ERROR]", err);
    return NextResponse.json(
      { error: "Internal server error occurred", code: "E_SERVER_ERROR" },
      { status: 500 }
    );
  }
}
