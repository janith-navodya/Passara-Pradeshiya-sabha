"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertCircle, ArrowLeft, ArrowRight, CheckCircle2, ShieldAlert, UploadCloud, Users, MapPin, Landmark, Trash2 } from "lucide-react";
import { Link } from "@/i18n/routing";

const categories = [
  "Water Leak / Supply Issue",
  "Road Pits & Infrastructure Repairs",
  "Garbage & Waste Collection Failure",
  "Broken Street Lights & Electrification",
  "Public Health Hazards / Mosquito Breeding",
  "Illegal Construction & Land Encroachments",
  "Drainage Clogs & Flood Blockages",
  "Other Municipal Issues"
];

const wards = Array.from({ length: 18 }, (_, i) => `Ward ${i + 1} - Area ${i + 1}`);

export default function ComplaintSubmissionPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    nic: "",
    title: "",
    category: "",
    ward: "",
    address: "",
    description: "",
    acknowledge: false,
  });
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [refId, setRefId] = useState<string | null>(null);

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const generatedRef = "COM-" + Math.floor(100000 + Math.random() * 900000);
      setRefId(generatedRef);
      setStep(4);
    }, 2000);
  };

  return (
    <div className="bg-zinc-50 dark:bg-zinc-950 min-h-screen text-zinc-950 dark:text-zinc-50 pb-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#1a5276] via-[#154360] to-[#1e8449] py-16 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-emerald-300 text-xs font-semibold mb-4 backdrop-blur-sm border border-white/10">
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>Grievance Redressal</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
              Citizen Complaint Submission
            </h1>
            <p className="text-sm text-zinc-200 max-w-xl mx-auto">
              Submit your municipal grievances directly to Passara Pradeshiya Sabha. Track resolution status in real-time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Progress Tracker */}
      {step <= 3 && (
        <div className="max-w-xl mx-auto px-4 py-8">
          <div className="flex items-center justify-between relative">
            <div className="absolute left-0 right-0 h-1 bg-zinc-200 dark:bg-zinc-800 top-1/2 -translate-y-1/2 z-0" />
            <div
              className="absolute left-0 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 top-1/2 -translate-y-1/2 z-0 transition-all duration-300"
              style={{ width: `${((step - 1) / 2) * 100}%` }}
            />

            {[1, 2, 3].map((num) => (
              <div key={num} className="relative z-10 flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs shadow-sm transition-all duration-300 ${
                    step >= num
                      ? "bg-primary text-white scale-110"
                      : "bg-white dark:bg-zinc-900 border-2 border-zinc-200 dark:border-zinc-800 text-zinc-400"
                  }`}
                >
                  {num}
                </div>
                <span className="text-[10px] font-semibold text-zinc-450 mt-1 uppercase tracking-wider">
                  {num === 1 ? "Citizen" : num === 2 ? "Complaint" : "Submit"}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Form Container */}
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 p-8 shadow-sm">
          <form onSubmit={handleSubmit}>
            <AnimatePresence mode="wait">
              {/* STEP 1: Citizen Details */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-4"
                >
                  <h2 className="text-xl font-bold tracking-tight">Step 1: Citizen Identification</h2>
                  <p className="text-xs text-zinc-500">Provide correct details to help the Sabha officers contact you and verify the location.</p>

                  <div className="space-y-3 pt-2">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-zinc-650 dark:text-zinc-400">Full Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-850 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                        placeholder="Kumara Perera"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-zinc-650 dark:text-zinc-400">Phone Number</label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-2 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-850 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                          placeholder="0771234567"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-zinc-650 dark:text-zinc-400">NIC / Passport Number</label>
                        <input
                          type="text"
                          required
                          value={formData.nic}
                          onChange={(e) => setFormData({ ...formData, nic: e.target.value })}
                          className="w-full px-4 py-2 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-850 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                          placeholder="199201234567V"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-zinc-650 dark:text-zinc-400">Email Address (Optional)</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-850 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                        placeholder="kumara@example.com"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end pt-6 border-t border-zinc-100 dark:border-zinc-800">
                    <button
                      type="button"
                      onClick={handleNext}
                      disabled={!formData.name || !formData.phone || !formData.nic}
                      className="inline-flex items-center gap-1.5 px-5 py-2 rounded-xl bg-primary text-white text-xs font-semibold hover:bg-blue-750 transition-colors shadow-sm disabled:opacity-50"
                    >
                      <span>Proceed</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* STEP 2: Complaint Details */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-4"
                >
                  <h2 className="text-xl font-bold tracking-tight">Step 2: Complaint Particulars</h2>
                  <p className="text-xs text-zinc-500">Provide details on the type of problem and precise location inside Passara limits.</p>

                  <div className="space-y-3 pt-2">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-zinc-650 dark:text-zinc-400">Complaint Category</label>
                      <select
                        required
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-850 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                      >
                        <option value="">Select a category...</option>
                        {categories.map((cat, idx) => (
                          <option key={idx} value={cat}>{cat}</option>
                        ))}
                      </select>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-zinc-650 dark:text-zinc-400">Brief Title</label>
                        <input
                          type="text"
                          required
                          value={formData.title}
                          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                          className="w-full px-4 py-2 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-850 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                          placeholder="e.g. Main road water pipe leak"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-zinc-650 dark:text-zinc-400">Municipal Ward</label>
                        <select
                          required
                          value={formData.ward}
                          onChange={(e) => setFormData({ ...formData, ward: e.target.value })}
                          className="w-full px-3 py-2 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-850 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                        >
                          <option value="">Select ward...</option>
                          {wards.map((ward, idx) => (
                            <option key={idx} value={ward}>{ward}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-zinc-650 dark:text-zinc-400">Exact Location Address</label>
                      <input
                        type="text"
                        required
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        className="w-full px-4 py-2 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-850 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                        placeholder="Near Passara Central College, Library Road"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-zinc-650 dark:text-zinc-400">Full Description</label>
                      <textarea
                        required
                        rows={4}
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        className="w-full px-4 py-2 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-850 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                        placeholder="Please write full details regarding the issue..."
                      />
                    </div>
                  </div>

                  <div className="flex justify-between pt-6 border-t border-zinc-100 dark:border-zinc-800">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-zinc-250 hover:bg-zinc-50 dark:border-zinc-800 text-xs font-semibold"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Back</span>
                    </button>
                    <button
                      type="button"
                      onClick={handleNext}
                      disabled={!formData.category || !formData.title || !formData.ward || !formData.address || !formData.description}
                      className="inline-flex items-center gap-1.5 px-5 py-2 rounded-xl bg-primary text-white text-xs font-semibold hover:bg-blue-750 transition-colors shadow-sm disabled:opacity-50"
                    >
                      <span>Proceed</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* STEP 3: Review and File Upload */}
              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-4"
                >
                  <h2 className="text-xl font-bold tracking-tight">Step 3: Upload Evidence & Submit</h2>
                  <p className="text-xs text-zinc-500">Provide an optional photo of the problem, acknowledge the terms and submit.</p>

                  <div className="space-y-4 pt-2">
                    {/* Image Drag and Drop */}
                    <div className="border-2 border-dashed border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 text-center hover:bg-zinc-50/50 dark:hover:bg-zinc-950/20 transition-all cursor-pointer relative group">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="absolute inset-0 opacity-0 cursor-pointer"
                      />
                      <UploadCloud className="w-10 h-10 text-zinc-400 group-hover:text-primary mx-auto mb-3 transition-colors" />
                      {selectedFile ? (
                        <div className="space-y-1">
                          <p className="text-xs font-bold text-[#1e8449]">{selectedFile}</p>
                          <p className="text-[10px] text-zinc-450">Click to change or replace file</p>
                        </div>
                      ) : (
                        <div className="space-y-1">
                          <p className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">Choose a file or drag here</p>
                          <p className="text-[10px] text-zinc-400">JPEG, PNG up to 5MB (Optional)</p>
                        </div>
                      )}
                    </div>

                    {/* Acknowledgment */}
                    <div className="flex gap-3 bg-zinc-50 dark:bg-zinc-950 p-4 rounded-2xl border border-zinc-150 dark:border-zinc-850">
                      <input
                        type="checkbox"
                        required
                        id="ack"
                        checked={formData.acknowledge}
                        onChange={(e) => setFormData({ ...formData, acknowledge: e.target.checked })}
                        className="mt-0.5 w-4 h-4 rounded text-primary focus:ring-primary/20"
                      />
                      <label htmlFor="ack" className="text-xs text-zinc-650 dark:text-zinc-450 leading-relaxed cursor-pointer select-none">
                        I hereby declare that the details provided in this grievance are 100% correct, relating to public welfare inside Passara Sabha limits. I understand fake reports attract legal action.
                      </label>
                    </div>
                  </div>

                  <div className="flex justify-between pt-6 border-t border-zinc-100 dark:border-zinc-800">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-zinc-250 hover:bg-zinc-50 dark:border-zinc-800 text-xs font-semibold"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Back</span>
                    </button>
                    <button
                      type="submit"
                      disabled={!formData.acknowledge || isSubmitting}
                      className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-xl bg-[#1e8449] hover:bg-emerald-700 text-white text-xs font-semibold transition-colors shadow-sm disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Transmitting...</span>
                      ) : (
                        <>
                          <span>Submit Grievance</span>
                          <CheckCircle2 className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </div>
                </motion.div>
              )}

              {/* STEP 4: Success Message */}
              {step === 4 && (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center space-y-6 py-8"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-50 dark:bg-emerald-950 flex items-center justify-center text-emerald-650 mx-auto border border-emerald-200 dark:border-emerald-800 shadow shadow-emerald-50">
                    <CheckCircle2 className="w-10 h-10 animate-bounce" />
                  </div>

                  <div className="space-y-2">
                    <h2 className="text-2xl font-bold tracking-tight">Grievance Successfully Filed!</h2>
                    <p className="text-xs text-zinc-500 max-w-sm mx-auto leading-relaxed">
                      Thank you. Your complaint has been queued in our system. A notification has been dispatched to the respective ward engineer.
                    </p>
                  </div>

                  <div className="bg-zinc-50 dark:bg-zinc-950 p-5 rounded-3xl border border-zinc-150 dark:border-zinc-850 inline-block">
                    <span className="text-[10px] text-zinc-400 uppercase tracking-wider block font-bold">Complaint Reference ID</span>
                    <span className="text-xl font-extrabold text-primary block mt-1 tracking-widest">{refId}</span>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
                    <Link
                      href="/"
                      className="px-5 py-2 rounded-xl bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-xs font-semibold transition-colors"
                    >
                      Back to Home
                    </Link>
                    <Link
                      href="/citizen/complaints"
                      className="px-5 py-2 rounded-xl bg-primary text-white text-xs font-semibold hover:bg-blue-750 transition-colors shadow-sm"
                    >
                      Track on Dashboard
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </div>
      </div>
    </div>
  );
}
