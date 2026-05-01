-- CreateTable
CREATE TABLE "site_settings" (
    "id" TEXT NOT NULL,
    "phone" TEXT NOT NULL DEFAULT '+971 55 476 2284',
    "whatsapp" TEXT NOT NULL DEFAULT 'https://wa.me/971554762284',
    "email" TEXT NOT NULL DEFAULT 'info@wmk.ae',
    "address" TEXT NOT NULL DEFAULT '18 Street, Ras Al Khor Industrial Area 2, Dubai, UAE',
    "addressAr" TEXT NOT NULL DEFAULT 'شارع 18، منطقة راس الخور الصناعية 2، دبي، الإمارات',
    "hours" TEXT NOT NULL DEFAULT 'Saturday–Thursday: 08:00–22:00 (Closed Friday)',
    "latitude" TEXT NOT NULL DEFAULT '25.1972',
    "longitude" TEXT NOT NULL DEFAULT '55.3586',
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "site_settings_pkey" PRIMARY KEY ("id")
);
