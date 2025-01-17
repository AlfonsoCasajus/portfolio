import Image from 'next/image'
import { Tooltip } from "@nextui-org/react";
import { motion } from "framer-motion"
import useWindowSize from '@/hooks/useWindowSize';
import { logos } from "@/app/utils/logos";

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
        {logos.map((logo, index) => {
          const amount = 17;
          if (index > amount) return;
          const angle = (360 / amount) * index; // Calcular el ángulo para cada elemento
          const radius = isLg ? 250 : 140; // Radio del círculo

          return (
            <motion.li key={index}
              whileHover={{ scale: 1.1 }}
              className='absolute left-1/2 top-1/2'
            >
              <StackLogo name={logo.name} image={logo.key} color={logo.color}
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