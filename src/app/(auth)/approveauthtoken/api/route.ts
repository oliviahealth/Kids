export const dynamic = "force-dynamic"; // ⬅ Ensures dynamic rendering for access to searchParams

import { NextRequest } from "next/server";
import { v4 as uuid } from "uuid";
import { PrismaClient } from "@prisma/client";
import { Resend } from "resend";

const prisma = new PrismaClient();
const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const rawName = searchParams.get("name");
    const rawEmail = searchParams.get("email");

    const name = rawName?.trim().replace(/^"|"$/g, "");
    const email = rawEmail?.trim().replace(/^"|"$/g, "");

    if (!name || !email) {
      return new Response(JSON.stringify({ error: "Missing name or email" }), {
        status: 400,
      });
    }

    const accessToken = uuid();

    await prisma.accessToken.create({
      data: {
        id: accessToken,
      },
    });

    const data = await resend.emails.send({
      from: "onboarding@sumitnalavade.com",
      to: email,
      subject: "Olivia Kids Access Approved",
      html: `
        <div>
          <p>Hi ${sanitize(name)}, you're approved for Olivia Kids!</p>
          <p><strong>Access Token:</strong> ${accessToken}</p>
          <a href="http://localhost:3000/sign-up?token=${accessToken}">Click here to sign up automatically!</a>
        </div>
      `,
    });

    console.log(data);

    return new Response(JSON.stringify({ data: "success" }), {
      status: 200,
    });
  } catch (error) {
    console.error("Email send failed:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}

// Very basic HTML sanitization
function sanitize(str: string) {
  return str.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
