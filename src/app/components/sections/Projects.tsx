'use client'
import { ProjectCard } from '@/components/ProjectCard'
import { AnimatePresence, motion } from 'framer-motion'
import { Tabs, Tab } from '@heroui/react'
import { Key, useState } from 'react'

export function Projects() {
	const projects = [
		{
			name: 'Plataforma de Torneos',
			desc: `Permite a organizadores administrar sus torneos y a jugadores inscribirse en ellos, 
					ver resultados de sus partidas jugadas y encontrar
					otros equipos con quienes competir`,
			tech: [
				'vuejs',
				'sass',
				'nestjs',
				'typescript',
				'postgresql',
				'riotGames',
				'chrome',
				'discord',
			],
			liveUrl: 'https://elunderesports.com/torneos',
			bgImg: 'elUnder.png',
			category: 'full-stack',
		},
		{
			name: 'Gestión de Tickets',
			desc: 'App que permite crear, actualizar y eliminar diferentes tickets',
			tech: ['react', 'nextjs', 'mongodb', 'tailwind', 'typescript'],
			githubUrl: 'https://github.com/AlfonsoCasajus/ticketing-app',
			category: 'full-stack',
		},
		{
			name: 'Pokedex',
			desc: `App para ver todos los diferentes pokemones que existen junto a su informacion.
			Cuenta con filtrado y la posibilidad de marcar los pokemones favoritos`,
			tech: ['vuejs', 'css', 'typescript', 'vitejs', 'pokeapi'],
			liveUrl: 'https://pokedex-vert-zeta.vercel.app/',
			bgImg: 'snorlax.png',
			category: 'front-end',
		},
		{
			name: 'Interfaz de Chat',
			desc: `Vista responsive para administrar multiples conversaciones con diferentes usuarios.
			Cuenta con una lista de usuarios, el respectivo chat y su informacion.`,
			tech: ['vuejs', 'tailwind', 'vitejs'],
			liveUrl:
				'https://chat-interface-m9x88nkrq-alfonsos-projects-8df95a00.vercel.app/',
			githubUrl: 'https://github.com/AlfonsoCasajus/chat-interface',
			category: 'front-end',
		},
		{
			name: 'Sliding Puzzle',
			desc: `Imita el catalogo de una video club donde se puede buscar peliculas, series y episodios por nombre
			y ver toda su informacion`,
			tech: ['html5', 'css', 'javascript'],
			liveUrl: 'https://alfonsocasajus.github.io/sliding-puzzle/',
			githubUrl: 'https://github.com/AlfonsoCasajus/sliding-puzzle',
			bgImg: 'monk.png',
			category: 'front-end',
		},
		{
			name: 'Video Club',
			desc: `Juego rompecabezas donde las piezas comienzan desordenadas y se debe mover de a una a la vez para 
			armar la imagen`,
			tech: ['vuejs', 'nuxt', 'sass'],
			liveUrl: 'https://verifarma-videoclub.vercel.app/login',
			githubUrl: 'https://github.com/AlfonsoCasajus/verifarma-videoclub',
			category: 'front-end',
		},
		{
			name: 'Random Brief',
			desc: `App para disparar la creatividad con un brief aleatorio para un proyecto de marketing.`,
			tech: ['html5', 'css', 'javascript'],
			liveUrl: 'https://alfonsocasajus.github.io/randomBrief/index.html',
			githubUrl: 'https://github.com/AlfonsoCasajus/randomBrief',
			category: 'front-end',
		},
		{
			name: 'Gestion de Usuarios y Productos',
			desc: `Plataforma que permite logearse, filtrar y administrar usuarios y productos.
				Incluye animaciones, mensajes de error, loading,  y es responsive`,
			tech: ['nuxt', 'gsap', 'tailwind', 'typescript'],
			liveUrl: 'https://daptee-challenge.vercel.app/users',
			githubUrl: 'https://github.com/AlfonsoCasajus/users-products-admin',
			category: 'front-end',
		},
		{
			name: 'Gestion de Compradores y Productos',
			desc: `Implementacion de un CRUD para un administrador de compras y productos.`,
			tech: [
				'vuejs',
				'vitejs',
				'nestjs',
				'typescript',
				'postgresql',
				'gsap',
			],
			liveUrl: 'https://afrus-front.vercel.app',
			githubUrl: 'https://github.com/AlfonsoCasajus/afrus-front',
			category: 'full-stack',
		},
	]

	const [tab, setTab] = useState<Key>('all')

	const filteredProjects = projects.filter((project) => {
		if (tab === 'all') return true
		return project.category.includes(String(tab))
	})

	return (
		<section className="flex flex-col items-center gap-5 p-3 bg-[#78BBC4] dark:bg-[#002C3E]">
			<Tabs
				aria-label="Front end projects"
				size="lg"
				color="secondary"
				radius="full"
				selectedKey={tab}
				defaultSelectedKey="all"
				onSelectionChange={setTab}
			>
				<Tab key="all" title="Todos" />
				<Tab key="full-stack" title="Full stack" />
				<Tab key="front-end" title="Front end" />
			</Tabs>

			<div className="grid grid-cols-1 grid-rows-1 gap-5 p-6 overflow-hidden sm:grid-cols-2 xl:grid-cols-4">
				<AnimatePresence>
					{filteredProjects.map((project, index) => (
						<motion.span
							key={`project-${index}`}
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 0.8 }}
							transition={{
								duration: 0.5,
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
					))}
				</AnimatePresence>
			</div>
		</section>
	)
}
