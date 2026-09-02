import { Router } from "express";

// Owner: M4
// TODO: POST /events -> record a CareEvent, internally call decision/divergence-check
// TODO: GET /timeline -> aggregate events + snapshots + alerts into a JourneyTimeline

export const journeyRouter = Router();

journeyRouter.post("/events", (req, res) => {
  res.status(501).json({ message: "not implemented: journey/events" });
});

journeyRouter.get("/timeline", (req, res) => {
  res.status(501).json({ message: "not implemented: journey/timeline" });
});
