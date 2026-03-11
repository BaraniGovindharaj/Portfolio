'use client';
// Projects page
import React from "react";
import { ProjectsProps } from "../../types/basicTypes";
import ButtonComponent from "../ButtonComponent";
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowOutwardOutlinedIcon from '@mui/icons-material/ArrowOutwardOutlined';





export default function Projects({ projectSection }: ProjectsProps) {

  return (
       <div className=" [background:var(--home-bg)] min-h-screen flex items-center justify-center text-white px-6 py-12">
  <div className="w-full max-w-5xl">
    <h2 className="text-3xl text-center font-bold mb-2 leading-none">{projectSection?.title}</h2>
    <p className="text-lg text-center mb-8 leading-none">{projectSection?.description}</p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {projectSection?.projects?.map((project, index) => (
        <div key={index} className="rounded-md overflow-hidden shadow-lg bg-white" suppressHydrationWarning>
          <img className="w-full h-77 object-cover" src={project.image} alt={project.name} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-black">{project.name}</div>
            <p className="text-base text-black">
              {project.description}
            </p>
          </div>

          <div className="px-6 py-4">
            {project.technologies.map((tech, techIndex) => (
              <span key={techIndex} className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                {tech}
              </span>
            ))}
          </div>

          {project.cta && (
            <div className="flex flex-col md:flex-row gap-2.5 px-6 pb-6">
              <ButtonComponent
                onClick={() => window.open(project.sourceCodeLink, "_blank")}
                className="px-4 py-2 m-2 bg-transparent text-black rounded hover:bg-[var(--button-hover)] cursor-pointer border-2 border-none flex gap-2"
                startIcon={<GitHubIcon />}
              >
                {project.cta.sourceCode}
              </ButtonComponent>
              <ButtonComponent
                onClick={() => window.open(project.liveDemoLink, "_blank")}
                className="px-4 py-2 m-2 bg-transparent text-black rounded hover:bg-[var(--button-hover)] cursor-pointer border-2 border-none flex gap-2"
                startIcon={<ArrowOutwardOutlinedIcon />}
              >
                {project.cta.liveDemo}
              </ButtonComponent>
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
</div>
  );
}