'use client';
import { ProjectCard } from "@/components/ProjectCard";
import { motion } from "framer-motion";

export function Proyects() {
  return (
    <section
      className="grid grid-cols-4 grid-rows-1 gap-5 p-6 bg-blue-200 dark:bg-slate-800 overflow-hidden"
    >
		<motion.span
			className="col-span-1 row-span-2"
			animate={{
				opacity: 1,
				x: [-50, 0]
			}}
			transition={{
				delay: 0.2, // Ajusta el delay en segundos
			}}
		>
			<ProjectCard
				title="Plataforma de Torneos"
				description="
					Permite a organizadores administrar sus torneos y a jugadores inscribirse en ellos, 
					ver resultados de sus partidas jugadas y encontrar
					otros equipos con quienes competir
				"
				technologies={['vuejs', 'nestjs', 'typescript', 'postgresql']}
				authentication={['google', 'discord']}
				integrations={['riotGames']}
				liveUrl="https://elunderesports.com/torneos"
			/>
		</motion.span>
		<motion.span
			animate={{
				opacity: 1,
				x: [50, 0]
			}}
			transition={{
				delay: 0.8,
			}}>
			<ProjectCard
				title="Gestión de Tickets"
				description="App que permite crear, actualizar y eliminar diferentes tickets"
				technologies={['react', 'nextjs', 'tailwind', 'typescript']}
				githubUrl="https://github.com/AlfonsoCasajus/ticketing-app"
			/>
		</motion.span>
		<motion.span
			animate={{
				opacity: 1,
				x: [50, 0]
			}}
			transition={{
				delay: 0.4, // Ajusta el delay en segundos
			}}>
			<ProjectCard
				title="Pokedex"
				description="Listado de Pokemones"
				technologies={['vuejs', 'typescript', 'vitejs']}
				githubUrl="https://github.com/AlfonsoCasajus/global-pokedex"
				liveUrl="https://elunderesports.com/torneos"
				integrations={['pokeapi']}
			/>
		</motion.span>
		<motion.span
			className="col-span-1 row-span-1"
			animate={{
				opacity: 1,
				x: [-50, 0]
			}}
			transition={{
				delay: 0.2, // Ajusta el delay en segundos
			}}
		>
			<ProjectCard
				title="Interfaz de Chat"
				description="
					Vista responsive para administrar multiples conversaciones con diferentes usuarios.
					Cuenta la lista de usuarios, el respectivo chat y su informacion.
				"
				technologies={['vuejs', 'tailwind', 'vitejs']}
				githubUrl=" https://github.com/AlfonsoCasajus/verifarma-videoclub"
				liveUrl="https://chat-interface-beta.vercel.app/"
			/>
		</motion.span>
		<motion.span
			animate={{
				opacity: 1,
				y: [50, 0]
			}}
			transition={{
				delay: 0.6,
			}}
			>
			<ProjectCard
				title="Sliding Puzzle"
				description="
					Juego rompecabezas donde las piezas comienzan desordenadas y se debe mover de a una a la vez para
					armar la imagen"
				technologies={['html5', 'css', 'javascript']}
				githubUrl="https://github.com/AlfonsoCasajus/sliding-puzzle"
				liveUrl="https://alfonsocasajus.github.io/sliding-puzzle/"
			/>
		</motion.span>
		<motion.span
			animate={{
				opacity: 1,
				x: [50, 0]
			}}
			transition={{
				delay: 1, // Ajusta el delay en segundos
			}}
			>
			<ProjectCard
				title="Video Club"
				description="Plataforma de torneos"
				technologies={['vuejs', 'nuxt', 'sass']}
				githubUrl=" https://github.com/AlfonsoCasajus/verifarma-videoclub"
				liveUrl="https://elunderesports.com/torneos"
			/>
		</motion.span>
    </section>
  );
};