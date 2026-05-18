'use client';

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Briefcase,
  Calendar,
  ChevronDown,
  Cpu,
  Gamepad2,
  Linkedin,
  MonitorCog,
  Users,
} from "lucide-react";

const palette = {
  background: "#EAF6E5",
  accent: "#8DC89A",
  ink: "#0C1708",
};

const popIn = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

const workExperience = [
  {
    company: "AMD",
    role: "CPU Debug Intern",
    dates: "September 2026 - December 2026",
    logo: "/logos/amd_logo.svg",
    bullets: [
      "Incoming role focused on CPU debug, validation workflows, and low-level hardware problem solving for laptop processors.",
    ],
  },
  {
    company: "Raytheon",
    role: "FPGA Engineering Intern",
    dates: "June 2026 - August 2026",
    logo: "/logos/rtx_logo.png",
    bullets: [
      "FPGA engineering role focused on digital logic design, hardware implementation, synthesis, and verification.",
    ],
  },
  {
    company: "Texas Instruments",
    role: "Hardware Applications Engineering Intern (Digital & Analog)",
    dates: "June 2025 - August 2025",
    location: "Dallas, TX",
    logo: "/logos/ti_logo.svg",
    bullets: [
      "Built a Machine Learning Accelerator on a FPGA, integrating a custom UART protocol, dual-port BRAM, and a fully connected neural network core to classify MNIST digits in real time with 96% accuracy.",
      "Designed a reprogrammable GaN FET flyback converter PCB in Altium Designer to support multiple FET configurations, then tested efficiency and thermal performance across different FETs for comparative evaluation.",
      "Developed and validated a PLECS thermal simulation test bench for synchronous buck/boost converters with 96% correlation to physical measurements, enabling faster design iteration and reduced prototyping costs.",
    ],
  },
  {
    company: "Haylon Technologies",
    role: "Embedded Software Engineering Intern",
    dates: "May 2024 - August 2024",
    location: "Iselin, NJ",
    logo: "/logos/haylon_logo.jpeg",
    bullets: [
      "Developed a Battery Management System (BMS) by programming I2C/SMBus protocols in C/C++ on MCUs and fuel gauges, ensuring seamless integration with existing company circuitry and infrastructure.",
      "Engineered a PCB on KiCad to leverage diverse battery chemistries and utilize machine learning algorithms to accurately predict battery current draw, resulting in a 70% increase in battery life for UAVs.",
    ],
  },
];

const projects = [
  {
    title: "Designing an Out-of-Order RISC-V Processor",
    type: "Computer Architecture",
    detail:
      "A processor design project centered on scheduling, hazards, speculation, register renaming, and commit logic.",
  },
  {
    title: "Designing an In-Order RISC-V Processor",
    type: "Computer Architecture",
    detail:
      "A cleaner RISC-V processor path focused on pipeline stages, control logic, datapath design, stalls, and forwarding.",
  },
  {
    title: "Designing an Operating System",
    type: "Systems",
    detail:
      "A systems project exploring kernel ideas, scheduling, memory management, system calls, and hardware/software boundaries.",
  },
  {
    title: "Designing a Game on an FPGA",
    type: "FPGA / Graphics",
    detail:
      "A real-time FPGA game with VGA rendering, gameplay logic, peripheral communication, and hardware-controlled interaction.",
  },
  {
    title: "Designing a 16-bit RISC Microprocessor",
    type: "Digital Design",
    detail:
      "A custom microprocessor project covering instruction flow, ALU behavior, FSM control, and memory interaction.",
  },
  {
    title: "Nand2Tetris Project",
    type: "Computer Systems",
    detail:
      "A from-first-principles systems build moving from gates to an ALU, CPU, assembler, OS, and software layers.",
  },
  {
    title: "Found IT @Illinois",
    type: "Full Stack",
    detail:
      "A campus lost-and-found platform built with React, Node.js, and Firebase, recognized for UI/UX at HackIllinois.",
  },
];

function SectionTitle({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="mb-6">
      <p className="text-sm font-bold uppercase tracking-[0.16em] opacity-70">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-3xl font-bold sm:text-4xl">{title}</h2>
    </div>
  );
}

