'use client';

// import { Github, Globe, Star } from 'lucide-react';
import { CiGlobe } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import Image from 'next/image';
import { Tooltip, Card, CardHeader, CardBody, CardFooter, Button } from "@nextui-org/react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
}

export function ProjectCard({
  title,
  description,
  imageUrl,
  technologies,
  githubUrl,
  liveUrl
}: ProjectCardProps) {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg text-white">
      <CardHeader className="p-0 relative">
        { imageUrl && (
			<Image
			src={imageUrl}
			alt={title}
			fill
			className="object-cover transition-transform duration-300 group-hover:scale-105"
			/>
		)}
      </CardHeader>
      <CardBody className="p-6">
        <h3 className="text-2xl font-bold tracking-tight mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech,index) => (
			<Tooltip
				key={index}
				content={
				<p className="text-slate-950 dark:text-slate-200">
				  {tech}
				</p>
			  }>
				  <Image
					  
					  src={`/logos/${tech}.svg`}
					  width={30}
					  height={20}
					  alt={`${tech} Logo`}
				  />
			  </Tooltip>
          ))}
        </div>
      </CardBody>
      <CardFooter className="px-6 pb-6 pt-0 flex gap-2">
        {githubUrl && (
          <Button variant="solid">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <FaGithub className="mr-2 h-4 w-4" />
              Code
            </a>
          </Button>
        )}
        {liveUrl && (
          <Button>
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              <CiGlobe className="mr-2 h-4 w-4" />
              Live Demo
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}