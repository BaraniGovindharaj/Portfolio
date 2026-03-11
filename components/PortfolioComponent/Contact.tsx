'use client';
import React from "react";
import { ContactProps } from "../../types/basicTypes";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';

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
        <section className="[background:var(--home-bg)] min-h-screen text-white px-6 py-12">
            <div className="w-full max-w-5xl mx-auto">
                <h2 className="text-3xl text-center font-bold mb-2 leading-none">{contactSection.title}</h2>
                <p className="text-lg text-center mb-8 leading-none">{contactSection.description}</p>
            </div>
            <div className="w-full max-w-6xl mx-auto rounded-[2rem] bg-white/10 [border:1px_solid_rgba(96,165,250,0.2)] p-8 md:p-10">
                <h2 className="text-xl font-bold mb-8">Contact Information</h2>

                <div className="space-y-6">
                    {contactSection.contactInformation.map((info, index) => (
                        <div
                            key={index}
                            className="rounded-3xl [border:1px_solid_rgba(96,165,250,0.2)] bg-white/5 p-4 md:p-5 flex items-center gap-4"
                        >
                            <div className="h-14 w-14 rounded-full bg-white/10 flex items-center justify-center text-[var(--color-primary)] shrink-0">
                                {getContactIcon(info.type)}
                            </div>

                            <div>
                                <p className="text-white/60 text-sm leading-tight">{info.type}</p>
                                <p className="text-sm md:text-md font-medium break-all">{info.value}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 rounded-3xl bg-white/5 p-6 md:p-7">
                    <h3 className="text-xl font-semibold mb-1">{contactSection.connect}</h3>
                    <p className="text-md text-white/70 leading-relaxed">{contactSection.message}</p>
                </div>
            </div>
        </section>
    );
}