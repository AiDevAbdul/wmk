import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

async function main() {
  console.log("Seeding database...");

  // Create admin user with strong password
  const hashedPassword = await bcrypt.hash("WMK@Admin2024!", 10);
  const adminUser = await prisma.adminUser.upsert({
    where: { email: "admin@wmk.ae" },
    update: {},
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
      publishedAt: new Date(),
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
      publishedAt: new Date(),
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
      publishedAt: new Date(),
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
      publishedAt: new Date(),
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
