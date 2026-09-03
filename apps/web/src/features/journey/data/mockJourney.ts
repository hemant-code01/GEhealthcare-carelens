export interface Milestone {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  time?: string;
  status: 'completed' | 'current' | 'upcoming';
  description: string;
  details?: {
    location?: string;
    roomType?: string;
    actionTaken?: string;
    notes?: string[];
  };
}

export interface SecondaryCareEvent {
  id: string;
  milestoneId: string;
  title: string;
  type: 'info' | 'warning' | 'alert';
  time: string;
  description: string;
  impact?: string;
}

export interface CoverageData {
  totalEstimate: number;
  insuranceCoverage: number;
  outOfPocket: number;
  roomCategory: string;
  status: 'Eligible' | 'Action Needed' | 'Reviewing';
  disclaimer: string;
}

export interface DivergenceAlertData {
  id: string;
  title: string;
  description: string;
  financialImpact: string;
  recommendedAction: string;
  severity: 'low' | 'medium' | 'high';
}

export interface PatientInfo {
  name: string;
  careRequestId: string;
  careNeed: string;
  hospital: string;
  room: string;
  admissionDate: string;
  status: string;
}

export const mockPatient: PatientInfo = {
  name: 'Meera Sharma',
  careRequestId: 'REQ-001',
  careNeed: 'Knee Replacement',
  hospital: 'Apollo Hospital',
  room: 'Twin Sharing',
  admissionDate: '02 Sep 2026',
  status: 'In Progress',
};

export const mockMilestones: Milestone[] = [
  {
    id: 'm1',
    title: 'Policy Review',
    subtitle: 'Pre-authorization',
    date: '01 Sep',
    time: '04:30 PM',
    status: 'completed',
    description: 'Policy analyzed & eligible for cashless treatment',
    details: {
      location: 'Online Portal',
      roomType: 'Twin Sharing Cap',
      actionTaken: 'Approved pre-auth claim limit up to ?5,00,000',
      notes: ['Sum insured: ?5,00,000', 'No waiting period remaining for procedure'],
    },
  },
  {
    id: 'm2',
    title: 'Admission',
    subtitle: 'Apollo Hospital',
    date: '02 Sep',
    time: '10:30 AM',
    status: 'completed',
    description: 'Patient admitted successfully to Twin Sharing',
    details: {
      location: 'Apollo Hospital, Main Block',
      roomType: 'Twin Sharing (Room 304)',
      actionTaken: 'Patient check-in & ID verification completed',
      notes: ['Hospital Deposit: ?10,000 (Refundable)', 'Attendant Pass issued'],
    },
  },
  {
    id: 'm3',
    title: 'Procedure',
    subtitle: 'Knee Surgery',
    date: '03 Sep',
    time: '09:00 AM',
    status: 'current',
    description: 'Total Knee Arthroplasty scheduled during current stay',
    details: {
      location: 'Operation Theatre 2',
      roomType: 'Twin Sharing / ICU Post-Op',
      actionTaken: 'Pre-surgery clearance obtained from Cardiology',
      notes: ['Primary Surgeon: Dr. R. K. Sharma', 'Anesthesia clearance confirmed'],
    },
  },
  {
    id: 'm4',
    title: 'Hospital Stay',
    subtitle: 'Recovery & Rehab',
    date: '04-06 Sep',
    status: 'upcoming',
    description: 'Post-operative care and daily physiotherapy',
    details: {
      location: 'Inpatient Ward',
      roomType: 'Twin Sharing',
      actionTaken: 'Scheduled daily nursing care and mobilization plan',
    },
  },
  {
    id: 'm5',
    title: 'Billing & Claims',
    subtitle: 'Final Settlement',
    date: '07 Sep',
    status: 'upcoming',
    description: 'Final hospital bill and cashless insurance claim audit',
    details: {
      location: 'Billing Desk',
      actionTaken: 'Awaiting final itemized discharge bill for claim submission',
    },
  },
  {
    id: 'm6',
    title: 'Discharge',
    subtitle: 'Care Transition',
    date: '08 Sep',
    status: 'upcoming',
    description: 'Discharge summary issued and home recovery plan',
    details: {
      location: 'Discharge Counter',
      actionTaken: 'Post-discharge medications and follow-up consultation booked',
    },
  },
];

export const mockSecondaryEvents: SecondaryCareEvent[] = [
  {
    id: 'sec-1',
    milestoneId: 'm2',
    title: 'Room Change Request',
    type: 'warning',
    time: '02 Sep 04:00 PM',
    description: 'Requested upgrade from Twin Sharing to Deluxe Private',
    impact: 'May trigger proportionate deduction on surgeon fees',
  },
  {
    id: 'sec-2',
    milestoneId: 'm3',
    title: 'Coverage Alert',
    type: 'alert',
    time: '03 Sep 08:30 AM',
    description: 'Potential OOP increase of +?1,80,000 if Deluxe room is retained',
    impact: 'Sub-limit cap exceeded for room rent category',
  },
];

export const mockCoverage: CoverageData = {
  totalEstimate: 200000,
  insuranceCoverage: 180000,
  outOfPocket: 20000,
  roomCategory: 'Twin Sharing',
  status: 'Eligible',
  disclaimer: 'Estimates are based on the current care plan and may change if treatment or room selection changes.',
};

export const mockDivergenceAlert: DivergenceAlertData = {
  id: 'div-001',
  title: 'Coverage may change',
  description: 'Your room was upgraded from Twin Sharing to Deluxe Private. The selected room category exceeds the eligible room rent limit under your policy rules.',
  financialImpact: '+?1,80,000 additional out-of-pocket cost',
  recommendedAction: 'Switch room selection back to Twin Sharing to maintain 90%+ cashless coverage.',
  severity: 'high',
};

export const mockDischargeSummary = {
  finalCost: 205000,
  finalCoverage: 185000,
  patientResponsibility: 20000,
  majorCoverageChanges: 1,
  safeActionTaken: 'Room category verified & retained under eligible Twin Sharing limit.',
};
