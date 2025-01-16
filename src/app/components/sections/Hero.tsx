'use client'
import { Button } from "@nextui-org/button";
import { StackLogos } from "../StackLogos";
import { FaFileDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import useWindowSize from "@/hooks/useWindowSize";
import { useTheme } from "next-themes";

// Icons
export function Hero() {
  const { isLg } = useWindowSize();
  const { theme } = useTheme();
  return (
    <section className="relative p-5 lg:min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-light dark:bg-slate-950 overflow-hidden">
      <span className="self-center justify-self-center">
        <motion.h1
          initial={{ y: "-100vh", opacity: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          className="text-6xl md:text-8xl lg:text-9xl dark:text-cyan-50 mb-2">
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
              size={isLg ? 'lg' : 'sm'}
              endContent={<FaFileDownload />}
            >
              Descargar CV
            </Button>
          </a>
          <a
            href="https://www.linkedin.com/in/alfonso-casajus-78b0a11b2/" target="_blank" rel="noopener noreferrer"
          >
             <Button size={isLg ? 'lg' : 'sm'} endContent={<FaLinkedin />} variant="flat" aria-label="Linkedin" color="primary">
              Linkedin
            </Button>
          </a>
          <a
            href="https://github.com/AlfonsoCasajus" target="_blank" rel="noopener noreferrer"
          >
            <Button size={isLg ? 'lg' : 'sm'} endContent={<FaGithub />} variant="flat" aria-label="Github">
              Github
            </Button>

          </a>            
        </motion.div>
      </span>
      {
        isLg && (
          <motion.span
            className="self-center justify-self-center"
            initial={{ x: "100vw", opacity: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", duration: 2 }}
          >
              <StackLogos />
          </motion.span>
        )
      }
      {
        isLg && (
          <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
            <svg
              className="waves"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 24 150 28"
              preserveAspectRatio="none"
              shapeRendering="auto"
            >
              <defs>
                <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
              </defs>
              <g className="parallax">
                <use xlinkHref="#gentle-wave" x="48" y="0" fill={theme === 'dark' ? 'rgba(0, 44, 62, 0.7)' : 'rgb(120, 187, 196, 0.7)'} />
                <use xlinkHref="#gentle-wave" x="48" y="3" fill={theme === 'dark' ? 'rgba(0, 44, 62, 0.5)' : 'rgb(120, 187, 196, 0.5)'} />
                <use xlinkHref="#gentle-wave" x="48" y="5" fill={theme === 'dark' ? 'rgba(0, 44, 62, 0.3)' : 'rgb(120, 187, 196, 0.3)'} />
                <use xlinkHref="#gentle-wave" x="48" y="7" fill={theme === 'dark' ? 'rgba(0, 44, 62, 1)' : 'rgb(120, 187, 196, 1)'} />
              </g>
            </svg>
          </div>
        )
      }
      <style jsx>{`
        .waves {
          position: relative;
          width: 100%;
          height: 15vh;
          margin-bottom: -7px;
          min-height: 100px;
          max-height: 150px;
        }
        .parallax > use {
          animation: move-forever 25s cubic-bezier(.55,.5,.45,.5) infinite;
        }
        .parallax > use:nth-child(1) {
          animation-delay: -2s;
          animation-duration: 7s;
        }
        .parallax > use:nth-child(2) {
          animation-delay: -3s;
          animation-duration: 10s;
        }
        .parallax > use:nth-child(3) {
          animation-delay: -4s;
          animation-duration: 13s;
        }
        .parallax > use:nth-child(4) {
          animation-delay: -5s;
          animation-duration: 20s;
        }
        @keyframes move-forever {
          0% {
            transform: translate3d(-90px,0,0);
          }
          100% { 
            transform: translate3d(85px,0,0);
          }
        }
        @media (max-width: 768px) {
          .waves {
            height: 40px;
            min-height: 40px;
          }
        }
      `}</style>
	  </section>
  );
};