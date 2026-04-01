export const services = [
  {
    id: 'ecm-repair',
    name: 'ECM / ECU Repair & Programming',
    nameAr: 'إصلاح وبرمجة وحدة التحكم بالمحرك',
    description: 'Expert engine control module repair and programming for all major brands',
    icon: 'Cpu',
    slug: 'ecm-repair',
  },
  {
    id: 'hybrid-battery',
    name: 'Hybrid Battery Repair & Replacement',
    nameAr: 'إصلاح وتبديل بطارية الهجين',
    description: 'Professional hybrid battery diagnostics and replacement services',
    icon: 'Zap',
    slug: 'hybrid-battery',
  },
  {
    id: 'car-programming',
    name: 'Car Programming (Gear, Online, ABS)',
    nameAr: 'برمجة السيارات',
    description: 'Advanced car programming including gear, online, and ABS systems',
    icon: 'Code',
    slug: 'car-programming',
  },
  {
    id: 'abs-airbag',
    name: 'Airbag & ABS Repair',
    nameAr: 'إصلاح الوسائد الهوائية وABS',
    description: 'Safety system diagnostics and repair for airbag and ABS modules',
    icon: 'Shield',
    slug: 'abs-airbag',
  },
  {
    id: 'ac-repair',
    name: 'Car AC Repair',
    nameAr: 'إصلاح مكيفات هواء السيارات',
    description: 'Complete air conditioning system repair and maintenance',
    icon: 'Wind',
    slug: 'ac-repair',
  },
  {
    id: 'general-repair',
    name: 'General Mechanical Repair',
    nameAr: 'إصلاح ميكانيكي للمركبات',
    description: 'Comprehensive mechanical repair services for all vehicle types',
    icon: 'Wrench',
    slug: 'general-repair',
  },
  {
    id: 'electrical-repair',
    name: 'Electrical Repair',
    nameAr: 'إصلاح كهرباء السيارات',
    description: 'Electrical system diagnostics and repair services',
    icon: 'Zap',
    slug: 'electrical-repair',
  },
  {
    id: 'body-painting',
    name: 'Denting, Painting & Body Work',
    nameAr: 'ترميم ودهان هياكل المركبات',
    description: 'Professional body work, denting, and painting services',
    icon: 'Palette',
    slug: 'body-painting',
  },
  {
    id: 'tyres',
    name: 'Tyre Fitting & Repair',
    nameAr: 'تبديل وإصلاح الطارات',
    description: 'Tyre fitting, repair, and replacement services',
    icon: 'Circle',
    slug: 'tyres',
  },
  {
    id: 'oil-change',
    name: 'Oil Change',
    nameAr: 'تبديل زيوت المركبات',
    description: 'Regular oil change and fluid maintenance services',
    icon: 'Droplet',
    slug: 'oil-change',
  },
  {
    id: 'radiator-exhaust',
    name: 'Radiator, Exhaust & Coolant',
    nameAr: 'إصلاح مبردات وعوادم السيارات',
    description: 'Cooling and exhaust system repair and maintenance',
    icon: 'Thermometer',
    slug: 'radiator-exhaust',
  },
  {
    id: 'detailing',
    name: 'Car Polish & Seat Cleaning',
    nameAr: 'تلميع وتنظيف مقاعد السيارات',
    description: 'Professional car detailing and interior cleaning',
    icon: 'Sparkles',
    slug: 'detailing',
  },
]

