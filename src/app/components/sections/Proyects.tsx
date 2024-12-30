'use client'
import { ProjectCard } from "@/components/ProjectCard";
import { motion } from "framer-motion";

// Icons
export function Proyects() {
  return (
    <section
		className="grid grid-cols-3 grid-rows-3 gap-4 p-6 bg-blue-200 dark:bg-slate-800 overflow-hidden"
	>
		<motion.span
			className="col-span-1 row-span-3"
			animate={{
				opacity: 1,
				x: [-50, 0]
			}}
			transition={{
				delay: 0.2, // Ajusta el delay en segundos
			}}
		>
			<ProjectCard
				title="Torneos"
				description="Plataforma de torneos"
				technologies={['nodejs', 'typescript']}
				liveUrl="https://elunderesports.com/torneos"
			/>

		</motion.span>
		<motion.span className="col-span-2 row-span-1"
			animate={{
				opacity: 1,
				x: [50, 0]
			}}
			transition={{
				delay: 0.4, // Ajusta el delay en segundos
			}}>
			<ProjectCard
				title="Pokedex"
				description="Plataforma de torneos"
				technologies={['html5', 'css', 'javascript']}
				githubUrl="https://github.com/AlfonsoCasajus/global-pokedex"
			/>
		</motion.span>
		<motion.span className="col-span-1 row-span-2"
			animate={{
				opacity: 1,
				y: [50, 0]
			}}
			transition={{
				delay: 0.6, // Ajusta el delay en segundos
			}}
			>
			<ProjectCard
				title="Sliding Puzzle"
				description="Plataforma de torneos"
				technologies={['html5', 'css', 'javascript']}
				githubUrl="https://github.com/AlfonsoCasajus/sliding-puzzle"
			/>
		</motion.span>
		<motion.span className="col-span-1 row-span-1"
			animate={{
				opacity: 1,
				x: [50, 0]
			}}
			transition={{
				delay: 0.8,
			}}>
			<ProjectCard
				title="Gestión de Tickets"
				description="Plataforma de torneos"
				technologies={['react', 'nextjs', 'tailwind', 'typescript']}
				githubUrl="https://github.com/AlfonsoCasajus/ticketing-app"
			/>
		</motion.span>
		<motion.span className="col-span-1 row-span-1"
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
				technologies={['html5', 'css', 'javascript']}
				githubUrl=" https://github.com/AlfonsoCasajus/verifarma-videoclub"
			/>
		</motion.span>
	</section>
  );
};