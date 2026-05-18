'use client';

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ConsultingPage() {
  const consultingExperiences = [
    {
      title: "CUBE Consulting – President",
      bullets: [
        "Led 70+ student consultants on tech/business projects",
        "Established partnerships with Deloitte, Bain, and EY"
      ]
    },
    {
      title: "Junior Enterprise USA Summit Host",
      bullets: [
        "Coordinated national summit with 100+ attendees",
        "Secured sponsorships, organized panels, collaborated with KPMG"
      ]
    },
    {
      title: "CUBE Consulting – Project Manager",
      bullets: [
        "Led team optimizing microcontroller firmware and SPI/UART communication"
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-[#EAF6E5] text-[#0C1708] px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Consulting Experience</h1>
        <p className="text-center mb-12">
          A comprehensive look at my leadership and strategic experience in consulting.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {consultingExperiences.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="bg-[#8DC89A] border-none">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-[#0C1708] mb-3">{item.title}</h3>
                  <ul className="list-disc list-inside space-y-1 text-[#0C1708] text-sm">
                    {item.bullets.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/">
            <span className="text-[#0C1708] hover:text-[#8DC89A] hover:underline">← Back to Home</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
