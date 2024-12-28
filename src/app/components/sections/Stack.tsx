'use client'
import Image from 'next/image'
import { Tooltip } from "@nextui-org/react";
import { motion } from "framer-motion"

const stackLogos = [
  {
    color: '#1E3A8A', // Azul oscuro
    image: 'css',
    name: 'CSS',
  },
  {
    color: '#B7411C', // Rojo oscuro
    image: 'html5',
    name: 'HTML5',
  },
  {
    color: '#C2A500', // Amarillo oscuro
    image: 'javascript',
    name: 'JavaScript',
  },
  {
    color: '#2C6E9E', // Azul más oscuro
    image: 'react',
    name: 'React',
  },
  {
    color: '#2C8280', // Verde azulado oscuro
    image: 'tailwind',
    name: 'Tailwind CSS',
  },
  {
    color: '#22577E', // Azul oscuro
    image: 'typescript',
    name: 'TypeScript',
  },
  {
    color: '#1A1A1A', // Gris muy oscuro
    image: 'nextjs',
    name: 'Next.js',
  },
  {
    color: '#267326', // Verde oscuro
    image: 'nodejs',
    name: 'Node.js',
  },
  {
    color: '#4B7945', // Verde más oscuro
    image: 'expressjs',
    name: 'Express.js',
  },
  {
    color: '#9B267D', // Rosado oscuro
    image: 'graphql',
    name: 'GraphQL',
  },
  {
    color: '#005A8E', // Azul más oscuro
    image: 'vscode',
    name: 'Visual Studio Code',
  },
  {
    color: '#C13A24', // Naranja oscuro
    image: 'git',
    name: 'Git',
  },
];

const StackLogo = ({ image, name, color, style }: { image: string, name: string, color: string, style: object }) => {
  return (
    <Tooltip content={name}>
      <div
        className='flex justify-center w-16 h-16 items-center backdrop-blur-sm rounded-xl p-3'
        style={{backgroundColor: color, ...style}}
      >
        <Image
          src={`/logos/${image}.svg`}
          width={40}
          height={32}
          alt={`${name} Logo`}
        />
      </div>
    </Tooltip>
  )
}

// Icons
export function StackLogos() {
  return (
      <motion.ul
        animate={{
          rotate: 360, // Rotar el contenedor completo
        }}
        transition={{
          repeat: Infinity,
          duration: 50, // Tiempo para completar una rotación
          ease: "linear",
        }}
        className='border-s-orange-300'
      >
        {stackLogos.map((logo, index) => {
          const angle = (360 / stackLogos.length) * index; // Calcular el ángulo para cada elemento
          const radius = 200; // Radio del círculo

          return (
            <motion.li key={index}
              whileHover={{ scale: 1.1 }}
              animate={{
                rotate: 360, // Rotar el contenedor completo
              }}
            >
              <StackLogo name={logo.name} image={logo.image} color={logo.color}
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: `translate(-50%, -50%) rotate(${angle}deg) translate(${radius}px)`,
                }}
              />
            </motion.li>
          );
        })}
      </motion.ul>
  );
};