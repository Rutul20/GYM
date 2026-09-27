import { PhysicalZone } from '../types/tour.types';

export const FIT_ORBIT_ZONES: PhysicalZone[] = [
  {
    id: 'zone-01-turf',
    numericCode: '01',
    shortLabel: 'Turf',
    title: 'The Turf Sprint & Conditioning Corridor',
    subtitle: 'Athletic acceleration, sled driving, and metabolic fire.',
    vibe: 'High energy, raw athletic turf lane with high-lumen track floodlights.',
    overview:
      'Step onto 25 meters of pro-grade dual-bonded astroturf built for explosive sled drives, lateral agility work, and peak lactate intervals.',
    whatYouDoHere: [
      'Heavy sled pushes & drag intervals',
      'High-velocity 20-meter sprint bursts',
      'Heavy poly battle rope waves & slams',
      'Monster tire flips & hammer strikes',
      'High-intensity ladder & cone agility drills'
    ],
    trainingModalities: [
      { name: 'Anaerobic Power', benefit: 'Explosive drive & foot speed', intensity: 'Max Peak' },
      { name: 'Lactate Tolerance', benefit: 'Metabolic endurance & sprint stamina', intensity: 'High' },
      { name: 'Full-Body Core Drive', benefit: 'Hip hinge & core bracing under load', intensity: 'High' }
    ],
    featuredEquipment: [
      {
        name: 'Heavy-Duty Astroturf Track',
        category: 'Surface',
        specs: '18mm shock-cushioned dual-density sprint turf with calibrated yard lines',
        xPercent: 32,
        yPercent: 78
      },
      {
        name: 'Weighted Push Sled',
        category: 'Functional Rig',
        specs: 'Commercial multi-grip sled loaded with bumper plates',
        xPercent: 55,
        yPercent: 62
      },
      {
        name: 'Heavy Battle Ropes',
        category: 'Conditioning',
        specs: '50-foot 2-inch braided poly ropes with anchor sleeves',
        xPercent: 78,
        yPercent: 48
      },
      {
        name: 'Agility Ladders & Cones',
        category: 'Footwork',
        specs: 'Pro-grade quick-step ladders & reactive plyometric hurdles',
        xPercent: 18,
        yPercent: 42
      }
    ],
    accentColor: '#A3E635', // Electric Lime
    glowColor: 'rgba(163, 230, 53, 0.4)',
    badge: 'Athletic Speed & Conditioning',
    bgImageUrl:
      'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=2000&auto=format&fit=crop',
    detailImageUrl:
      'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1200&auto=format&fit=crop',
    sqFootage: '1,800 sq ft Sprint Lane',
    trainerFocus: 'Athletic Performance Coaches'
  },
  {
    id: 'zone-02-rig',
    numericCode: '02',
    shortLabel: 'Rig',
    title: 'The Calisthenics & Suspension Rig',
    subtitle: 'Master your own bodyweight in three-dimensional space.',
    vibe: 'Open, dynamic bodyweight playground with knurled steel and gymnastic rings.',
    overview:
      'A sprawling architectural modular rig engineered for bodyweight mastery, strict pull-up development, ring drills, and progressive suspension levers.',
    whatYouDoHere: [
      'Strict & kipping pull-up progressions',
      'Bar & ring muscle-ups',
      'Suspension strap levers & chest presses',
      'Gymnastic ring flyes & dips',
      'Core gymnastics, toes-to-bar & L-sits'
    ],
    trainingModalities: [
      { name: 'Relative Strength', benefit: 'Pound-for-pound bodyweight command', intensity: 'High' },
      { name: 'Joint Integrity', benefit: 'Scapular health & tendon resilience', intensity: 'Controlled' },
      { name: 'Grip & Core Synergy', benefit: 'Braced anti-extension stabilization', intensity: 'High' }
    ],
    featuredEquipment: [
      {
        name: 'Multi-Station Overhead Rig',
        category: 'Steel Structure',
        specs: '7-gauge commercial modular steel with 12 multi-height bays',
        xPercent: 48,
        yPercent: 35
      },
      {
        name: 'Pull-Up Matrix',
        category: 'Grip Station',
        specs: 'Knurled straight, fat-grip & neutral angled crossbars',
        xPercent: 26,
        yPercent: 52
      },
      {
        name: 'Wooden Rings',
        category: 'Suspension',
        specs: '28mm birch rings with calibrated quick-adjust nylon straps',
        xPercent: 72,
        yPercent: 44
      },
      {
        name: 'Functional Monkey Bars',
        category: 'Dynamic Rig',
        specs: 'Staggered elevated ladder rungs for traversing and grip stamina',
        xPercent: 50,
        yPercent: 20
      }
    ],
    accentColor: '#22D3EE', // Electric Cyan
    glowColor: 'rgba(34, 211, 238, 0.4)',
    badge: 'Bodyweight & Calisthenics',
    bgImageUrl:
      'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2000&auto=format&fit=crop',
    detailImageUrl:
      'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1200&auto=format&fit=crop',
    sqFootage: '1,500 sq ft Modular Rig Bay',
    trainerFocus: 'Calisthenics & Movement Specialists'
  },
  {
    id: 'zone-03-freeweights',
    numericCode: '03',
    shortLabel: 'Weights',
    title: 'The Free Weight & Dumbbell Deck',
    subtitle: 'Where iron meets discipline. Heavy compound movements and symmetry.',
    vibe: 'Focused, high-impact strength arena with floor-to-ceiling panoramic mirrors.',
    overview:
      'The raw heartbeat of Fit Orbit. Equipped with uninterrupted dumbbell runs from 2.5kg up to 50kg, heavy drop platforms, and competition-rated benches.',
    whatYouDoHere: [
      'Progressive overload dumbbell presses',
      'Strict lateral raises & delt sculpting',
      'Heavy dumbbell rows & pullovers',
      'Incline & flat chest presses',
      'Targeted arm development & raw muscle building'
    ],
    trainingModalities: [
      { name: 'Mechanical Tension', benefit: 'Direct muscle fiber recruitment', intensity: 'Max Peak' },
      { name: 'Unilateral Symmetry', benefit: 'Fixing left-right muscular imbalances', intensity: 'High' },
      { name: 'Hypertrophic Volume', benefit: 'Dense muscle definition & peak growth', intensity: 'High' }
    ],
    featuredEquipment: [
      {
        name: 'Full Dumbbell Run (2.5kg - 50kg)',
        category: 'Free Weights',
        specs: 'Solid urethane welded heads with textured diamond knurling',
        xPercent: 35,
        yPercent: 72
      },
      {
        name: 'Multi-Angle Utility Benches',
        category: 'Benches',
        specs: 'Commercial 7-position backrest (0° flat to 85° military incline)',
        xPercent: 62,
        yPercent: 55
      },
      {
        name: 'Power Racks',
        category: 'Heavy Iron',
        specs: 'Laser-cut pin-holes with spotter arms & banded peg pegs',
        xPercent: 82,
        yPercent: 38
      },
      {
        name: 'Floor-to-Ceiling Mirrors',
        category: 'Facility',
        specs: 'Optical clear glass with recessed anti-glare backlighting',
        xPercent: 15,
        yPercent: 30
      }
    ],
    accentColor: '#F59E0B', // Amber Gold
    glowColor: 'rgba(245, 158, 11, 0.4)',
    badge: 'Pure Iron & Strength Arena',
    bgImageUrl:
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2000&auto=format&fit=crop',
    detailImageUrl:
      'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1200&auto=format&fit=crop',
    sqFootage: '2,600 sq ft Strength Floor',
    trainerFocus: 'Bodybuilding & Powerlifting Coaches'
  },
  {
    id: 'zone-04-machines',
    numericCode: '04',
    shortLabel: 'Machines',
    title: 'The Precision Resistance Machine Bay',
    subtitle: 'Biomechanical perfection for controlled hypertrophy with zero joint stress.',
    vibe: 'Controlled, biomechanically guided lifting for all fitness levels.',
    overview:
      'Every angle is mathematically calculated to match the body’s natural strength curve. Isolate targeted muscles with silky-smooth selectorized weight stacks and ergonomic pivot points.',
    whatYouDoHere: [
      'Targeted chest & shoulder hypertrophy',
      'Precision lat pulldowns & seated cable rows',
      'Quad extensions & hamstring curls with zero knee torque',
      'Constant tension cable crossovers & flyes',
      'Safe failure drop sets without needing spotters'
    ],
    trainingModalities: [
      { name: 'Isolated Tension', benefit: 'Pinpoint muscle activation without joint friction', intensity: 'Controlled' },
      { name: 'Peak Contraction Hold', benefit: 'Optimal mind-muscle connection', intensity: 'Controlled' },
      { name: 'Safe Failure Sets', benefit: 'Push beyond limits safely and independently', intensity: 'High' }
    ],
    featuredEquipment: [
      {
        name: 'Selectorized Cable Stacks',
        category: 'Cables',
        specs: 'Dual-tower 4-stack cable crossover with 1:1 and 2:1 ratio options',
        xPercent: 30,
        yPercent: 42
      },
      {
        name: 'Isolated Diverging Row Machines',
        category: 'Selectorized',
        specs: 'Independent arm levers replicating natural scapular retraction',
        xPercent: 65,
        yPercent: 65
      },
      {
        name: 'Leg Curl & Extension Stations',
        category: 'Lower Body',
        specs: 'Cam-driven variable resistance matching hamstring/quad curve',
        xPercent: 82,
        yPercent: 48
      },
      {
        name: 'Guided Smith Machine',
        category: 'Fixed Movement',
        specs: 'Counterbalanced linear bearing track with auto-locking safety catches',
        xPercent: 18,
        yPercent: 68
      }
    ],
    accentColor: '#38BDF8', // Sky Blue
    glowColor: 'rgba(56, 189, 248, 0.4)',
    badge: 'Biomechanical Resistance',
    bgImageUrl:
      'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2000&auto=format&fit=crop',
    detailImageUrl:
      'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=1200&auto=format&fit=crop',
    sqFootage: '2,200 sq ft Lever & Cable Hub',
    trainerFocus: 'Corrective Exercise & Hypertrophy Specialists'
  },
  {
    id: 'zone-05-skyline',
    numericCode: '05',
    shortLabel: 'Cardio',
    title: 'The Skyline Cardio & Aerobic Deck',
    subtitle: 'Elevated aerobic conditioning with panoramic sunset views over Vadodara.',
    vibe: 'Bright, motivating skyline view overlooking Gotri-Vasna Road.',
    overview:
      'Positioned along Fit Orbit’s grand glass facade. Crush high-calorie intervals or long aerobic base miles while taking in panoramic views of the city.',
    whatYouDoHere: [
      'Heart health & VO2 max capacity building',
      'Aggressive fat loss HIIT intervals',
      'Steady-state aerobic endurance conditioning',
      'Ski-trainer upper-body cardio sprints',
      'Pre-workout athletic warm-ups & cool-down flushes'
    ],
    trainingModalities: [
      { name: 'Cardiorespiratory Engine', benefit: 'Lower resting heart rate & stamina', intensity: 'Endurance' },
      { name: 'High Caloric Burn', benefit: 'Prolonged post-exercise oxygen consumption', intensity: 'High' },
      { name: 'Low Impact Joint Friendly', benefit: 'Fluid flywheel resistance protects hips & knees', intensity: 'Controlled' }
    ],
    featuredEquipment: [
      {
        name: 'Commercial Touchscreen Treadmills',
        category: 'Treadmills',
        specs: 'Dynamic cushioning deck with up to 15% incline and integrated fans',
        xPercent: 28,
        yPercent: 65
      },
      {
        name: 'Concept2 SkiErgs',
        category: 'Air Flywheel',
        specs: 'Precision PM5 monitors for upper body pull conditioning',
        xPercent: 52,
        yPercent: 42
      },
      {
        name: 'Assault Air Bikes',
        category: 'Dual-Action',
        specs: 'Heavy steel fan creating unlimited wind resistance as you pedal',
        xPercent: 75,
        yPercent: 58
      },
      {
        name: 'Cross-Trainers & Ellipticals',
        category: 'Low Impact',
        specs: 'Bi-directional smooth stride path for knee-sparing cardio',
        xPercent: 88,
        yPercent: 35
      }
    ],
    accentColor: '#10B981', // Emerald
    glowColor: 'rgba(16, 185, 129, 0.4)',
    badge: 'Panoramic Aerobic Arena',
    bgImageUrl:
      'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=2000&auto=format&fit=crop',
    detailImageUrl:
      'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop',
    sqFootage: '1,900 sq ft Skyline Deck',
    trainerFocus: 'Cardiorespiratory & Weight Loss Specialists'
  }
];
