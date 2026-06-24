'use client'

import { Star } from 'lucide-react'

interface Review {
  id: string
  name: string
  country: string
  rating: number
  comment: string
  date: string
  avatar?: string
}

const reviewsData: Review[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    country: 'United States',
    rating: 5,
    comment: 'Amazing experience! The team was incredibly professional and friendly. Our airport transfer was seamless and the driver was very knowledgeable about Agadir. Highly recommend!',
    date: '2 weeks ago',
    avatar: '👩‍🦱'
  },
  {
    id: '2',
    name: 'Mohamed Habib',
    country: 'Tunisia',
    rating: 5,
    comment: 'Paradise Valley tour was absolutely breathtaking! The swimming in turquoise pools and the tagine lunch were unforgettable. Best decision we made during our trip.',
    date: '1 week ago',
    avatar: '👨‍🦲'
  },
  {
    id: '3',
    name: 'Emma Mueller',
    country: 'Germany',
    rating: 5,
    comment: 'The boat trip was luxury and relaxation at its finest. The sunset views were stunning and the food was delicious. Our family loved every moment!',
    date: '3 days ago',
    avatar: '👩‍🦳'
  },
  {
    id: '4',
    name: 'Ahmad Al-Rashid',
    country: 'Saudi Arabia',
    rating: 5,
    comment: 'Perfect service from start to finish! The Quad Safari was thrilling and safe. The team took excellent care of us. Will definitely book again next time in Agadir.',
    date: '1 day ago',
    avatar: '👨‍💼'
  },
  {
    id: '5',
    name: 'Lucia Rossi',
    country: 'Italy',
    rating: 5,
    comment: 'Crocodile Park visit was educational and fun for the whole family. The staff was knowledgeable and the facilities were top-notch. Worth every euro!',
    date: '5 days ago',
    avatar: '👩‍🦱'
  },
  {
    id: '6',
    name: 'James Wilson',
    country: 'United Kingdom',
    rating: 5,
    comment: 'Jet-ski adventure exceeded all expectations! Thrilling, safe, and the instructors were excellent. The views of the Agadir coastline were spectacular!',
    date: '1 week ago',
    avatar: '👨‍🦱'
  }
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={16}
          className={i < rating ? 'fill-amber-400 text-amber-400' : 'text-gray-300'}
        />
      ))}
    </div>
  )
}

export function Reviews() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase text-primary bg-primary/10 rounded-full mb-4">
            Client Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4 text-balance">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Join thousands of satisfied travelers who have experienced the excellence of Tourisme Agadir.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reviewsData.map((review) => (
            <div
              key={review.id}
              className="flex flex-col p-6 bg-muted/50 rounded-xl border border-muted hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              {/* Rating Stars */}
              <div className="mb-3">
                <StarRating rating={review.rating} />
              </div>

              {/* Comment */}
              <p className="text-muted-foreground mb-4 flex-grow leading-relaxed">
                "{review.comment}"
              </p>

              {/* Client Info */}
              <div className="pt-4 border-t border-muted flex items-start gap-3">
                <div className="text-3xl mt-1">
                  {review.avatar}
                </div>
                <div className="flex-grow">
                  <p className="font-semibold text-foreground text-sm">
                    {review.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {review.country}
                  </p>
                  <p className="text-xs text-muted-foreground/60 mt-1">
                    {review.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 pt-12 border-t border-muted grid grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-3xl sm:text-4xl font-bold text-primary mb-2">
              1000+
            </p>
            <p className="text-muted-foreground font-medium">
              Happy Clients
            </p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-bold text-primary mb-2">
              4.9/5
            </p>
            <p className="text-muted-foreground font-medium">
              Average Rating
            </p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-bold text-primary mb-2">
              100%
            </p>
            <p className="text-muted-foreground font-medium">
              Satisfaction
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
