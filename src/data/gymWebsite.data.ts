import { ProgramHighlight, MetricStat, TrainerOffer, TrainerProfile, MemberReview, FacilityHighlight, MembershipPlan } from '../types/gymWebsite.types';

export const FIT_ORBIT_OFFICIAL = {
  brandName: 'FITORBIT GYM',
  tagline: 'Commit to Be Fit',
  phone: '08065485848',
  phoneIntl: '+91 8065485848',
  address:
    '3rd Floor, Artham Arise, Near Nilamber Circle, Near to Lindey, Gotri - Vasna Rd, Vadodara, Gujarat 390007',
  areaLandmark: 'Near Nilamber Circle, Gotri - Vasna Road',
  city: 'Vadodara, Gujarat',
  pincode: '390007',
  morningTimings: '06:00 AM – 12:00 PM',
  eveningTimings: '04:30 PM – 09:30 PM',
  daysOpen: 'Monday to Sunday (Open 7 Days)',
  mission:
    'At FITORBIT GYM, our mission is to inspire and empower men and women to commit to a healthier lifestyle by providing world-class fitness training, expert guidance, and a motivating environment that supports physical, mental, and emotional well-being. We aim to deliver personalized fitness solutions through cardio, crossfit, strength training, injury rehab, and diet planning.',
  vision:
    'Our vision is to become the most trusted and results-driven fitness destination in Vadodara for men and women, known for transforming lives through innovation, discipline, and community-driven fitness. We strive to build a strong fitness culture where people of all ages feel confident, supported, and motivated to commit to be fit for life.',
  ctaHeadline: 'Ready to Shine?',
  ctaDescription:
    'Get in touch with FITORBIT GYM today to start your fitness journey with expert trainers and personalized workout plans. Claim your free trial.'
};

export const GYM_METRICS: MetricStat[] = [
  {
    id: 'programs',
    value: 8,
    suffix: '+',
    label: 'Core Disciplines',
    subtext: 'Cardio, CrossFit, Strength, Rehab, Yoga & Zumba'
  },
  {
    id: 'batches',
    value: 7,
    suffix: ' Days',
    label: 'Open All Week',
    subtext: 'Morning & evening batches to fit your schedule'
  },
  {
    id: 'coaches',
    value: 100,
    suffix: '%',
    label: 'Certified Trainers',
    subtext: 'Expert guidance on form, injury rehab & diet'
  },
  {
    id: 'rating',
    value: 4.9,
    suffix: '★',
    label: 'Google Member Rating',
    subtext: 'Trusted fitness destination in Vadodara'
  }
];

export const CORE_PROGRAMS: ProgramHighlight[] = [
  {
    id: 'prog-strength',
    name: 'Strength Training',
    category: 'Hypertrophy & Power',
    description:
      'Build lean muscle, increase power, and transform your body with structured, safe strength training programs.',
    badge: 'Core Program'
  },
  {
    id: 'prog-cardio',
    name: 'Cardio Training',
    category: 'Stamina & Fat Loss',
    description:
      'High-energy cardio workouts designed to burn fat, boost stamina, and improve overall heart health.',
    badge: 'High Energy'
  },
  {
    id: 'prog-crossfit',
    name: 'CrossFit & Functional Training',
    category: 'Agility & Performance',
    description:
      'Intense functional training sessions to improve agility, endurance, and full-body athletic performance.',
    badge: 'Athletic'
  },
  {
    id: 'prog-rehab',
    name: 'Injury Rehabilitation',
    category: 'Mobility & Recovery',
    description:
      'Safe recovery-focused programs guided by professionals to help you regain mobility, posture, and strength without pain.',
    badge: 'Physio-Guided'
  },
  {
    id: 'prog-nutrition',
    name: 'Diet & Nutrition Planning',
    category: 'Lifestyle & Meals',
    description:
      'Personalized nutrition plans customized to support weight loss, muscle gain, and sustainable long-term fitness goals.',
    badge: 'Custom Plans'
  },
  {
    id: 'prog-yoga-zumba',
    name: 'Zumba & Yoga Sessions',
    category: 'Flexibility & Mental Peace',
    description:
      'Fun, high-energy Zumba sessions to burn calories, paired with guided soulful Yoga for flexibility, balance, and inner calm.',
    badge: 'Mind & Body'
  }
];

