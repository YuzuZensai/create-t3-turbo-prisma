import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

import { handlers, isSecureContext } from "@acme/auth";

export const runtime = "nodejs";
