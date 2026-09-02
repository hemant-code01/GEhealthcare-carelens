import { Router } from "express";

// Owner: M2
// TODO: POST /search -> query hospitals by location/specialty
// TODO: POST /match  -> rank eligible hospitals against a CareRequest + PolicyProfile

export const hospitalsRouter = Router();

hospitalsRouter.post("/search", (req, res) => {
  res.status(501).json({ message: "not implemented: hospitals/search" });
});

hospitalsRouter.post("/match", (req, res) => {
  res.status(501).json({ message: "not implemented: hospitals/match" });
});
