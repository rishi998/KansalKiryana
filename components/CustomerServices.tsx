"use client";

import React from "react";
import { motion } from "framer-motion";
import { CUSTOMER_SERVICES } from "@/lib/constants";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", delay },
  }),
};

const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut", delay: i * 0.08 },
  }),
};

export default function CustomerServices() {
  return (
    <section
      aria-labelledby="services-heading"
      className="py-20 lg:py-28 bg-brand-bg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 text-brand-primary rounded-full text-sm font-semibold tracking-wide border border-blue-100">
            🛠️ What We Help With
          </span>
          <h2
            id="services-heading"
            className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 leading-tight"
          >
            Our Customer{" "}
            <span className="text-brand-primary">Services</span>
          </h2>
          <p className="mt-4 text-slate-500 text-base sm:text-lg max-w-2xl mx-auto">
            We are here to help with everything — from tracking your order to arranging bulk purchases.
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          role="list"
          aria-label="Customer services offered"
        >
          {CUSTOMER_SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                role="listitem"
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="group bg-white rounded-3xl p-7 shadow-card hover:shadow-card-hover border border-slate-100 hover:border-blue-100 transition-all duration-300 cursor-default flex flex-col gap-4"
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-blue-50 group-hover:bg-brand-primary rounded-2xl flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                  <Icon
                    className="w-7 h-7 text-brand-primary group-hover:text-white transition-colors duration-300"
                    aria-hidden="true"
                  />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-brand-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
