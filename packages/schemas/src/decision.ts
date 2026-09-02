import { z } from "zod";

export const DecisionSnapshot = z.object({
  snapshotId: z.string(),
  timestamp: z.string().datetime(),
  careRequestId: z.string(),
  hospitalId: z.string(),
  roomCategorySelected: z.string(),
  estimatedCoverageAmount: z.number(),
  estimatedOutOfPocket: z.number(),
  subLimitsApplied: z.array(z.string()).default([]),
  proportionateDeduction: z.object({ applied: z.boolean(), percent: z.number().optional() }),
  consumableSurchargeEstimate: z.number().default(0),
  safeAdministrativeOption: z.string().optional(),
});
export type DecisionSnapshot = z.infer<typeof DecisionSnapshot>;