export const SERVICE_OFFERS: TrainerOffer[] = [
  {
    id: 'offer-1',
    title: 'Floor Supervision',
    subtitle: 'Expert Guidance',
    description:
      'Train hard, stay fit, and execute every movement pattern safely, guided by certified gym experts every step of the way.',
    perks: ['Strict Biomechanical Checks', 'Spotting on Max Loads', 'Real-Time Cue Corrections']
  },
  {
    id: 'offer-2',
    title: 'Personal Training',
    subtitle: 'Tailored Mentorship',
    description:
      'Personalized workouts, dedicated expert guidance, and real measurable results. Your fitness journey begins here.',
    perks: ['1-on-1 Dedicated Trainer', 'Weekly Progress & Body Audits', 'Custom Workout Roadmaps']
  },
  {
    id: 'offer-3',
    title: 'Group Fitness Classes',
    subtitle: 'Community Power',
    description:
      'Energize together, push limits, and achieve ambitious milestones with the unstoppable power of group fitness.',
    perks: ['Zumba Cardio Rhythms', 'Mindful Yoga & Mobility', 'High-Output Functional Circuits']
  }
];

export const GYM_TRAINERS: TrainerProfile[] = [
  {
    id: 'trainer-1',
    name: 'Certified Gym Trainers',
    role: 'Floor Supervision & Form Experts',
    experience: 'Full-Time Floor Team',
    specialty: 'Train hard, stay fit, guided by experts every step of the way with strict biomechanical posture and safety controls.',
    imageUrl:
      'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'trainer-2',
    name: '1-on-1 Personal Coaches',
    role: 'Custom Transformation Mentors',
    experience: 'Dedicated 1-on-1 Guidance',
    specialty: 'Personalized workouts, dedicated expert guidance, progressive overload tracking, and measurable body composition results.',
    imageUrl:
      'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'trainer-3',
    name: 'Group Fitness Instructors',
    role: 'Zumba, Yoga & Functional Leads',
    experience: 'High-Energy Community Leads',
    specialty: 'Energize together, push cardiovascular limits, and achieve ambitious fitness milestones through high-output group circuits.',
    imageUrl:
      'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=800&auto=format&fit=crop'
  }
];

export const MEMBER_REVIEWS: MemberReview[] = [
  {
    id: 'rev-1',
    name: 'Priya Sharma',
    achievement: 'Weight Loss & Zumba Enthusiast',
    quote:
      'Fit Orbit on Vasna Road has completely transformed my daily routine. The trainers are incredibly supportive, and the morning batch timing fits my schedule perfectly.',
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop'
  },
  {
    id: 'rev-2',
    name: 'Hardik Patel',
    achievement: 'Strength & CrossFit Member',
    quote:
      'Best gym near Nilamber Circle! Outstanding equipment, clean floor, and authentic personal training that actually focuses on form and injury rehab.',
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop'
  },
  {
    id: 'rev-3',
    name: 'Sneha Mehta',
    achievement: 'Yoga & Functional Fitness Member',
    quote:
      'A motivating environment for women and men alike. The combination of intense functional workouts and peaceful yoga sessions makes it 10/10.',
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop'
  }
];