export default function HomePage() {
  return (
    <main
      className="min-h-screen scroll-smooth px-5 py-8 sm:px-8"
      style={{ backgroundColor: palette.background, color: palette.ink }}
    >
      <nav className="mx-auto mb-8 flex max-w-6xl items-center justify-between gap-5">
        <a href="#about" className="text-xl font-bold sm:text-2xl">
          Anish Nagar
        </a>
        <div className="flex items-center gap-4 text-sm font-semibold sm:text-base">
          <a href="#work" className="hover:underline">Work</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#initiatives" className="hover:underline">Initiatives</a>
        </div>
      </nav>

      <div className="mx-auto grid max-w-6xl gap-14">
        <motion.section
          id="about"
          className="grid gap-6 lg:grid-cols-[360px_1fr]"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.14 }}
        >
          <motion.div
            variants={popIn}
            transition={{ type: "spring", stiffness: 220, damping: 22 }}
            className="rounded-lg p-7 text-center shadow-lg"
            style={{ backgroundColor: palette.ink, color: palette.background }}
          >
            <div
              className="relative mx-auto h-44 w-44 overflow-hidden rounded-full border-4"
              style={{ borderColor: palette.accent }}
            >
              <Image
                src="/profile.jpeg"
                alt="Profile picture of Anish Nagar"
                fill
                className="object-cover"
                priority
              />
            </div>

            <h1 className="mt-6 text-3xl font-bold">Anish Nagar</h1>
            <div className="mt-4 grid gap-2 text-base">
              <p className="font-semibold">University of Illinois Urbana-Champaign</p>
              <p>B.S. in Computer Engineering</p>
              <p className="italic opacity-85">
                Computer Architecture, Digital Design, AI in Hardware
              </p>
            </div>

            <a
              href="https://www.linkedin.com/in/anishnagar05/"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-bold transition hover:opacity-85"
              style={{ backgroundColor: palette.accent, color: palette.ink }}
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
          </motion.div>

          <motion.article
            variants={popIn}
            transition={{ type: "spring", stiffness: 220, damping: 22 }}
            className="rounded-lg p-7 shadow-lg sm:p-9"
            style={{ backgroundColor: palette.accent, color: palette.ink }}
          >
            <p className="text-sm font-bold uppercase tracking-[0.16em] opacity-70">
              About Me
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Hardware-minded engineer with a product lens.
            </h2>
            <div className="mt-5 grid gap-4 text-base leading-7 sm:text-lg">
              <p>
                Hi! I’m a university student deeply passionate about computer architecture and designing better hardware systems. I thrive in FPGA/ASIC design and low-level programming, while continuously expanding my knowledge in artificial intelligence and machine learning.
              </p>
              <p>
                I enjoy solving complex technical problems, but I’m equally interested in thinking about systems holistically, from the underlying architecture all the way to the end-user experience and product impact.
              </p>
              <p>
                I’m also deeply committed to personal growth. Whether I’m helping scale a startup, exploring new technical domains, or consulting for other companies, I’m always learning and pushing myself toward the next challenge.
              </p>
            </div>
          </motion.article>
        </motion.section>

        <section id="work" className="scroll-mt-8">
          <SectionTitle eyebrow="Work Experience" title="Industry Roles" />

          <div className="grid gap-4">
            {workExperience.map((item, index) => (
              <motion.article
                key={`${item.company}-${item.role}`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.06 }}
                className="grid gap-4 rounded-lg border p-5 shadow-sm md:grid-cols-[280px_1fr]"
                style={{
                  backgroundColor: palette.background,
                  borderColor: `${palette.ink}22`,
                }}
              >
                <div>
                  {item.logo ? (
                    <div className="mb-4 flex h-11 items-center">
                      <Image
                        src={item.logo}
                        alt={`${item.company} logo`}
                        width={110}
                        height={44}
                        className="h-auto max-h-11 w-auto object-contain"
                      />
                    </div>
                  ) : (
                    <div
                      className="mb-4 flex h-11 w-11 items-center justify-center rounded-md"
                      style={{ backgroundColor: palette.ink, color: palette.background }}
                    >
                      <Briefcase className="h-5 w-5" />
                    </div>
                  )}
                  <h3 className="text-2xl font-bold">{item.company}</h3>
                  <p className="mt-1 font-semibold opacity-75">{item.role}</p>
                  {"location" in item ? (
                    <p className="mt-2 text-sm font-semibold opacity-70">{item.location}</p>
                  ) : null}
                  <p className="mt-3 inline-flex items-center gap-2 text-sm font-semibold opacity-70">
                    <Calendar className="h-4 w-4" />
                    {item.dates}
                  </p>
                </div>

                <div className="grid gap-4">
                  <ul className="grid gap-3 leading-7">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="border-l-2 pl-3" style={{ borderColor: palette.accent }}>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="projects" className="scroll-mt-8">
          <SectionTitle eyebrow="Project Experience" title="Click a Project to Expand" />

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <details
                key={project.title}
                className="group rounded-lg border p-5 shadow-sm"
                style={{
                  backgroundColor: palette.accent,
                  borderColor: `${palette.ink}22`,
                  color: palette.ink,
                }}
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                  <div>
                    <div
                      className="mb-4 flex h-11 w-11 items-center justify-center rounded-md"
                      style={{ backgroundColor: palette.ink, color: palette.background }}
                    >
                      {project.type.includes("FPGA") ? (
                        <Gamepad2 className="h-5 w-5" />
                      ) : project.type.includes("Systems") ? (
                        <MonitorCog className="h-5 w-5" />
                      ) : (
                        <Cpu className="h-5 w-5" />
                      )}
                    </div>
                    <p className="text-sm font-bold uppercase tracking-[0.12em] opacity-65">
                      {project.type}
                    </p>
                    <h3 className="mt-2 text-xl font-bold">{project.title}</h3>
                  </div>
                  <ChevronDown className="mt-1 h-5 w-5 shrink-0 transition group-open:rotate-180" />
                </summary>

                <p className="mt-5 border-t pt-5 leading-7" style={{ borderColor: `${palette.ink}33` }}>
                  {project.detail}
                </p>
              </details>
            ))}
          </div>
        </section>

        <section id="initiatives" className="pb-8 scroll-mt-8">
          <SectionTitle eyebrow="Initiatives" title="Consulting Leadership" />

          <article
            className="grid gap-6 rounded-lg p-7 shadow-lg md:grid-cols-[260px_1fr]"
            style={{ backgroundColor: palette.accent, color: palette.ink }}
          >
            <div>
              <div
                className="mb-4 flex h-12 w-12 items-center justify-center rounded-md"
                style={{ backgroundColor: palette.ink, color: palette.background }}
              >
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold">President, Consulting Organization</h3>
            </div>
            <p className="text-lg leading-7">
              I led a consulting organization where student teams worked with companies across technical and business problems. This work strengthened how I think about client needs, team leadership, problem framing, and the connection between engineering decisions and company strategy.
            </p>
          </article>
        </section>
      </div>
    </main>
  );
}
