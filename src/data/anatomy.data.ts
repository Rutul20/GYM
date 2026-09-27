import { MuscleGroupInfo, TransformationStage } from '../types/anatomy.types';

export const MUSCLE_GROUPS: Record<string, MuscleGroupInfo> = {
  quads: {
    id: 'quads',
    name: 'Quadriceps',
    scientificName: 'Quadriceps Femoris',
    region: 'lower',
    view: 'anterior',
    stageIndex: 0,
    highlightColor: '#4ADE80', // Emerald Green
    exercises: [
      {
        name: 'Dumbbell Goblet Squats',
        setsReps: '3 sets x 10-15 reps',
        focus: 'Knee extension & deep quad tear',
        hardware: 'Heavy Dumbbell Bay & Squat Wedge',
        proCue: 'Drive knees over second toes; maintain upright torso angle.'
      },
      {
        name: 'Isolated Leg Extension',
        setsReps: '3 sets x 10-15 reps',
        focus: 'Rectus femoris peak contraction',
        hardware: 'Selectorized Cam Leg Extension',
        proCue: 'Pause for a strict 2-second hold at the apex of extension.'
      }
    ]
  },
  calves: {
    id: 'calves',
    name: 'Calves',
    scientificName: 'Gastrocnemius & Soleus',
    region: 'lower',
    view: 'posterior',
    stageIndex: 0,
    highlightColor: '#4ADE80',
    exercises: [
      {
        name: 'Standing Calf Raises',
        setsReps: '3 sets x 12-15 reps',
        focus: 'Plantar flexion & Achilles elasticity',
        hardware: 'Calf Block & Smith Machine',
        proCue: 'Drop into a full deep stretch at the bottom before explosive drive.'
      }
    ]
  },
  hamstrings: {
    id: 'hamstrings',
    name: 'Hamstrings',
    scientificName: 'Biceps Femoris & Semitendinosus',
    region: 'lower',
    view: 'posterior',
    stageIndex: 0,
    highlightColor: '#4ADE80',
    exercises: [
      {
        name: 'Lying Hamstring Curl',
        setsReps: '3 sets x 10-12 reps',
        focus: 'Knee flexion under continuous tension',
        hardware: 'Biomechanical Prone Leg Curl',
        proCue: 'Keep hips pinned flat against the bench to eliminate lower back cheating.'
      }
    ]
  },
  glutes: {
    id: 'glutes',
    name: 'Glutes',
    scientificName: 'Gluteus Maximus & Medius',
    region: 'lower',
    view: 'posterior',
    stageIndex: 0,
    highlightColor: '#4ADE80',
    exercises: [
      {
        name: 'Sled Pushes & Hip Extensions',
        setsReps: '3 rounds x 25m track',
        focus: 'Hip propulsion & glute lockout',
        hardware: 'Astroturf Track & Calibrated Sled',
        proCue: 'Drive through the ball of the foot at a rigid 45° torso lean.'
      }
    ]
  },
  lats: {
    id: 'lats',
    name: 'Latissimus Dorsi',
    scientificName: 'Latissimus Dorsi',
    region: 'back',
    view: 'posterior',
    stageIndex: 1,
    highlightColor: '#22D3EE', // Electric Cyan
    exercises: [
      {
        name: 'Lat Pulldowns',
        setsReps: '3 sets x 6-12 reps',
        focus: 'Upper lat flare & V-taper wingspan',
        hardware: 'Wide-Grip Lat Pulldown Tower',
        proCue: 'Initiate by depressing scapulae downward before bending the elbows.'
      },
      {
        name: 'Machine Pull-Ups',
        setsReps: '3 sets x 6-12 reps',
        focus: 'Vertical pulling relative strength',
        hardware: 'Assisted Counterbalance Pull-Up Rig',
        proCue: 'Drive elbows down toward hip pockets; pause 1 second at chest-to-bar.'
      }
    ]
  },
  traps: {
    id: 'traps',
    name: 'Traps & Rhomboids',
    scientificName: 'Trapezius & Rhomboideus',
    region: 'back',
    view: 'posterior',
    stageIndex: 1,
    highlightColor: '#22D3EE',
    exercises: [
      {
        name: 'Seated Cable Row',
        setsReps: '3 sets x 6-12 reps',
        focus: 'Mid-back thickness & scapular retraction',
        hardware: 'Low Pulley Cable Row Station',
        proCue: 'Retract shoulder blades fully; squeeze spine without rocking torso.'
      }
    ]
  },
  biceps: {
    id: 'biceps',
    name: 'Biceps',
    scientificName: 'Biceps Brachii & Brachialis',
    region: 'upper',
    view: 'anterior',
    stageIndex: 1,
    highlightColor: '#22D3EE',
    exercises: [
      {
        name: 'Cable Bicep Curls',
        setsReps: '3 sets x 6-12 reps',
        focus: 'Peak bicep height & constant tension',
        hardware: 'Dual Adjustable Cable Pulley',
        proCue: 'Keep elbows pinned forward; twist pinkies upward at top contraction.'
      },
      {
        name: 'DB Hammer Curls',
        setsReps: '3 sets x 6-12 reps',
        focus: 'Brachialis & forearm thickness',
        hardware: 'Urethane Dumbbell Pairs',
        proCue: 'Neutral grip throughout; resist the negative for 3 slow seconds.'
      }
    ]
  },
  chest: {
    id: 'chest',
    name: 'Pectorals',
    scientificName: 'Pectoralis Major & Minor',
    region: 'upper',
    view: 'anterior',
    stageIndex: 2,
    highlightColor: '#38BDF8', // Sky Blue
    exercises: [
      {
        name: 'Flat Smith / DB Chest Press',
        setsReps: '3 sets x 6-12 reps',
        focus: 'Sternal head fiber recruitment',
        hardware: 'Benches & Smith Rack',
        proCue: 'Tuck shoulder blades back and down; control descent to mid-nipple line.'
      },
      {
        name: 'Pec Deck / Cable Flyes',
        setsReps: '3 sets x 6-12 reps',
        focus: 'Deep horizontal pectoral adduction',
        hardware: 'Selectorized Pec Fly Unit',
        proCue: 'Slight elbow bend; squeeze hands together like hugging a tree.'
      }
    ]
  },
  triceps: {
    id: 'triceps',
    name: 'Triceps',
    scientificName: 'Triceps Brachii',
    region: 'upper',
    view: 'posterior',
    stageIndex: 2,
    highlightColor: '#38BDF8',
    exercises: [
      {
        name: 'Rope Cable Pushdown',
        setsReps: '3 sets x 6-12 reps',
        focus: 'Lateral & long head extension',
        hardware: 'High Cable Stack with Rope Attachment',
        proCue: 'Flare ropes outward at full lockout to isolate tricep horseshoe.'
      },
      {
        name: 'Tricep Parallel Dips',
        setsReps: '3 sets x 6-12 reps',
        focus: 'Overhead tricep lockout & lower chest',
        hardware: 'Calisthenics Dip Bars',
        proCue: 'Keep torso upright to prioritize triceps over chest angle.'
      }
    ]
  },
  shoulders: {
    id: 'shoulders',
    name: 'Deltoids',
    scientificName: 'Deltoideus (Anterior, Lateral, Posterior)',
    region: 'upper',
    view: 'anterior',
    stageIndex: 3,
    highlightColor: '#A3E635', // Neon Lime
    exercises: [
      {
        name: 'Seated DB Shoulder Press',
        setsReps: '3 sets x 8-12 reps',
        focus: 'Anterior delt overload & clavicular width',
        hardware: 'Multi-Angle Utility Benches & Dumbbells',
        proCue: 'Press in scapular plane (30° forward of coronal plane).'
      },
      {
        name: 'Side Lateral Cable / DB Raises',
        setsReps: '3 sets x 10-15 reps',
        focus: 'Lateral delt cap & shoulder 3D roundness',
        hardware: 'Urethane DBs & Low Cable Tower',
        proCue: 'Lead movement with elbows rather than wrists; do not shrug traps.'
      },
      {
        name: 'Reverse Pec Fly / Rear Delt',
        setsReps: '3 sets x 10-15 reps',
        focus: 'Posterior deltoid density & posture',
        hardware: 'Selectorized Rear Delt Machine',
        proCue: 'Push outward horizontally rather than pulling backward.'
      }
    ]
  },
  abs: {
    id: 'abs',
    name: 'Core & Abdominals',
    scientificName: 'Rectus Abdominis & Obliques',
    region: 'core',
    view: 'anterior',
    stageIndex: 3,
    highlightColor: '#A3E635',
    exercises: [
      {
        name: 'Hanging Leg / Toe Touches',
        setsReps: '3 sets x 15-20 reps',
        focus: 'Lower abdominal flexion & pelvic tilt',
        hardware: 'Overhead Calisthenics Rig',
        proCue: 'Curl pelvis upward; do not swing hips from momentum.'
      },
      {
        name: 'Rotational Cross Crunches',
        setsReps: '3 sets x 12 reps per side',
        focus: 'Internal & external oblique torsion',
        hardware: 'High-Density Floor Mats',
        proCue: 'Aim opposite shoulder toward knee; slow 2-second rotation.'
      }
    ]
  }
};

