"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, MessageSquare, Mail, Star, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  WHATSAPP_PRIMARY,
  WHATSAPP_SECONDARY,
  EMAIL_SUPPORT,
} from "@/lib/constants";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut", delay },
  }),
};

const cardHover = {
  rest: { y: 0, boxShadow: "0 4px 24px 0 rgba(25, 118, 210, 0.08)" },
  hover: { y: -6, boxShadow: "0 16px 48px 0 rgba(25, 118, 210, 0.18)" },
};

// WhatsApp icon SVG
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.855L.073 23.927a.5.5 0 0 0 .613.613l6.072-1.459A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.93 0-3.742-.522-5.302-1.435L4 21.5l.935-2.698A10.02 10.02 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
    </svg>
  );
}

// Section label
function SectionLabel({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 text-brand-primary rounded-full text-sm font-semibold tracking-wide border border-blue-100">
      {text}
    </span>
  );
}

export default function SupportCard() {
  return (
    <section aria-labelledby="support-heading" className="py-20 lg:py-28 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <SectionLabel text="📱 WhatsApp Support" />
          <h2
            id="support-heading"
            className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 leading-tight"
          >
            Instant Support on{" "}
            <span className="text-green-600">WhatsApp</span>
          </h2>
          <p className="mt-4 text-slate-500 text-base sm:text-lg max-w-2xl mx-auto">
            Message us directly for fast, friendly assistance. We typically respond within 15–30 minutes.
          </p>
        </motion.div>

        {/* WhatsApp Cards */}
        <div id="support" className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* Primary Card */}
          <motion.div
            variants={cardHover}
            initial="rest"
            whileHover="hover"
            custom={0}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={0.1}
              className="relative bg-white rounded-3xl p-8 lg:p-10 shadow-card border border-slate-100 overflow-hidden h-full flex flex-col"
            >
              {/* Accent top bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 to-green-600 rounded-t-3xl" />

              {/* Card header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <WhatsAppIcon className="w-8 h-8 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 leading-tight">
                      {WHATSAPP_PRIMARY.label}
                    </h3>
                    <p className="text-slate-500 text-sm mt-0.5">{WHATSAPP_PRIMARY.phone}</p>
                  </div>
                </div>
                <Badge variant="success" className="flex-shrink-0 gap-1">
                  <Star className="w-3 h-3" aria-hidden="true" />
                  {WHATSAPP_PRIMARY.badge}
                </Badge>
              </div>

              <p className="text-slate-600 leading-relaxed mb-6 text-sm">
                {WHATSAPP_PRIMARY.description}
              </p>

              {/* Features list */}
              <div className="mb-8 flex-1">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">
                  We can help with
                </p>
                <ul className="space-y-2.5" aria-label="Primary support services">
                  {WHATSAPP_PRIMARY.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-slate-700 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <a
                href={WHATSAPP_PRIMARY.url}
                target="_blank"
                rel="noopener noreferrer"
                id="primary-whatsapp-btn"
                aria-label={`Chat on WhatsApp with primary support — ${WHATSAPP_PRIMARY.phone}`}
                className="flex items-center justify-center gap-3 w-full py-4 bg-green-500 hover:bg-green-600 text-white font-bold text-base rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 group"
              >
                <WhatsAppIcon className="w-5 h-5" />
                Chat on WhatsApp
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true" />
              </a>
            </motion.div>
          </motion.div>

          {/* Secondary Card */}
          <motion.div
            variants={cardHover}
            initial="rest"
            whileHover="hover"
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={0.2}
              className="relative bg-white rounded-3xl p-8 lg:p-10 shadow-card border border-slate-100 overflow-hidden h-full flex flex-col"
            >
              {/* Accent top bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-300 to-blue-500 rounded-t-3xl" />

              {/* Card header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <WhatsAppIcon className="w-8 h-8 text-brand-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800 leading-tight">
                    {WHATSAPP_SECONDARY.label}
                  </h3>
                  <p className="text-slate-500 text-sm mt-0.5">{WHATSAPP_SECONDARY.phone}</p>
                </div>
              </div>

              <p className="text-slate-600 leading-relaxed mb-6 text-sm">
                {WHATSAPP_SECONDARY.description}
              </p>

              {/* Features list */}
              <div className="mb-8 flex-1">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">
                  Available for
                </p>
                <ul className="space-y-2.5" aria-label="Secondary support services">
                  {WHATSAPP_SECONDARY.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-slate-700 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <a
                href={WHATSAPP_SECONDARY.url}
                target="_blank"
                rel="noopener noreferrer"
                id="secondary-whatsapp-btn"
                aria-label={`Chat on WhatsApp with secondary support — ${WHATSAPP_SECONDARY.phone}`}
                className="flex items-center justify-center gap-3 w-full py-4 bg-brand-primary hover:bg-brand-secondary text-white font-bold text-base rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 group"
              >
                <WhatsAppIcon className="w-5 h-5" />
                Chat on WhatsApp
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true" />
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Email Support Section */}
        <motion.div
          id="email"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          custom={0.1}
          className="text-center mb-10"
        >
          <SectionLabel text="✉️ Email Support" />
          <h2
            id="email-heading"
            className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 leading-tight"
          >
            Reach Us via{" "}
            <span className="text-brand-primary">Email</span>
          </h2>
          <p className="mt-4 text-slate-500 text-base sm:text-lg max-w-2xl mx-auto">
            Prefer email? Send us a detailed message and we&apos;ll get back to you promptly.
          </p>
        </motion.div>

        {/* Email Card */}
        <motion.div
          variants={cardHover}
          initial="rest"
          whileHover="hover"
        >
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0.2}
            className="relative bg-white rounded-3xl p-8 lg:p-12 shadow-card border border-slate-100 overflow-hidden"
          >
            {/* Accent top bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-primary to-brand-accent rounded-t-3xl" />

            <div className="flex flex-col lg:flex-row lg:items-center gap-10">
              {/* Left: Info */}
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-8 h-8 text-brand-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800">{EMAIL_SUPPORT.label}</h3>
                    <a
                      href={EMAIL_SUPPORT.url}
                      className="text-brand-primary text-sm font-medium hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary rounded"
                      aria-label={`Email us at ${EMAIL_SUPPORT.address}`}
                    >
                      {EMAIL_SUPPORT.address}
                    </a>
                  </div>
                </div>

                <p className="text-slate-600 leading-relaxed text-sm mb-6">
                  {EMAIL_SUPPORT.description}
                </p>

                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">
                    Suitable for
                  </p>
                  <div className="flex flex-wrap gap-2" aria-label="Email support use cases">
                    {EMAIL_SUPPORT.features.map((feature) => (
                      <span
                        key={feature}
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 text-brand-primary text-xs font-semibold rounded-full border border-blue-100"
                      >
                        <MessageSquare className="w-3 h-3" aria-hidden="true" />
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: CTA */}
              <div className="lg:w-64 flex flex-col items-center text-center lg:text-left gap-4">
                <div className="w-full p-5 bg-blue-50 rounded-2xl border border-blue-100">
                  <p className="text-xs text-slate-500 font-medium mb-1">Email Address</p>
                  <p className="text-sm font-bold text-slate-800 break-all">
                    {EMAIL_SUPPORT.address}
                  </p>
                </div>
                <a
                  href={EMAIL_SUPPORT.url}
                  id="email-send-btn"
                  aria-label={`Send email to ${EMAIL_SUPPORT.address}`}
                  className="flex items-center justify-center gap-2 w-full py-4 bg-brand-primary hover:bg-brand-secondary text-white font-bold text-base rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 group"
                >
                  <Mail className="w-5 h-5" aria-hidden="true" />
                  Send Email
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true" />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
