import React from 'react';
import { Milestone, SecondaryCareEvent } from '../data/mockJourney';

interface Props {
  milestones: Milestone[];
  secondaryEvents: SecondaryCareEvent[];
  selectedMilestoneId: string;
  onSelectMilestone: (id: string) => void;
}

export const HorizontalTimeline: React.FC<Props> = ({
  milestones,
  secondaryEvents,
  selectedMilestoneId,
  onSelectMilestone,
}) => {
  const currentIndex = milestones.findIndex((m) => m.status === 'current');
  const progressPercent = currentIndex >= 0 ? (currentIndex / (milestones.length - 1)) * 100 : 33;

  const getNodeStyle = (isCompleted: boolean, isCurrent: boolean) => {
    if (isCompleted) {
      return 'bg-teal-600 text-white shadow-md shadow-teal-100';
    }
    if (isCurrent) {
      return 'bg-emerald-50 text-emerald-700 ring-4 ring-emerald-100 ring-offset-1 shadow-lg shadow-emerald-200';
    }
    return 'bg-white border-2 border-slate-300 text-slate-400';
  };

  const getSecStyle = (type: string) => {
    if (type === 'alert') return 'bg-rose-50 border-rose-200 text-rose-900';
    if (type === 'warning') return 'bg-amber-50 border-amber-200 text-amber-900';
    return 'bg-blue-50 border-blue-200 text-blue-900';
  };

  const getSecDot = (type: string) => {
    if (type === 'alert') return 'bg-rose-500';
    if (type === 'warning') return 'bg-amber-500';
    return 'bg-blue-500';
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm overflow-hidden">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-base font-bold text-slate-900">Patient Care Journey</h3>
          <p className="text-xs text-slate-500">Real-time stage tracking & insurance milestone evaluation</p>
        </div>
        <div className="flex items-center gap-4 text-xs">
          <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-teal-600"></span> Completed</span>
          <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-emerald-200"></span> Current</span>
          <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full border border-slate-300 bg-white"></span> Upcoming</span>
        </div>
      </div>

      <div className="overflow-x-auto pb-6 pt-4">
        <div className="min-w-[760px] relative px-4">
          {/* Main Horizontal Progress Line Container */}
          <div className="absolute top-[42px] left-8 right-8 h-1.5 bg-slate-100 rounded-full z-0">
            <div
              className="h-full bg-gradient-to-r from-teal-600 to-emerald-500 rounded-full transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          {/* Milestones Container */}
          <div className="grid grid-cols-6 relative z-10">
            {milestones.map((m) => {
              const isSelected = m.id === selectedMilestoneId;
              const isCompleted = m.status === 'completed';
              const isCurrent = m.status === 'current';

              return (
                <div
                  key={m.id}
                  onClick={() => onSelectMilestone(m.id)}
                  className={`flex flex-col items-center cursor-pointer group text-center px-1 transition-all ${
                    isSelected ? 'scale-105' : 'hover:opacity-90'
                  }`}
                >
                  <span className={`text-xs font-semibold mb-2 ${isCompleted || isCurrent ? 'text-teal-700' : 'text-slate-400'}`}>
                    {m.date}
                  </span>

                  <div className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${getNodeStyle(isCompleted, isCurrent)}`}>
                    {isCompleted ? (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    ) : isCurrent ? (
                      <span className="w-3 h-3 rounded-full bg-emerald-600 animate-ping" />
                    ) : (
                      <span className="w-2 h-2 rounded-full bg-slate-300" />
                    )}
                  </div>

                  <h4 className={`text-xs font-bold mt-3 ${isSelected ? 'text-teal-700 underline decoration-2' : 'text-slate-800'}`}>
                    {m.title}
                  </h4>

                  <span className="text-[11px] font-medium text-slate-500 mt-0.5">{m.subtitle}</span>

                  <p className="text-[10px] text-slate-400 mt-1 line-clamp-2 max-w-[110px]">{m.description}</p>
                </div>
              );
            })}
          </div>

          {/* Secondary Events Row */}
          <div className="mt-8 pt-4 border-t border-dashed border-slate-200 relative">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-3">
              Secondary Care Events & Alerts
            </span>
            <div className="grid grid-cols-6 gap-2">
              {milestones.map((m) => {
                const events = secondaryEvents.filter((e) => e.milestoneId === m.id);

                return (
                  <div key={`sec-col-${m.id}`} className="min-h-[48px]">
                    {events.map((sec) => (
                      <div
                        key={sec.id}
                        className={`p-2 rounded-lg text-left text-xs border ${getSecStyle(sec.type)}`}
                      >
                        <div className="flex items-center gap-1 font-semibold text-[11px]">
                          <span className={`w-1.5 h-1.5 rounded-full ${getSecDot(sec.type)}`} />
                          {sec.title}
                        </div>
                        <p className="text-[10px] text-slate-600 mt-0.5 leading-tight">{sec.description}</p>
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
