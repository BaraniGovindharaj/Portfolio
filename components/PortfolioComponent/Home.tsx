"use client";
// Home page
import React from "react";
import ButtonComponent from "../ButtonComponent";
import ViewInArRoundedIcon from "@mui/icons-material/ViewInArRounded";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import { Propstypes } from "../../types/basicTypes";

const Home: React.FC<Propstypes> = ({setActivePage, homeSection}) => {

  return (
    <div className=" [background:var(--home-bg)] min-h-screen flex items-center justify-center text-white px-6 py-12">
      {/* Avatar section */}
      <div className="flex flex-col md:flex-row items-center gap-4 max-w-5xl">
        <div className="w-full lg:w-1/3" suppressHydrationWarning>
          <img
            src="/Barani.png"
            alt="Avatar"
            className="w-full h-full rounded-full object-cover [border:var(--avatar-border)] shadow-lg"
          />
        </div>
        <div className="w-full lg:w-2/3">
          <h1 className="text-[24px] font-bold mb-2">
            {homeSection?.greeting}
          </h1>
          <p className="text-[56px] md:text-[72px] font-bold mb-1 leading-none tracking-tight text-[var(--color-primary)]">
            {homeSection?.name}
          </p>
          <p className="text-[32px] font-bold leading-none mb-1">
            {homeSection?.title}
          </p>
          <p className="text-md mb-4">{homeSection?.summary}</p>
          <div className="flex flex-col md:flex-row gap-2.5">
            <ButtonComponent
              onClick={() => setActivePage && setActivePage("projects")}
              className="w-full md:w-auto px-6 py-2 rounded-md bg-[var(--color-primary)] text-white font-medium transition-opacity hover:opacity-80 active:opacity-70 shadow-[var(--box-shadow-primary)] flex gap-4 justify-center items-center"
              startIcon={<ViewInArRoundedIcon />}
            >
              {homeSection?.buttons.viewProjects}
            </ButtonComponent>
            <ButtonComponent
              onClick={() => alert("Button clicked!")}
              className="w-full md:w-auto px-6 py-2 rounded-md bg-transparent [border:var(--border-button-primary)] font-medium transition-opacity hover:opacity-80 active:opacity-70 flex gap-4 justify-center items-center text-[var(--icon-color-primary)]"
              startIcon={
                <DownloadOutlinedIcon
                  style={{ color: "var(--icon-color-primary)" }}
                />
              }
            >
              {homeSection?.buttons.downloadResume}
            </ButtonComponent>
            <ButtonComponent
              onClick={() => alert("Button clicked!")}
              className="w-full md:w-auto px-6 py-2 rounded-md bg-transparent [border:var(--border-button-secondary)] font-medium transition-opacity hover:opacity-80 active:opacity-70 flex gap-4 justify-center items-center text-[var(--icon-color-secondary)]"
              startIcon={
                <DownloadOutlinedIcon
                  style={{ color: "var(--icon-color-secondary)" }}
                />
              }
            >
              {homeSection?.buttons.contactMe}
            </ButtonComponent>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
