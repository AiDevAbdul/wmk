import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

async function main() {
  console.log("Seeding database...");

  // Create admin user with strong password
  const hashedPassword = await bcrypt.hash("WMK@Admin2024!", 10);
  const adminUser = await prisma.adminUser.upsert({
    where: { email: "admin@wmk.ae" },
    update: { password: hashedPassword },
    create: {
      email: "admin@wmk.ae",
      password: hashedPassword,
      role: "admin",
    },
  });
  console.log("Admin user created:", adminUser.email);

  // Seed blog posts
  const blogPosts = [
    {
      title: "Understanding ECM Repair: A Complete Guide",
      slug: "understanding-ecm-repair",
      excerpt: "Learn what ECM repair is, why it matters, and how our experts fix engine control modules.",
      content: `# Understanding ECM Repair

Engine Control Modules (ECM) are the brain of your vehicle. They manage fuel injection, ignition timing, and emissions control.

## Common ECM Issues
- Check engine light
- Poor fuel economy
- Starting problems
- Rough idle

## Our Repair Process
1. Diagnostic scanning
2. Component testing
3. Repair or replacement
4. Reprogramming
5. Final testing

Trust WMK for professional ECM repair services.`,
      category: "ECM Tips",
      author: "WMK Team",
      published: true,
      publishedAt: new Date("2026-01-20"),
    },
    {
      title: "Hybrid Battery Maintenance Tips",
      slug: "hybrid-battery-maintenance",
      excerpt: "Keep your hybrid battery in top condition with these essential maintenance tips.",
      content: `# Hybrid Battery Maintenance

Hybrid batteries require special care to maintain optimal performance and longevity.

## Key Maintenance Tips
- Regular diagnostic checks
- Keep battery cool
- Avoid extreme temperatures
- Monitor battery health

## Warning Signs
- Reduced fuel economy
- Battery warning light
- Weak acceleration

Contact WMK for professional hybrid battery services.`,
      category: "Hybrid Battery",
      author: "WMK Team",
      published: true,
      publishedAt: new Date("2026-01-05"),
    },
    {
      title: "Car Programming: What You Need to Know",
      slug: "car-programming-guide",
      excerpt: "Discover the importance of car programming and how it affects your vehicle's performance.",
      content: `# Car Programming Guide

Modern vehicles require precise programming for optimal performance and safety.

## Types of Programming
- ECU tuning
- Key programming
- Module reprogramming
- Software updates

## Benefits
- Improved performance
- Better fuel economy
- Enhanced reliability
- Compliance with standards

WMK specializes in all types of car programming.`,
      category: "ECM Tips",
      author: "WMK Team",
      published: true,
      publishedAt: new Date("2025-12-18"),
    },
    {
      title: "Regular Maintenance: The Key to Vehicle Longevity",
      slug: "regular-maintenance-guide",
      excerpt: "Understand why regular maintenance is crucial for your vehicle's health and performance.",
      content: `# Regular Maintenance Guide

Regular maintenance prevents costly repairs and keeps your vehicle running smoothly.

## Essential Maintenance Tasks
- Oil changes
- Filter replacements
- Fluid checks
- Brake inspection
- Tire rotation

## Maintenance Schedule
Follow your manufacturer's recommended schedule for best results.

Visit WMK for comprehensive maintenance services.`,
      category: "Maintenance",
      author: "WMK Team",
      published: true,
      publishedAt: new Date("2025-12-01"),
    },
    {
      title: "ECU Repair vs Replacement: Which Is Right for Your Car?",
      slug: "ecu-repair-vs-replacement",
      excerpt: "Not every faulty ECU needs to be replaced. Learn when repair is the smarter, more affordable choice.",
      content: `# ECU Repair vs Replacement: Which Is Right for Your Car?

When your Engine Control Unit (ECU) fails, you face a critical decision: repair or replace? Understanding the difference can save you thousands of dirhams.

## When to Repair

Repair is typically the better option when:
- The ECU has suffered water damage or corrosion
- Specific components like capacitors or transistors have failed
- The unit has power-supply faults
- Software corruption is the root cause

Our technicians disassemble the unit, identify the faulty component at the board level, replace it, and re-flash the software — all at a fraction of replacement cost.

## When to Replace

Replacement makes sense when:
- Physical damage is too extensive to repair
- The ECU has failed multiple times
- The unit is no longer manufactured and no donor board is available

## Cost Comparison in the UAE

| Option | Typical Cost |
|--------|-------------|
| ECU Repair | AED 300 – 800 |
| OEM Replacement | AED 2,000 – 8,000 |
| Aftermarket Replacement | AED 800 – 2,500 |

In the majority of cases, WMK's repair service restores full functionality at 20–30% of replacement cost.

## Our Guarantee

Every repaired ECU is bench-tested before installation and carries a 6-month warranty on the repair work.

Contact WMK in Ras Al Khor, Dubai for a free diagnostic assessment.`,
      category: "ECM Tips",
      author: "WMK Team",
      published: true,
      publishedAt: new Date("2025-11-10"),
    },
    {
      title: "How Dubai's Heat Affects Your Car's Computer Systems",
      slug: "dubai-heat-car-computer-systems",
      excerpt: "Extreme temperatures in the UAE accelerate wear on ECUs and control modules. Here's what to watch for.",
      content: `# How Dubai's Heat Affects Your Car's Computer Systems

Dubai's summer temperatures regularly exceed 45°C, and under a car bonnet the temperature can climb well above 80°C. This extreme heat has a direct and damaging effect on the electronic control units (ECUs) that run modern vehicles.

## Heat-Related ECU Failures

### Capacitor Degradation
Electrolytic capacitors are extremely sensitive to heat. High temperatures cause the electrolyte to evaporate, reducing capacitance and eventually causing complete failure.

### Solder Joint Cracking
Repeated thermal cycling — the car heating up and cooling down every day — causes micro-cracks in solder joints on the circuit board, leading to intermittent faults.

### Connector Corrosion
High humidity combined with heat accelerates oxidation of ECU connectors, causing poor electrical contact and phantom fault codes.

## Warning Signs in UAE Conditions

- Check engine light that appears only when the car is hot
- Random misfires that clear after the engine cools
- Intermittent no-start conditions in summer
- Erratic instrument cluster readings

## Preventive Steps

1. **Park in shade or a covered garage** whenever possible
2. **Have your ECU scanned annually** — catching early fault codes saves money
3. **Keep the engine bay clean** — dust and oil build-up trap heat around modules
4. **Check cooling system efficiency** — a failing coolant fan raises bay temperatures significantly

WMK Auto Repairing Garage specialises in heat-related ECU and module diagnostics. If your car is misbehaving in the Dubai summer, bring it to our Ras Al Khor workshop for a thorough inspection.`,
      category: "ECM Tips",
      author: "WMK Team",
      published: true,
      publishedAt: new Date("2025-10-15"),
    },
    {
      title: "Toyota & Lexus Hybrid Battery: Signs It's Time for Service",
      slug: "toyota-lexus-hybrid-battery-service",
      excerpt: "Toyota and Lexus hybrids are popular in the UAE. Know the warning signs before your hybrid battery fails completely.",
      content: `# Toyota & Lexus Hybrid Battery: Signs It's Time for Service

Toyota and Lexus hybrid vehicles dominate the UAE roads — from the Camry Hybrid to the Prius and Lexus ES 300h. Their high-voltage battery packs are engineered to last, but like all batteries they degrade over time, especially in harsh Gulf conditions.

## How the Hybrid Battery Works

The high-voltage (HV) battery pack consists of multiple individual cells or modules wired in series. When one or more cells weaken, the entire pack's performance drops. The Hybrid Control Module (HCM) monitors cell balance and will trigger warning lights when imbalance exceeds safe thresholds.

## Warning Signs

### Triangle Warning Light
The red triangle with an exclamation mark is the most urgent — it indicates the HV battery system needs immediate attention.

### Reduced Fuel Economy
If your Prius or Camry Hybrid suddenly returns noticeably worse fuel consumption, weak cells are the likely culprit.

### Frequent Engine Running
Hybrids should run silently on battery power at low speeds. If the petrol engine runs constantly, the battery may no longer hold sufficient charge.

### Sluggish Acceleration
Weak cells mean the battery cannot deliver peak power, resulting in noticeably slower throttle response.

## Our Service Options

| Service | What It Includes |
|---------|-----------------|
| Battery Diagnostic | Full cell voltage and capacity test |
| Cell Replacement | Replace only weak/failed cells — cost-effective |
| Full Pack Replacement | New or remanufactured pack installation |
| Battery Reconditioning | Deep cycling to recover lost capacity |

## Why Choose WMK

We carry specialist equipment for Toyota and Lexus HV systems, including cell-level testing and balancing tools. Our technicians are trained on the full HV safety protocol, so your car — and our team — stay safe throughout the repair.

Book a hybrid battery diagnostic at our Ras Al Khor, Dubai workshop today.`,
      category: "Hybrid Battery",
      author: "WMK Team",
      published: true,
      publishedAt: new Date("2025-09-20"),
    },
    {
      title: "Key Programming & Immobiliser Services in Dubai",
      slug: "key-programming-immobiliser-dubai",
      excerpt: "Lost your car key or need a spare? WMK programs keys and immobilisers for most vehicle makes in Dubai.",
      content: `# Key Programming & Immobiliser Services in Dubai

Modern car keys are not just metal blanks — they contain transponder chips and, in the case of smart keys, radio transmitters that communicate directly with your vehicle's immobiliser system. Losing a key or needing a spare requires specialist programming equipment, not just a locksmith.

## Types of Keys We Program

### Transponder Keys
The chip inside the key head is programmed to match your immobiliser. Without a matched transponder, the engine will crank but not start.

### Remote Central Locking Keys
Programmed to your car's Body Control Module (BCM) so the lock/unlock buttons work correctly.

### Smart Keys / Proximity Keys
Keyless entry and push-button start systems require the fob to be programmed to the vehicle's comfort access module.

### All-Keys-Lost Programming
If you have no working keys at all, we use advanced OBDII and direct module programming techniques to start from scratch.

## Vehicles We Cover

We programme keys for most makes popular in the UAE, including:
- Toyota / Lexus
- Nissan / Infiniti
- Mitsubishi
- Honda
- Hyundai / Kia
- Ford
- Chevrolet / GMC
- Land Rover / Range Rover

## Why Dealer Pricing Is Not Your Only Option

UAE dealerships typically charge AED 800–2,500 per key plus a lengthy wait. WMK provides the same OEM-level programming at competitive rates, usually completed the same day.

Call us on +971 55 476 2284 or visit our Ras Al Khor workshop — we'll get you back on the road quickly.`,
      category: "Car Programming",
      author: "WMK Team",
      published: true,
      publishedAt: new Date("2025-08-05"),
    },
    {
      title: "ABS Module Repair: What Causes It and How We Fix It",
      slug: "abs-module-repair",
      excerpt: "An ABS warning light doesn't always mean a new module. Learn how WMK diagnoses and repairs ABS units cost-effectively.",
      content: `# ABS Module Repair: What Causes It and How We Fix It

The Anti-lock Braking System (ABS) module is a safety-critical computer that prevents wheel lock-up during hard braking. When it fails, your ABS warning light illuminates and, on many vehicles, traction control and stability control are also disabled.

## Common Causes of ABS Module Failure

### Internal Pump Motor Failure
The hydraulic pump motor inside the ABS unit can seize or burn out, particularly in older vehicles. This is repairable in most cases.

### Corroded Circuit Board
Water ingress — often from a leaking brake reservoir or condensation — causes corrosion on the internal PCB, leading to communication errors with wheel speed sensors.

### Failed Relay or Solenoid
Individual solenoids that control hydraulic pressure can fail electrically, triggering fault codes without requiring a full unit replacement.

### Wheel Speed Sensor Issues
Sometimes the ABS module itself is fine, and the fault lies in a damaged or dirty wheel speed sensor. A full diagnostic distinguishes between the two.

## Our Diagnostic and Repair Process

1. **OBDII scan** — retrieve all ABS fault codes
2. **Live data monitoring** — check wheel speed sensor readings in real time
3. **Hydraulic pressure test** — verify pump and solenoid operation
4. **Board-level inspection** — visual and electrical testing of the ABS control unit
5. **Repair or rebuild** — replace faulty components at circuit board level
6. **Road test** — verify ABS engagement and clear all codes

## Cost Savings

A replacement OEM ABS module in the UAE typically costs AED 1,500–4,000. Our repair service resolves the majority of failures for AED 400–900, with a warranty included.

Visit WMK Auto Repairing Garage in Ras Al Khor, Dubai for ABS diagnostics and repair.`,
      category: "Maintenance",
      author: "WMK Team",
      published: true,
      publishedAt: new Date("2025-07-12"),
    },
    {
      title: "Transmission Control Module: Symptoms and Repair Guide",
      slug: "transmission-control-module-repair",
      excerpt: "Jerky gear changes or slipping transmission? Your TCM may be the cause. Learn the symptoms and solutions.",
      content: `# Transmission Control Module: Symptoms and Repair Guide

The Transmission Control Module (TCM) is the computer responsible for controlling automatic transmission shift points, torque converter lock-up, and shift quality. A faulty TCM can make your car feel unsafe to drive — but it's often repairable without replacing the entire transmission.

## What the TCM Does

The TCM receives data from:
- Vehicle speed sensor
- Throttle position sensor
- Engine RPM signal from the ECM
- Transmission fluid temperature sensor
- Gear selector position

It uses this data to decide when and how to shift gears, delivering smooth, efficient operation.

## Symptoms of a Failing TCM

### Harsh or Erratic Gear Changes
If the transmission slams into gear, hesitates between shifts, or hunts between gears, the TCM may be sending incorrect commands.

### Stuck in Limp Mode
When the TCM detects a fault, it often puts the transmission into "limp mode" — locking it in a single gear to allow safe driving to a workshop. This is a protective measure, not a transmission failure.

### Delayed Engagement
A long pause after selecting Drive or Reverse before the car moves is a classic TCM symptom.

### Check Engine / Transmission Warning Light
Fault codes in the P07xx range typically point to TCM or transmission solenoid issues.

## TCM Repair at WMK

We perform full TCM diagnostics using OEM-level scan tools, then assess whether the fault lies in:
- The TCM circuit board (repairable)
- Internal transmission solenoids (replacement parts)
- Wiring harness or connectors (repair/replace)

In many cases a TCM repair costs significantly less than a new unit, and we back all repairs with a warranty.

Bring your vehicle to WMK in Ras Al Khor, Dubai for a professional transmission system diagnosis.`,
      category: "ECM Tips",
      author: "WMK Team",
      published: true,
      publishedAt: new Date("2025-06-18"),
    },
    {
      title: "5 Reasons to Choose a Specialist Over a General Garage in Dubai",
      slug: "specialist-vs-general-garage-dubai",
      excerpt: "When your car's electronics need attention, a specialist workshop makes all the difference. Here's why.",
      content: `# 5 Reasons to Choose a Specialist Over a General Garage in Dubai

Dubai has thousands of car workshops, but not all of them are equipped — or qualified — to work on modern vehicle electronics. When your ECU, hybrid battery, or control module needs attention, choosing the right garage matters.

## 1. Specialist Diagnostic Equipment

Modern vehicles communicate through complex protocols (CAN, LIN, MOST). Diagnosing them properly requires OEM-grade scan tools, not generic code readers. Specialist workshops invest in brand-specific software (Toyota Techstream, Nissan Consult, GM GDS2) that general garages simply don't carry.

## 2. Component-Level Repair Capability

A general garage's default response to a failed ECU is to order a replacement. A specialist can test the unit at circuit board level, identify the faulty component, and repair it — saving you hundreds or thousands of dirhams.

## 3. High-Voltage Safety Training

Hybrid and electric vehicles carry battery packs at 200–650 volts. Working safely around HV systems requires formal training and insulated tooling. Sending your hybrid to an untrained workshop is a genuine safety risk.

## 4. Programming Expertise

Replacement modules must be programmed to your specific vehicle using its VIN, security codes, and calibration data. Without the right tools and knowledge, a new part simply won't work — or worse, will cause new faults.

## 5. Warranty on Electronic Repairs

Reputable specialist workshops stand behind their work with a written warranty. If an ECU we repaired fails again within the warranty period, we fix it at no charge.

---

WMK Auto Repairing Garage in Ras Al Khor, Dubai specialises in ECM/ECU repair, hybrid battery services, and car programming. Call us on +971 55 476 2284 to book your vehicle in today.`,
      category: "Maintenance",
      author: "WMK Team",
      published: true,
      publishedAt: new Date("2025-05-22"),
    },
  ];

  for (const post of blogPosts) {
    await prisma.blogPost.upsert({
      where: { slug: post.slug },
      update: post,
      create: post,
    });
  }

  console.log("Blog posts seeded");
  console.log("Database seeding completed!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
