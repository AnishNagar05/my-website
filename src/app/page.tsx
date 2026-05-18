'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const popIn = {
  hidden: { opacity: 0, scale: 0.92, y: 24 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
  },
};

const experiences = [
  {
    title: "Hardware",
    href: "/hardware",
    items: [
      "Raytheon – FPGA Engineering Intern",
      "Texas Instruments – Hardware Intern",
      "Haylon Technologies – Embedded Intern",
      "Jetpack Joyride (FPGA Game)",
      "Illini Formula Electric",
      "Autonomous Maze Navigating Robot",
      "FPGA 16-bit RISC Microprocessor",
    ],
  },
  {
    title: "Software",
    href: "/software",
    items: [
      "Haylon Technologies – Embedded Software",
      "Nand2Tetris Capstone Project",
      "SystemVerilog Automation Toolkit",
      "Found It! @Illinois",
    ],
  },
  {
    title: "Consulting",
    href: "/consulting",
    items: [
      "CUBE Consulting – President",
      "Junior Enterprise USA Summit Host",
      "CUBE Consulting – Project Manager",
    ],
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#EAF6E5] text-[#0C1708] px-6 py-10 scroll-smooth">
      <nav className="flex justify-between items-center max-w-6xl mx-auto mb-10">
        <h1 className="text-2xl font-bold">Anish Nagar</h1>
        <div className="flex items-center gap-4 text-sm font-medium sm:text-base">
          <a href="#about" className="hover:text-[#8DC89A]">About</a>
          <a href="#experience" className="hover:text-[#8DC89A]">Experience</a>
        </div>
      </nav>

      <section className="max-w-6xl mx-auto grid gap-8">
        <motion.div
          id="about"
          className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] items-stretch gap-6"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.16 }}
        >
          <motion.div
            variants={popIn}
            transition={{ type: "spring", stiffness: 230, damping: 20 }}
            className="flex flex-col items-center justify-center rounded-lg bg-[#0C1708] px-6 py-8 text-center text-[#EAF6E5] shadow-lg shadow-[#0C1708]/10 sm:px-8"
          >
            <div className="relative h-44 w-44 overflow-hidden rounded-full border-4 border-[#8DC89A] shadow-md shadow-[#0C1708]/25">
              <Image
                src="/profile.jpeg"
                alt="Profile picture of Anish Nagar"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="mt-6 grid gap-2">
              <h2 className="text-3xl font-bold">Anish Nagar</h2>
              <p className="text-lg font-semibold">University of Illinois Urbana-Champaign</p>
              <p>B.S. in Computer Engineering</p>
              <p className="italic text-[#EAF6E5]/85">
                Areas of Focus: Computer Architecture, Digital Design, AI in Hardware
              </p>
            </div>
            <a
              href="https://www.linkedin.com/in/anishnagar05/"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-[#8DC89A] px-4 py-2 text-sm font-semibold text-[#0C1708] transition hover:bg-[#EAF6E5]"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </motion.div>

          <motion.div
            variants={popIn}
            transition={{ type: "spring", stiffness: 230, damping: 20 }}
          >
            <Card className="h-full border-none bg-[#8DC89A] py-0 shadow-lg shadow-[#0C1708]/10">
              <CardContent className="flex h-full flex-col justify-center p-8">
                <h3 className="mb-5 text-3xl font-bold text-[#0C1708]">About Me</h3>
                <p className="text-base leading-7 sm:text-lg">
                  Hi! I’m a university student deeply passionate about computer architecture and designing better hardware systems. I thrive in FPGA/ASIC design and low-level programming, while continuously expanding my knowledge in areas like artificial intelligence and machine learning. I enjoy solving complex technical problems, but I’m equally interested in thinking about systems holistically—from the underlying architecture all the way to the end-user experience and product impact.

I believe great engineering goes beyond functionality; it should create meaningful value for the people using it. That mindset has made me highly product- and business-oriented, always thinking about how technology, strategy, and user needs connect together.

I’m also deeply committed to personal growth. I intentionally seek out uncomfortable and unfamiliar situations because I believe that’s where the greatest development happens. Whether I’m helping scale a startup, exploring new technical domains, or consulting for other companies, I’m always learning, evolving, and pushing myself toward the next challenge.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        <motion.section
          id="experience"
          className="grid grid-cols-1 gap-6 md:grid-cols-3"
          initial="hidden"
          animate="visible"
          transition={{ delayChildren: 0.55, staggerChildren: 0.16 }}
        >
          {experiences.map((experience) => (
            <motion.div
              key={experience.title}
              variants={popIn}
              transition={{ type: "spring", stiffness: 240, damping: 21 }}
              className="h-full"
            >
              <Card className="h-full border-none bg-[#8DC89A] py-0 shadow-lg shadow-[#0C1708]/10 transition-transform hover:-translate-y-1">
                <CardContent className="flex h-full flex-col p-6">
                  <div className="mb-5 flex items-center justify-between gap-4">
                    <h3 className="text-2xl font-bold text-[#0C1708]">{experience.title}</h3>
                    <Link
                      href={experience.href}
                      aria-label={`View ${experience.title} experience`}
                      className="group rounded-md p-2 transition hover:bg-[#0C1708]"
                    >
                      <ArrowUpRight className="h-5 w-5 text-[#0C1708] transition group-hover:text-[#EAF6E5]" />
                    </Link>
                  </div>
                  <ul className="grid gap-3 text-sm leading-6">
                    {experience.items.map((item) => (
                      <li key={item} className="border-l-2 border-[#0C1708] pl-3">
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.section>
      </section>
    </main>
  );
}
