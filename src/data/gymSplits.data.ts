import { GymSplit } from '../types/gymTour.types';

export const FIT_ORBIT_SPLITS: GymSplit[] = [
  {
    id: 'routine-1-turf',
    routineNumber: 'Routine I',
    chipLabel: 'Turf',
    title: 'Functional & Turf Conditioning',
    zoneName: 'Astroturf Sled Track & Cardio Deck',
    tagline: 'High-output anaerobic conditioning and sprint-lane propulsion.',
    description:
      'Engineered for maximum metabolic demand and athletic agility. Features custom shock-absorbing high-density astroturf with calibrated yard lines for heavy sled driving, paired with commercial-grade ergs.',
    accentColor: '#a3e635', // Neon Lime
    glowColor: 'rgba(163, 230, 53, 0.35)',
    badge: 'Athletic Conditioning',
    durationEstimate: '50-60 mins',
    intensityLevel: 'Conditioning',
    imageUrl:
      'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1600&auto=format&fit=crop',
    specs: {
      equipment: [
        'Commercial Heavy Sled & Push Rails',
        'Concept2 SkiErgs & Air Bikes',
        'Braided Poly Battle Ropes (50ft)',
        'Plyometric Soft Boxes & Agility Ladders'
      ],
      floorType: '18mm Heavy-Duty Dual-Bonded Shock Turf',
      lightingVibe: 'High-Lumen Perimeter Linear LED System',
      capacityHint: 'Up to 10 Athletes simultaneously'
    },
    exercises: [
      {
        name: 'High Knees',
        setsReps: '3 rounds x 30s',
        targetMuscle: 'Hip Flexors & Core Activation',
        notes: 'Dynamic warmup; focus on aggressive knee drive and vertical posture.'
      },
      {
        name: 'Mountain Climbers',
        setsReps: '3 rounds x 30s',
        targetMuscle: 'Core & Scapular Stability',
        notes: 'Maintain neutral spine; drive knees directly to chest with speed.'
      },
      {
        name: 'Shoulder Taps',
        setsReps: '3 rounds x 20 taps',
        targetMuscle: 'Anti-Rotation Core & Delts',
        notes: 'Lock pelvis level to floor; eliminate lateral hip sway.'
      },
      {
        name: 'Battle Ropes',
        setsReps: '3 sets x 20s',
        targetMuscle: 'Shoulders, Arms & Anaerobic Capacity',
        notes: 'Alternate waves with explosive hinge and tight core bracing.'
      },
      {
        name: 'Sled Push',
        setsReps: '3 rounds x 25m track',
        targetMuscle: 'Quads, Glutes & Posterior Chain',
        notes: 'Drive through balls of feet at a rigid 45° torso angle.'
      },
      {
        name: 'Ski Erg',
        setsReps: '3 sets x 20 strokes',
        targetMuscle: 'Lats, Triceps & Cardiorespiratory Engine',
        notes: 'Hinge aggressively at hips; utilize full bodyweight on pull down.'
      },
      {
        name: 'Air Bike Finisher',
        setsReps: '5 minutes',
        targetMuscle: 'Full Body Aerobic Flush',
        notes: 'Sustain 75-80 RPM for total lactic clearance and stamina.',
        isFinisher: true
      }
    ]
  },
  {
    id: 'routine-2-pull-rig',
    routineNumber: 'Routine II',
    chipLabel: 'Pull Rig',
    title: 'Back & Biceps Rig',
    zoneName: 'Cable Station & Pull-Up Rig',
    tagline: 'Precision lat engagement and multi-planar upper-body pulling.',
    description:
      'A biomechanically tuned pulling station featuring dual-adjustable multi-pulley cable towers, counterbalanced assisted pull-up bays, and knurled magnesium pull-up crossbars.',
    accentColor: '#22d3ee', // Electric Cyan
    glowColor: 'rgba(34, 211, 238, 0.35)',
    badge: 'Upper Pull Hypertrophy',
    durationEstimate: '55-65 mins',
    intensityLevel: 'Hypertrophy Focus',
    imageUrl:
      'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1600&auto=format&fit=crop',
    specs: {
      equipment: [
        'Dual Adjustable 4-Stack Cable Crossover',
        'Assisted Chin / Dip Counterbalance Tower',
        'Multi-Grip Swiss Chinning Rig',
        'Full Lat Pulldown & Seated Low Row Benches'
      ],
      floorType: 'Commercial Recycled Rubber Flooring (20mm acoustic)',
      lightingVibe: 'Dimmed Ambient Cobalt Neon & Overhead Halos',
      capacityHint: '6 Athletes comfortably'
    },
    exercises: [
      {
        name: 'Machine Pull-ups',
        setsReps: '3 sets x 6-12 reps',
        targetMuscle: 'Latissimus Dorsi & Rhomboids',
        notes: 'Full scapular depression before pulling; pause 1s at top contraction.'
      },
      {
        name: 'Lat Pulldown',
        setsReps: '3 sets x 6-12 reps',
        targetMuscle: 'Upper Lat Width & Teres Major',
        notes: 'Drive elbows down to waistline; control eccentric return (3 seconds).'
      },
      {
        name: 'Seated Cable Row',
        setsReps: '3 sets x 6-12 reps',
        targetMuscle: 'Mid-Back Thickness & Lower Traps',
        notes: 'Keep ribcage lifted; squeeze shoulder blades together firmly at peak.'
      },
      {
        name: 'Cable Bicep Curl',
        setsReps: '3 sets x 6-12 reps',
        targetMuscle: 'Biceps Brachii (Short & Long Heads)',
        notes: 'Constant cable tension; keep upper arms pinned vertically to sides.'
      },
      {
        name: 'DB Hammer Curl',
        setsReps: '3 sets x 6-12 reps',
        targetMuscle: 'Brachialis & Brachioradialis',
        notes: 'Neutral grip; maximize forearm engagement and bicep peak density.'
      }
    ]
  },
  {
    id: 'routine-3-chest-bay',
    routineNumber: 'Routine III',
    chipLabel: 'Chest Bay',
    title: 'Chest & Push Power',
    zoneName: 'Bench & Free-Weights Bay',
    tagline: 'Heavy horizontal pressing, cable fly lines, and tricep loadout.',
    description:
      'Dedicated pushing floor featuring competition benches, calibrated 3D Smith machine racks, and pinpoint selectorized chest fly platforms with custom incline variations.',
    accentColor: '#38bdf8', // Light Cyan / Sky
    glowColor: 'rgba(56, 189, 248, 0.35)',
    badge: 'Upper Push Power',
    durationEstimate: '60-70 mins',
    intensityLevel: 'Power & Strength',
    imageUrl:
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1600&auto=format&fit=crop',
    specs: {
      equipment: [
        'Commercial Flat & Incline Benches',
        'Counter-Balanced 3D Smith Machine',
        'Pec-Fly / Rear Delt Dual Lever Machine',
        'Parallel Dip Station & Adjustable Cable Towers'
      ],
      floorType: 'High-Impact Drop Zone Hardwood & Interlocking Rubber',
      lightingVibe: 'Industrial Recessed Spotlights with Accent Backlighting',
      capacityHint: '8 Athletes simultaneously'
    },
    exercises: [
      {
        name: 'Plank Warmup',
        setsReps: '3 sets x 20s',
        targetMuscle: 'Core Bracing & Anterior Chain',
        notes: 'Posterior pelvic tilt; squeeze glutes and hollow abdominal wall.'
      },
      {
        name: 'Machine / Smith Flat Chest Press',
        setsReps: '3 sets x 6-12 reps',
        targetMuscle: 'Pectoralis Major (Sternal Head)',
        notes: 'Establish firm 5-point contact; controlled descent to mid-sternum.'
      },
      {
        name: 'Chest Fly',
        setsReps: '3 sets x 6-12 reps',
        targetMuscle: 'Pectoral Adduction & Stretch',
        notes: 'Slight elbow crook; emphasize wide eccentric stretch and peak squeeze.'
      },
      {
        name: 'DB Pullovers',
        setsReps: '3 sets x 6-12 reps',
        targetMuscle: 'Serratus Anterior & Upper Pectorals',
        notes: 'Cross-bench posture; lower dumbbell overhead under deep stretch.'
      },
      {
        name: 'Cable Pushdown',
        setsReps: '3 sets x 6-12 reps',
        targetMuscle: 'Triceps Brachii (Lateral Head)',
        notes: 'Flare rope handles out at full elbow extension for maximum contraction.'
      },
      {
        name: 'Tricep Dips',
        setsReps: '3 sets x 6-12 reps',
        targetMuscle: 'Triceps & Lower Chest',
        notes: 'Vertical posture for triceps emphasis; descent to 90° elbow bend.'
      },
      {
        name: 'Cross Crunches',
        setsReps: '3 sets x 6-12 reps per side',
        targetMuscle: 'Obliques & Transverse Abdominis',
        notes: 'Slow rotational flexion; focus on bringing rib toward opposite hip.',
        isFinisher: true
      }
    ]
  },
  {
    id: 'routine-4-delts-core',
    routineNumber: 'Routine IV',
    chipLabel: 'Delts / Core',
    title: 'Delts & Core Matrix',
    zoneName: 'Dumbbell Free-Motion Floor',
    tagline: '3D deltoid sculpting, scapular elevation, and core conditioning.',
    description:
      'Open free-motion floor furnished with urethane dumbbells ascending in 1kg/2.5kg increments, paired with ergonomic multi-angle utility benches and high-durability floor mats.',
    accentColor: '#bef264', // Lime Yellow
    glowColor: 'rgba(190, 242, 100, 0.35)',
    badge: 'Shoulder Hypertrophy',
    durationEstimate: '50-60 mins',
    intensityLevel: 'Hypertrophy Focus',
    imageUrl:
      'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1600&auto=format&fit=crop',
    specs: {
      equipment: [
        'Urethane Dumbbell Pairs (2.5kg up to 50kg)',
        'Heavy-Duty Multi-Angle Incline/Military Benches',
        'Pin-Loaded Rear Delt Fly / Reverse Pec Machine',
        'StairMaster & Curve Treadmills for Cooldown'
      ],
      floorType: 'Seamless Vulcanized Non-Slip Rubber',
      lightingVibe: 'High-Contrast Architectural Wall Sconces',
      capacityHint: '12 Athletes across dumbbell rack'
    },
    exercises: [
      {
        name: 'DB Shoulder Press',
        setsReps: '3 sets x 8-12 reps',
        targetMuscle: 'Anterior & Lateral Deltoids',
        notes: 'Elbows slightly tucked in scapular plane (30° forward); press overhead.'
      },
      {
        name: 'Side Lateral Raises',
        setsReps: '3 sets x 10-15 reps',
        targetMuscle: 'Lateral Deltoids (Cap Width)',
        notes: 'Lead with elbows; avoid shrugging traps during abduction.'
      },
      {
        name: 'Machine Rear Delt',
        setsReps: '3 sets x 10-15 reps',
        targetMuscle: 'Posterior Deltoids & Infraspinatus',
        notes: 'Neutral thumbs-in grip; push out wide rather than pulling back.'
      },
      {
        name: 'DB Shrugs',
        setsReps: '3 sets x 10-12 reps',
        targetMuscle: 'Upper Trapezius',
        notes: 'Strict vertical elevation without shoulder rolling; 1s hold at peak.'
      },
      {
        name: 'Toe Touches',
        setsReps: '3 sets x 20 reps',
        targetMuscle: 'Rectus Abdominis (Upper & Mid)',
        notes: 'Legs perpendicular to floor; pulse fingertips toward toes smoothly.'
      },
      {
        name: 'Cardio Cooldown',
        setsReps: '5-6 minutes',
        targetMuscle: 'Cardiorespiratory Recovery',
        notes: 'Low-impact steady state on incline treadmill or StairMaster.',
        isFinisher: true
      }
    ]
  },
  {
    id: 'routine-5-legs',
    routineNumber: 'Routine V',
    chipLabel: 'Legs',
    title: 'Lower Chain Power',
    zoneName: 'Leg Platform & Machines',
    tagline: 'Deep quad development, hamstring isolation, and lower posterior drive.',
    description:
      'Fit Orbit’s lower chain powerhouse arena loaded with 45° linear hack squats, isolated quad extension levers, lying/seated hamstring curls, and heavy calf block platforms.',
    accentColor: '#4ade80', // Emerald Lime
    glowColor: 'rgba(74, 222, 128, 0.35)',
    badge: 'Lower Body Strength',
    durationEstimate: '60-70 mins',
    intensityLevel: 'Power & Strength',
    imageUrl:
      'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=1600&auto=format&fit=crop',
    specs: {
      equipment: [
        'Linear 45-Degree Plate-Loaded Leg Press',
        'Independent Lever Quad Extension Machine',
        'Prone & Seated Hamstring Curl Units',
        'Elevated Standing & Seated Calf Raise Stations'
      ],
      floorType: 'Triple-Layered Vibration Dampening Platform',
      lightingVibe: 'Cool White Focus Overhead Lighting with Rim Strips',
      capacityHint: '8 Athletes simultaneously'
    },
    exercises: [
      {
        name: 'DB Squats',
        setsReps: '3 sets x 10-15 reps',
        targetMuscle: 'Quadriceps, Glutes & Core Brace',
        notes: 'Goblet or dual-side loaded; achieve parallel depth with upright torso.'
      },
      {
        name: 'Leg Extension',
        setsReps: '3 sets x 10-15 reps',
        targetMuscle: 'Quadriceps (Rectus Femoris Isolation)',
        notes: 'Align knee joint axis with machine pivot; deliberate 2s peak hold.'
      },
      {
        name: 'Leg Curl',
        setsReps: '3 sets x 10-15 reps',
        targetMuscle: 'Biceps Femoris & Semitendinosus',
        notes: 'Keep hips pinned into bench pad; resist eccentric lowering under control.'
      },
      {
        name: 'Standing Calf Raises',
        setsReps: '3 sets x 10-15 reps',
        targetMuscle: 'Gastrocnemius & Soleus',
        notes: 'Full bottom ankle stretch followed by explosive plantar flexion on toes.'
      },
      {
        name: 'Cardio Cooldown',
        setsReps: '5-6 minutes',
        targetMuscle: 'Lactic Acid Flush',
        notes: 'Gentle cycle cadence (50-60 RPM) to expedite lower body lymphatic drain.',
        isFinisher: true
      }
    ]
  }
];
