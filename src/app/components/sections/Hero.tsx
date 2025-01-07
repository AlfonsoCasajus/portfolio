'use client'
import { Button } from "@nextui-org/button";
import { StackLogos } from "../StackLogos";
import { FaFileDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

// Icons
export function Hero() {
  return (
    <section className="min-h-screen grid grid-cols-2 bg-light dark:bg-slate-950 overflow-hidden">
      <span className="self-center justify-self-center">
        <motion.h1
          initial={{ y: "-100vh", opacity: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          className="text-9xl dark:text-cyan-50 mb-2">
            Full Stack <br /> Developer
        </motion.h1>
        <motion.div
          initial={{ x: "-150px", opacity: 0 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex gap-4 mt-8"
        >
          <a
            href="/cv/CV_AlfonsoCasajusPonce.pdf"
            download="CV_AlfonsoCasajusPonce.pdf"
          >
            <Button
              variant="shadow"
              color="secondary"
              endContent={<FaFileDownload />}
              size="lg"
            >
              Descargar CV
            </Button>
          </a>
          <a
            href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer"
          >
             <Button size="lg" endContent={<FaLinkedin />} variant="flat" aria-label="Linkedin" color="primary">
              Linkedin
            </Button>
          </a>
          <a
            href="https://github.com/AlfonsoCasajus" target="_blank" rel="noopener noreferrer"
          >
            <Button size="lg" endContent={<FaGithub />} variant="flat" aria-label="Github">
              Github
            </Button>

          </a>            
        </motion.div>
      </span>
      <motion.span
        className="self-center justify-self-center"
        initial={{ x: "100vw", opacity: 0 }}
        animate={{ opacity: 1, x: 0 }}
				transition={{ type: "spring", duration: 2 }}
      >
          <StackLogos />
      </motion.span>
	  </section>
  );
};