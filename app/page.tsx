"use client"
import Hero from "@/components/Hero";
import '../app/globals.css';
import Skills from "@/components/Tech_Stack";
import { FloatingDockDemo } from "@/components/magicui/Dock";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";

export default function Home() {
  return (
      
    <main className="h-screen w-screen bg-grid-8-s-2-neutral-950">  
 
      <Hero/>
      <Projects/>
      <Skills  />
      <div className="relative z-50 ">
        <FloatingDockDemo  />
      </div>
      <Contact />
    </main>
  );
}
