import React from 'react';
import { DivergenceAlertData } from '../data/mockJourney';

interface Props {
  alert: DivergenceAlertData;
  onViewDetails?: () => void;
}

export const CoverageAlert: React.FC<Props> = ({ alert, onViewDetails }) => {
  return (
    <div className="bg-amber-50/70 border border-amber-200/90 rounded-2xl p-6 sm:p-7 shadow-sm relative overflow-hidden">
      <div className="absolute top-0 right-0 w-2.5 h-full bg-amber-500" />
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-800 font-bold text-lg shrink-0 mt-0.5 shadow-sm">
          ⚠
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between gap-3">
            <h3 className="font-serif text-2xl font-bold text-amber-950 tracking-tight">
              {alert.title}
            </h3>
            <span className="ui text-xs font-bold uppercase tracking-wider bg-amber-200/80 text-amber-900 px-3 py-1 rounded-full">
              Divergence Detected
            </span>
          </div>

          <p className="font-serif text-lg text-amber-900/90 mt-2 leading-relaxed">
            {alert.description}
          </p>

          <div className="mt-4 p-4 bg-white/90 rounded-xl border border-amber-200/70 flex items-center justify-between">
            <span className="ui text-xs font-semibold uppercase tracking-wider text-slate-600">
              Projected Out-of-Pocket Delta:
            </span>
            <span className="font-serif text-xl font-bold text-rose-700">
              {alert.financialImpact}
            </span>
          </div>

          <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
            <p className="ui text-xs font-medium text-amber-950 m-0">
              💡 <span className="font-bold underline">Actionable Advice:</span> {alert.recommendedAction}
            </p>
            {onViewDetails && (
              <button
                onClick={onViewDetails}
                className="ui text-xs bg-amber-600 hover:bg-amber-700 text-white font-semibold px-4 py-2 rounded-full transition-colors shrink-0 shadow-sm"
              >
                Inspect Calculation
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
