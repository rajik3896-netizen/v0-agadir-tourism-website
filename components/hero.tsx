import Image from "next/image"

export function Hero() {
  return (
    <header className="relative h-[50vh] sm:h-[60vh] lg:h-[70vh] overflow-hidden">
      {/* Background Image */}
      <Image
        src="https://i.postimg.cc/ZqrbfkTk/1000042039.jpg"
        alt="Agadir coastline"
        fill
        className="object-cover"
        priority
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70" />
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <span className="inline-block px-4 py-1.5 mb-4 text-xs sm:text-sm font-semibold tracking-widest uppercase text-white/90 border border-white/30 rounded-full backdrop-blur-sm">
          Welcome to Morocco
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-4 tracking-tight text-balance">
          Tourisme Agadir
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-light max-w-2xl">
          Premium Transfers & Unforgettable Activities
        </p>
        
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
