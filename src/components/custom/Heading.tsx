import React, { useState, useEffect, useRef } from "react";
import BlurIn from "@/components/ui/blur-in";

interface HeadingProps {
  text: string;
}

const Heading: React.FC<HeadingProps> = ({ text }) => {
  const [isInView, setIsInView] = useState(false);
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    return () => {
      if (headingRef.current) {
        observer.unobserve(headingRef.current);
      }
    };
  }, []);

  return (
    <div ref={headingRef} className="flex items-center justify-center">
      <h1 className="scroll-m-20 my-5 text-4xl font-semibold tracking-tight lg:text-5xl">
        {isInView && (
          <BlurIn
            word={text} // Pass the text prop to BlurIn component
            className="text-4xl font-bold text-black dark:text-white"
          />
        )}
      </h1>
    </div>
  );
};

export default Heading;
