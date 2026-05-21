"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  details?: React.ReactNode
  mainImage: string
  galleryImages: string[]
  badge?: string
  price?: string
}

export function ServiceCard({ title, description, details, mainImage, galleryImages, badge, price }: ServiceCardProps) {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openLightbox = (img: string) => {
    const index = galleryImages.indexOf(img)
    setCurrentIndex(index >= 0 ? index : 0)
    setLightboxImage(img)
  }

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    const newIndex = (currentIndex + 1) % galleryImages.length
    setCurrentIndex(newIndex)
    setLightboxImage(galleryImages[newIndex])
  }

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    const newIndex = currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
    setLightboxImage(galleryImages[newIndex])
  }

  return (
    <>
      <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-card h-full flex flex-col">
        {/* Main Image */}
        <div 
          className="relative h-56 sm:h-64 overflow-hidden cursor-pointer"
          onClick={() => openLightbox(mainImage)}
        >
          <Image
            src={mainImage}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          
          {/* Badge */}
          {badge && (
            <span className="absolute top-4 left-4 px-3 py-1 text-xs font-bold uppercase tracking-wider bg-primary text-primary-foreground rounded-full">
              {badge}
            </span>
          )}
          
          {/* Price Badge */}
          {price && (
            <span className="absolute top-4 right-4 px-3 py-1.5 text-sm font-bold bg-white/95 text-primary rounded-full shadow-lg">
              From {price}
            </span>
          )}
          
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-xl sm:text-2xl font-bold text-white font-serif">{title}</h3>
          </div>
        </div>

        <CardContent className="p-5 sm:p-6 flex-1 flex flex-col">
          <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{description}</p>
          
          {details && (
            <div className="mt-4 text-sm text-foreground">
              {details}
            </div>
          )}

          {/* Mini Gallery */}
          {galleryImages.length > 0 && (
            <div className="flex gap-2 mt-auto pt-5 border-t border-border overflow-x-auto pb-1">
              {galleryImages.map((img, index) => (
                <div
                  key={index}
                  className="relative w-16 h-16 sm:w-20 sm:h-16 flex-shrink-0 rounded-lg overflow-hidden cursor-pointer border-2 border-transparent hover:border-primary transition-all duration-300 hover:scale-105"
                  onClick={() => openLightbox(img)}
                >
                  <Image
                    src={img}
                    alt={`${title} gallery ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Lightbox */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors z-10"
            onClick={() => setLightboxImage(null)}
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8" />
          </button>
          
          {/* Navigation arrows */}
          {galleryImages.length > 1 && (
            <>
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors bg-black/30 p-2 rounded-full hover:bg-black/50"
                onClick={prevImage}
                aria-label="Previous image"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors bg-black/30 p-2 rounded-full hover:bg-black/50"
                onClick={nextImage}
                aria-label="Next image"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            </>
          )}
          
          <Image
            src={lightboxImage}
            alt="Lightbox image"
            width={1200}
            height={800}
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          
          {/* Image counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-sm bg-black/50 px-4 py-2 rounded-full">
            {currentIndex + 1} / {galleryImages.length}
          </div>
        </div>
      )}
    </>
  )
}
