import { z } from "zod";

export const HospitalRecord = z.object({
  hospitalId: z.string(),
  name: z.string(),
  location: z.string(),
  specialties: z.array(z.string()),
  empanelment: z.array(z.object({ insurer: z.string(), networkType: z.string() })),
  roomCategories: z.array(z.object({ category: z.string(), tariffPerDay: z.number() })),
  capabilities: z.array(z.string()).default([]),
});
export type HospitalRecord = z.infer<typeof HospitalRecord>;

export const MatchResult = z.object({
  hospitalId: z.string(),
  eligibilityStatus: z.enum(["eligible", "partially_eligible", "ineligible"]),
  eligibleRoomCategories: z.array(z.string()),
  networkMatch: z.boolean(),
  matchScore: z.number(),
  constraintsApplied: z.array(z.string()).default([]),
});
export type MatchResult = z.infer<typeof MatchResult>;
