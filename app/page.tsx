import { Hero } from "@/components/hero"
import { BookingForm } from "@/components/booking-form"
import { ServiceCard } from "@/components/service-card"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ReviewForm } from "@/components/review-form"
import { ReviewsDisplay } from "@/components/reviews-display"

const servicesData = [
  {
    title: "Airport Transfers",
    description: "Don't worry about finding transportation upon arrival. We offer a professional and welcoming service; our driver will be waiting for you with a sign bearing your name. We guarantee a clean vehicle that will take you directly and safely to your hotel or accommodation.",
    mainImage: "https://i.postimg.cc/8CfXRDmJ/1000042906.jpg",
    galleryImages: [
      "https://i.postimg.cc/8CfXRDmJ/1000042906.jpg",
      "https://i.postimg.cc/VN0Zq1WS/1000042907.jpg"
    ],
    badge: "Popular",
    price: "20€"
  },
  {
    title: "Agadir City Tour",
    description: "Want to experience the real Agadir? Join us on a private, comprehensive tour that takes you back in time, from the city's rich history to its vibrant, modern present.",
    details: (
      <div className="space-y-3">
        <p className="font-semibold text-primary">What will you discover on this tour?</p>
        <div className="space-y-2 text-muted-foreground">
          <p><strong className="text-foreground">Agadir Oufella Kasba:</strong> The highest point in the city with breathtaking panoramic views.</p>
          <p><strong className="text-foreground">Souk El Had:</strong> One of Africa&apos;s largest markets with Moroccan spices and traditional crafts.</p>
          <p><strong className="text-foreground">Agadir Marina:</strong> Upscale marina with luxury yachts and international brands.</p>
          <p><strong className="text-foreground">Argan Oil Factory:</strong> Learn the secrets of extracting &quot;liquid gold&quot;.</p>
        </div>
      </div>
    ),
    mainImage: "https://i.postimg.cc/dtS94p1y/1000042833.jpg",
    galleryImages: [
      "https://i.postimg.cc/dtS94p1y/1000042833.jpg",
      "https://i.postimg.cc/bNFR3WJk/1000042834.jpg",
      "https://i.postimg.cc/tCmz2wT6/1000042835.jpg",
      "https://i.postimg.cc/xTFPthCH/1000042837.jpg"
    ],
    badge: "Best Seller",
    price: "40€"
  },
  {
    title: "Paradise Valley",
    description: "Enjoy a magical day away from the hustle and bustle of the city. We take you along the famous Honey Trail to natural waterways, where you can swim in turquoise rock pools and savor an authentic Moroccan tagine amidst breathtaking scenery.",
    mainImage: "https://i.postimg.cc/8zMrM0rk/image-2.jpg",
    galleryImages: [
      "https://i.postimg.cc/8zMrM0rk/image-2.jpg",
      "https://i.postimg.cc/RZKnKDnV/image-0.jpg",
      "https://i.postimg.cc/qvyCy5Cv/image-1.jpg",
      "https://i.postimg.cc/JzZBZ2Bn/image-3.jpg",
      "https://i.postimg.cc/Qd1W1yWB/image-4.jpg"
    ],
    badge: "Must Do",
    price: "75€"
  },
  {
    title: "Crocodile Park",
    description: "Discover the world of crocodiles in a safe and educational environment. A perfect family trip to one of Agadir's top attractions. Explore the botanical beauty of Crocoparc, home to over 300 Nile crocodiles.",
    mainImage: "https://i.postimg.cc/QdddxYk1/1000042954.jpg",
    galleryImages: [
      "https://i.postimg.cc/QdddxYk1/1000042954.jpg",
      "https://i.postimg.cc/K888vprL/1000042955.jpg",
      "https://i.postimg.cc/Pr4qHnZ2/1000042956.jpg"
    ],
    badge: "Family",
    price: "35€"
  },
  {
    title: "Quad & Buggy Safari",
    description: "Experience the thrill of driving amidst the sand dunes and along the beach! Looking for excitement? We offer a unique two-hour adventure across the golden sands. Includes exciting trails, authentic tea break with Moroccan sweets, and free transportation from your hotel.",
    mainImage: "https://i.postimg.cc/65cbSmDk/trashed-1776174572-BUGGY-ADVENTURE-06.jpg",
    galleryImages: [
      "https://i.postimg.cc/65cbSmDk/trashed-1776174572-BUGGY-ADVENTURE-06.jpg",
      "https://i.postimg.cc/15B7TjL2/trashed-1776174572-04.jpg"
    ],
    badge: "Adventure",
    price: "30€"
  },
  {
    title: "Jet-Ski Adventure",
    description: "30 minutes of pure excitement! Ready to ride the waves and feel the power of the engine beneath you? Enjoy a unique jet ski experience along the enchanting coastline of Agadir.",
    mainImage: "https://i.postimg.cc/xdfzZsVp/trashed-1776174573-agadir-plage-jetski-maroc.jpg",
    galleryImages: [
      "https://i.postimg.cc/xdfzZsVp/trashed-1776174573-agadir-plage-jetski-maroc.jpg"
    ],
    badge: "Thrill",
    price: "50€"
  },
  {
    title: "Boat Trip",
    description: "4 Hours of Luxury and Relaxation at Sea. Escape the city and enjoy a cruise combining sailing, swimming, and savoring delicious Moroccan cuisine amidst the azure waters of the Atlantic.",
    mainImage: "https://i.postimg.cc/x1c8hqsX/trashed-1776174573-1000043011.jpg",
    galleryImages: [
      "https://i.postimg.cc/x1c8hqsX/trashed-1776174573-1000043011.jpg",
      "https://i.postimg.cc/85yx2kXG/trashed-1776174573-1000043012.jpg",
      "https://i.postimg.cc/QdHCwV6H/trashed-1776174573-1000043013.jpg",
      "https://i.postimg.cc/gJM1CctW/trashed-1776174573-1000043014.jpg"
    ],
    badge: "Luxury",
    price: "45€"
  },
  {
    title: "Camel Ride & BBQ",
    description: "Experience the magic of an authentic Moroccan sunset. Tranquil and enchanting experience. Conclude your day with a traditional BBQ dinner under the stars.",
    details: (
      <div className="mt-2 p-3 bg-primary/5 rounded-lg border border-primary/10">
        <p className="font-semibold text-primary mb-2">Available Options:</p>
        <p className="text-muted-foreground">Sunset Tour (1h 15min) - 20€</p>
        <p className="text-muted-foreground">Complete Package (Tour + BBQ Dinner) - 25€</p>
      </div>
    ),
    mainImage: "https://i.postimg.cc/mgy4d44W/trashed-1776174571-1000042996.jpg",
    galleryImages: [
      "https://i.postimg.cc/mgy4d44W/trashed-1776174571-1000042996.jpg",
      "https://i.postimg.cc/3RsTXnGT/1000042997.jpg",
      "https://i.postimg.cc/nrqt0BKQ/1000042998.jpg",
      "https://i.postimg.cc/tJFH2Wdx/1000043001.jpg"
    ],
    badge: "Sunset",
    price: "20€"
  }
]

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Booking Form Section */}
      <section className="relative z-10 px-4 -mt-16 sm:-mt-20 lg:-mt-24 pb-16">
        <div className="max-w-xl mx-auto">
          <BookingForm />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase text-primary bg-primary/10 rounded-full mb-4">
              Our Services
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4 text-balance">
              Discover Unforgettable Experiences
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
              From thrilling adventures to peaceful escapes, we offer a curated selection of premium services to make your Agadir visit truly memorable.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {servicesData.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                details={service.details}
                mainImage={service.mainImage}
                galleryImages={service.galleryImages}
                badge={service.badge}
                price={service.price}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold font-serif text-center mb-2 text-primary">تقييمات عملائنا</h2>
          <p className="text-center text-muted-foreground mb-12">اقرأ ما يقوله عملاؤنا الراضون عن خدماتنا</p>
          
          <ReviewsDisplay />
        </div>
      </section>

      {/* Review Form Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <ReviewForm />
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <WhatsAppButton />

      {/* Footer */}
      <footer className="bg-foreground text-background py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-serif font-bold mb-4">Tourisme Agadir</h3>
              <p className="text-background/70 max-w-md">
                Your trusted partner for premium transfers and unforgettable activities in Agadir, Morocco.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Contact</h4>
              <p className="text-background/70">WhatsApp: +212 706 714 859</p>
              <p className="text-background/70">Location: Agadir, Morocco</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Services</h4>
              <p className="text-background/70">Airport Transfers</p>
              <p className="text-background/70">City Tours</p>
              <p className="text-background/70">Adventure Activities</p>
            </div>
          </div>
          <div className="pt-8 border-t border-background/20 text-center">
            <div className="flex items-center justify-center gap-2 text-background/60 text-sm">
              <span>© {new Date().getFullYear()} Tourisme Agadir</span>
              <span>•</span>
              <span>All rights reserved</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
