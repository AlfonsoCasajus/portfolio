import { FaGithub } from "react-icons/fa";
import { TbLivePhotoFilled } from "react-icons/tb";
import Image from 'next/image';
import { Tooltip, Card, CardBody, CardFooter, Button } from "@nextui-org/react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  bgUrl?: string;
}

export function ProjectCard({
  title,
  description,
  technologies,
  githubUrl,
  liveUrl,
  bgUrl
}: ProjectCardProps) {
  return (
    <Card className="
      h-full w-full overflow-hidden
      transition-all duration-300 hover:shadow-lg
      text-white dark:bg-slate-950"
    >
      <CardBody className="p-6 overflow-hidden z-10">
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
      </CardBody>
      <CardFooter className="px-6 pb-6 pt-0 flex gap-2 z-10">
        {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="flat" color="success">
                  <TbLivePhotoFilled className="mr-1 h-5 w-5" />
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
      {
          bgUrl && (
            <Image
              alt="Card background"
              className="object-cover rounded-xl absolute right-[-120px] bottom-[-80px] opacity-30"
              src={`/projects/${bgUrl}`}
              width={400}
              height='100'
            />
          )
        }
    </Card>
  );
}