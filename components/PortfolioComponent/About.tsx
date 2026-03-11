"use client";

import React from "react";
import { AboutProps } from "../../types/basicTypes";
import CodeOffOutlinedIcon from '@mui/icons-material/CodeOffOutlined';
import HomeRepairServiceOutlinedIcon from '@mui/icons-material/HomeRepairServiceOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';

export default function About({ aboutSection }: AboutProps) {
	if (!aboutSection) {
		return null;
	}

	return (
		<section className="[background:var(--home-bg)] min-h-screen text-white px-6 py-12">
			<div className="w-full max-w-5xl mx-auto">
				<h2 className="text-3xl text-center font-bold mb-2 leading-none">{aboutSection.title}</h2>
				<p className="text-lg text-center mb-8 leading-none">{aboutSection.description}</p>

				<div className="bg-white/10 rounded-md p-6">
					<h3 className="text-xl font-semibold mb-3">{aboutSection.professional.summaryTitle}</h3>
					<p className="text-sm md:text-base leading-7">{aboutSection.professional.summary}</p>
				</div>
                {/* stats */}
                {aboutSection.stats && (
                  <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {aboutSection.stats.map((stat, index) => (
                      <div key={index} className="bg-white/10 rounded-md p-6">
                        {stat.icon === "code" && <CodeOffOutlinedIcon style={{ fontSize: '30px', color: 'var(--icon-color-primary)' }} />}
                        {stat.icon === "briefcase" && <HomeRepairServiceOutlinedIcon style={{ fontSize: '30px', color: 'var(--icon-color-primary)' }} />}
                        {stat.icon === "award" && <WorkspacePremiumOutlinedIcon style={{ fontSize: '30px', color: 'var(--icon-color-primary)' }} />}
                        <p className="text-2xl font-bold mb-2 mt-2">{stat.title}</p>
                        <p className="text-sm md:text-base">{stat.description}</p>
                      </div>
                    ))}
                  </div>
                )}
                {/* Technologies */}
                {aboutSection.Technologies && (
                    <div className="mt-8 bg-white/10 rounded-md p-6">
                            <h3 className="text-xl font-semibold mb-3">{aboutSection.Technologies.title}</h3>
                            {aboutSection.Technologies.description && <p className="text-sm md:text-base mb-4">{aboutSection.Technologies.description}</p>}
                           <div className="space-y-6">
  {Object.entries(aboutSection.Technologies.technologies || {}).map(
    ([category, techs]) => (
      <div key={category} className="flex gap-2">
        <h3 className="text-lg font-semibold text-white capitalize mb-3">
          {category}:
        </h3>

        <div className="flex flex-wrap gap-2">
          {techs.map((tech: string, index: number) => (
            <span
              key={index}
              className="inline-block bg-[var(--chip-bg)] border-[var(--chip-border)] rounded-full px-3 py-2 text-sm font-semibold text-white"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    )
  )}
</div>
                    </div>
                )}

			</div>
		</section>
	);
}
