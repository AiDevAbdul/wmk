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
}
