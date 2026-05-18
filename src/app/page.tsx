'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#EAF6E5] text-[#0C1708] px-6 py-12 scroll-smooth">
      <nav className="flex justify-between items-center max-w-5xl mx-auto mb-12">
        <h1 className="text-2xl font-bold">Anish Nagar</h1>
        <div className="space-x-4">
          <a href="#about" className="hover:text-[#8DC89A]">About</a>
          <a href="#experience" className="hover:text-[#8DC89A]">Experience</a>
         
          <a href="#contact" className="hover:text-[#8DC89A]">Contact</a>
        </div>
      </nav>

      <section className="max-w-6xl mx-auto grid gap-12">
        {/* Profile Header */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 items-center gap-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="text-center md:text-left">
            <div className="w-40 h-40 mx-auto md:mx-0 rounded-full overflow-hidden border-4 border-[#8DC89A]">
              <Image src="/profile.jpeg" alt="Profile picture of Anish Nagar" width={160} height={160} />
            </div>
            <p className="mt-4 text-xl">University of Illinois Urbana-Champaign</p>
            <p className="text-lg">B.S. in Computer Engineering</p>
            <p className="text-md italic">Areas of Focus: Computer Architecture, Digital Design, AI in Hardware</p>
            <a href="https://www.linkedin.com/in/anishnagar05/" target="_blank" className="inline-flex items-center mt-4 text-[#0C1708] hover:text-[#8DC89A] hover:underline">
              <Linkedin className="w-5 h-5 mr-1" /> LinkedIn
            </a>
          </div>

          <Card className="bg-[#8DC89A] border-none">
            <CardContent className="p-6">
              <h3 className="text-3xl font-semibold text-[#0C1708] mb-4">About Me</h3>
              <p>
                I’m a hardware engineer who approaches technology with both precision and perspective. While I thrive in low-level programming and digital system design—building everything from interactive games to power electronics—I also view every technical challenge through a business lens. I believe that great engineering doesn’t stop at functionality; it must create meaningful value for the end user. Beyond my technical passion, I’m deeply committed to personal growth. I intentionally seek out uncomfortable and unfamiliar situations because I believe that’s where real development happens. Whether I’m scaling a startup or exploring new domains through consulting, I’m always learning, evolving, and looking for the next challenge to stretch my thinking.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Experience Cards Preview */}
        <motion.section
          id="experience"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Hardware */}
          <Card className="bg-[#8DC89A] border-none max-h-[500px] overflow-y-auto">
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-semibold text-[#0C1708]">Hardware</h3>
                <Link href="/hardware">
                  <ArrowUpRight className="text-[#0C1708] hover:text-[#EAF6E5] w-5 h-5" />
                </Link>
              </div>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>Texas Instruments – Hardware Intern</li>
                <li>Haylon Technologies – Embedded Intern</li>
                <li>Jetpack Joyride (FPGA Game)</li>
                <li>Illini Formula Electric</li>
                <li>Autonomous Maze Navigating Robot</li>
                <li>FPGA 16-bit RISC Microprocessor</li>
              </ul>
            </CardContent>
          </Card>

          {/* Consulting */}
          <Card className="bg-[#8DC89A] border-none max-h-[500px] overflow-y-auto">
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-semibold text-[#0C1708]">Consulting</h3>
                <Link href="/consulting">
                  <ArrowUpRight className="text-[#0C1708] hover:text-[#EAF6E5] w-5 h-5" />
                </Link>
              </div>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>CUBE Consulting – President</li>
                <li>Junior Enterprise USA Summit Host</li>
                <li>CUBE Consulting – Project Manager</li>
              </ul>
            </CardContent>
          </Card>

          {/* Software */}
          <Card className="bg-[#8DC89A] border-none max-h-[500px] overflow-y-auto">
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-semibold text-[#0C1708]">Software</h3>
                <Link href="/software">
                  <ArrowUpRight className="text-[#0C1708] hover:text-[#EAF6E5] w-5 h-5" />
                </Link>
              </div>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>Haylon Technologies – Embedded Software</li>
                <li>Nand2Tetris Capstone Project</li>
                <li>SystemVerilog Automation Toolkit</li>
                <li>Found It! @Illinois</li>
              </ul>
            </CardContent>
          </Card>
        </motion.section>
      </section>
    </main>
  );
}
