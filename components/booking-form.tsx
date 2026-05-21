"use client"

import { useState, useMemo, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Minus, Plus, Clock, Euro, Users, MessageCircle, MapPin, User, Calendar, Timer } from "lucide-react"
import { PhoneInput } from "./phone-input"

type ServiceType = "fixed" | "smart"

interface Service {
  id: string
  name: string
  price: number
  duration: string
  type: ServiceType
  category: "transfer" | "activity"
}

const services: Service[] = [
  // Transfers
  { id: "airport", name: "Airport Transfer", price: 20, duration: "Airport Trip", type: "fixed", category: "transfer" },
  { id: "city-tour", name: "Full City Tour", price: 40, duration: "3 Hours", type: "fixed", category: "transfer" },
  { id: "oufella", name: "Agadir Oufella", price: 20, duration: "Round Trip", type: "fixed", category: "transfer" },
  { id: "crocodile", name: "Crocodile Park", price: 35, duration: "Round Trip", type: "fixed", category: "transfer" },
  { id: "paradise", name: "Paradise Valley", price: 75, duration: "Full Day", type: "fixed", category: "transfer" },
  // Activities
  { id: "quad", name: "Quad Bike", price: 30, duration: "2 Hours", type: "smart", category: "activity" },
  { id: "buggy", name: "Buggy Ride", price: 50, duration: "2 Hours", type: "smart", category: "activity" },
  { id: "boat", name: "Boat Trip", price: 45, duration: "Half Day", type: "smart", category: "activity" },
  { id: "jetski", name: "Jet-Ski", price: 50, duration: "30 min", type: "smart", category: "activity" },
  { id: "camel", name: "Camel Ride", price: 20, duration: "Sunset", type: "smart", category: "activity" },
  { id: "camel-bbq", name: "Camel Ride + BBQ", price: 25, duration: "Sunset", type: "smart", category: "activity" },
]

export function BookingForm() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const handlePhoneChange = useCallback((value: string) => setPhone(value), [])
  const [address, setAddress] = useState("")
  const [selectedService, setSelectedService] = useState<string>("")
  const [persons, setPersons] = useState(1)
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")

  const service = useMemo(() => services.find(s => s.id === selectedService), [selectedService])

  const totalPrice = useMemo(() => {
    if (!service) return 0
    return service.type === "smart" ? service.price * persons : service.price
  }, [service, persons])

  const incrementPersons = () => setPersons(prev => Math.min(prev + 1, 20))
  const decrementPersons = () => setPersons(prev => Math.max(prev - 1, 1))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!service) return

    const formattedDate = date.split('-').reverse().join('-')
    const message = `${formattedDate}%0A- ${service.name} = ${persons} persons%0A- Full name: ${name}%0A- Pick up time: ${time}%0A- Address: ${address}%0A- Phone number: ${phone}%0ATotal price: ${totalPrice}€`
    
    window.open(`https://wa.me/212706714859?text=${message}`, '_blank')
  }

  const transfers = services.filter(s => s.category === "transfer")
  const activities = services.filter(s => s.category === "activity")

  return (
    <Card className="w-full max-w-xl mx-auto shadow-2xl border-0 bg-card overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground p-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight">Book Your Experience</h2>
          <p className="text-primary-foreground/80 text-sm mt-1">Fill in the details below to reserve your adventure</p>
        </div>
      </CardHeader>
      <CardContent className="p-6 sm:p-8">
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div className="space-y-2">
            <Label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-2">
              <User className="w-3.5 h-3.5" />
              Full Name
            </Label>
            <Input
              id="name"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="h-12 bg-input border-border focus:ring-2 focus:ring-primary/20"
            />
          </div>

          {/* Phone with Country Code */}
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-2">
              <MessageCircle className="w-3.5 h-3.5" />
              Phone Number
            </Label>
            <PhoneInput
              value={phone}
              onChange={handlePhoneChange}
            />
          </div>

          {/* Pickup Address */}
          <div className="space-y-2">
            <Label htmlFor="address" className="text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5" />
              Pickup Address
            </Label>
            <Input
              id="address"
              type="text"
              placeholder="Hotel name or address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
              className="h-12 bg-input border-border focus:ring-2 focus:ring-primary/20"
            />
          </div>

          {/* Service & Persons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-xs font-bold uppercase tracking-wider text-primary">
                Select Service
              </Label>
              <Select value={selectedService} onValueChange={setSelectedService} required>
                <SelectTrigger className="h-12 bg-input border-border focus:ring-2 focus:ring-primary/20">
                  <SelectValue placeholder="Choose a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel className="text-primary font-bold">TRANSFERS</SelectLabel>
                    {transfers.map(s => (
                      <SelectItem key={s.id} value={s.id}>
                        {s.name} ({s.price}€)
                      </SelectItem>
                    ))}
                  </SelectGroup>
                  <SelectGroup>
                    <SelectLabel className="text-primary font-bold">ACTIVITIES</SelectLabel>
                    {activities.map(s => (
                      <SelectItem key={s.id} value={s.id}>
                        {s.name} ({s.price}€)
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            {/* Persons Counter with +/- buttons */}
            <div className="space-y-2">
              <Label className="text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-2">
                <Users className="w-3.5 h-3.5" />
                Persons
              </Label>
              <div className="flex items-center h-12 bg-input rounded-lg border border-border overflow-hidden">
                <button
                  type="button"
                  onClick={decrementPersons}
                  className="h-full px-4 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors text-foreground"
                  aria-label="Decrease persons"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <div className="flex-1 flex items-center justify-center font-bold text-xl text-foreground">
                  {persons}
                </div>
                <button
                  type="button"
                  onClick={incrementPersons}
                  className="h-full px-4 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors text-foreground"
                  aria-label="Increase persons"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Price Info Box */}
          {service && (
            <div className="grid grid-cols-3 gap-3 p-4 bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl border border-primary/20">
              <div className="text-center">
                <div className="flex items-center justify-center gap-1.5 text-muted-foreground mb-1">
                  <Euro className="w-4 h-4" />
                  <span className="text-[10px] font-bold uppercase">Price/Unit</span>
                </div>
                <p className="text-xl font-bold text-primary">{service.price}€</p>
              </div>
              <div className="text-center border-x border-primary/20">
                <div className="flex items-center justify-center gap-1.5 text-muted-foreground mb-1">
                  <Clock className="w-4 h-4" />
                  <span className="text-[10px] font-bold uppercase">Duration</span>
                </div>
                <p className="text-xl font-bold text-primary">{service.duration}</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1.5 text-muted-foreground mb-1">
                  <Users className="w-4 h-4" />
                  <span className="text-[10px] font-bold uppercase">Total</span>
                </div>
                <p className="text-xl font-bold text-green-600">{totalPrice}€</p>
              </div>
            </div>
          )}

          {/* Date & Time */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="date" className="text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5" />
                Date
              </Label>
              <Input
                id="date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
                className="h-12 bg-input border-border focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="time" className="text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-2">
                <Timer className="w-3.5 h-3.5" />
                Pick up time
              </Label>
              <Input
                id="time"
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
                className="h-12 bg-input border-border focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full h-14 text-lg font-bold bg-[#25d366] hover:bg-[#22c55e] text-white shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Book Now via WhatsApp
          </Button>
          
          <p className="text-center text-xs text-muted-foreground">
            Secure booking - You&apos;ll be redirected to WhatsApp to confirm
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
