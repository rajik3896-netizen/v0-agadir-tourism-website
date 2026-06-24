'use client'

import { useState } from 'react'
import { Star } from 'lucide-react'
import { createClient } from '@/lib/supabase/client'

export function ReviewForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    service: '',
    rating: 5,
    comment: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')
  const [submitError, setSubmitError] = useState('')

  const services = [
    'Airport Transfers',
    'Agadir City Tour',
    'Paradise Valley',
    'Crocodile Park',
    'Quad & Buggy Safari',
    'Jet-Ski Adventure',
    'Boat Trip',
    'Camel Ride & BBQ'
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')
    setSubmitError('')

    try {
      const supabase = createClient()
      const { error } = await supabase.from('reviews').insert([
        {
          name: formData.name,
          email: formData.email,
          country: formData.country,
          service: formData.service,
          rating: formData.rating,
          comment: formData.comment
        }
      ])

      if (error) {
        setSubmitError('An error occurred while submitting your review. Please try again.')
        return
      }

      setSubmitMessage('Thank you for your review! It will be displayed soon.')
      setFormData({
        name: '',
        email: '',
        country: '',
        service: '',
        rating: 5,
        comment: ''
      })
    } catch (error) {
      setSubmitError('An error occurred. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: name === 'rating' ? parseInt(value) : value
    }))
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h3 className="text-2xl font-bold text-primary mb-2">Share Your Review</h3>
      <p className="text-muted-foreground mb-6">Tell us about your experience</p>

      {submitMessage && (
        <div className="mb-4 p-4 bg-green-50 border border-green-200 text-green-700 rounded">
          {submitMessage}
        </div>
      )}

      {submitError && (
        <div className="mb-4 p-4 bg-red-50 border border-red-200 text-red-700 rounded">
          {submitError}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name *"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-accent"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address *"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-accent"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            name="country"
            placeholder="Country"
            value={formData.country}
            onChange={handleInputChange}
            className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-accent"
          />
          <select
            name="service"
            value={formData.service}
            onChange={handleInputChange}
            className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-accent"
          >
            <option value="">Select Service</option>
            {services.map(service => (
              <option key={service} value={service}>{service}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Rating *</label>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map(star => (
              <button
                key={star}
                type="button"
                onClick={() => setFormData(prev => ({ ...prev, rating: star }))}
                className="focus:outline-none transition-transform hover:scale-110"
              >
                <Star
                  size={32}
                  className={formData.rating >= star ? 'fill-accent text-accent' : 'text-gray-300'}
                />
              </button>
            ))}
          </div>
        </div>

        <textarea
          name="comment"
          placeholder="Your Review *"
          value={formData.comment}
          onChange={handleInputChange}
          required
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-accent resize-none"
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-accent text-white font-semibold py-3 rounded hover:opacity-90 disabled:opacity-50 transition"
        >
          {isSubmitting ? 'Submitting...' : 'Submit Review'}
        </button>
      </form>
    </div>
  )
}
