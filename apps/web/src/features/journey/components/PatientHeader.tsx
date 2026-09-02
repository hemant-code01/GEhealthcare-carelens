import React from 'react';
import { PatientInfo } from '../data/mockJourney';

interface Props {
  patient: PatientInfo;
}

export const PatientHeader: React.FC<Props> = ({ patient }) => {
  return (
    <header className="bg-white border-b border-slate-200 px-6 sm:px-8 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div className="flex items-center gap-3.5">
        <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-white font-serif font-bold text-xl shadow-sm">
          C
        </div>
        <div>
          <div className="flex items-center gap-2.5">
            <h1 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight leading-none m-0">
              CareLens
            </h1>
            <span className="ui text-xs font-semibold px-2.5 py-0.5 bg-slate-100 text-slate-600 rounded-full border border-slate-200">
              M4 Output Engine
            </span>
          </div>
          <p className="ui text-xs text-slate-500 mt-1 m-0">
            Real-time policy-integrated patient journey & cost transparency
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3 text-sm">
        <div className="ui flex items-center gap-2 bg-slate-50 border border-slate-200 px-3.5 py-1.5 rounded-full text-xs">
          <span className="text-slate-500 font-normal">Care Request:</span>
          <span className="font-semibold text-slate-800">{patient.careRequestId}</span>
        </div>
        <span className="ui inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          {patient.status}
        </span>
      </div>
    </header>
  );
};
