"use client";
// Home page
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ButtonComponent from "../ButtonComponent";
import ViewInArRoundedIcon from "@mui/icons-material/ViewInArRounded";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import { Propstypes } from "../../types/basicTypes";

function useTypingEffect(text: string, speed = 20) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    setDisplayed("");
    if (!text) return;
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return displayed;
}

const Home: React.FC<Propstypes> = ({setActivePage, homeSection}) => {
  const typedTitle = useTypingEffect(homeSection?.title ?? "", 100);

   const handleSectionScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden [background:var(--home-bg)] min-h-screen text-white px-6 py-12 md:py-20">
      <div className="w-full max-w-6xl mx-auto">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12">
          <motion.div
            className="w-full md:w-3/5"
            initial={{ opacity: 0, x: -36 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="text-sm mb-3 text-[var(--icon-color-secondary)]">{homeSection?.greeting}</p>
            <h1 className="text-[44px] md:text-[72px] font-bold mb-2 leading-[0.95] tracking-tight">
              {homeSection?.name}
            </h1>
            <p suppressHydrationWarning className="text-[28px] md:text-[36px] font-semibold leading-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)]">
              {typedTitle}
              <span className="animate-pulse text-[var(--color-primary)]">|</span>
            </p>
            <p className="text-sm md:text-base mb-6 text-white/75 max-w-2xl leading-relaxed">{homeSection?.summary}</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <ButtonComponent
                onClick={() => setActivePage && setActivePage("projects")}
                className="px-5 py-2.5 rounded-md bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-primary)] text-white font-semibold transition-opacity hover:opacity-85 active:opacity-70 flex gap-3 items-center justify-center"
                startIcon={<ViewInArRoundedIcon fontSize="small" />}
              >
                {homeSection?.buttons.viewProjects}
              </ButtonComponent>
              <ButtonComponent
                onClick={() => alert("Button clicked!")}
                className="px-5 py-2.5 rounded-md bg-transparent [border:var(--border-button-primary)] text-white font-semibold transition-opacity hover:opacity-85 active:opacity-70 flex gap-3 items-center justify-center"
                startIcon={
                  <DownloadOutlinedIcon
                    fontSize="small"
                    style={{ color: "var(--icon-color-primary)" }}
                  />
                }
              >
                {homeSection?.buttons.downloadResume}
              </ButtonComponent>
              <ButtonComponent
                onClick={() => handleSectionScroll("contact")}
                className="px-5 py-2.5 rounded-md bg-transparent [border:var(--border-button-secondary)] text-white font-semibold transition-opacity hover:opacity-85 active:opacity-70 flex gap-3 items-center justify-center"
                startIcon={
                  <DownloadOutlinedIcon
                    fontSize="small"
                    style={{ color: "var(--icon-color-secondary)" }}
                  />
                }
              >
                {homeSection?.buttons.contactMe}
              </ButtonComponent>
            </div>
          </motion.div>

          <motion.div
            className="w-full md:w-2/5 flex justify-center"
            initial={{ opacity: 0, x: 36, scale: 0.92 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.75, ease: "easeOut", delay: 0.1 }}
            suppressHydrationWarning
          >
            <motion.div
              animate={{ y: [0, -18, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div suppressHydrationWarning className="rounded-full p-2 [background:var(--text-bg)] shadow-[0_0_55px_rgba(168,85,247,0.5)]">
                <div suppressHydrationWarning className="rounded-full p-1 bg-[#10213a]">
                  <img
                    src="/Barani.png"
                    alt="Avatar"
                    className="w-[220px] h-[220px] md:w-[320px] md:h-[320px] rounded-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
