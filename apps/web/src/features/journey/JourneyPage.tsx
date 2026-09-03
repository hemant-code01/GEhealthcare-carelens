import React, { useState } from 'react';
import {
  mockPatient,
  mockMilestones,
  mockSecondaryEvents,
  mockCoverage,
  mockDivergenceAlert,
  Milestone,
  SecondaryCareEvent,
  CoverageData,
} from './data/mockJourney';

import { PatientHeader } from './components/PatientHeader';
import { PatientSummary } from './components/PatientSummary';
import { HorizontalTimeline } from './components/HorizontalTimeline';
import { EventDetails } from './components/EventDetails';
import { CurrentCoverage } from './components/CurrentCoverage';
import { CoverageAlert } from './components/CoverageAlert';
import { EventSimulator as CostPredictor } from './components/EventSimulator';
import { DischargeSummary } from './components/DischargeSummary';

export const JourneyPage: React.FC = () => {
  const [selectedMilestoneId, setSelectedMilestoneId] = useState<string>('m3');
  const [secondaryEvents] = useState<SecondaryCareEvent[]>(mockSecondaryEvents);
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const [coverageData, setCoverageData] = useState<CoverageData>(mockCoverage);

  const selectedMilestone = mockMilestones.find((m) => m.id === selectedMilestoneId);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleSimulateRoomChange = () => {
    if (!showAlert) {
      setShowAlert(true);
      setCoverageData({
        ...coverageData,
        roomCategory: 'Deluxe Private',
        outOfPocket: 200000,
        status: 'Action Needed',
      });
      triggerToast('Cost Prediction complete: Room upgrade breaches eligible limit (+₹1,80,000 OOP)!');
    } else {
      triggerToast('Prediction active: Deluxe Private room cost impact currently displayed.');
    }
  };

  const handleSimulateEvent = (type: string) => {
    triggerToast('Cost Predictor calculated simulated outcome for ' + type + '.');
  };

  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-900 flex flex-col font-sans">
      <PatientHeader patient={mockPatient} />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white ui text-xs px-4 py-3 rounded-xl shadow-xl border border-slate-700 flex items-center gap-2.5">
          <span>⚡</span>
          <span>{toastMessage}</span>
        </div>
      )}

      <main className="flex-1 max-w-6xl w-full mx-auto p-5 sm:p-8 space-y-7">
        {/* Patient Summary Card */}
        <PatientSummary patient={mockPatient} />

        {/* Primary Visual Centerpiece: Horizontal Timeline */}
        <HorizontalTimeline
          milestones={mockMilestones}
          secondaryEvents={secondaryEvents}
          selectedMilestoneId={selectedMilestoneId}
          onSelectMilestone={(id) => setSelectedMilestoneId(id)}
        />

        {/* Coverage Alert (Renders when room upgrade divergence is predicted) */}
        {showAlert && (
          <CoverageAlert
            alert={mockDivergenceAlert}
            onViewDetails={() => setSelectedMilestoneId('m3')}
          />
        )}

        {/* Grid layout for Details & Coverage Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
          <EventDetails milestone={selectedMilestone} />
          <CurrentCoverage coverage={coverageData} />
        </div>

        {/* Cost Predictor Panel */}
        <CostPredictor
          onSimulateRoomChange={handleSimulateRoomChange}
          onSimulateEvent={handleSimulateEvent}
        />

        {/* Projected End of Journey Discharge Summary */}
        <DischargeSummary />
      </main>
    </div>
  );
};

export default JourneyPage;
