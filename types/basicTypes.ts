// types
import type { MouseEventHandler, ReactNode } from 'react';

export interface ButtonComponentProps {
    children?: ReactNode;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    className?: string;
    icon?: ReactNode;
    startIcon?: ReactNode;
}

export interface HomeSection {
    avatarAlt: string;
    greeting: string;
    name: string;
    title: string;
    summary: string;
    buttons: {
        viewProjects: string;
        downloadResume: string;
        contactMe: string;
    };
};

export interface ProjectSection {
    title: string;
    description: string;
    projects: Array<{
        name: string;
        description: string;
        image: string;
        sourceCodeLink?: string;
        liveDemoLink?: string;
        technologies: string[];
        cta?: {
            sourceCode: string;
            liveDemo: string;
        }
    }>;
}

export interface AboutSection {
    title: string;
    description: string;
    professional: {
        summaryTitle: string;
        summary: string;
    },
    stats: Array<{
        id: string | number;
        title: string;
        description: string;
        icon: string;
    }>;
    Technologies: {
        title: string;
        description?: string;
        technologies: {
            frontend: string[];
            backend?: string[];
            tools?: string[];
        };
    }
}

export interface SkillsSection {
    title: string;
    description: string;
    skills: Record<
        string,
        {
            languages: string[];
            proficiency: string[];
        }
    >;
    additionalcompetencies?: {
        title: string;
        competencies: string[];

    };
    competencies?: string[];
}

export interface WorkExperienceItem {
    company: string;
    role: string;
    duration: string;
    responsibilities: string[];
    present: string;
    icon?: string;
}

export interface WorkExperienceSection {
    title: string;
    description: string;
    workExperienceSection: WorkExperienceItem[];
}

export type WorkExperienceProps = {
    workExperienceSection?: WorkExperienceSection | null;
}

export type ContactSection = {
        title: string;
        description: string;
        contactInformation: {
                type: string;
                value: string;
                icon: string;
        }[];
        connect: string;
        message: string;
};

export type ContactProps = {
    contactSection?: ContactSection | null;
};

export type ContactSectionWrapper = {
    contactSections: ContactSection;
};

export type ActiveSection = "home" | "about" | "projects" | "contact";

export type Propstypes = {
    setActivePage?: React.Dispatch<React.SetStateAction<ActiveSection>>;
    homeSection?: HomeSection | null;
}

export type ProjectsProps = {
    projectSection?: ProjectSection | null | undefined;
}

export type AboutProps = {
    aboutSection?: AboutSection | null;
}

export type SkillsProps = {
    skillsSection?: SkillsSection | null;
}
