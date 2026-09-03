import React from 'react';
import { JourneyPage } from './features/journey/JourneyPage';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* M1: <PolicyIntake /> from features/policy */}
      {/* M2: <HospitalResults /> from features/hospitals */}
      {/* M3: <DecisionCard /> from features/decision */}
      {/* M4: <JourneyTimeline /> from features/journey */}
      <JourneyPage />
    </div>
  );
}
