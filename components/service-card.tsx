"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { X } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  details?: React.ReactNode
  mainImage: string
  galleryImages: string[]
}

export function ServiceCard({ title, description, details, mainImage, galleryImages }: ServiceCardProps) {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)

  return (
    <>
      <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-card">
        {/* Main Image */}
        <div 
          className="relative h-56 sm:h-64 overflow-hidden cursor-pointer"
          onClick={() => setLightboxImage(mainImage)}
        >
          <Image
            src={mainImage}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <h3 className="absolute bottom-4 left-4 text-xl sm:text-2xl font-bold text-white font-serif">{title}</h3>
        </div>

        <CardContent className="p-5 sm:p-6">
          <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{description}</p>
          
          {details && (
            <div className="mt-4 text-sm text-foreground">
              {details}
            </div>
          )}

          {/* Mini Gallery */}
          {galleryImages.length > 0 && (
            <div className="flex gap-2 mt-5 pt-5 border-t border-border overflow-x-auto pb-2">
              {galleryImages.map((img, index) => (
                <div
                  key={index}
                  className="relative w-16 h-16 sm:w-20 sm:h-16 flex-shrink-0 rounded-lg overflow-hidden cursor-pointer border border-border hover:border-primary transition-colors"
                  onClick={() => setLightboxImage(img)}
                >
                  <Image
                    src={img}
                    alt={`${title} gallery ${index + 1}`}
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-300"
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
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
            onClick={() => setLightboxImage(null)}
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8" />
          </button>
          <Image
            src={lightboxImage}
            alt="Lightbox image"
            width={1200}
            height={800}
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  )
}
