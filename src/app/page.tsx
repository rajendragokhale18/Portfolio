"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Intro from "@/components/sections/Intro";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Certifications from "@/components/sections/Certifications";
import Blog from "@/components/sections/Blog";
import Contact from "@/components/sections/Contact";

// Dynamically import cursor (no SSR needed)
const CustomCursor = dynamic(() => import("@/components/ui/CustomCursor"), {
  ssr: false,
});

export default function Home() {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <>
      {/* Custom cursor */}
      <CustomCursor />

      {/* Terminal boot intro */}
      <Intro onComplete={() => setIntroComplete(true)} />

      {/* Main site (rendered behind intro, revealed after) */}
      {introComplete && (
        <>
          <Navbar />
          <main id="main-content" tabIndex={-1}>
            <Hero />
            <About />
            <Experience />
            <Skills />
            <Projects />
            <Certifications />
            <Blog />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}
