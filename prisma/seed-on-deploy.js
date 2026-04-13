import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seedBlogPosts() {
  try {
    // Check if blog posts already exist
    let existingPosts = 0;
    try {
      existingPosts = await prisma.blogPost.count();
    } catch (error) {
      console.log('Database not yet initialized, proceeding with seed...');
    }

    if (existingPosts > 0) {
      console.log('Blog posts already seeded, skipping...');
      return;
    }

    console.log('Seeding blog posts...');

    const blogPosts = [
      {
        title: 'ECM Repair: What You Need to Know',
        slug: 'ecm-repair-guide',
        excerpt: 'Learn everything about ECM repair and why it\'s crucial for your vehicle',
        content: 'ECM (Engine Control Module) is the brain of your vehicle. When it malfunctions, your car may experience various issues including poor fuel economy, rough idling, and warning lights. Our expert technicians can diagnose and repair ECM issues quickly and efficiently. The ECM controls fuel injection, ignition timing, and emission systems. A faulty ECM can result in reduced performance and increased fuel consumption.',
        category: 'ECM Tips',
        published: true,
      },
      {
        title: 'Hybrid Battery Maintenance Tips',
        slug: 'hybrid-battery-maintenance',
        excerpt: 'Keep your hybrid battery in top condition with these maintenance tips',
        content: 'Hybrid batteries require special care to maintain optimal performance. Regular maintenance can extend the life of your battery and improve fuel efficiency. We recommend checking your battery health every 6 months. Avoid extreme temperatures and keep your vehicle regularly serviced. Proper maintenance can extend hybrid battery life to 10+ years.',
        category: 'Hybrid Battery',
        published: true,
      },
      {
        title: 'Why Online Car Programming is Safe',
        slug: 'online-car-programming-safe',
        excerpt: 'Discover why online car programming is a secure and reliable solution',
        content: 'Online car programming uses encrypted connections and secure protocols to ensure your vehicle data is protected. Our certified technicians follow industry standards to guarantee safe and reliable programming. We use industry-leading diagnostic tools and secure communication channels.',
        category: 'News',
        published: true,
      },
      {
        title: 'ABS Warning Light: What It Means',
        slug: 'abs-warning-light-meaning',
        excerpt: 'Understanding your ABS warning light and when to seek professional help',
        content: 'The ABS (Anti-lock Braking System) warning light indicates a problem with your braking system. This could range from a faulty sensor to a malfunctioning ABS module. Do not ignore this warning as it affects your vehicle\'s safety. Our technicians can diagnose and repair ABS issues quickly.',
        category: 'Maintenance',
        published: true,
      },
      {
        title: 'Tesla Repair in Dubai: Complete Guide',
        slug: 'tesla-repair-dubai-guide',
        excerpt: 'Everything you need to know about Tesla repair and maintenance in Dubai',
        content: 'Tesla vehicles require specialized knowledge and equipment for proper repair and maintenance. WMK has certified technicians trained in Tesla diagnostics and repair. We handle everything from battery issues to software updates. Our facility is equipped with the latest Tesla diagnostic tools.',
        category: 'News',
        published: true,
      },
      {
        title: 'BYD Battery Replacement: Cost & Timeline',
        slug: 'byd-battery-replacement-cost',
        excerpt: 'Learn about BYD battery replacement costs and how long the process takes',
        content: 'BYD battery replacement is a significant investment but essential for vehicle longevity. The cost varies depending on the model and battery capacity. Replacement typically takes 2-3 days. We offer competitive pricing and warranty on all battery replacements.',
        category: 'Hybrid Battery',
        published: true,
      },
      {
        title: 'Gear Programming: FAQ',
        slug: 'gear-programming-faq',
        excerpt: 'Frequently asked questions about car gear programming',
        content: 'Gear programming involves reprogramming your vehicle\'s transmission control module. This is necessary after transmission repairs or replacements. The process requires specialized equipment and expertise. Our technicians are certified in gear programming for all major brands.',
        category: 'ECM Tips',
        published: true,
      },
      {
        title: 'Car AC Repair: Common Issues',
        slug: 'car-ac-repair-common-issues',
        excerpt: 'Discover the most common car AC problems and how to fix them',
        content: 'Common car AC issues include refrigerant leaks, compressor failure, and electrical problems. Regular maintenance can prevent most AC issues. If your AC is not cooling properly, bring it in for diagnosis. We can identify and fix AC problems quickly.',
        category: 'Maintenance',
        published: true,
      },
      {
        title: 'Electrical Repair: Symptoms & Solutions',
        slug: 'electrical-repair-symptoms',
        excerpt: 'Identify electrical problems in your vehicle and get them fixed',
        content: 'Electrical issues can manifest as warning lights, battery drain, or component failures. Common causes include faulty alternators, bad batteries, or wiring issues. Our technicians use advanced diagnostic equipment to identify electrical problems accurately.',
        category: 'Maintenance',
        published: true,
      },
      {
        title: 'Body Work & Painting: Process Explained',
        slug: 'body-work-painting-process',
        excerpt: 'Learn about our professional body work and painting services',
        content: 'Professional body work and painting requires skill and precision. We use high-quality materials and modern equipment for flawless results. Our process includes damage assessment, repair, priming, and multi-layer painting for durability.',
        category: 'News',
        published: true,
      },
      {
        title: 'Tyre Fitting: Best Practices',
        slug: 'tyre-fitting-best-practices',
        excerpt: 'Everything you need to know about proper tyre fitting and maintenance',
        content: 'Proper tyre fitting is crucial for vehicle safety and performance. We use modern equipment to ensure precise alignment and balance. Regular tyre maintenance extends tyre life and improves fuel efficiency.',
        category: 'Maintenance',
        published: true,
      },
      {
        title: 'Oil Change: Frequency & Benefits',
        slug: 'oil-change-frequency-benefits',
        excerpt: 'Why regular oil changes are essential for your vehicle',
        content: 'Regular oil changes keep your engine running smoothly and extend engine life. We recommend oil changes every 5,000-10,000 km depending on your vehicle. Fresh oil improves engine performance and fuel efficiency.',
        category: 'Maintenance',
        published: true,
      },
      {
        title: 'Radiator Repair: Signs of Failure',
        slug: 'radiator-repair-signs',
        excerpt: 'Recognize radiator problems before they become serious',
        content: 'Signs of radiator failure include overheating, coolant leaks, and discolored coolant. A failing radiator can cause engine damage if not addressed quickly. Our technicians can repair or replace radiators efficiently.',
        category: 'Maintenance',
        published: true,
      },
      {
        title: 'Car Detailing: DIY vs. Professional',
        slug: 'car-detailing-diy-vs-professional',
        excerpt: 'Compare DIY car detailing with professional services',
        content: 'Professional car detailing provides superior results compared to DIY methods. We use specialized equipment and high-quality products for deep cleaning and protection. Professional detailing preserves your vehicle\'s value and appearance.',
        category: 'News',
        published: true,
      },
      {
        title: 'WMK Workshop Tour: Behind the Scenes',
        slug: 'wmk-workshop-tour',
        excerpt: 'Take a virtual tour of our state-of-the-art workshop facility',
        content: 'Our workshop is equipped with the latest diagnostic and repair equipment. We maintain the highest standards of cleanliness and organization. Our team of certified technicians works in a professional environment to ensure quality service.',
        category: 'News',
        published: true,
      },
    ];

    for (const post of blogPosts) {
      await prisma.blogPost.upsert({
        where: { slug: post.slug },
        update: {},
        create: {
          ...post,
          author: 'WMK Team',
          publishedAt: new Date(),
        },
      });
    }

    console.log('Blog posts seeded successfully');
  } catch (error) {
    console.error('Error seeding blog posts:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

seedBlogPosts();
