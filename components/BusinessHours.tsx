"use client";

import React from "react";
import { motion } from "framer-motion";
import { Clock, Calendar, Zap, Sun } from "lucide-react";
import { BUSINESS_HOURS } from "@/lib/constants";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut", delay },
  }),
};

interface HoursStatProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  highlight?: boolean;
}

function HoursStat({ icon, label, value, highlight }: HoursStatProps) {
  return (
    <div
      className={`flex flex-col items-center gap-3 p-6 rounded-2xl border transition-all duration-200 ${
        highlight
          ? "bg-brand-accent/10 border-brand-accent/30"
          : "bg-white/60 border-white/60"
      }`}
    >
      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center ${
          highlight ? "bg-brand-accent/20 text-amber-600" : "bg-blue-100 text-brand-primary"
        }`}
        aria-hidden="true"
      >
        {icon}
      </div>
      <div className="text-center">
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1">
          {label}
        </p>
        <p className={`font-bold text-slate-800 text-sm sm:text-base leading-snug`}>{value}</p>
      </div>
    </div>
  );
}

export default function BusinessHours() {
  return (
    <section
      id="hours"
      aria-labelledby="hours-heading"
      className="py-20 lg:py-28 bg-gradient-to-br from-brand-primary via-brand-secondary to-[#0D47A1] relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-72 h-72 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex justify-center mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/15 backdrop-blur-sm border border-white/25 text-white/90 rounded-full text-sm font-semibold">
            <Sun className="w-4 h-4 text-brand-accent" aria-hidden="true" />
            We Are Open
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          id="hours-heading"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={0.1}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
        >
          Business Hours
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={0.2}
          className="text-white/70 text-base sm:text-lg mb-12 max-w-lg mx-auto"
        >
          {BUSINESS_HOURS.note}
        </motion.p>

        {/* Stats grid */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          custom={0.3}
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 sm:p-8 mb-8"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <HoursStat
              icon={<Calendar className="w-6 h-6" />}
              label="Working Days"
              value={BUSINESS_HOURS.days}
            />
            <HoursStat
              icon={<Clock className="w-6 h-6" />}
              label="Working Hours"
              value={BUSINESS_HOURS.time}
            />
            <HoursStat
              icon={<Zap className="w-6 h-6" />}
              label="Response Time"
              value="15–30 Minutes"
              highlight
            />
          </div>
        </motion.div>

        {/* Response time note */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={0.4}
          className="flex items-center justify-center gap-3 text-white/80 text-sm"
        >
          <div
            className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse flex-shrink-0"
            aria-hidden="true"
          />
          <p>
            <span className="font-semibold text-white">WhatsApp:</span>{" "}
            {BUSINESS_HOURS.responseTime}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
