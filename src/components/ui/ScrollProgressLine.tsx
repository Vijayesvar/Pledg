"use client";
import { useRef, useLayoutEffect, useState, useEffect } from "react";

interface ScrollProgressLineProps {
  positions: number[]; // Each value is a percentage (0-100)
}

export default function ScrollProgressLine({ positions }: ScrollProgressLineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyBarHeight = 140; // px
  const [containerHeight, setContainerHeight] = useState(0);
  const [containerTop, setContainerTop] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useLayoutEffect(() => {
    if (containerRef.current) {
      setContainerHeight(containerRef.current.offsetHeight);
      setContainerTop(containerRef.current.getBoundingClientRect().top + window.scrollY);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // The bottom of the fixed bar in page coordinates
  const barTop = scrollY + 12 * 16 - 40; // 12rem top offset
  let barHeight = stickyBarHeight;
  // Calculate the pixel position of the last step relative to the page
  const lastStepPx = containerTop + 150 + (positions[positions.length - 1] / 100) * containerHeight;
  // Cap the bar's height so it doesn't exceed the last step
  const maxBarHeight = lastStepPx - barTop;
  if (barHeight > maxBarHeight) barHeight = Math.max(0, maxBarHeight);

  return (
    <>
      {/* The rest of the progress line and circles */}
      <div ref={containerRef} className="absolute left-1/2 top-[12rem] transform -translate-x-1/2 h-full w-[2px]">
        {/* Sticky active bar */}
        <div
          className="sticky top-0 transform w-[2px]"
          style={{ height: `${barHeight}px` }}
        >
          <div className="w-full h-full bg-gradient-to-b from-[#B1B8FF] to-[#7C87FF] rounded-full" />
        </div>
        {/* Background line */}
        <div className="w-full h-[85%] bg-[#6F78D4]/20 rounded-full absolute top-0 left-0"></div>
        {/* Step circles */}
        {positions.map((pos, index) => {
          const stepPx = containerTop + 150 + (pos / 100) * containerHeight;
          const isActive = barTop + barHeight >= stepPx;
          return (
            <div
              key={index}
              className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              style={{ top: `${pos}%` }}
            >
              <div
                className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-b from-[#B1B8FF] to-[#7C87FF] border-[#6F78D4] scale-110'
                    : 'bg-white border-[#6F78D4]/30'
                }`}
              />
            </div>
          );
        })}
      </div>
    </>
  );
} 