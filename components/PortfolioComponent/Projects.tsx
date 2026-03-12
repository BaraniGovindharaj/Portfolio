'use client';
// Projects page
import React from "react";
import { motion } from "framer-motion";
import { ProjectsProps } from "../../types/basicTypes";
import ButtonComponent from "../ButtonComponent";
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowOutwardOutlinedIcon from '@mui/icons-material/ArrowOutwardOutlined';
import { sectionContainer, sectionItem, sectionViewport } from "./motionVariants";





export default function Projects({ projectSection }: ProjectsProps) {

  return (
       <motion.section
        className="portfolio-section min-h-screen text-white px-6 py-16"
        variants={sectionContainer}
        initial="hidden"
        whileInView="visible"
        viewport={sectionViewport}
      >
  <div className="w-full max-w-6xl mx-auto">
    <motion.h2 className="section-title" variants={sectionItem}>{projectSection?.title}</motion.h2>
    <div className="section-title-underline" />
    <motion.p className="text-md text-center mb-10 mt-4 leading-none text-white/70" variants={sectionItem}>{projectSection?.description}</motion.p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {projectSection?.projects?.map((project, index) => (
        <motion.div key={index} className="panel-card overflow-hidden" suppressHydrationWarning variants={sectionItem}>
          <img className="w-full h-48 object-cover" src={project.image} alt={project.name} />
          <div className="px-4 py-4">
            <div className="font-bold text-lg mb-2 text-white">{project.name}</div>
            <p className="text-sm text-white/70 line-clamp-4">
              {project.description}
            </p>
          </div>

          <div className="px-4 pb-3">
            {project.technologies.map((tech, techIndex) => (
              <span key={techIndex} className="inline-block bg-[var(--chip-bg)] [border:var(--chip-border)] rounded-full px-2.5 py-1 text-xs font-semibold text-white/85 mr-2 mb-2">
                {tech}
              </span>
            ))}
          </div>

          {project.cta && (
            <div className="flex gap-2 px-4 pb-4">
              <ButtonComponent
                onClick={() => window.open(project.sourceCodeLink, "_blank")}
                className="flex-1 px-3 py-2 bg-transparent text-white rounded-md hover:bg-[var(--button-hover)] cursor-pointer [border:var(--border-button-secondary)] flex gap-2 items-center justify-center text-xs"
                startIcon={<GitHubIcon />}
              >
                {project.cta.sourceCode}
              </ButtonComponent>
              <ButtonComponent
                onClick={() => window.open(project.liveDemoLink, "_blank")}
                className="flex-1 px-3 py-2 bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-primary)] text-white rounded-md hover:opacity-90 cursor-pointer flex gap-2 items-center justify-center text-xs"
                startIcon={<ArrowOutwardOutlinedIcon />}
              >
                {project.cta.liveDemo}
              </ButtonComponent>
            </div>
          )}
        </motion.div>
      ))}
    </div>
  </div>
</motion.section>
  );
}