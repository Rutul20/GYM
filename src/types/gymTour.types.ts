export interface Exercise {
  name: string;
  setsReps: string;
  targetMuscle: string;
  notes?: string;
  isFinisher?: boolean;
}

export interface ZoneSpec {
  equipment: string[];
  floorType: string;
  lightingVibe: string;
  capacityHint: string;
}

export interface GymSplit {
  id: string;
  routineNumber: string;
  chipLabel: string;
  title: string;
  zoneName: string;
  tagline: string;
  description: string;
  accentColor: string;
  glowColor: string;
  badge: string;
  durationEstimate: string;
  intensityLevel: 'High Intensity' | 'Hypertrophy Focus' | 'Power & Strength' | 'Conditioning';
  imageUrl: string;
  specs: ZoneSpec;
  exercises: Exercise[];
}

export interface VirtualGymFloorTourProps {
  initialSplitId?: string;
  gymName?: string;
  gymTagline?: string;
  location?: string;
  onSplitChange?: (split: GymSplit) => void;
}
