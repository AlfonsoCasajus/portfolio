import { FaGithub } from "react-icons/fa";
import { TbLivePhotoFilled } from "react-icons/tb";
import Image from 'next/image';
import { Tooltip, Card, CardBody, CardFooter, Button } from "@nextui-org/react";
import { logos } from "@/app/utils/logos";
import { motion } from "framer-motion"

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
        <div className="flex flex-wrap gap-3">
          {technologies.map((tech,index) => {
            const stack = logos.find(logo => logo.key === tech);

            return (
              stack &&
              <Tooltip
                key={index}
                content={
                <p className="text-slate-950 dark:text-slate-200">
                  {stack?.name}
                </p>
                }>
  
                  <motion.div
                    className='flex justify-center items-center backdrop-blur-sm rounded-xl w-10 h-10 lg:w-12 lg:h-12'
                    whileHover={{ scale: 1.1, y: -10 }}
                    style={{backgroundColor: stack.color}}

                  >
                    <Image
                      src={`/logos/${stack.key}.svg`}
                      width={25}
                      height={16.5}
                      alt={`${stack.name} Logo`}
                    />
                  </motion.div>
                </Tooltip>
            )
          })}
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
                  Codigo
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