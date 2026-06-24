'use client'

import { useEffect, useState } from 'react'
import { Star } from 'lucide-react'
import { createClient } from '@/lib/supabase/client'

interface Review {
  id: string
  name: string
  country?: string
  rating: number
  comment: string
  service?: string
  created_at: string
}

export function ReviewsDisplay() {
  const [reviews, setReviews] = useState<Review[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const supabase = createClient()
        const { data, error } = await supabase
          .from('reviews')
          .select('*')
          .order('created_at', { ascending: false })
          .limit(6)

        if (error) {
          console.log('[v0] Error fetching reviews:', error)
          return
        }

        setReviews(data || [])
      } catch (error) {
        console.log('[v0] Error:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchReviews()
  }, [])

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map(star => (
          <Star
            key={star}
            size={16}
            className={rating >= star ? 'fill-accent text-accent' : 'text-gray-300'}
          />
        ))}
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map(i => (
          <div key={i} className="bg-gray-200 rounded-lg h-64 animate-pulse" />
        ))}
      </div>
    )
  }

  if (reviews.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">No reviews yet. Be the first to share your experience!</p>
      </div>
    )
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {reviews.map(review => (
        <div key={review.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
          <div className="flex justify-between items-start mb-3">
            <div>
              <h4 className="font-semibold text-primary">{review.name}</h4>
              {review.country && (
                <p className="text-sm text-muted-foreground">{review.country}</p>
              )}
            </div>
            {renderStars(review.rating)}
          </div>

          {review.service && (
            <p className="text-sm text-accent font-medium mb-2">{review.service}</p>
          )}

          <p className="text-gray-700 mb-3 line-clamp-3">{review.comment}</p>

          <p className="text-xs text-muted-foreground">
            {new Date(review.created_at).toLocaleDateString('en-US')}
          </p>
        </div>
      ))}
    </div>
  )
}
