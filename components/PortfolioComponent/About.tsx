"use client";

import React from "react";
import { motion } from "framer-motion";
import { AboutProps } from "../../types/basicTypes";
import CodeOffOutlinedIcon from '@mui/icons-material/CodeOffOutlined';
import HomeRepairServiceOutlinedIcon from '@mui/icons-material/HomeRepairServiceOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import { sectionContainer, sectionItem, sectionViewport } from "./motionVariants";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

export default function About({ aboutSection }: AboutProps) {
	if (!aboutSection) {
		return null;
	}

	return (
		<motion.section
			className="portfolio-section min-h-screen text-white px-6 py-16"
			variants={sectionContainer}
			initial="hidden"
			whileInView="visible"
			viewport={sectionViewport}
		>
			<div className="w-full max-w-6xl mx-auto">
				<motion.h2 className="section-title" variants={sectionItem}>{aboutSection.title}</motion.h2>
				<div className="section-title-underline" />
				<motion.p className="text-md text-center mb-10 mt-4 leading-none text-white/70" variants={sectionItem}>{aboutSection.description}</motion.p>

				<motion.div className="panel-card p-7" variants={sectionItem}>
					<h3 className="text-xl font-semibold mb-3">{aboutSection.professional.summaryTitle}</h3>
					<p className="text-sm md:text-base leading-7 text-white/85">{aboutSection.professional.summary}</p>
				</motion.div>
                {/* stats */}
                {aboutSection.stats && (
                  <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {aboutSection.stats.map((stat, index) => (
                      <motion.div key={index} className="panel-card p-6" variants={sectionItem}>
                        {stat.icon === "code" && <CodeOffOutlinedIcon style={{ fontSize: '30px', color: 'var(--icon-color-primary)' }} />}
                        {stat.icon === "briefcase" && <HomeRepairServiceOutlinedIcon style={{ fontSize: '30px', color: 'var(--icon-color-primary)' }} />}
                        {stat.icon === "award" && <WorkspacePremiumOutlinedIcon style={{ fontSize: '30px', color: 'var(--icon-color-primary)' }} />}
                        {stat.icon === "location" && <LocationOnOutlinedIcon style={{ fontSize: '30px', color: 'var(--icon-color-primary)' }} />}
                        <p className="text-2xl font-bold mb-2 mt-2">{stat.title}</p>
                        <p className="text-sm md:text-base text-white/75">{stat.description}</p>
                      </motion.div>
                    ))}
                  </div>
                )}
                {/* Technologies */}
                {aboutSection.Technologies && (
                    <motion.div className="mt-8 panel-card p-6" variants={sectionItem}>
                            <h3 className="text-xl font-semibold mb-3">{aboutSection.Technologies.title}</h3>
                            {aboutSection.Technologies.description && <p className="text-sm md:text-base mb-4 text-white/75">{aboutSection.Technologies.description}</p>}
                           <div className="space-y-6">
  {Object.entries(aboutSection.Technologies.technologies || {}).map(
    ([category, techs]) => (
      <div key={category} className="flex flex-col md:flex-row md:items-start gap-2">
        <h3 className="text-lg font-semibold text-white capitalize shrink-0 md:mb-0 mb-1">
          {category}:
        </h3>

        <div className="flex flex-wrap gap-2">
          {techs.map((tech: string, index: number) => (
            <span
              key={index}
              className="inline-block bg-[var(--chip-bg)] border-[var(--chip-border)] rounded-full px-3 py-2 text-sm font-semibold text-white/90"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    )
  )}
</div>
                    </motion.div>
                )}

			</div>
		</motion.section>
	);
}
