'use client';
import React from "react";
import { SkillsProps } from "../../types/basicTypes";

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
        <section className="[background:var(--home-bg)] min-h-screen text-white px-6 py-12">
            <div className="w-full max-w-5xl mx-auto">
                <h2 className="text-3xl text-center font-bold mb-2 leading-none">{skillsSection.title}</h2>
                <p className="text-lg text-center mb-8 leading-none">{skillsSection.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {skillGroups.map(([groupName, group]) => (
                        <div key={groupName} className="bg-white/10 rounded-[19%] p-6">
                            <h3 className="text-xl font-semibold mb-4 capitalize">{groupName}</h3>
                            <ul className="space-y-4">
                                {group.languages.map((language, index) => (
                                    <li key={`${groupName}-${language}`}>
                                        
                                        <div className="mt-2 flex items-center justify-between gap-3 text-sm">
                                            <span>{language}</span>
                                            <span className="text-[var(--icon-color-primary)] font-semibold">
                                                {group.proficiency[index] ?? "0%"}
                                            </span>
                                        </div>
                                        <div className="w-full h-2 rounded-full bg-white/20 overflow-hidden">
                                            <div
                                                className="h-2 rounded-full [background:var(--progress-bg)]"
                                                style={{
                                                    width: `${getPercentage(group.proficiency[index])}%`
                                                }}
                                            />
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
            </div>
                <div className="mt-8 bg-white/10 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">{competenciesTitle}</h3>
                    {competencies.length > 0 ? (
                        <div className="flex flex-wrap gap-2">
                            {competencies.map((competency, index) => (
                                <span
                                    key={index}
                                    className="inline-block bg-[var(--chip-bg)] [border:var(--chip-border)] rounded-full px-3 py-2 text-sm font-semibold text-white"
                                >
                                    {competency}
                                </span>
                            ))}
                        </div>
                    ) : (
                        <p className="text-sm text-white/80">No additional competencies configured.</p>
                    )}
                </div>
            </div>
        </section>
    );
}