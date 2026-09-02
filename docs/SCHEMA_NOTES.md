# Schema notes: Zod contracts vs Prisma model

`packages/schemas` is the source of truth for the API — every request/response body matches those Zod shapes. `apps/api/prisma/schema.prisma` is the source of truth for the database only.

They intentionally don't look identical field-for-field. A few examples:

- **Case:** Zod uses camelCase field names in JSON; Prisma also uses camelCase in the generated TS client but maps most fields to `snake_case` Postgres columns via `@map(...)`. This is normal and not something to "fix."
- **Flattening:** Postgres/Prisma doesn't store nested objects directly, so a few nested Zod shapes are flattened into separate columns in Prisma:
  - `DivergenceAlert.whyChanged.{ruleRef, clause}` (Zod) → `whyChangedRuleRef` / `whyChangedClause` (Prisma columns)
  - `DecisionSnapshot.proportionateDeduction.{applied, percent}` (Zod) → `proportionateDeductionApplied` / `proportionateDeductionPercent` (Prisma columns)
  - `CareRequest.careNeed.{specialty, procedure}` and `preferences.{roomType, budget}` (Zod) → flat `specialty`, `procedure`, `roomTypePref`, `budget` columns (Prisma)
- **JSON columns:** Array/list fields with variable shape (`subLimits`, `exclusions`, `empanelment`, `roomCategories`, `payload`, etc.) are stored as Prisma `Json` columns rather than separate tables — fine for PoC scale.

**Rule of thumb:** whoever writes a module's route handler is responsible for mapping between the flat/JSON Prisma row and the nested Zod contract when building the response. This mapping is local to that module — it doesn't require changing either schema.

If a genuine field-name or shape mismatch is found (not one of the intentional cases above), raise it with the team before changing `packages/schemas` or `schema.prisma` — both are shared files.
