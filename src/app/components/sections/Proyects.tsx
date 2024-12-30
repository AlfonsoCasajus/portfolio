'use client'
import { ProjectCard } from "@/components/ProjectCard";

// Icons
export function Proyects() {
  return (
    <section className="grid grid-cols-3 grid-rows-3 gap-4 p-6 bg-blue-200 dark:bg-slate-800">
		<span className="col-span-2 row-span-1">
			<ProjectCard
				title="Pokedex"
				description="Plataforma de torneos"
				technologies={['html5', 'css', 'javascript']}
				githubUrl="https://github.com/AlfonsoCasajus/global-pokedex"
			/>
		</span>
		<span className="col-span-1 row-span-1">
			<ProjectCard
				title="Gestión de Tickets"
				description="Plataforma de torneos"
				technologies={['react', 'nextjs', 'tailwind', 'typescript']}
				githubUrl="https://github.com/AlfonsoCasajus/ticketing-app"
			/>
		</span>
		<span className="col-span-1 row-span-1">
			<ProjectCard
				title="Torneos"
				description="Plataforma de torneos"
				technologies={['nodejs', 'typescript']}
				liveUrl="https://elunderesports.com/torneos"
			/>

		</span>
		<span className="col-span-1 row-span-2">
			<ProjectCard
				title="Sliding Puzzle"
				description="Plataforma de torneos"
				technologies={['html5', 'css', 'javascript']}
				githubUrl="https://github.com/AlfonsoCasajus/sliding-puzzle"
			/>
		</span>
		<span className="col-span-1 row-span-1">
			<ProjectCard
				title="Video Club"
				description="Plataforma de torneos"
				technologies={['html5', 'css', 'javascript']}
				githubUrl=" https://github.com/AlfonsoCasajus/verifarma-videoclub"
			/>
		</span>
	</section>
  );
};