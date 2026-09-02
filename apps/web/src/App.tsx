// Shared file — propose changes via PR, don't edit solo.
// Each member wires their screen from src/features/<theirs> into this shell.

export default function App() {
  return (
    <div>
      <h1>CareLens</h1>
      {/* M1: <PolicyIntake /> from features/policy */}
      {/* M2: <HospitalResults /> from features/hospitals */}
      {/* M3: <DecisionCard /> from features/decision */}
      {/* M4: <JourneyTimeline /> from features/journey */}
    </div>
  );
}
