'use client';
import React from "react";
import { motion } from "framer-motion";
import { ContactProps } from "../../types/basicTypes";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import { sectionContainer, sectionItem, sectionViewport } from "./motionVariants";

export default function Contact({ contactSection }: ContactProps) {
    if (!contactSection) {
        return null;
    }

    const getContactIcon = (type: string) => {
        const normalizedType = type.toLowerCase();

        if (normalizedType.includes("email")) {
            return <EmailOutlinedIcon />;
        }

        if (normalizedType.includes("phone")) {
            return <PhoneInTalkOutlinedIcon />;
        }

        if (normalizedType.includes("linkedin")) {
            return <LinkedInIcon />;
        }

        if (normalizedType.includes("github")) {
            return <GitHubIcon />;
        }

        return <EmailOutlinedIcon />;
    };

    return (
        <motion.section
            className="portfolio-section min-h-screen text-white px-6 py-16"
            variants={sectionContainer}
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
        >
            <div className="w-full max-w-6xl mx-auto">
                <motion.h2 className="section-title" variants={sectionItem}>{contactSection.title}</motion.h2>
                <div className="section-title-underline" />
                <motion.p className="text-md text-center mb-10 mt-4 leading-none text-white/70" variants={sectionItem}>{contactSection.description}</motion.p>
            </div>
            <motion.div className="w-full max-w-6xl mx-auto panel-card p-7 md:p-8" variants={sectionItem}>
                <h2 className="text-xl font-bold mb-8">Contact Information</h2>

                <div className="space-y-6">
                    {contactSection.contactInformation.map((info, index) => (
                        <motion.div
                            key={index}
                            className="rounded-xl [border:1px_solid_rgba(96,165,250,0.2)] bg-white/5 p-4 md:p-5 flex items-center gap-4"
                            variants={sectionItem}
                        >
                            <div className="h-14 w-14 rounded-full bg-white/10 flex items-center justify-center text-[var(--color-primary)] shrink-0">
                                {getContactIcon(info.type)}
                            </div>

                            <div>
                                <p className="text-white/60 text-sm leading-tight">{info.type}</p>
                                <p className="text-sm md:text-md font-medium break-all">{info.value}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div className="mt-8 rounded-xl bg-white/5 p-6 md:p-7" variants={sectionItem}>
                    <h3 className="text-xl font-semibold mb-1">{contactSection.connect}</h3>
                    <p className="text-md text-white/70 leading-relaxed">{contactSection.message}</p>
                </motion.div>
            </motion.div>
        </motion.section>
    );
}