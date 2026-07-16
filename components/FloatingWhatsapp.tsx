"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { WHATSAPP_PRIMARY } from "@/lib/constants";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.855L.073 23.927a.5.5 0 0 0 .613.613l6.072-1.459A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.93 0-3.742-.522-5.302-1.435L4 21.5l.935-2.698A10.02 10.02 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
    </svg>
  );
}

export default function FloatingWhatsapp() {
  const [tooltipVisible, setTooltipVisible] = useState(true);

  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
      aria-label="WhatsApp floating support button"
    >
      {/* Tooltip / dismissable card */}
      <AnimatePresence>
        {tooltipVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 10 }}
            transition={{ duration: 0.25 }}
            role="tooltip"
            id="whatsapp-tooltip"
            className="relative bg-white rounded-2xl shadow-xl border border-slate-100 px-4 py-3 max-w-[200px] text-right"
          >
            {/* Close button */}
            <button
              onClick={() => setTooltipVisible(false)}
              aria-label="Dismiss WhatsApp help tooltip"
              className="absolute -top-2 -left-2 w-5 h-5 bg-slate-200 hover:bg-slate-300 rounded-full flex items-center justify-center text-slate-500 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
            >
              <X className="w-3 h-3" aria-hidden="true" />
            </button>

            <p className="font-bold text-slate-800 text-sm">Need Help?</p>
            <p className="text-slate-500 text-xs mt-0.5">
              Chat with us on WhatsApp
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp button */}
      <motion.div
        className="relative"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200, damping: 15 }}
      >
        {/* Animated pulse ring */}
        <span
          className="absolute inset-0 rounded-full bg-green-400 animate-pulse-ring"
          aria-hidden="true"
        />
        <span
          className="absolute inset-0 rounded-full bg-green-400 animate-pulse-ring [animation-delay:0.5s]"
          aria-hidden="true"
        />

        <a
          href={WHATSAPP_PRIMARY.url}
          target="_blank"
          rel="noopener noreferrer"
          id="floating-whatsapp-btn"
          aria-label="Chat on WhatsApp for support"
          aria-describedby="whatsapp-tooltip"
          onMouseEnter={() => setTooltipVisible(true)}
          className="relative w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-whatsapp hover:shadow-xl transition-all duration-300 hover:scale-110 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-green-400 focus-visible:ring-offset-2"
        >
          <WhatsAppIcon className="w-8 h-8 text-white" />
        </a>
      </motion.div>
    </div>
  );
}
