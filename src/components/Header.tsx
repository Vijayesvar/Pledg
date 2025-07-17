"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const sections = [
  { id: "about", label: "About" },
  { id: "security", label: "Security" },
  { id: "features", label: "Features" },
  { id: "faq", label: "FAQ" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("about");
  const isClickScrolling = useRef(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        if (isClickScrolling.current) return;
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          setActive(visible[0].target.id);
        }
      },
      {
        root: null,
        rootMargin: "-100px 0px 0px 0px", // Keep your header offset
        threshold: [0.3, 1.0],
      }
    );
    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      isClickScrolling.current = true;
      const headerHeight = 80;
      const additionalOffset = 20;
      const totalOffset = headerHeight + additionalOffset;
      const elementPosition = el.offsetTop - totalOffset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
      setTimeout(() => {
        setActive(id);
        isClickScrolling.current = false;
      }, 600); // Adjust timeout to match scroll duration
    }
  };

  return (
    <div
      className={`
        fixed top-0 left-0 right-0 z-50 mx-auto
        ${scrolled ? "max-w-92" : "max-w-132"}
        mt-8 bg-white rounded-full text-center
        transition-all duration-400 ease-in-out
      `}
      style={{ boxShadow: "0px 4px 8px 2px rgba(0,0,0,0.13)" }}
    >
      <div className="flex items-center justify-between px-6 py-3">
        <div className="flex items-center gap-3 transition-all duration-400 ease-in-out">
          <Image src="/logo.svg" alt="Logo" width={34} height={34} />
          <span
            className={`
              text-foreground/85 text-lg font-semibold origin-left
              transition-all duration-400 ease-in-out
              ${scrolled ? "opacity-0 scale-x-75 w-0 pointer-events-none" : "opacity-100 scale-x-100 w-auto"}
            `}
            style={{
              transitionProperty: "opacity, transform, width",
              display: "inline-block",
              overflow: "hidden",
              whiteSpace: "nowrap"
            }}
          >
            Pledg
          </span>
        </div>
        <div className="flex items-center gap-2 font-medium text-sm">
          {sections.map((section) => (
            <div
              key={section.id}
              className={`cursor-pointer px-2 py-1 rounded transition-colors duration-200 flex flex-col font-medium items-center gap-[4px] ${
                active === section.id
                  ? "text-foreground/90 hover:text-foreground/80"
                  : "text-foreground/50 hover:text-foreground/60"
              }`}
              onClick={() => handleNavClick(section.id)}
            >
              {section.label}
              {active === section.id && (
                <div className="w-1 h-1 bg-foreground rounded-full transition-all duration-400 ease-in-out" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}