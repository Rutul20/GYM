export type MousePosition = {
  readonly x: number;
  readonly y: number;
  readonly normalizedX: number;
  readonly normalizedY: number;
};

export type TargetOffset = {
  x: number;
  y: number;
};

export type ProgramCard = {
  readonly id: string;
  readonly code: string;
  readonly title: string;
  readonly tagline: string;
  readonly cadence: string;
  readonly intensity: string;
  readonly volume: string;
};

export type FeatureMetric = {
  readonly value: string;
  readonly label: string;
  readonly unit: string;
};

export type BiomechanicalStat = {
  readonly title: string;
  readonly description: string;
  readonly iconName: string;
};
