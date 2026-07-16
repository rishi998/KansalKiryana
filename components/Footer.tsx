"use client";

import React from "react";
import Image from "next/image";
import { Mail, Phone, MapPin, Heart } from "lucide-react";
import { BUSINESS, SOCIAL_LINKS, WHATSAPP_PRIMARY, EMAIL_SUPPORT } from "@/lib/constants";

// WhatsApp icon
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.855L.073 23.927a.5.5 0 0 0 .613.613l6.072-1.459A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.93 0-3.742-.522-5.302-1.435L4 21.5l.935-2.698A10.02 10.02 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
    </svg>
  );
}

const QUICK_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Support", href: "#support" },
  { label: "Business Hours", href: "#hours" },
  { label: "FAQ", href: "#faq" },
  { label: "Email Us", href: "#email" },
];

export default function Footer() {
  const handleScroll = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer role="contentinfo" className="bg-slate-900 text-slate-300">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden ring-2 ring-brand-primary/40 flex-shrink-0">
                <Image
                  src="/logo.png"
                  alt={`${BUSINESS.name} logo`}
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-bold text-white text-base leading-tight">Kansal Dryfruit</p>
                <p className="text-brand-primary text-sm font-semibold leading-tight">
                  &amp; Kiryana
                </p>
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-sm">
              {BUSINESS.tagline}
            </p>

            {/* Contact quick info */}
            <div className="space-y-3">
              <a
                href={WHATSAPP_PRIMARY.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-400 hover:text-green-400 transition-colors duration-200 text-sm group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary rounded"
                aria-label={`WhatsApp: ${WHATSAPP_PRIMARY.phone}`}
              >
                <Phone className="w-4 h-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" aria-hidden="true" />
                {WHATSAPP_PRIMARY.phone}
              </a>
              <a
                href={EMAIL_SUPPORT.url}
                className="flex items-center gap-3 text-slate-400 hover:text-brand-primary transition-colors duration-200 text-sm group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary rounded"
                aria-label={`Email: ${EMAIL_SUPPORT.address}`}
              >
                <Mail className="w-4 h-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" aria-hidden="true" />
                {EMAIL_SUPPORT.address}
              </a>
              <div className="flex items-center gap-3 text-slate-400 text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                India
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-5">
              Quick Links
            </h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-3">
                {QUICK_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => { e.preventDefault(); handleScroll(link.href); }}
                      className="text-slate-400 hover:text-white text-sm transition-colors duration-200 hover:translate-x-1 inline-flex items-center gap-1.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary rounded"
                    >
                      <span className="w-1 h-1 bg-brand-primary rounded-full flex-shrink-0 group-hover:bg-brand-accent transition-colors duration-200" aria-hidden="true" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Support Channels */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-5">
              Connect With Us
            </h3>
            <div className="space-y-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.platform}
                  href={social.href}
                  target={social.platform === "WhatsApp" ? "_blank" : undefined}
                  rel={social.platform === "WhatsApp" ? "noopener noreferrer" : undefined}
                  aria-label={social.ariaLabel}
                  className="flex items-center gap-3 text-slate-400 hover:text-white text-sm transition-colors duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary rounded"
                >
                  {social.platform === "WhatsApp" ? (
                    <span className="w-8 h-8 bg-green-600/20 group-hover:bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-200">
                      <WhatsAppIcon className="w-4 h-4 text-green-400 group-hover:text-white" />
                    </span>
                  ) : (
                    <span className="w-8 h-8 bg-blue-600/20 group-hover:bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-200">
                      <Mail className="w-4 h-4 text-blue-400 group-hover:text-white" aria-hidden="true" />
                    </span>
                  )}
                  {social.platform}
                </a>
              ))}

              {/* ONDC Badge */}
              <div className="mt-6 p-4 bg-white/5 rounded-2xl border border-white/10">
                <p className="text-xs text-slate-500 font-medium mb-1">Seller on</p>
                <p className="text-white font-bold text-sm">ONDC Network</p>
                <p className="text-slate-400 text-xs mt-1">Open Network for Digital Commerce</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-sm text-center sm:text-left">
            {BUSINESS.copyright}
          </p>
          <p className="text-slate-500 text-sm flex items-center gap-1.5">
            Built with{" "}
            <Heart
              className="w-3.5 h-3.5 text-red-400 fill-red-400"
              aria-label="love"
            />{" "}
            to provide better customer support.
          </p>
        </div>
      </div>
    </footer>
  );
}
