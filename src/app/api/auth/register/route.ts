import { RegisterRequestBody } from "@/utility/CustomTypes";
import { backendUrl } from "@/utility/baseExports";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const credentials: Promise<RegisterRequestBody> = await req.json();
  const { firstName, lastName, email } = await credentials;

  const userResponse = await fetch(backendUrl + "/api/app-users", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      data: {
        firstName,
        lastName,
        email,
      },
    }),
  });
  const user = await userResponse.json();
  return NextResponse.json(user);
}
