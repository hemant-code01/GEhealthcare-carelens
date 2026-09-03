import React from 'react';
import { Milestone } from '../data/mockJourney';

interface Props {
  milestone?: Milestone;
}

export const EventDetails: React.FC<Props> = ({ milestone }) => {
  if (!milestone) {
    return (
      <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 shadow-sm h-full flex items-center justify-center ui text-slate-400 text-sm">
        Select a milestone node to inspect detailed event records.
      </div>
    );
  }

  const badgeClass =
    milestone.status === 'completed'
      ? 'bg-teal-50 text-teal-700 border-teal-200'
      : milestone.status === 'current'
      ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
      : 'bg-slate-100 text-slate-600 border-slate-200';

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 shadow-sm flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
          <div>
            <h3 className="font-serif text-2xl font-bold text-slate-900 tracking-tight">
              {milestone.title}
            </h3>
            <span className="ui text-xs font-medium text-slate-500">{milestone.subtitle}</span>
          </div>
          <span className={`ui text-xs font-semibold px-3 py-1 rounded-full capitalize border ${badgeClass}`}>
            {milestone.status}
          </span>
        </div>

        <p className="font-serif text-base text-slate-700 mb-5 leading-relaxed">
          {milestone.description}
        </p>

        {milestone.details && (
          <div className="space-y-2.5 ui text-xs">
            {milestone.details.location && (
              <div className="flex justify-between py-1.5 border-b border-slate-100">
                <span className="text-slate-500 font-normal">Location:</span>
                <span className="font-semibold text-slate-800">{milestone.details.location}</span>
              </div>
            )}
            {milestone.details.roomType && (
              <div className="flex justify-between py-1.5 border-b border-slate-100">
                <span className="text-slate-500 font-normal">Room Category:</span>
                <span className="font-semibold text-slate-800">{milestone.details.roomType}</span>
              </div>
            )}
            {milestone.details.actionTaken && (
              <div className="py-1.5">
                <span className="text-slate-500 block mb-1 font-normal">Action Executed:</span>
                <span className="font-medium text-slate-800 bg-slate-50 p-2.5 rounded-lg border border-slate-100 block">
                  {milestone.details.actionTaken}
                </span>
              </div>
            )}
            {milestone.details.notes && (
              <div className="pt-2">
                <span className="text-slate-500 block mb-1.5 font-semibold">Key Clinical & Billing Notes:</span>
                <ul className="list-disc list-inside text-slate-700 space-y-1">
                  {milestone.details.notes.map((note, idx) => (
                    <li key={idx} className="font-normal">{note}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between ui text-xs text-slate-400">
        <span>Logged at: {milestone.date} {milestone.time || ''}</span>
        <span className="font-mono text-[10px] bg-slate-100 px-2 py-0.5 rounded text-slate-500">
          ID: {milestone.id}
        </span>
      </div>
    </div>
  );
};
