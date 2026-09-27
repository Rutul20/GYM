export type Gender = 'male' | 'female';
export type BodyView = 'anterior' | 'posterior';

export interface MuscleExercise {
  name: string;
  setsReps: string;
  focus: string;
  hardware: string;
  proCue: string;
}

export interface MuscleGroupInfo {
  id: string;
  name: string;
  scientificName: string;
  region: 'upper' | 'core' | 'lower' | 'back';
  view: BodyView;
  stageIndex: number;
  highlightColor: string;
  exercises: MuscleExercise[];
}

export interface TransformationStage {
  id: string;
  stageNumber: number;
  percentage: number;
  title: string;
  subtitle: string;
  anatomyFocus: string;
  zoneName: string;
  zoneTagline: string;
  activeMuscleIds: string[];
  cumulativeMuscleIds: string[];
  recommendedView: BodyView;
  description: string;
  keyBenefits: string[];
}
