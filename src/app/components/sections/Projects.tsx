'use client';
import { ProjectCard } from "@/components/ProjectCard";
import { motion } from "framer-motion";

export function Projects() {
  return (
    <section
      className="grid grid-cols-1 grid-rows-1 gap-5 p-6 bg-[#78BBC4] dark:bg-[#002C3E] overflow-hidden sm:grid-cols-2 xl:grid-cols-4"
    >
		<motion.span
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
				technologies={['vuejs', 'sass', 'nestjs', 'typescript', 'postgresql', 'riotGames', 'google', 'discord']}
				liveUrl="https://elunderesports.com/torneos"
				bgUrl="elUnder.png"
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
				description="
					App para ver todos los diferentes pokemones que existen junto a su informacion.
					Cuenta con filtrado y la posibilidad de marcar los pokemones favoritos
				"
				technologies={['vuejs', 'typescript', 'vitejs', 'pokeapi']}
				githubUrl="https://github.com/AlfonsoCasajus/global-pokedex"
				liveUrl="https://pokedex-vert-zeta.vercel.app/"
				bgUrl="snorlax.png"
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
					Cuenta con una lista de usuarios, el respectivo chat y su informacion.
				"
				technologies={['vuejs', 'tailwind', 'vitejs']}
				githubUrl=" https://github.com/AlfonsoCasajus/chat-interface"
				liveUrl="https://chat-interface-m9x88nkrq-alfonsos-projects-8df95a00.vercel.app/"
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
				bgUrl="monk.png"
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
				description="
					Imita el catalogo de una video club donde se puede buscar peliculas, series y episodios por nombre
					y ver toda su informacion
				"
				technologies={['vuejs', 'nuxt', 'sass']}
				githubUrl=" https://github.com/AlfonsoCasajus/verifarma-videoclub"
				liveUrl="https://verifarma-videoclub.vercel.app/login"
			/>
		</motion.span>
    </section>
  );
};