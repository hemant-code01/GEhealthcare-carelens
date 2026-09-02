import React from 'react';

interface Props {
  onSimulateRoomChange: () => void;
  onSimulateEvent: (type: string) => void;
}

export const EventSimulator: React.FC<Props> = ({ onSimulateRoomChange, onSimulateEvent }) => {
  return (
    <div className="bg-slate-900 text-white rounded-xl p-6 shadow-md border border-slate-800">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-serif text-2xl font-bold tracking-tight text-white flex items-center gap-2">
            <span>⚡ Cost Predictor</span>
          </h3>
          <p className="ui text-sm text-slate-400 mt-1">
            Simulate prospective care decisions & changes to predict immediate insurance coverage impact
          </p>
        </div>
        <span className="ui text-xs bg-slate-800 text-teal-400 font-medium px-2.5 py-1 rounded-full border border-slate-700">
          Predictive Engine
        </span>
      </div>

      <div className="flex flex-wrap gap-2.5 pt-2">
        <button
          onClick={() => onSimulateEvent('Admission')}
          className="ui text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 px-3.5 py-2 rounded-full transition-colors"
        >
          Admission
        </button>

        <button
          onClick={onSimulateRoomChange}
          className="ui text-xs font-bold bg-amber-400 hover:bg-amber-300 text-slate-950 px-4 py-2 rounded-full transition-colors shadow-sm"
        >
          Predict Room Upgrade (Deluxe)
        </button>

        <button
          onClick={() => onSimulateEvent('Procedure')}
          className="ui text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 px-3.5 py-2 rounded-full transition-colors"
        >
          Procedure Cost
        </button>

        <button
          onClick={() => onSimulateEvent('Investigation')}
          className="ui text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 px-3.5 py-2 rounded-full transition-colors"
        >
          Investigation
        </button>

        <button
          onClick={() => onSimulateEvent('Discharge')}
          className="ui text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 px-3.5 py-2 rounded-full transition-colors"
        >
          Final Discharge Bill
        </button>
      </div>
    </div>
  );
};
