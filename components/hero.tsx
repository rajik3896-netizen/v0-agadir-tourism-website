import Image from "next/image"
import { Star, Shield, Clock, Users } from "lucide-react"

export function Hero() {
  return (
    <header className="relative h-[60vh] sm:h-[70vh] lg:h-[80vh] overflow-hidden">
      {/* Background Image */}
      <Image
        src="https://i.postimg.cc/ZqrbfkTk/1000042039.jpg"
        alt="Agadir coastline"
        fill
        className="object-cover"
        priority
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/80" />
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <span className="inline-block px-5 py-2 mb-6 text-xs sm:text-sm font-semibold tracking-widest uppercase text-white/90 border border-white/30 rounded-full backdrop-blur-sm bg-white/5">
          Welcome to Morocco
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-4 tracking-tight text-balance">
          Tourisme Agadir
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-light max-w-2xl mb-8">
          Premium Transfers & Unforgettable Activities
        </p>
        
        {/* Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-white/80 text-xs sm:text-sm">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
            <Star className="w-4 h-4 text-amber-400" fill="currentColor" />
            <span>5.0 Rated</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
            <Shield className="w-4 h-4 text-green-400" />
            <span>Trusted Service</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
            <Clock className="w-4 h-4 text-blue-400" />
            <span>24/7 Available</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
            <Users className="w-4 h-4 text-purple-400" />
            <span>1000+ Happy Clients</span>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white/70 rounded-full" />
          </div>
        </div>
      </div>
    </header>
  )
}