export const serviceDetails: Record<string, any> = {
  'ecm-repair': {
    title: 'ECM / ECU Repair & Programming Dubai',
    description: 'Professional engine control module repair and programming services in Ras Al Khor, Dubai. We specialize in ECM diagnostics, repair, and reprogramming for all major vehicle brands including Tesla, BMW, Mercedes, and more.',
    whatIs: 'The Engine Control Module (ECM), also known as the ECU (Engine Control Unit), is the brain of your vehicle. It manages fuel injection, ignition timing, emissions, and countless other critical functions. When your ECM fails, your car may not start, run poorly, or trigger warning lights.',
    signs: [
      'Check engine light illuminated',
      'Engine won\'t start or starts intermittently',
      'Poor fuel economy or rough idle',
      'Loss of power or acceleration issues',
      'Transmission shifting problems',
    ],
    process: [
      { title: 'Diagnostic Scan', description: 'We perform a comprehensive diagnostic scan to identify ECM issues' },
      { title: 'Repair Assessment', description: 'Our technicians assess whether repair or replacement is needed' },
      { title: 'Repair/Programming', description: 'We repair or reprogram your ECM with latest software' },
      { title: 'Testing & Verification', description: 'Full testing ensures your vehicle runs perfectly' },
    ],
    faq: [
      {
        question: 'How much does ECM repair cost in Dubai?',
        answer: 'ECM repair typically ranges from AED 500–2,500 depending on the make and damage. We provide a free diagnostic check before quoting.',
      },
      {
        question: 'How long does ECM repair take?',
        answer: 'Most ECM repairs take 2-4 hours. Complex cases may take longer. We\'ll give you an accurate timeline after diagnosis.',
      },
      {
        question: 'Can you repair my specific car brand?',
        answer: 'Yes, we service 16+ major brands including Tesla, BMW, Mercedes, Audi, Toyota, Honda, Nissan, and more.',
      },
      {
        question: 'Is ECM repair covered by warranty?',
        answer: 'Yes, all our ECM repairs come with a 12-month warranty on parts and labor.',
      },
    ],
  },
  'hybrid-battery': {
    title: 'Hybrid Battery Repair & Replacement Dubai',
    description: 'Expert hybrid battery diagnostics, repair, and replacement for Tesla, BYD, Toyota, and all hybrid vehicles in Dubai.',
    whatIs: 'Hybrid batteries power the electric motor in hybrid and electric vehicles. They store energy from regenerative braking and power the vehicle at low speeds. When a hybrid battery fails, your vehicle loses efficiency or won\'t operate properly.',
    signs: [
      'Reduced fuel economy or electric range',
      'Battery warning light on dashboard',
      'Vehicle won\'t switch to electric mode',
      'Slow acceleration or power loss',
      'Battery not charging properly',
    ],
    process: [
      { title: 'Battery Diagnostics', description: 'We test battery health, voltage, and capacity' },
      { title: 'Repair or Replace', description: 'We repair or replace the battery based on diagnosis' },
      { title: 'System Integration', description: 'We reprogram the vehicle\'s hybrid system' },
      { title: 'Performance Testing', description: 'Full testing ensures optimal hybrid performance' },
    ],
    faq: [
      {
        question: 'How much does hybrid battery replacement cost?',
        answer: 'Hybrid battery replacement ranges from AED 3,000–8,000 depending on the vehicle. Tesla and BYD batteries may vary.',
      },
      {
        question: 'How long does a hybrid battery last?',
        answer: 'Most hybrid batteries last 8-10 years or 160,000+ km. We can extend battery life with proper maintenance.',
      },
      {
        question: 'Do you repair Tesla batteries?',
        answer: 'Yes, we specialize in Tesla battery diagnostics, repair, and replacement with certified technicians.',
      },
      {
        question: 'Is hybrid battery repair cheaper than replacement?',
        answer: 'Sometimes. We diagnose the issue first and recommend the most cost-effective solution.',
      },
    ],
  },
  'car-programming': {
    title: 'Car Programming Dubai | ECU, Gear & Online Programming',
    description: 'Advanced car programming services including ECU tuning, gear programming, and online programming in Ras Al Khor, Dubai.',
    whatIs: 'Car programming involves updating or modifying your vehicle\'s software to improve performance, fix issues, or add features. This includes ECU tuning, gear programming, ABS programming, and online programming for modern vehicles.',
    signs: [
      'Need performance tuning or optimization',
      'Transmission shifting issues',
      'Need to reprogram after repairs',
      'Want to unlock vehicle features',
      'Require online programming updates',
    ],
    process: [
      { title: 'Vehicle Assessment', description: 'We assess your vehicle\'s current programming' },
      { title: 'Programming Selection', description: 'We select the appropriate programming for your needs' },
      { title: 'Software Upload', description: 'We upload the new software to your vehicle\'s modules' },
      { title: 'Verification', description: 'We verify all systems work correctly after programming' },
    ],
    faq: [
      {
        question: 'What is ECU tuning?',
        answer: 'ECU tuning optimizes your engine\'s performance by adjusting fuel injection, ignition timing, and boost pressure for better power and efficiency.',
      },
      {
        question: 'Is car programming safe?',
        answer: 'Yes, when done by certified technicians using proper equipment. We use OEM-approved programming methods.',
      },
      {
        question: 'How much does car programming cost?',
        answer: 'Car programming ranges from AED 500–2,000 depending on the type and complexity.',
      },
      {
        question: 'Can you program online?',
        answer: 'Yes, we offer online programming for compatible vehicles. Contact us for details.',
      },
    ],
  },
  'abs-airbag': {
    title: 'Airbag & ABS Repair Dubai | Safety System Specialists',
    description: 'Expert airbag and ABS system diagnostics, repair, and programming for all vehicle brands in Dubai.',
    whatIs: 'Airbag and ABS (Anti-lock Braking System) are critical safety systems. Airbags protect occupants during collisions, while ABS prevents wheel lockup during emergency braking. Both systems require specialized diagnostic equipment and expertise to repair.',
    signs: [
      'Airbag warning light on dashboard',
      'ABS warning light illuminated',
      'Brakes locking up during emergency stops',
      'Airbag not deploying in accidents',
      'Seatbelt pretensioner issues',
    ],
    process: [
      { title: 'Safety System Scan', description: 'We perform comprehensive diagnostic scan of airbag and ABS modules' },
      { title: 'Component Testing', description: 'We test sensors, wiring, and control modules' },
      { title: 'Repair or Replacement', description: 'We repair or replace faulty components' },
      { title: 'System Verification', description: 'We verify all safety systems function correctly' },
    ],
    faq: [
      {
        question: 'Is it safe to drive with airbag warning light on?',
        answer: 'No, you should not drive with airbag warning light on. Bring your vehicle in immediately for diagnosis.',
      },
      {
        question: 'How much does airbag repair cost?',
        answer: 'Airbag repair typically costs AED 800–3,000 depending on the issue and vehicle type.',
      },
      {
        question: 'Can you repair ABS systems?',
        answer: 'Yes, we specialize in ABS diagnostics, repair, and reprogramming for all major brands.',
      },
      {
        question: 'Do you replace airbag modules?',
        answer: 'Yes, we replace faulty airbag modules and reprogram them for your specific vehicle.',
      },
    ],
  },
  'ac-repair': {
    title: 'Car AC Repair Dubai | Air Conditioning Services',
    description: 'Professional car air conditioning repair, maintenance, and recharging services in Ras Al Khor, Dubai.',
    whatIs: 'Your car\'s air conditioning system keeps you cool and comfortable. It works by circulating refrigerant through compressors, condensers, and evaporators. When AC fails, it\'s usually due to refrigerant leaks, compressor failure, or electrical issues.',
    signs: [
      'AC not blowing cold air',
      'Weak airflow from vents',
      'Strange noises from AC compressor',
      'Refrigerant leaks',
      'AC only works intermittently',
    ],
    process: [
      { title: 'AC System Inspection', description: 'We inspect hoses, compressor, and condenser' },
      { title: 'Leak Detection', description: 'We identify any refrigerant leaks' },
      { title: 'Repair or Recharge', description: 'We repair leaks or recharge the system' },
      { title: 'Performance Testing', description: 'We test AC performance and temperature output' },
    ],
    faq: [
      {
        question: 'How much does AC recharge cost?',
        answer: 'AC recharge typically costs AED 300–600 depending on refrigerant type.',
      },
      {
        question: 'How often should I recharge my AC?',
        answer: 'Most vehicles need AC recharge every 2-3 years or when performance drops.',
      },
      {
        question: 'Why is my AC leaking?',
        answer: 'AC leaks are usually caused by worn seals, damaged hoses, or compressor issues. We can identify and fix the source.',
      },
      {
        question: 'Can you repair AC compressors?',
        answer: 'Yes, we repair or replace AC compressors depending on the damage.',
      },
    ],
  },
  'general-repair': {
    title: 'General Mechanical Repair Dubai | Vehicle Maintenance',
    description: 'Comprehensive general mechanical repair and maintenance services for all vehicle types in Dubai.',
    whatIs: 'General mechanical repair covers routine maintenance and repairs to keep your vehicle running smoothly. This includes engine work, suspension repairs, brake service, and other mechanical systems.',
    signs: [
      'Strange noises from engine or suspension',
      'Difficulty starting the vehicle',
      'Vibration or pulling to one side',
      'Fluid leaks under the vehicle',
      'Reduced performance or acceleration',
    ],
    process: [
      { title: 'Vehicle Inspection', description: 'We perform comprehensive vehicle inspection' },
      { title: 'Diagnosis', description: 'We identify mechanical issues and problems' },
      { title: 'Repair', description: 'We perform necessary repairs using quality parts' },
      { title: 'Testing', description: 'We test all systems to ensure proper operation' },
    ],
    faq: [
      {
        question: 'How often should I service my vehicle?',
        answer: 'Most vehicles need service every 10,000 km or 6 months, whichever comes first.',
      },
      {
        question: 'What\'s included in a general service?',
        answer: 'General service includes oil change, filter replacement, fluid checks, and inspection.',
      },
      {
        question: 'How much does general repair cost?',
        answer: 'General repair costs vary depending on the issue. We provide free diagnostics and quotes.',
      },
      {
        question: 'Do you use genuine parts?',
        answer: 'Yes, we use genuine OEM parts and quality aftermarket parts for all repairs.',
      },
    ],
  },
  'electrical-repair': {
    title: 'Electrical Repair Dubai | Vehicle Electrical Systems',
    description: 'Expert electrical system diagnostics, repair, and troubleshooting for all vehicle brands.',
    whatIs: 'Your vehicle\'s electrical system powers everything from the engine to the lights. Electrical problems can range from simple battery issues to complex wiring and module failures.',
    signs: [
      'Battery not holding charge',
      'Alternator not charging properly',
      'Electrical components not working',
      'Dashboard warning lights',
      'Starting problems or clicking sounds',
    ],
    process: [
      { title: 'Electrical Diagnosis', description: 'We test battery, alternator, and electrical circuits' },
      { title: 'Component Testing', description: 'We identify faulty electrical components' },
      { title: 'Repair or Replacement', description: 'We repair wiring or replace faulty components' },
      { title: 'System Verification', description: 'We verify all electrical systems work correctly' },
    ],
    faq: [
      {
        question: 'How much does battery replacement cost?',
        answer: 'Battery replacement typically costs AED 400–1,000 depending on battery type and vehicle.',
      },
      {
        question: 'How do I know if my alternator is failing?',
        answer: 'Signs include dim lights, battery warning light, or difficulty starting. We can test your alternator.',
      },
      {
        question: 'Can you repair electrical wiring?',
        answer: 'Yes, we repair damaged wiring, connectors, and electrical harnesses.',
      },
      {
        question: 'How much does electrical repair cost?',
        answer: 'Electrical repair costs vary. We provide free diagnostics and accurate quotes.',
      },
    ],
  },
  'body-painting': {
    title: 'Denting, Painting & Body Work Dubai | Professional Services',
    description: 'Professional body work, denting repair, and painting services for all vehicle types.',
    whatIs: 'Body work includes dent removal, panel replacement, and painting. Our technicians use modern equipment and high-quality materials to restore your vehicle\'s appearance.',
    signs: [
      'Dents or dings in body panels',
      'Paint damage or scratches',
      'Rust or corrosion on body',
      'Misaligned panels or doors',
      'Accident damage requiring repair',
    ],
    process: [
      { title: 'Damage Assessment', description: 'We assess the extent of body damage' },
      { title: 'Dent Removal', description: 'We remove dents using specialized techniques' },
      { title: 'Painting', description: 'We apply primer, base coat, and clear coat' },
      { title: 'Quality Check', description: 'We inspect finish and ensure color match' },
    ],
    faq: [
      {
        question: 'How much does dent removal cost?',
        answer: 'Dent removal typically costs AED 300–1,500 depending on size and location.',
      },
      {
        question: 'How long does painting take?',
        answer: 'Painting typically takes 2-5 days depending on damage extent and paint type.',
      },
      {
        question: 'Do you match original paint color?',
        answer: 'Yes, we use color matching technology to ensure perfect color match.',
      },
      {
        question: 'Is the paint warranty covered?',
        answer: 'Yes, all our painting work comes with a 2-year warranty.',
      },
    ],
  },
  'tyres': {
    title: 'Tyre Fitting & Repair Dubai | Professional Tyre Services',
    description: 'Professional tyre fitting, repair, balancing, and alignment services for all vehicles.',
    whatIs: 'Tyres are critical for safety and performance. We provide tyre fitting, repair, balancing, and wheel alignment services using modern equipment.',
    signs: [
      'Uneven tyre wear',
      'Tyre punctures or damage',
      'Vibration while driving',
      'Vehicle pulling to one side',
      'Worn tread depth',
    ],
    process: [
      { title: 'Tyre Inspection', description: 'We inspect tyres for damage and wear' },
      { title: 'Fitting or Repair', description: 'We fit new tyres or repair punctures' },
      { title: 'Balancing', description: 'We balance tyres for smooth driving' },
      { title: 'Alignment', description: 'We perform wheel alignment if needed' },
    ],
    faq: [
      {
        question: 'How much does tyre fitting cost?',
        answer: 'Tyre fitting typically costs AED 50–150 per tyre depending on size.',
      },
      {
        question: 'How often should I rotate tyres?',
        answer: 'Rotate tyres every 10,000 km to ensure even wear.',
      },
      {
        question: 'Can you repair tyre punctures?',
        answer: 'Yes, we repair punctures if damage is in the tread area. Sidewall damage requires replacement.',
      },
      {
        question: 'Do you offer tyre warranty?',
        answer: 'Yes, we offer warranty on all tyres we sell and fit.',
      },
    ],
  },
  'oil-change': {
    title: 'Oil Change Dubai | Vehicle Maintenance Service',
    description: 'Professional oil change and fluid maintenance services for all vehicle types.',
    whatIs: 'Regular oil changes keep your engine running smoothly and extend engine life. We use quality oils and filters appropriate for your vehicle.',
    signs: [
      'Oil change warning light on dashboard',
      'Dark or dirty oil on dipstick',
      'Engine running rough or noisy',
      'Reduced fuel economy',
      'Overdue for scheduled maintenance',
    ],
    process: [
      { title: 'Oil Drain', description: 'We drain old oil and dispose of it properly' },
      { title: 'Filter Replacement', description: 'We replace oil filter with quality filter' },
      { title: 'New Oil Fill', description: 'We fill with recommended oil type and grade' },
      { title: 'System Check', description: 'We check all fluid levels and top up as needed' },
    ],
    faq: [
      {
        question: 'How often should I change oil?',
        answer: 'Most vehicles need oil change every 5,000–10,000 km depending on oil type.',
      },
      {
        question: 'What\'s the difference between synthetic and conventional oil?',
        answer: 'Synthetic oil lasts longer and provides better protection. Conventional oil is more affordable.',
      },
      {
        question: 'How much does oil change cost?',
        answer: 'Oil change typically costs AED 150–400 depending on oil type and vehicle.',
      },
      {
        question: 'Do you check other fluids during oil change?',
        answer: 'Yes, we check and top up coolant, brake fluid, and other essential fluids.',
      },
    ],
  },
  'radiator-exhaust': {
    title: 'Radiator, Exhaust & Coolant Dubai | Cooling System Repair',
    description: 'Professional radiator repair, exhaust system service, and coolant maintenance.',
    whatIs: 'Your radiator cools the engine, while the exhaust system removes harmful gases. Both systems are critical for engine health and environmental compliance.',
    signs: [
      'Engine overheating',
      'Coolant leaks under vehicle',
      'Rust or corrosion on radiator',
      'Loud exhaust noise',
      'Exhaust smoke or fumes',
    ],
    process: [
      { title: 'System Inspection', description: 'We inspect radiator, hoses, and exhaust system' },
      { title: 'Leak Detection', description: 'We identify coolant leaks or exhaust issues' },
      { title: 'Repair or Replacement', description: 'We repair or replace damaged components' },
      { title: 'Performance Test', description: 'We test cooling and exhaust system performance' },
    ],
    faq: [
      {
        question: 'How much does radiator repair cost?',
        answer: 'Radiator repair typically costs AED 500–2,000 depending on damage.',
      },
      {
        question: 'How often should I flush coolant?',
        answer: 'Coolant flush is recommended every 2 years or 40,000 km.',
      },
      {
        question: 'Can you repair exhaust leaks?',
        answer: 'Yes, we repair or replace exhaust pipes, mufflers, and catalytic converters.',
      },
      {
        question: 'What causes radiator leaks?',
        answer: 'Leaks are usually caused by corrosion, damaged hoses, or faulty seals.',
      },
    ],
  },
  'detailing': {
    title: 'Car Polish & Seat Cleaning Dubai | Professional Detailing',
    description: 'Professional car detailing, polishing, and interior cleaning services.',
    whatIs: 'Car detailing involves deep cleaning and protection of your vehicle\'s exterior and interior. Professional detailing preserves your vehicle\'s value and appearance.',
    signs: [
      'Dull or oxidized paint',
      'Dirty or stained interior',
      'Water spots on windows',
      'Worn leather seats',
      'General lack of shine',
    ],
    process: [
      { title: 'Exterior Wash', description: 'We wash and dry the entire exterior' },
      { title: 'Polishing', description: 'We polish paint to restore shine and remove oxidation' },
      { title: 'Interior Cleaning', description: 'We vacuum, clean, and condition interior' },
      { title: 'Protection', description: 'We apply wax or ceramic coating for protection' },
    ],
    faq: [
      {
        question: 'How much does car detailing cost?',
        answer: 'Car detailing typically costs AED 400–1,500 depending on vehicle size and condition.',
      },
      {
        question: 'How often should I detail my car?',
        answer: 'Professional detailing is recommended every 6 months to maintain appearance.',
      },
      {
        question: 'Do you offer ceramic coating?',
        answer: 'Yes, we offer ceramic coating for long-lasting paint protection.',
      },
      {
        question: 'Can you clean leather seats?',
        answer: 'Yes, we specialize in leather cleaning and conditioning.',
      },
    ],
  },
}
