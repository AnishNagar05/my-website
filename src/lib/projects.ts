export const projectData = [
  {
    slug: "out-of-order-risc-v-processor",
    title: "Designing an Out-of-Order RISC-V Processor",
    type: "Computer Architecture",
    difficulty: 5,
    summary:
      "A processor design project centered on scheduling, hazards, speculation, register renaming, and commit logic.",
    description:
      "This project focused on designing and implementing a high-performance out-of-order RV32IM RISC-V processor in SystemVerilog while staying within a strict 300k-cell area budget. The processor was built incrementally across several checkpoints, beginning with the frontend fetch pipeline, instruction cache integration, and cacheline buffering to improve fetch throughput. The design later expanded to include the core out-of-order execution engine, featuring register renaming, a physical register file, reservation stations, reorder buffer (ROB), speculative execution support, and multiple execution units for ALU, multiplication, and division operations. Additional milestones introduced full branch and memory support through a load-store queue, D-cache integration, DRAM arbitration, and branch recovery mechanisms, allowing the processor to correctly execute the full RV32IM ISA while maintaining in-order retirement semantics. Extensive verification and debugging were performed using Synopsys VCS, Verdi, directed assembly tests, and RVFI checks.\n\nThe final phase of the project focused on advanced architectural optimizations to improve IPC, reduce stalls, and better exploit instruction- and memory-level parallelism. Features such as a GShare branch predictor, Branch Target Buffer (BTB), Return Address Stack (RAS), SRAM-backed prediction structures, stride and next-line prefetchers, split load/store queues, load-store forwarding, and a post-commit store buffer were implemented to improve frontend efficiency and memory performance. Throughout the project, significant architectural tradeoffs were required to balance performance, area, power, and timing constraints. Structures such as the ROB and physical register file were resized to meet synthesis limits, and branch prediction hardware was redesigned using SRAM macros to reduce area. The final processor achieved IPC values up to 0.68 across benchmark programs while synthesizing to approximately 295k um² and successfully operating at 400 MHz.",
    highlights: [
      "Implemented register renaming, a physical register file, reservation stations, ROB-based retirement, speculative execution, and multiple execution units.",
      "Added load-store queue support, D-cache integration, DRAM arbitration, branch recovery, and full RV32IM execution while preserving in-order retirement.",
      "Improved IPC using GShare prediction, BTB, RAS, SRAM-backed prediction structures, prefetchers, split load/store queues, forwarding, and a post-commit store buffer.",
      "Balanced performance, area, power, and timing to synthesize near 295k um^2 and operate at 400 MHz.",
    ],
    diagram: "/projects/ooo-risc-v-processor/ooo_diagram.png",
    pdf: "/projects/ooo-risc-v-processor/writeup.pdf",
    repository: "https://github.com/AnishNagar05/Out-of-Order-Processor",
    stages: [
      {
        stage: "Fetch",
        structures:
          "PC Increment, I-Cache/Line Buffer, Next-Line Prefetch, GShare/RAS/BTB, Instruction Queue",
        role: "Choose the next PC, fetch instructions, predict branches, buffer fetched instructions",
      },
      {
        stage: "Decode",
        structures: "Decode Stage, fetch/decode register",
        role: "Convert raw instruction bits into control signals, identify source/destination registers, instruction type",
      },
      {
        stage: "Rename",
        structures: "Rename, RAT, Free List, RRAT",
        role: "Map architectural registers to physical registers, allocate new physical destination registers, save old mappings for later free",
      },
      {
        stage: "Dispatch",
        structures: "Dispatch, ROB, Reservation Stations, Load Queue, Store Queue",
        role: "Place the renamed instruction into backend structures so it can wait for operands and eventually issue",
      },
      {
        stage: "Issue",
        structures: "Reservation Stations, Select Logic, Physical Register File",
        role: "Pick ready instructions, read operands, send operations to ALU/MUL/DIV/BR/LSU",
      },
      {
        stage: "Execute",
        structures: "ALU, MUL, DIV, BR Unit, LSU/AGU",
        role: "Actually perform computation, branch resolution, address generation, load/store handling",
      },
      {
        stage: "Writeback",
        structures: "CDB, Physical Register File, ROB, Reservation Stations, LQ/SQ",
        role: "Broadcast completed result, write result to PRF, wake up dependent instructions, mark ROB entry ready",
      },
      {
        stage: "Commit",
        structures: "ROB, RRAT, Architectural Register File, Free List, Store Queue",
        role: "Retire instructions in order, update committed mappings/state, free stale physical registers, commit stores",
      },
    ],
  },
  {
    slug: "in-order-risc-v-processor",
    title: "Designing an In-Order RISC-V Processor",
    type: "Computer Architecture",
    difficulty: 4,
    summary:
      "A cleaner RISC-V processor path focused on pipeline stages, control logic, datapath design, stalls, and forwarding.",
    description:
      "This project focused on designing and implementing a 5-stage pipelined in-order RV32I RISC-V processor in SystemVerilog. The processor architecture followed the classic fetch, decode, execute, memory, and writeback pipeline organization while supporting the full RV32I instruction set. The design included instruction and data memory interfaces, hazard detection, pipeline flushing, forwarding logic, and branch handling using a static not-taken branch predictor. Special attention was given to correctly handling stalls caused by memory latency, pipeline hazards, and branch mispredictions while maintaining correct architectural state throughout execution. The processor was partitioned into modular pipeline stages connected through structured pipeline registers to improve readability, debugging, and scalability.\n\nA major focus of the project was verification, correctness, and efficient pipeline behavior. Forwarding paths were implemented to reduce data hazards and improve throughput, including common EX, MEM, and WB forwarding scenarios. Flush and stall mechanisms were carefully designed to prevent invalid instructions from modifying the architectural state during branch mispredictions or memory stalls. The processor was verified using directed assembly tests, randomized testing infrastructure, waveform debugging through simulation tools, and RVFI integration with Spike for formal correctness checking. Through this project, we gained strong experience in pipelined CPU design, hazard management, speculative control flow handling, memory interfacing, and low-level hardware debugging while building a fully functional in-order RISC-V processor from the ground up.",
    highlights: [
      "Implements pipeline stage behavior and control sequencing.",
      "Handles hazards through stalls, flushing, and forwarding logic.",
      "Builds intuition for how ISA decisions shape processor datapaths.",
    ],
    diagram: "/projects/in-order-processor/in_order_diagram.png",
    repository: "https://github.com/AnishNagar05/In-Order-Processor",
  },
  {
    slug: "operating-system",
    title: "Designing an Operating System",
    type: "Systems",
    difficulty: 5,
    summary:
      "A systems project exploring kernel ideas, scheduling, memory management, system calls, and hardware/software boundaries.",
    description:
      "Developed a Unix-inspired operating system kernel in C for RISC-V as part of a computer systems engineering project. Implemented core OS functionality including virtual memory with Sv39 paging, process abstraction, ELF program loading, system calls, preemptive multitasking, context switching between user and supervisor mode, and a custom KTFS filesystem with persistent read/write support. Built device drivers for UART, RTC, VIRTIO block devices, and ramdisk interfaces while integrating a unified I/O abstraction layer for files, devices, pipes, and listings.\n\nThe system supported multitasking user programs, interprocess communication through UNIX-style pipes, shell execution, and filesystem utilities such as ls, cat, wc, and rm. Additional work included implementing a configurable block cache, page fault handling with lazy allocation, process forking, synchronization primitives, and debugging support using GDB and QEMU. The final OS was capable of running interactive text-based games such as Trek, Rogue, and Zork entirely on the custom kernel environment.",
    highlights: [
      "Explores kernel structure and process-level abstractions.",
      "Connects memory management decisions to hardware support.",
      "Frames OS design as a bridge between architecture and application behavior.",
    ],
    repository: "https://github.com/AnishNagar05/Operating-System-Project",
  },
  {
    slug: "fpga-game",
    title: "Designing a Game on an FPGA",
    type: "FPGA / Graphics",
    difficulty: 3,
    summary:
      "A real-time FPGA game with VGA rendering, gameplay logic, peripheral communication, and hardware-controlled interaction.",
    description:
      "This project implements a hardware-driven game on an FPGA. The design combines real-time graphics, control logic, and peripheral communication to create a playable system constrained by hardware timing and resource limits.",
    highlights: [
      "Builds a real-time rendering path for display output.",
      "Implements gameplay state machines directly in hardware.",
      "Integrates I/O paths for controls and system interaction.",
    ],
    diagram: "/projects/fpga_game/fpga_game_diagram.png",
    pdf: "/projects/fpga_game/fpga_game_report.pdf",
  },
  {
    slug: "16-bit-risc-microprocessor",
    title: "Designing a 16-bit RISC Microprocessor on an FPGA",
    type: "Digital Design",
    difficulty: 3,
    summary:
      "A custom microprocessor project covering instruction flow, ALU behavior, FSM control, and memory interaction.",
    description:
      "This project builds a compact 16-bit RISC microprocessor to understand processor organization from the ground up. The work includes instruction definition, datapath design, ALU behavior, finite-state control, memory interaction, and verification of execution flow.",
    highlights: [
      "Implements a custom instruction execution path.",
      "Uses FSM-based control for sequencing processor behavior.",
      "Connects datapath components into a working microprocessor model.",
    ],
    diagram: "/projects/16-bit-mcu/16-bit-micro_diagram.png",
    pdf: "/projects/16-bit-mcu/16-bit-microprocessor.pdf",
  },
  {
    slug: "found-it-illinois",
    title: "Found IT @Illinois",
    type: "Full Stack",
    difficulty: 2,
    summary:
      "A campus lost-and-found platform built with React, Node.js, and Firebase, recognized for UI/UX at HackIllinois.",
    description:
      "Found IT @Illinois is a campus-focused lost-and-found platform designed around fast posting, search, and item recovery. The project emphasizes useful product behavior, clean UI/UX, and real-time data updates for a common student problem.",
    highlights: [
      "Built a full-stack application with React, Node.js, and Firebase.",
      "Designed workflows for listing, finding, and recovering lost items.",
      "Won a UI/UX design award at HackIllinois.",
    ],
    video: "https://www.youtube.com/watch?v=19altnDTzoQ",
  },
];

export type Project = (typeof projectData)[number];

export function getProject(slug: string) {
  return projectData.find((project) => project.slug === slug);
}
