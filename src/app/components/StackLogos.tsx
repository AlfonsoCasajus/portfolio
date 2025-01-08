import Image from 'next/image'
import { Tooltip } from "@nextui-org/react";
import { motion } from "framer-motion"
import useWindowSize from '@/hooks/useWindowSize';


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
    color: '#2e664d', // Azul más oscuro
    image: 'vuejs',
    name: 'Vue Js',
  },
  {
    color: '#6b2b3a', // Azul más oscuro
    image: 'nestjs',
    name: 'Nest Js',
  },
  {
    color: '#22577E', // Azul oscuro
    image: 'typescript',
    name: 'TypeScript',
  },
  {
    color: '#2b2b2b', // Gris muy oscuro
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
    color: '#264c6b', // Rosado oscuro
    image: 'postgresql',
    name: 'PostgreSQL',
  },
  {
    color: '#7a46c9', // Rosado oscuro
    image: 'vitejs',
    name: 'Vite',
  },
  {
    color: '#142c26', // Rosado oscuro
    image: 'nuxt',
    name: 'Nuxt Js',
  },
  {
    color: '#63314a', // Rosado oscuro
    image: 'sass',
    name: 'Sass',
  },
  {
    color: '#005A8E', // Azul más oscuro
    image: 'vscode',
    name: 'Visual Studio Code',
  },
  {
    color: '#972d1d', // Naranja oscuro
    image: 'git',
    name: 'Git',
  },
];

const StackLogo = ({ image, name, color, style }: { image: string, name: string, color: string, style: object }) => {
  const { isLg } = useWindowSize();
  return (
    <Tooltip content={
      <p className="text-slate-950 dark:text-slate-200">
        {name}
      </p>
    }>
      <div
        className='flex justify-center items-center backdrop-blur-sm rounded-xl p-2 lg:w-16 lg:h-16 lg:p-3'
        style={{backgroundColor: color, ...style}}
      >
        <Image
          src={`/logos/${image}.svg`}
          width={isLg ? 40 : 25}
          height={isLg ? 32 : 20}
          alt={`${name} Logo`}
        />
      </div>
    </Tooltip>
  )
}

// Icons
export function StackLogos() {
  const { isLg } = useWindowSize();
  return (
    <div>
      <motion.ul
        animate={{
          rotate: -360, // Rotar el contenedor completo
        }}
        transition={{
          repeat: Infinity,
          duration: 50, // Tiempo para completar una rotación
          ease: "linear",
        }}
        className="flex justify-center items-center w-[250px] h-[250px] lg:w-[475px] lg:h-[475px]"
      >
        {stackLogos.map((logo, index) => {
          const angle = (360 / stackLogos.length) * index; // Calcular el ángulo para cada elemento
          const radius = isLg ? 250 : 140; // Radio del círculo

          return (
            <motion.li key={index}
              whileHover={{ scale: 1.1 }}
              className='absolute left-1/2 top-1/2'
            >
              <StackLogo name={logo.name} image={logo.image} color={logo.color}
                style={{
                  transform: `translate(-50%, -50%) rotate(${angle}deg) translate(${radius}px)`,
                }}
              />
            </motion.li>
          );
        })}
      </motion.ul>
    </div>
  );
};