export const TRANSFORMATION_STAGES: TransformationStage[] = [
  {
    id: 'stage-1-foundation',
    stageNumber: 1,
    percentage: 20,
    title: 'The Kinetic Foundation',
    subtitle: 'Quads, Hamstrings, Glutes & Calves',
    anatomyFocus: 'Lower Chain Powerhouse',
    zoneName: 'Leg Platform & Machines',
    zoneTagline: 'Fit Orbit Zone V &bull; Vasna Road Platform Arena',
    activeMuscleIds: ['quads', 'hamstrings', 'glutes', 'calves'],
    cumulativeMuscleIds: ['quads', 'hamstrings', 'glutes', 'calves'],
    recommendedView: 'posterior',
    description:
      'Every powerful physique starts from the ground up. In this stage, we sculpt the pillars: quadriceps, hamstrings, and explosive glute drive using 45° plate-loaded linear presses and biomechanical lever stations.',
    keyBenefits: [
      'Maximum metabolic burn & growth hormone response',
      'Bulletproof knee and hip joint stabilization',
      'Explosive athletic sprint and jump propulsion'
    ]
  },
  {
    id: 'stage-2-vtaper',
    stageNumber: 2,
    percentage: 40,
    title: 'The Posterior V-Taper',
    subtitle: 'Latissimus Dorsi, Trapezius, Rhomboids & Biceps',
    anatomyFocus: 'Upper Pulling Chassis',
    zoneName: 'Cable Station & Pull-Up Rig',
    zoneTagline: 'Fit Orbit Zone II &bull; Modular Knurled Steel Bay',
    activeMuscleIds: ['lats', 'traps', 'biceps'],
    cumulativeMuscleIds: ['quads', 'hamstrings', 'glutes', 'calves', 'lats', 'traps', 'biceps'],
    recommendedView: 'posterior',
    description:
      'Layering the wingspan. Multi-angle cable rows, assisted chinning towers, and free pull-up matrices carve deep lat flare, dense upper-back rhomboids, and peaked biceps.',
    keyBenefits: [
      'Signature aesthetic V-taper waist-to-shoulder ratio',
      'Corrective postural realignment against desk slump',
      'Unforgiving grip and pulling power'
    ]
  },
  {
    id: 'stage-3-pushing',
    stageNumber: 3,
    percentage: 60,
    title: 'The Pushing Engine',
    subtitle: 'Pectoralis Major/Minor & Triceps Brachii',
    anatomyFocus: 'Horizontal Push Power',
    zoneName: 'Bench & Free-Weights Bay',
    zoneTagline: 'Fit Orbit Zone III &bull; Competition Drop Deck',
    activeMuscleIds: ['chest', 'triceps'],
    cumulativeMuscleIds: [
      'quads',
      'hamstrings',
      'glutes',
      'calves',
      'lats',
      'traps',
      'biceps',
      'chest',
      'triceps'
    ],
    recommendedView: 'anterior',
    description:
      'Armoring the front torso. Calibrated flat and incline benches combined with selectorized chest flyes and high-tension cable pushdowns build pectoral thickness and tricep horseshoe density.',
    keyBenefits: [
      'Dense horizontal pressing strength & chest shelf',
      'Lockout stability across all compound lifts',
      'Arm circumference & shoulder-tricep separation'
    ]
  },
  {
    id: 'stage-4-armor',
    stageNumber: 4,
    percentage: 80,
    title: 'The 3D Armor & Core Matrix',
    subtitle: '3D Deltoid Caps, Rectus Abdominis & Obliques',
    anatomyFocus: 'Scapular Cap & Core Shield',
    zoneName: 'Dumbbell Free-Motion Floor',
    zoneTagline: 'Fit Orbit Zone IV &bull; Precision Dumbbell Arena',
    activeMuscleIds: ['shoulders', 'abs'],
    cumulativeMuscleIds: [
      'quads',
      'hamstrings',
      'glutes',
      'calves',
      'lats',
      'traps',
      'biceps',
      'chest',
      'triceps',
      'shoulders',
      'abs'
    ],
    recommendedView: 'anterior',
    description:
      'Capping off the physique. Urethane dumbbell lateral raises carve 3-dimensional shoulder caps, while rotational cross crunches and anti-extension hanging tucks chisel deep abdominal lines.',
    keyBenefits: [
      'Broad 3D shoulder silhouette narrowing the waist',
      'Solid rotational core bracing and injury immunity',
      'Chiseled rectus abdominis and oblique definition'
    ]
  },
  {
    id: 'stage-5-complete',
    stageNumber: 5,
    percentage: 100,
    title: 'Complete Sculpted Human Physique',
    subtitle: 'Full Muscular Synergy & Athletic Conditioning',
    anatomyFocus: 'Total Symmetrical Human Body',
    zoneName: 'Astroturf Sled Track & Complete Showroom',
    zoneTagline: 'Fit Orbit All-Access &bull; The Final Transformation',
    activeMuscleIds: [
      'quads',
      'hamstrings',
      'glutes',
      'calves',
      'lats',
      'traps',
      'biceps',
      'chest',
      'triceps',
      'shoulders',
      'abs'
    ],
    cumulativeMuscleIds: [
      'quads',
      'hamstrings',
      'glutes',
      'calves',
      'lats',
      'traps',
      'biceps',
      'chest',
      'triceps',
      'shoulders',
      'abs'
    ],
    recommendedView: 'anterior',
    description:
      'The skeleton has evolved into a complete, high-performance human body. Every muscle group fires in unison across sled drives, battle ropes, and heavy compound training. Total symmetry, zero weak links.',
    keyBenefits: [
      '100% full-body muscular activation & metabolic supremacy',
      'Aesthetic balance: dense chest, wide lats, 3D delts, powerful legs',
      'Ready to step onto the floor at Fit Orbit Vasna Road'
    ]
  }
];
