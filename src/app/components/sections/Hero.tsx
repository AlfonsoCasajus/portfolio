'use client'
import { Button } from "@nextui-org/button";
import { StackLogos } from "../StackLogos";
import { FaFileDownload } from "react-icons/fa";
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
        >
          <a
            href="/cv/CV_AlfonsoCasajusPonce.pdf"
            download="CV_AlfonsoCasajusPonce.pdf"
          >
            <Button
              variant="flat"
              color="secondary"
              endContent={<FaFileDownload />}
            >
              Descargar CV
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