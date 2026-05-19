'use client';

import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";

type ProjectDiagramProps = {
  src: string;
  alt: string;
};

export function ProjectDiagram({ src, alt }: ProjectDiagramProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="relative mt-4 block aspect-[4/5] w-full overflow-hidden rounded-md border border-[#8DC89A] bg-[#EAF6E5] md:aspect-[16/9]"
        aria-label="Expand diagram"
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain transition-transform duration-200 hover:scale-[1.01]"
        />
      </button>

      {isOpen ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0C1708]/90 p-4"
          onClick={() => setIsOpen(false)}
        >
          <button
            type="button"
            className="absolute right-4 top-4 rounded-md bg-[#EAF6E5] p-2 text-[#0C1708]"
            onClick={(event) => {
              event.stopPropagation();
              setIsOpen(false);
            }}
            aria-label="Close expanded diagram"
          >
            <X className="h-5 w-5" />
          </button>

          <div
            className="relative h-[88vh] w-[94vw] max-w-7xl rounded-lg bg-[#EAF6E5]"
            onClick={(event) => event.stopPropagation()}
          >
            <Image src={src} alt={alt} fill className="object-contain p-3" />
          </div>
        </div>
      ) : null}
    </>
  );
}
