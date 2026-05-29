"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar as CalendarIcon, Clock, Users, Shield, CheckCircle, ArrowRight, Star, Heart, MapPin } from "lucide-react";
import Link from "next/link";

const halls = [
  {
    id: "h1",
    name: "Passara Town Hall Auditorium",
    capacity: "500 Attendees",
    fee: "LKR 25,000 / Day",
    location: "Main Street, Passara Town",
    rating: 4.7,
    amenities: ["Air Conditioned", "High-End Audio System", "Stage Lighting", "Dressing Rooms", "200+ Parking Slots"],
    description: "Our premium auditorium is fully equipped for large wedding receptions, corporate conferences, state events, and cultural school drama festivals.",
  },
  {
    id: "h2",
    name: "Passara South Community Center Hall",
    capacity: "200 Attendees",
    fee: "LKR 10,000 / Day",
    location: "Temple Road, Passara South",
    rating: 4.3,
    amenities: ["Natural Ventilation", "Basic Public Address System", "Stage Area", "Dining Space", "Kitchen Facility"],
    description: "Best suited for cooperative society meetings, local training workshops, small scale family celebrations, and religious events.",
  },
  {
    id: "h3",
    name: "Sabha Secretariat Conference Room",
    capacity: "50 Attendees",
    fee: "LKR 5,000 / Day",
    location: "Pradeshiya Sabha Main Building",
    rating: 4.8,
    amenities: ["Full Smart TV Projector", "Comfortable Boardroom Seats", "Air Conditioned", "Tea/Beverage Station"],
    description: "Designed strictly for professional business seminars, local NGO roundtables, governmental taskforce meets, and educational seminars.",
  }
];