export const GYM_FACILITIES: FacilityHighlight[] = [
  {
    id: 'fac-smith',
    name: 'Smith Machine Guided Press Station',
    number: '01',
    vibeTag: 'Chest & Shoulder Overload',
    tagline: 'Linear Bearing Barbell Track with Safety Locks',
    description:
      'Counter-balanced linear track with multi-position safety catch pins, enabling maximal progressive overload on flat pressing and vertical pressing without requiring a spotter.',
    imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80',
    features: [
      'S/M Flat Chest Press (Pec Major Overload)',
      'S/M Incline Chest Press',
      'S/M Seated Shoulder Press',
      'S/M Power Shrugs (Trapezius)'
    ]
  },
  {
    id: 'fac-pecdeck',
    name: 'Pec Deck & Rear Delt Dual Machine',
    number: '02',
    vibeTag: 'Chest & Posterior Deltoid',
    tagline: 'Dual-Axis Variable Cam Isolation',
    description:
      'Independent articulated lever arms offering a continuous resistance curve from deep chest stretch to peak sternal squeeze, and instant conversion for rear delt reverse flyes.',
    imageUrl: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1200&q=80',
    features: [
      'M/C Chest Fly (Pec Deck Fly)',
      'M/C Rear Delt (Reverse Pec Fly)',
      'Variable Cam Mechanical Tension',
      'Independent Arm Motion Pivots'
    ]
  },
  {
    id: 'fac-cables-pushdown',
    name: 'Dual Cable Crossover & Triceps Tower',
    number: '03',
    vibeTag: 'Triceps & Upper Push',
    tagline: 'Precision Height-Adjustable Cable Stacks',
    description:
      'Ultra-smooth aircraft cables with 180° rotating swivel pulleys, engineered for isolated tricep pushdowns, overhead extensions, and multidirectional chest fly lines.',
    imageUrl: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Cable Pushdown (Rope & V-Bar Attachments)',
      'Overhead Cable Triceps Extensions',
      'High-to-Low Cable Chest Flyes',
      'Unilateral Cable Kickbacks'
    ]
  },
  {
    id: 'fac-dips',
    name: 'Parallel Dip & Bodyweight Station',
    number: '04',
    vibeTag: 'Triceps & Lower Chest',
    tagline: 'Heavy-Gauge Commercial Parallel Bars',
    description:
      'Ergonomic v-tapered grip handles accommodating narrow tricep focus or flared chest loading, with integrated back support and forearm cushions for core hanging work.',
    imageUrl: 'https://images.unsplash.com/photo-1598971639058-fab3c3109a00?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Tricep Dips (Bodyweight & Weighted)',
      'Deep Chest Dip Flairs',
      'Hanging Knee & Leg Raises (Abs)',
      'Straight Bar Muscle-Up Platform'
    ]
  },
  {
    id: 'fac-lat-pulldown',
    name: 'Commercial Lat Pulldown Machine',
    number: '05',
    vibeTag: 'Back Width & Lat Sweep',
    tagline: 'Swivel Overhead Pulley with Locking Thigh Pads',
    description:
      'Heavy-duty selectorized overhead traction machine designed to build upper back width and teres major density with magnesium-knurled wide-grip and neutral-grip attachments.',
    imageUrl: 'https://images.unsplash.com/photo-1584466977772-e59e1515b410?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Machine Lat Pull-Down (Wide Grip)',
      'Close-Grip V-Bar Lat Pulldowns',
      'Behind-Neck Lat Contractions',
      'Straight-Arm Lat Sweepers'
    ]
  },
  {
    id: 'fac-seated-row',
    name: 'Seated Cable Row & One-Arm Pull Suite',
    number: '06',
    vibeTag: 'Mid-Back Thickness & Biceps',
    tagline: 'Low-Pulley Horizontal Cable Station',
    description:
      'Diamond-plate footplates providing an anchored base for heavy horizontal rows, coupled with an adjustable cable pulley for single-arm rowing and isolated bicep curling.',
    imageUrl: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Machine Seated Row (Mid-Back Thickness)',
      'Cable One-Arm Rows (Unilateral Lat Focus)',
      'Cable Biceps Curl (Straight Bar)',
      'Cable Hammer Rope Curls'
    ]
  },
  {
    id: 'fac-assisted-pullup',
    name: 'Assisted Pull-Up & Chin-Up Machine',
    number: '07',
    vibeTag: 'Calisthenics & Back Progression',
    tagline: 'Counter-Balanced Knee Platform',
    description:
      'Precision selectorized counterweight mechanism that offsets bodyweight, allowing athletes of all strength levels to perform strict pull-ups, chin-ups, and dips with perfect posture.',
    imageUrl: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Machine Pull-Ups (Overhand Back Width)',
      'Machine Chin-Ups (Underhand Biceps Bias)',
      'Counter-Balanced Tricep Dips',
      'Neutral-Grip Assisted Pull-Ups'
    ]
  },
  {
    id: 'fac-dumbbells',
    name: 'Pro Hex & Urethane Dumbbell Arsenal',
    number: '08',
    vibeTag: 'Free Weight Hypertrophy',
    tagline: 'Complete 2kg to 50kg Heavy Dumbbell Racks',
    description:
      'Three-tier commercial dumbbell rack paired with multi-angle adjustable incline, decline, and flat benches for precision free-weight chest, shoulder, arm, and squat protocols.',
    imageUrl: 'https://images.unsplash.com/photo-1638803040283-7a5ffd48dad5?auto=format&fit=crop&w=1200&q=80',
    features: [
      'DB Pullover (Chest & Serratus Expansion)',
      'DB Shoulder Press & DB Side Raises',
      'DB Shrugs & DB Hammer Curls',
      'DB Squats & Walking Dumbbell Lunges'
    ]
  },
  {
    id: 'fac-legs',
    name: 'Seated Leg Extension, Curl & Calf Station',
    number: '09',
    vibeTag: 'Quadriceps, Hamstrings & Calves',
    tagline: 'Biomechanical Strength-Curve Lower Body Machines',
    description:
      'Precision selectorized lower body machines with anatomical axis alignment to safely isolate the quadriceps, hamstrings, and gastrocnemius without spinal compression.',
    imageUrl: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Seated Leg Extension Machine (M/C Leg Ext)',
      'Prone / Lying Leg Curl Machine (M/C Leg Curl)',
      'Standing Calf Raise Machine (Calf Extension)',
      'Single-Leg Isolated Quad & Hamstring Curls'
    ]
  },
  {
    id: 'fac-turf-cardio',
    name: 'Turf Sled, SkiErg, Air Bike & Cardio Fleet',
    number: '10',
    vibeTag: 'Conditioning, Agility & Core',
    tagline: 'Astroturf Corridor, Ergometers & Core Zone',
    description:
      'Comprehensive athletic conditioning area equipped with high-output sprint turf, commercial push sleds, Concept2 SkiErgs, assault air bikes, battle ropes, and ab rigs.',
    imageUrl: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Heavy Weighted Turf Push Sled (Sledge Push)',
      'Concept2 Ski Trainer (SkiErg Pulls)',
      'High-Output Resistance Air Bike',
      '50ft Heavy Braided Battle Ropes',
      'Sprint Turf Lane (High Knees, Mountain Climbers, Shoulder Taps)',
      'Commercial Treadmills (5-6 min Cardio Warmup/Cool-down)',
      'Core Performance Mat Rig (Planks, Cross Crunches, Toe Touches)'
    ]
  }
];

