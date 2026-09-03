import React from 'react';
import { PatientInfo } from '../data/mockJourney';

interface Props {
  patient: PatientInfo;
}

export const PatientSummary: React.FC<Props> = ({ patient }) => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 shadow-sm">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-3">
            <span className="ui text-xs font-semibold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200/80">
              Active Inpatient Case
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mt-2.5 mb-1">
            {patient.name}
          </h2>
          <p className="font-serif text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl m-0">
            Care protocol established for <span className="text-slate-900 font-semibold">{patient.careNeed}</span>.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 border-t md:border-t-0 md:border-l border-slate-200 pt-5 md:pt-0 md:pl-8">
          <div>
            <span className="ui text-xs font-medium uppercase tracking-wider text-slate-400 block mb-1">Hospital</span>
            <span className="ui text-base font-bold text-slate-900 block">{patient.hospital}</span>
          </div>
          <div>
            <span className="ui text-xs font-medium uppercase tracking-wider text-slate-400 block mb-1">Current Room</span>
            <span className="ui text-base font-bold text-slate-900 block">{patient.room}</span>
          </div>
          <div>
            <span className="ui text-xs font-medium uppercase tracking-wider text-slate-400 block mb-1">Admission</span>
            <span className="ui text-base font-bold text-slate-900 block">{patient.admissionDate}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
