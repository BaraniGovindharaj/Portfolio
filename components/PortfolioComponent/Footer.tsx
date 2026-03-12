'use client';

import React from "react";
import { motion } from "framer-motion";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import { sectionContainer, sectionItem, sectionViewport } from "./motionVariants";

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
    <motion.footer
      className="portfolio-section text-white px-6 py-8 border-t border-white/10"
      variants={sectionContainer}
      initial="hidden"
      whileInView="visible"
      viewport={sectionViewport}
    >
      <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <motion.p className="text-sm text-white/60 text-center md:text-left" variants={sectionItem}>© {currentYear} 💖 {name || "Barani Govindharaj"}. All rights reserved.</motion.p>
        <motion.div className="flex items-center gap-3" variants={sectionItem}>
          {socialLinks.map((item) => (
            <button
              key={item.key}
              type="button"
              onClick={() => {
                if (!item.link) return;
                let url = item.link;
                if (item.key === "email") url = `mailto:${item.link}`;
                else if (item.key === "phone") url = `tel:${item.link}`;
                else if (!item.link.startsWith("http")) url = `https://${item.link}`;
                window.open(url, "_blank");
              }}
              className="h-9 w-9 rounded-md [border:1px_solid_rgba(96,165,250,0.3)] bg-white/5 text-white/60 hover:text-[var(--color-primary)] transition-colors flex items-center justify-center"
              aria-label={item.key}
            >
              {item.icon}
            </button>
          ))}
        </motion.div>
        <motion.button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="h-9 w-9 rounded-md [border:1px_solid_rgba(96,165,250,0.5)] bg-white/5 text-[var(--color-primary)] flex items-center justify-center"
          aria-label="Back to top"
          variants={sectionItem}
        >
          <ArrowUpwardOutlinedIcon fontSize="small" />
        </motion.button>
      </div>
    </motion.footer>
  );
}
