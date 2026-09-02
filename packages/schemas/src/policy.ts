import { z } from "zod";

export const SubLimit = z.object({
  category: z.string(),
  capType: z.enum(["fixed", "percentage"]),
  capValue: z.number(),
});

export const PolicyProfile = z.object({
  policyId: z.string(),
  insurerName: z.string(),
  schemeType: z.enum(["private", "state", "government"]),
  sumInsured: z.number(),
  roomRentLimit: z.number().optional(),
  roomRentCapType: z.enum(["fixed", "percentage"]).optional(),
  proportionateDeductionRule: z.boolean(),
  subLimits: z.array(SubLimit).default([]),
  exclusions: z.array(z.string()).default([]),
  waitingPeriods: z
    .array(z.object({ condition: z.string(), durationMonths: z.number() }))
    .default([]),
  consumableCoverageRules: z.string().optional(),
  networkType: z.enum(["cashless", "reimbursement", "both"]),
});
export type PolicyProfile = z.infer<typeof PolicyProfile>;

export const CareRequest = z.object({
  patientId: z.string(),
  careNeed: z.object({ specialty: z.string(), procedure: z.string().optional() }),
  location: z.string(),
  preferences: z
    .object({ roomType: z.string().optional(), budget: z.number().optional() })
    .default({}),
  urgencyLevel: z.enum(["planned", "urgent", "emergency"]),
  policyId: z.string(),
});
export type CareRequest = z.infer<typeof CareRequest>;
