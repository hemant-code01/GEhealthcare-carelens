import { PrismaClient } from "@prisma/client";

// Shared file — propose changes via PR, don't edit solo.
export const prisma = new PrismaClient();
