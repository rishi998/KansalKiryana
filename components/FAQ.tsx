"use client";

import React from "react";
import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ_ITEMS } from "@/lib/constants";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut", delay },
  }),
};

export default function FAQ() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="py-20 lg:py-28 bg-white"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 text-brand-primary rounded-full text-sm font-semibold tracking-wide border border-blue-100">
            <HelpCircle className="w-4 h-4" aria-hidden="true" />
            Frequently Asked Questions
          </span>
          <h2
            id="faq-heading"
            className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 leading-tight"
          >
            Got{" "}
            <span className="text-brand-primary">Questions?</span>
          </h2>
          <p className="mt-4 text-slate-500 text-base sm:text-lg max-w-xl mx-auto">
            Find answers to the most common questions about our services, orders, and support.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          custom={0.1}
          className="bg-white rounded-3xl shadow-card border border-slate-100 overflow-hidden px-4 sm:px-8"
        >
          <Accordion type="single" collapsible className="w-full">
            {FAQ_ITEMS.map((item, index) => (
              <AccordionItem
                key={`faq-item-${index}`}
                value={`item-${index}`}
              >
                <AccordionTrigger id={`faq-trigger-${index}`}>
                  <span className="flex items-center gap-3 text-left">
                    <span
                      className="flex-shrink-0 w-7 h-7 bg-blue-50 text-brand-primary rounded-lg flex items-center justify-center text-xs font-bold"
                      aria-hidden="true"
                    >
                      {index + 1}
                    </span>
                    {item.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="pl-10">{item.answer}</div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Still have questions? */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={0.3}
          className="mt-10 text-center p-8 bg-blue-50 rounded-3xl border border-blue-100"
        >
          <h3 className="text-lg font-bold text-slate-800 mb-2">Still have questions?</h3>
          <p className="text-slate-500 text-sm mb-5">
            Can&apos;t find what you&apos;re looking for? Our support team is here to help.
          </p>
          <a
            href="https://wa.me/918700167422?text=Hi"
            target="_blank"
            rel="noopener noreferrer"
            id="faq-whatsapp-btn"
            aria-label="Ask your question on WhatsApp"
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand-primary hover:bg-brand-secondary text-white font-semibold text-sm rounded-xl shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2"
          >
            Ask Us on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
