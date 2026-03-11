'use client';

import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';

type FooterProps = {
  name?: string;
  contactInformation?: Array<{
    type: string;
    value: string;
  }>;
};

export default function Footer({ name, contactInformation }: FooterProps) {
  const socialLinks = [
    {
      key: "github",
      icon: <GitHubIcon fontSize="small" />,
      link: contactInformation?.find((item) => item.type.toLowerCase().includes("github"))?.value,
    },
    {
      key: "linkedin",
      icon: <LinkedInIcon fontSize="small" />,
      link: contactInformation?.find((item) => item.type.toLowerCase().includes("linkedin"))?.value,
    },
    {
      key: "phone",
      icon: <PhoneInTalkOutlinedIcon fontSize="small" />,
      link: contactInformation?.find((item) => item.type.toLowerCase().includes("phone"))?.value,
    },
    {
      key: "email",
      icon: <EmailOutlinedIcon fontSize="small" />,
      link: contactInformation?.find((item) => item.type.toLowerCase().includes("email"))?.value,
    },
  ];

  const navItems = [
    { label: "About", target: "about" },
    { label: "Skills", target: "skills" },
    { label: "Projects", target: "projects" },
    { label: "Experience", target: "experience" },
    { label: "Contact", target: "contact" },
  ];

  const handleSectionScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="[background:var(--home-bg)] text-white px-6 py-14">
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
        <div className="flex items-center gap-5">
          {socialLinks.map((item) => (
            <button
              key={item.key}
              type="button"
              onClick={() => item.link && window.open(item.link.startsWith("http") ? item.link : item.key === "email" ? `mailto:${item.link}` : `tel:${item.link}`, "_blank")}
              className="h-13 w-13 rounded-full [border:1px_solid_rgba(96,165,250,0.3)] bg-white/5 text-white/60 hover:text-[var(--color-primary)] transition-colors flex items-center justify-center"
              aria-label={item.key}
            >
              {item.icon}
            </button>
          ))}
        </div>

        <nav className="mt-4 flex flex-wrap items-center justify-center gap-8 text-md text-white/60">
          {navItems.map((item) => (
            <button
              key={item.target}
              type="button"
              onClick={() => handleSectionScroll(item.target)}
              className="hover:text-[var(--color-primary)] transition-colors text-sm"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <p className="mt-12 text-lg text-white/70 text-center leading-none">
          Made with <span className="text-[var(--color-primary)]">💖</span> by {name || "Barani Govindharaj"}
        </p>
        <p className="mt-2 text-lg text-white/60 text-center leading-none">© {currentYear} All rights reserved.</p>

        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="mt-12 h-14 w-14 rounded-full [border:1px_solid_rgba(96,165,250,0.5)] bg-white/5 text-[var(--color-primary)] flex items-center justify-center"
          aria-label="Back to top"
        >
          <ArrowUpwardOutlinedIcon />
        </button>
      </div>
    </footer>
  );
}
