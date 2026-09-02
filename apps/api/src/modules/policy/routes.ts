import { Router } from "express";

// Owner: M1
// TODO: POST /parse   -> Gemini extraction into a draft PolicyProfile
// TODO: POST /normalize -> save user-corrected PolicyProfile
// TODO: POST /care-request -> save CareRequest

export const policyRouter = Router();

policyRouter.post("/parse", (req, res) => {
  res.status(501).json({ message: "not implemented: policy/parse" });
});

policyRouter.post("/normalize", (req, res) => {
  res.status(501).json({ message: "not implemented: policy/normalize" });
});
