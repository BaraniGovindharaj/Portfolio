'use client'
import React from "react";
import HomeRepairServiceOutlinedIcon from '@mui/icons-material/HomeRepairServiceOutlined';
import { WorkExperienceProps } from "../../types/basicTypes";

export default function WorkExperience({ workExperienceSection }: WorkExperienceProps) {
    if (!workExperienceSection) {
        return null;
    }

    return (
        <section className="[background:var(--home-bg)] min-h-screen text-white px-6 py-12">
            <div className="w-full max-w-5xl mx-auto">
                <h2 className="text-3xl text-center font-bold mb-2">{workExperienceSection.title}</h2>
                <p className="text-lg text-center mb-12 text-white/70">{workExperienceSection.description}</p>

                <div className="relative">
                    <div className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-[var(--color-primary)]/60 -translate-x-1/2" />

                    <div className="space-y-12">
                        {workExperienceSection.workExperienceSection.map((experience, index) => {
                            const isLeft = index % 2 === 0;

                            return (
                                <div key={`${experience.company}-${experience.role}-${index}`} className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                                    <div className={`${isLeft ? "md:pr-12" : "md:order-2 md:pl-12"}`}>
                                        <div className="rounded-[2.5rem] bg-white/10 [border:1px_solid_rgba(96,165,250,0.25)] p-8">
                                            <div className="flex items-center gap-3 text-[var(--color-primary)] font-semibold text-sm mb-3">
                                                <HomeRepairServiceOutlinedIcon fontSize="small" />
                                                <span>{experience.duration}</span>
                                            </div>

                                            <h3 className="text-lg/normal font-semibold mb-2">{experience.role}</h3>
                                            <p className="text-md text-gray-100 mb-6">{experience.company}</p>

                                            <ul className="space-y-3">
                                                {experience.responsibilities.map((responsibility, responsibilityIndex) => (
                                                    <li key={responsibilityIndex} className="flex gap-3 text-sm text-gray-100 leading-relaxed">
                                                        <span className="mt-2 h-2 w-2 rounded-full bg-[var(--color-primary)] shrink-0" />
                                                        <span>{responsibility}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="hidden md:block" />

                                    <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center">
                                        <span className="h-6 w-6 rounded-full border-4 border-[var(--color-primary)] bg-black" />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
