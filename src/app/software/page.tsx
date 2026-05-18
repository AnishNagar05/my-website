'use client';

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Link from "next/link";

export default function SoftwarePage() {
  const softwareExperiences = [
    {
      title: "Haylon Technologies – Embedded Software",
      bullets: [
        "Developed BMS firmware in C/C++ and I2C/SMBus protocol on MCUs",
        "Created battery simulation test platforms for circuit integration"
      ]
    },
    {
      title: "Nand2Tetris Capstone Project",
      bullets: [
        "Built a computer from first principles: ALU, CPU, assembler, OS",
        "Used Hack assembly and Jack language to explore system design"
      ]
    },
    {
      title: "SystemVerilog Automation Toolkit",
      bullets: [
        "Wrote scripts to compile, simulate, and report test coverage",
        "Integrated CI testing for HDL projects"
      ]
    },
    {
      title: "Found It! @Illinois",
      bullets: [
        "Developed a full-stack lost-and-found platform using React, NodeJS, and Firebase",
        "Won UI/UX design award at HackIllinois for intuitive experience and real-time functionality"
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-[#EAF6E5] text-[#0C1708] px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Software Experience</h1>
        <p className="text-center mb-12">
          A detailed view of my software engineering and system-level development projects.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {softwareExperiences.map((item, idx) => (
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
