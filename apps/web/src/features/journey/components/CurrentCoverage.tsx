import React from 'react';
import { CoverageData } from '../data/mockJourney';

interface Props {
  coverage: CoverageData;
}

export const CurrentCoverage: React.FC<Props> = ({ coverage }) => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 shadow-sm flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="font-serif text-2xl font-bold text-slate-900 tracking-tight">
              Current Coverage Estimate
            </h3>
            <p className="ui text-xs text-slate-500 mt-1">
              Live algorithmic snapshot evaluated against hospital room limits
            </p>
          </div>
          <span className="ui bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-semibold px-3 py-1 rounded-full">
            {coverage.status}
          </span>
        </div>

        <div className="bg-slate-50 rounded-xl p-5 mb-5 border border-slate-100 space-y-3.5">
          <div className="flex justify-between items-center text-sm">
            <span className="ui text-slate-600 font-normal">Estimated Total Bill</span>
            <span className="ui font-semibold text-slate-900">₹{coverage.totalEstimate.toLocaleString('en-IN')}</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="ui text-slate-600 font-normal">Approved Insurance Cover</span>
            <span className="ui font-semibold text-emerald-600">₹{coverage.insuranceCoverage.toLocaleString('en-IN')}</span>
          </div>
          <div className="pt-3 border-t border-slate-200 flex justify-between items-baseline">
            <div>
              <span className="ui text-xs font-bold text-slate-800 uppercase tracking-wider block">
                Estimated Out-Of-Pocket (OOP)
              </span>
              <span className="ui text-[11px] text-slate-500">Patient responsibility at current tariff</span>
            </div>
            <span className="font-serif text-3xl font-extrabold text-amber-600 tracking-tight">
              ₹{coverage.outOfPocket.toLocaleString('en-IN')}
            </span>
          </div>
        </div>

        <div className="ui text-xs text-slate-600 space-y-1.5">
          <div className="flex justify-between py-1 border-b border-slate-100">
            <span className="text-slate-500">Eligible Room Category:</span>
            <span className="font-semibold text-slate-800">{coverage.roomCategory}</span>
          </div>
        </div>
      </div>

      <p className="font-serif text-sm text-slate-500 mt-5 italic border-t border-slate-100 pt-3 leading-relaxed">
        "{coverage.disclaimer}"
      </p>
    </div>
  );
};
