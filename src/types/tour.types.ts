export interface EquipmentItem {
  name: string;
  category: string;
  specs: string;
  xPercent?: number; // Relative position for interactive visual hotspots (0-100)
  yPercent?: number;
}

export interface TrainingModality {
  name: string;
  benefit: string;
  intensity: 'High' | 'Max Peak' | 'Controlled' | 'Endurance';
}

export interface PhysicalZone {
  id: string;
  numericCode: string;
  shortLabel: string;
  title: string;
  subtitle: string;
  vibe: string;
  overview: string;
  whatYouDoHere: string[];
  trainingModalities: TrainingModality[];
  featuredEquipment: EquipmentItem[];
  accentColor: string;
  glowColor: string;
  badge: string;
  bgImageUrl: string;
  detailImageUrl: string;
  sqFootage: string;
  trainerFocus: string;
}

export interface PassModalState {
  isOpen: boolean;
  selectedZone: PhysicalZone | null;
}

export interface VirtualGymWalkthroughProps {
  gymName?: string;
  gymTagline?: string;
  location?: string;
  contactPhone?: string;
}
