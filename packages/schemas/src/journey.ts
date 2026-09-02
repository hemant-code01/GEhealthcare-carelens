import { z } from "zod";

export const CareEvent = z.object({
  eventId: z.string(),
  careRequestId: z.string(),
  eventType: z.enum(["admission", "room_change", "procedure", "investigation", "discharge"]),
  timestamp: z.string().datetime(),
  payload: z.record(z.unknown()).default({}),
});
export type CareEvent = z.infer<typeof CareEvent>;

export const DivergenceAlert = z.object({
  alertId: z.string(),
  eventId: z.string(),
  previousSnapshotId: z.string(),
  newSnapshotId: z.string(),
  whatChanged: z.string(),
  whyChanged: z.object({ ruleRef: z.string(), clause: z.string().optional() }),
  financialDelta: z.number(),
  recommendedSafeAction: z.string().optional(),
  severity: z.enum(["low", "medium", "high"]),
});
export type DivergenceAlert = z.infer<typeof DivergenceAlert>;

export const JourneyTimeline = z.object({
  careRequestId: z.string(),
  events: z.array(CareEvent),
  snapshotIds: z.array(z.string()),
  alerts: z.array(DivergenceAlert),
  finalSnapshotId: z.string().optional(),
  estimateVsActual: z.object({ original: z.number(), final: z.number() }).optional(),
});
export type JourneyTimeline = z.infer<typeof JourneyTimeline>;
