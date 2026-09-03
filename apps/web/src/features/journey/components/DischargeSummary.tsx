import React from 'react';
import { mockDischargeSummary } from '../data/mockJourney';

export const DischargeSummary: React.FC = () => {
  const { finalCost, finalCoverage, patientResponsibility, safeActionTaken } =
    mockDischargeSummary;

  const coveragePercent = Math.round((finalCoverage / finalCost) * 100);
  const costFormatted = finalCost.toLocaleString('en-IN');
  const coverageFormatted = finalCoverage.toLocaleString('en-IN');
  const responsibilityFormatted = patientResponsibility.toLocaleString('en-IN');

  return (
    <div className="bg-slate-50/80 border-2 border-dashed border-slate-300/80 rounded-2xl p-6 sm:p-7 relative overflow-hidden">
      <div className="flex items-center justify-between mb-5">
        <div>
          <div className="flex items-center gap-3">
            <h3 className="font-serif text-2xl font-bold text-slate-900 tracking-tight m-0">
              At Discharge (Projected End of Journey)
            </h3>
            <span className="ui text-xs font-semibold bg-slate-200 text-slate-700 px-3 py-0.5 rounded-full uppercase tracking-wider">
              Settlement Forecast
            </span>
          </div>
          <p className="font-serif text-base text-slate-600 mt-1 m-0">
            Projected claim audit based on retaining the eligible Twin Sharing category.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
        <div className="bg-white p-4 rounded-xl border border-slate-200/90 shadow-sm">
          <span className="ui text-xs font-medium uppercase tracking-wider text-slate-400 block mb-1">
            Final Estimated Cost
          </span>
          <span className="font-serif text-2xl font-bold text-slate-900 block">
            ₹{costFormatted}
          </span>
        </div>
        <div className="bg-white p-4 rounded-xl border border-slate-200/90 shadow-sm">
          <span className="ui text-xs font-medium uppercase tracking-wider text-slate-400 block mb-1">
            Final Approved Coverage
          </span>
          <span className="font-serif text-2xl font-bold text-emerald-600 block">
            ₹{coverageFormatted}
          </span>
        </div>
        <div className="bg-white p-4 rounded-xl border border-slate-200/90 shadow-sm">
          <span className="ui text-xs font-medium uppercase tracking-wider text-slate-400 block mb-1">
            Patient Responsibility
          </span>
          <span className="font-serif text-2xl font-bold text-slate-900 block">
            ₹{responsibilityFormatted}
          </span>
        </div>
      </div>

      {/* Estimate vs Actual Comparison Bar */}
      <div className="bg-white p-5 rounded-xl border border-slate-200/90 shadow-sm mb-4">
        <div className="flex justify-between items-center mb-2 ui font-semibold text-slate-700 text-xs">
          <span>Insurance Coverage Ratio</span>
          <span className="text-emerald-700 font-bold">{coveragePercent}% Covered by Cashless Pre-auth</span>
        </div>
        <div className="w-full h-3.5 bg-slate-100 rounded-full overflow-hidden flex">
          <div className="h-full bg-emerald-500 rounded-l-full transition-all duration-500" style={{ width: `${coveragePercent}%` }} />
          <div className="h-full bg-amber-400 rounded-r-full" style={{ width: `${100 - coveragePercent}%` }} />
        </div>
        <div className="flex justify-between ui text-[11px] text-slate-400 mt-2">
          <span>Approved Insurance Limit (₹{coverageFormatted})</span>
          <span>Out-of-Pocket Share (₹{responsibilityFormatted})</span>
        </div>
      </div>

      <div className="flex items-center gap-2 ui text-xs text-slate-600">
        <span className="w-2.5 h-2.5 rounded-full bg-teal-500" />
        <span>Safe administrative action recommended: <strong className="text-slate-900 font-semibold">{safeActionTaken}</strong></span>
      </div>
    </div>
  );
};
