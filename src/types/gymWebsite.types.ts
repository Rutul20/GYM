export interface ProgramHighlight {
  id: string;
  name: string;
  category: string;
  description: string;
  badge: string;
}

export interface MetricStat {
  id: string;
  value: number;
  suffix: string;
  label: string;
  subtext: string;
}

export interface TrainerOffer {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  perks: string[];
}

export interface TrainerProfile {
  id: string;
  name: string;
  role: string;
  experience: string;
  specialty: string;
  imageUrl: string;
}

export interface MemberReview {
  id: string;
  name: string;
  achievement: string;
  quote: string;
  rating: number;
  avatarUrl: string;
}

export interface FacilityHighlight {
  id: string;
  name: string;
  number: string;
  vibeTag: string;
  tagline: string;
  description: string;
  imageUrl: string;
  features: string[];
}

export interface MembershipPlan {
  id: string;
  name: string;
  badge?: string;
  isPopular?: boolean;
  priceMonthly: number;
  priceAnnualMonthly: number;
  description: string;
  perks: string[];
}
