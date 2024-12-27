'use client'
import Image from 'next/image'
import { Tooltip } from "@nextui-org/react";

const stackLogos = [
  {
    color: '#264de4', // Azul
    image: 'css',
    name: 'CSS',
  },
  {
    color: '#68A063', // Verde
    image: 'expressjs',
    name: 'Express.js',
  },
  {
    color: '#F05033', // Naranja
    image: 'git',
    name: 'Git',
  },
  {
    color: '#E434AA', // Rosado
    image: 'graphql',
    name: 'GraphQL',
  },
  {
    color: '#E34F26', // Rojo
    image: 'html5',
    name: 'HTML5',
  },
  {
    color: '#F7DF1E', // Amarillo
    image: 'javascript',
    name: 'JavaScript',
  },
  {
    color: '#000000', // Negro
    image: 'nextjs',
    name: 'Next.js',
  },
  {
    color: '#339933', // Verde
    image: 'nodejs',
    name: 'Node.js',
  },
  {
    color: '#61DAFB', // Azul celeste
    image: 'react',
    name: 'React',
  },
  {
    color: '#38B2AC', // Verde azulado
    image: 'tailwind',
    name: 'Tailwind CSS',
  },
  {
    color: '#3178C6', // Azul
    image: 'typescript',
    name: 'TypeScript',
  },
  {
    color: '#007ACC', // Azul claro
    image: 'vscode',
    name: 'Visual Studio Code',
  },
];

const StackLogo = ({ image, name, color }: { image: string, name: string, color: string }) => {
  return (
    <Tooltip content={name}>
      <div
        className='flex justify-center items-center backdrop-blur-sm rounded-xl p-2'
        style={{backgroundColor: color}}
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
export function Stack() {
  return (
    <section className="flex flex-col justify-center items-center bg-slate-450">
    <h2>Stack</h2>
    <ul className='flex gap-3 flex-wrap'>
      {
        stackLogos.map((logo, index) => (
          <li key={index}>
            <StackLogo name={logo.name} image={logo.image} color={logo.color} />
          </li>
        ))
      }
    </ul>
	</section>
  );
};