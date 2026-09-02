import express from "express";
import { policyRouter } from "./modules/policy/routes";
import { hospitalsRouter } from "./modules/hospitals/routes";
import { decisionRouter } from "./modules/decision/routes";
import { journeyRouter } from "./modules/journey/routes";

// Shared file — propose changes via PR, don't edit solo.
export const app = express();

app.use(express.json());

app.get("/health", (_req, res) => res.json({ ok: true }));

app.use("/policy", policyRouter);
app.use("/hospitals", hospitalsRouter);
app.use("/decision", decisionRouter);
app.use("/journey", journeyRouter);
