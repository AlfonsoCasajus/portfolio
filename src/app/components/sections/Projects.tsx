'use client';
import { ProjectCard } from "@/components/ProjectCard";
import { motion } from "framer-motion";

export function Projects() {
	const projects = [
		{
			name: 'Plataforma de Torneos',
			desc: `Permite a organizadores administrar sus torneos y a jugadores inscribirse en ellos, 
					ver resultados de sus partidas jugadas y encontrar
					otros equipos con quienes competir`,
			tech: ['vuejs', 'sass', 'nestjs', 'typescript', 'postgresql', 'riotGames', 'chrome', 'discord'],
			liveUrl: 'https://elunderesports.com/torneos',
			bgImg: 'elUnder.png'
		},
		{
			name: 'Gestión de Tickets',
			desc: 'App que permite crear, actualizar y eliminar diferentes tickets',
			tech: ['react', 'nextjs', 'tailwind', 'typescript'],
			githubUrl: 'https://github.com/AlfonsoCasajus/ticketing-app'
		},
		{
			name: 'Pokedex',
			desc: `App para ver todos los diferentes pokemones que existen junto a su informacion.
			Cuenta con filtrado y la posibilidad de marcar los pokemones favoritos`,
			tech: ['vuejs', 'css', 'typescript', 'vitejs', 'pokeapi'],
			liveUrl: 'https://pokedex-vert-zeta.vercel.app/',
			bgImg: 'snorlax.png'
		},
		{
			name: 'Interfaz de Chat',
			desc: `Vista responsive para administrar multiples conversaciones con diferentes usuarios.
			Cuenta con una lista de usuarios, el respectivo chat y su informacion.`,
			tech: ['vuejs', 'tailwind', 'vitejs'],
			liveUrl: 'https://chat-interface-m9x88nkrq-alfonsos-projects-8df95a00.vercel.app/',
			githubUrl: 'https://github.com/AlfonsoCasajus/chat-interface'
		},
		{
			name: 'Sliding Puzzle',
			desc: `Imita el catalogo de una video club donde se puede buscar peliculas, series y episodios por nombre
			y ver toda su informacion`,
			tech: ['html5', 'css', 'javascript'],
			liveUrl: 'https://alfonsocasajus.github.io/sliding-puzzle/',
			githubUrl: 'https://github.com/AlfonsoCasajus/sliding-puzzle',
			bgImg: 'monk.png'
		},
		{
			name: 'Video Club',
			desc: `Juego rompecabezas donde las piezas comienzan desordenadas y se debe mover de a una a la vez para 
			armar la imagen`,
			tech: ['vuejs', 'nuxt', 'sass'],
			liveUrl: 'https://verifarma-videoclub.vercel.app/login',
			githubUrl: 'https://github.com/AlfonsoCasajus/verifarma-videoclub'
		},
		// {
			// 	name: 'Random Brief',
			// 	desc: ``,
			// 	tech: ['html5', 'css', 'javascript'],
			// 	liveUrl: 'https://verifarma-videoclub.vercel.app/login',
			// 	githubUrl: 'https://github.com/AlfonsoCasajus/randomBrief'
			// }
			{
				name: 'Gestion de Usuarios y Productos',
				desc: `Plataforma que permite logearse, filtrar y administrar usuarios y productos.
				Incluye animaciones, mensajes de error, loading,  y es responsive`,
				tech: ['nuxt', 'tailwind', 'typescript'],
				liveUrl: 'https://daptee-challenge.vercel.app/users',
				githubUrl: 'https://github.com/AlfonsoCasajus/users-products-admin'
		}
	]

  return (
    <section
      className="grid grid-cols-1 grid-rows-1 gap-5 p-6 bg-[#78BBC4] dark:bg-[#002C3E] overflow-hidden sm:grid-cols-2 xl:grid-cols-4"
    >
		{ projects.map((project, index) => (
			<motion.span
				key={`project-${index}`}
				animate={{
					opacity: 1,
					x: [-50, 0]
				}}
				transition={{
					delay: index * 0.2,
				}}
			>
				<ProjectCard
					title={project.name}
					description={project.desc}
					technologies={project.tech}
					liveUrl={project.liveUrl}
					bgUrl={project.bgImg}
					githubUrl={project.githubUrl}
				/>
			</motion.span>
		)) }
    </section>
  );
};