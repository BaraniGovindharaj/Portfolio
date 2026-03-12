'use client';
import React from "react";
import { motion } from "framer-motion";
import { SkillsProps } from "../../types/basicTypes";
import { sectionContainer, sectionItem, sectionViewport } from "./motionVariants";

export default function Skills({ skillsSection }: SkillsProps) {
    if (!skillsSection) {
        return null;
    }

    const rawSkillsSection = skillsSection as unknown as Record<string, unknown>;

    const getPercentage = (value?: string) => {
        if (!value) return 0;
        const numericValue = Number.parseInt(value.replace('%', ''), 10);
        return Number.isNaN(numericValue) ? 0 : Math.min(Math.max(numericValue, 0), 100);
    };

    const skillGroups = Object.entries(skillsSection.skills) as Array<[
        string,
        { languages: string[]; proficiency: string[] }
    ]>;

    const additionalKey = Object.keys(rawSkillsSection).find(
        (key) => key.toLowerCase() === "additionalcompetencies"
    );

    const rawAdditional =
        skillsSection.additionalcompetencies ??
        (additionalKey
            ? (rawSkillsSection[additionalKey] as { title?: string; competencies?: string[] } | undefined)
            : undefined);

    const competencies = rawAdditional?.competencies ?? [];

    const competenciesTitle = rawAdditional?.title ?? "Additional Competencies";

    return (
        <motion.section
            className="portfolio-section min-h-screen text-white px-6 py-16"
            variants={sectionContainer}
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
        >
            <div className="w-full max-w-6xl mx-auto">
                <motion.h2 className="section-title" variants={sectionItem}>{skillsSection.title}</motion.h2>
                <div className="section-title-underline" />
                <motion.p className="text-md text-center mb-10 mt-4 leading-none text-white/70" variants={sectionItem}>{skillsSection.description}</motion.p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {skillGroups.map(([groupName, group]) => (
                        <motion.div key={groupName} className="panel-card p-6" variants={sectionItem}>
                            <h3 className="text-lg font-semibold mb-4 capitalize text-[var(--icon-color-secondary)]">{groupName}</h3>
                            <ul className="space-y-4">
                                {group.languages.map((language, index) => (
                                    <li key={`${groupName}-${language}`}>
                                        
                                        <div className="mt-2 flex items-center justify-between gap-3 text-sm">
                                            <span className="text-white/85">{language}</span>
                                            <span className="text-[var(--icon-color-primary)] font-semibold">
                                                {group.proficiency[index] ?? "0%"}
                                            </span>
                                        </div>
                                        <div className="w-full h-1.5 rounded-full bg-white/15 overflow-hidden">
                                            <div
                                                className="h-1.5 rounded-full [background:var(--progress-bg)]"
                                                style={{
                                                    width: `${getPercentage(group.proficiency[index])}%`
                                                }}
                                            />
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
            </div>
                <motion.div className="mt-8 panel-card p-6" variants={sectionItem}>
                    <h3 className="text-xl font-semibold mb-4">{competenciesTitle}</h3>
                    {competencies.length > 0 ? (
                        <div className="flex flex-wrap gap-2">
                            {competencies.map((competency, index) => (
                                <span
                                    key={index}
                                    className="inline-block bg-[var(--chip-bg)] [border:var(--chip-border)] rounded-full px-3 py-2 text-sm font-semibold text-white/90"
                                >
                                    {competency}
                                </span>
                            ))}
                        </div>
                    ) : (
                        <p className="text-sm text-white/80">No additional competencies configured.</p>
                    )}
                </motion.div>
            </div>
        </motion.section>
    );
}