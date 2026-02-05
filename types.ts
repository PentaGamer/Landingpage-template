
export interface LeadData {
  name: string;
  email: string;
  whatsapp: string;
}

export enum PageState {
  LANDING = 'LANDING',
  THANK_YOU = 'THANK_YOU'
}

export interface BenefitItem {
  icon: React.ReactNode;
  text: string;
}