export const MEMBERSHIP_PLANS: MembershipPlan[] = [
  {
    id: 'plan-starter',
    name: 'Monthly Tier',
    priceMonthly: 2500,
    priceAnnualMonthly: 2000,
    description: 'Flexible month-to-month access with complete equipment and coach orientation.',
    perks: [
      'Full Floor & Machine Access',
      'Locker & Changing Room Access',
      'Initial Fitness Assessment',
      'Morning & Evening Batches',
      'Open 7 Days a Week'
    ]
  },
  {
    id: 'plan-pro',
    name: 'Annual VIP Pass',
    badge: 'Best Value',
    isPopular: true,
    priceMonthly: 1800,
    priceAnnualMonthly: 1500,
    description: 'All-inclusive annual membership with personalized nutrition and training roadmaps.',
    perks: [
      'Full Floor & Machine Access',
      'Personalized Workout Roadmap',
      'Certified Nutrition & Diet Plan',
      'Injury Rehab Consultation',
      'Complimentary Guest Passes (2/mo)',
      'Priority Batch Reservation'
    ]
  },
  {
    id: 'plan-premium',
    name: 'Quarterly Pass',
    priceMonthly: 2200,
    priceAnnualMonthly: 1800,
    description: 'Structured 3-month commitment for dedicated body transformation and habit building.',
    perks: [
      'Full Floor & Machine Access',
      'Bi-Weekly Progress Tracking',
      'Dietary Guidelines',
      'Zumba & Yoga Access',
      'Locker Facility Included'
    ]
  }
];
