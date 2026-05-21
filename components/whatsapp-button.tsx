"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  const handleClick = () => {
    window.open('https://wa.me/212706714859?text=Hello! I would like to book a service.', '_blank')
  }

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 bg-[#25d366] text-white px-5 py-3.5 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="font-semibold hidden sm:inline">WhatsApp</span>
      
      {/* Pulse animation */}
      <span className="absolute -inset-1 rounded-full bg-[#25d366] opacity-30 animate-ping" />
    </button>
  )
}