export default function HallReservationPage() {
  const [selectedHall, setSelectedHall] = useState<typeof halls[0] | null>(null);
  const [bookingForm, setBookingForm] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    duration: "1 Day",
    purpose: "",
    attendees: "",
    needSoundSystem: false,
    needDecorations: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successBooking, setSuccessBooking] = useState<any | null>(null);

  const handleBook = (hall: typeof halls[0]) => {
    setSelectedHall(hall);
    window.scrollTo({ top: 400, behavior: "smooth" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const generatedRef = "RES-" + Math.floor(100000 + Math.random() * 900000);
      setSuccessBooking({
        refId: generatedRef,
        hallName: selectedHall?.name,
        date: bookingForm.date,
        totalFee: selectedHall?.fee,
        name: bookingForm.name,
      });
      setBookingForm({
        name: "",
        phone: "",
        email: "",
        date: "",
        duration: "1 Day",
        purpose: "",
        attendees: "",
        needSoundSystem: false,
        needDecorations: false,
      });
      setSelectedHall(null);
    }, 2000);
  };

  return (
    <div className="bg-zinc-50 dark:bg-zinc-950 min-h-screen text-zinc-950 dark:text-zinc-50 pb-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#1a5276] via-[#154360] to-[#1e8449] py-20 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-emerald-300 text-xs font-semibold mb-4 backdrop-blur-sm border border-white/10">
              <CalendarIcon className="w-3.5 h-3.5" />
              <span>Public Space Rental</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Hall & Auditorium Reservations
            </h1>
            <p className="text-lg text-zinc-100 max-w-2xl mx-auto">
              Reserve our state-of-the-art public halls, playgrounds, or conference facilities for weddings, private banquets, exhibitions, and corporate seminars.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center gap-2 text-sm text-zinc-500">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span className="text-zinc-400">/</span>
          <span className="text-zinc-800 dark:text-zinc-200 font-medium">Hall Reservation</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Success Alert */}
        {successBooking && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 p-6 bg-emerald-50 dark:bg-emerald-950/40 rounded-3xl border border-emerald-200 dark:border-emerald-900 text-emerald-800 dark:text-emerald-350 shadow-sm"
          >
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h3 className="text-lg font-bold">Booking Request Successfully Queued!</h3>
                <p className="text-xs">
                  Your reservation request for <strong>{successBooking.hallName}</strong> on <strong>{successBooking.date}</strong> has been transmitted.
                  Reference Code: <strong className="underline">{successBooking.refId}</strong>.
                </p>
                <div className="pt-2 text-xs flex gap-4">
                  <span>Name: {successBooking.name}</span>
                  <span>Fee: {successBooking.totalFee}</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left: Halls list */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-xl font-bold tracking-tight mb-4 flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              <span>Available Municipal Venues</span>
            </h2>

            {halls.map((hall) => (
              <motion.div
                key={hall.id}
                whileHover={{ y: -2 }}
                className="bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 p-6 shadow-sm flex flex-col md:flex-row gap-6"
              >
                <div className="w-full md:w-48 h-40 rounded-2xl bg-gradient-to-br from-blue-400/20 to-emerald-400/20 flex items-center justify-center relative shrink-0">
                  <div className="absolute top-3 left-3 bg-primary text-white text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">
                    {hall.capacity}
                  </div>
                  <Users className="w-12 h-12 text-zinc-300 dark:text-zinc-750 animate-pulse" />
                </div>

                <div className="flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50">{hall.name}</h3>
                      <span className="text-xs font-semibold text-[#1e8449] bg-emerald-50 dark:bg-emerald-950 px-2.5 py-0.5 rounded-full">{hall.fee}</span>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-zinc-500">
                      <MapPin className="w-3.5 h-3.5 text-red-500 shrink-0" />
                      <span>{hall.location}</span>
                    </div>

                    <p className="text-xs text-zinc-550 dark:text-zinc-400 leading-relaxed mt-2">{hall.description}</p>

                    <div className="flex flex-wrap gap-1.5 pt-3">
                      {hall.amenities.map((am, amIdx) => (
                        <span key={amIdx} className="text-[10px] font-semibold bg-zinc-100 dark:bg-zinc-850 px-2 py-0.5 rounded-full text-zinc-650 dark:text-zinc-350">
                          ✓ {am}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-3 border-t border-zinc-100 dark:border-zinc-800 flex justify-end">
                    <button
                      onClick={() => handleBook(hall)}
                      className="inline-flex items-center gap-1.5 py-1.5 px-4 rounded-xl bg-primary hover:bg-blue-750 text-white text-xs font-semibold transition-colors shadow-sm"
                    >
                      <span>Reserve Now</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: Reservation Form */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 p-6 shadow-sm sticky top-20">
              {selectedHall ? (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">Reserve Venue</h3>
                    <p className="text-xs text-zinc-500 mt-1">You are booking: <strong className="text-primary">{selectedHall.name}</strong></p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-zinc-650 dark:text-zinc-400">Your Full Name</label>
                      <input
                        type="text"
                        required
                        value={bookingForm.name}
                        onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                        className="w-full px-4 py-2 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-850 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                        placeholder="Kumara Perera"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-zinc-650 dark:text-zinc-400">Phone</label>
                        <input
                          type="tel"
                          required
                          value={bookingForm.phone}
                          onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
                          className="w-full px-4 py-2 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-850 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                          placeholder="0771234567"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-zinc-650 dark:text-zinc-400">Date</label>
                        <input
                          type="date"
                          required
                          value={bookingForm.date}
                          onChange={(e) => setBookingForm({ ...bookingForm, date: e.target.value })}
                          className="w-full px-3 py-2 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-850 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-zinc-650 dark:text-zinc-400">Event Purpose</label>
                      <input
                        type="text"
                        required
                        value={bookingForm.purpose}
                        onChange={(e) => setBookingForm({ ...bookingForm, purpose: e.target.value })}
                        className="w-full px-4 py-2 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-850 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                        placeholder="e.g. Wedding Reception"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-zinc-650 dark:text-zinc-400">Attendees</label>
                        <input
                          type="number"
                          required
                          value={bookingForm.attendees}
                          onChange={(e) => setBookingForm({ ...bookingForm, attendees: e.target.value })}
                          className="w-full px-4 py-2 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-850 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                          placeholder="e.g. 250"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-zinc-650 dark:text-zinc-400">Duration</label>
                        <select
                          value={bookingForm.duration}
                          onChange={(e) => setBookingForm({ ...bookingForm, duration: e.target.value })}
                          className="w-full px-3 py-2 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-850 text-sm focus:outline-none"
                        >
                          <option value="1 Day">1 Day</option>
                          <option value="2 Days">2 Days</option>
                          <option value="3 Days">3 Days</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2 pt-2 text-xs text-zinc-500 border-t border-zinc-100 dark:border-zinc-800">
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          id="snd"
                          checked={bookingForm.needSoundSystem}
                          onChange={(e) => setBookingForm({ ...bookingForm, needSoundSystem: e.target.checked })}
                          className="w-4 h-4 rounded text-primary focus:ring-primary/20"
                        />
                        <label htmlFor="snd" className="cursor-pointer">Sound & Mic system (LKR 5000 extra)</label>
                      </div>
                    </div>

                    <div className="flex gap-2 pt-4">
                      <button
                        type="button"
                        onClick={() => setSelectedHall(null)}
                        className="flex-1 py-2 rounded-xl border border-zinc-200 dark:border-zinc-800 text-xs font-semibold hover:bg-zinc-50 transition-colors"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-1 py-2 rounded-xl bg-[#1e8449] hover:bg-emerald-700 text-white text-xs font-semibold transition-colors shadow-sm"
                      >
                        {isSubmitting ? "Processing..." : "Submit Booking"}
                      </button>
                    </div>
                  </form>
                </div>
              ) : (
                <div className="text-center py-10 space-y-3">
                  <CalendarIcon className="w-12 h-12 text-zinc-300 dark:text-zinc-700 mx-auto" />
                  <h3 className="font-bold text-zinc-750">Reservation Form</h3>
                  <p className="text-xs text-zinc-500 max-w-xs mx-auto">
                    Please select one of the available halls from the municipal venue list on the left to activate the reservation booking process.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
