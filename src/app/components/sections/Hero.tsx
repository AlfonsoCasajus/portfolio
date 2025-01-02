'use client'
import { Button } from "@nextui-org/button";
import { StackLogos } from "../StackLogos";
import { FaFileDownload } from "react-icons/fa";

// Icons
export function Hero() {
  return (
    <section className="min-h-screen bg-light dark:bg-slate-950 flex items-center">
      <span>
        <h1 className="text-6xl sm:text-8xl dark:text-cyan-50">Full Stack <br /> Developer</h1>
        <a href="/cv/CV_AlfonsoCasajusPonce.pdf" download="CV_AlfonsoCasajusPonce.pdf">
          <Button
            variant="flat"
            color="secondary"
            endContent={<FaFileDownload />}
          >
            Descargar CV
          </Button>
        </a>
      </span>
      <span>
        <StackLogos diameter={475}/>
      </span>
	  </section>
  );
};