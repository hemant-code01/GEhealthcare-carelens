import { Router } from "express";

// Owner: M3
// TODO: POST /evaluate  -> produce a DecisionSnapshot from a MatchResult + PolicyProfile
// TODO: POST /divergence-check -> compare snapshots on a new CareEvent, emit DivergenceAlert

export const decisionRouter = Router();

decisionRouter.post("/evaluate", (req, res) => {
  res.status(501).json({ message: "not implemented: decision/evaluate" });
});

decisionRouter.post("/divergence-check", (req, res) => {
  res.status(501).json({ message: "not implemented: decision/divergence-check" });
});
