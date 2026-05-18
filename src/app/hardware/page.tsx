'use client';

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HardwarePage() {
  const hardwareExperiences = [
    {
      title: "Texas Instruments – Hardware Intern",
      bullets: [
        "Redesigned GaN flyback converter board on Altium",
        "Built PLECS test bench for PFC validation"
      ]
    },
    {
      title: "Haylon Technologies – Embedded Intern",
      bullets: [
        "Designed BMS PCBs and fuel gauge software",
        "Improved UAV battery life by 70%"
      ]
    },
    {
      title: "Jetpack Joyride (FPGA Game)",
      bullets: [
        "Created real-time VGA rendering on Spartan-7 FPGA",
        "Built UART/SPI I/O pipeline with MicroBlaze"
      ]
    },
    {
      title: "Illini Formula Electric",
      bullets: [
        "Designed regenerative braking BMS on Altium",
        "Coordinated cross-subsystem engineering specs"
      ]
    },
    {
      title: "Autonomous Maze Navigating Robot",
      bullets: [
        "Built object-sensing Arduino robot",
        "Used ultrasonic sensing for real-time navigation"
      ]
    },
    {
      title: "FPGA 16-bit RISC Microprocessor",
      bullets: [
        "Implemented FSM-based instruction flow",
        "Optimized ALU + BRAM pipeline on FPGA"
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-[#EAF6E5] text-[#0C1708] px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Hardware Experience</h1>
        <p className="text-center mb-12">
          A detailed overview of my hardware-related internships, projects, and initiatives.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {hardwareExperiences.map((item, idx) => (
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
