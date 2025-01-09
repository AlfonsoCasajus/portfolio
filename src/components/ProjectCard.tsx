// import { Github, Globe, Star } from 'lucide-react';
import { CiGlobe } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import Image from 'next/image';
import { Tooltip, Card, CardBody, CardFooter, Button } from "@nextui-org/react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  authentication?: string[];
  integrations?: string[];
  githubUrl?: string;
  liveUrl?: string;
  previewUrl?: string;
}

export function ProjectCard({
  title,
  description,
  technologies,
  authentication,
  integrations,
  githubUrl,
  liveUrl,
  previewUrl
}: ProjectCardProps) {
  return (
    <Card className="
      h-full w-full overflow-hidden
      transition-all duration-300 hover:shadow-lg
      text-white dark:bg-slate-950"
    >
      <CardBody className="p-6">
        <h3 className="text-2xl font-bold tracking-tight mb-2 text-slate-800 dark:text-cyan-50">{title}</h3>
        <p className="text-muted-foreground mb-4 text-slate-800 dark:text-cyan-50">{description}</p>
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
        {
          authentication && (
            <div className="mt-2 text-slate-800 dark:text-white">
              <label className="text-xl">Autenticacion</label>
              <div className="flex flex-wrap gap-3 mt-3">
                {authentication.map((method,index) => (
                  <Tooltip
                    key={index}
                    content={
                    <p className="text-slate-950 dark:text-slate-200">
                      {method}
                    </p>
                    }>
                      <Image
                        
                        src={`/logos/${method}.svg`}
                        width={30}
                        height={20}
                        alt={`${method} Logo`}
                      />
                    </Tooltip>
                ))}
              </div>
            </div>
          )
        }
        {
          integrations && (
            <div className="mt-2 text-slate-800 dark:text-white">
              <label className="text-xl">Integraciones</label>
              <div className="flex flex-wrap gap-2 mt-3">
                { integrations.map((integration,index) => (
                  <div key={index}>
                    <Tooltip
                      content={
                      <p className="text-slate-950 dark:text-slate-200">
                        {integration}
                      </p>
                      }>
                        <Image
                          
                          src={`/logos/${integration}.svg`}
                          width={40}
                          height={40}
                          alt={`${integration} Logo`}
                        />
                      </Tooltip>
                  </div>
                ))}
              </div>
            </div>
          )
        }
        {
          previewUrl && (
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src={`/projects/${previewUrl}.png`}
              width={270}
              height='100'
            />
          )
        }
      </CardBody>
      <CardFooter className="px-6 pb-6 pt-0 flex gap-2">
        {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="flat" color="primary">
                  <CiGlobe className="mr-1 h-5 w-5" />
                  Live Demo
              </Button>
            </a>
        )}
        {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="bordered" className="dark:text-white">
                  <FaGithub className="mr-1 h-5 w-5" />
                  Code
              </Button>
            </a>
        )}
      </CardFooter>
    </Card>
  );
}