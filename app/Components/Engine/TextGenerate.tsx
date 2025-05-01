"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "motion/react";

export const TextGenerateEffect = ({
  words,
  className = "",
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration,
        delay: stagger(0.2),
      }
    );
  }, [animate, filter, duration]);

  return (
    <div className={`font-bold ${className}`}>
      <div className="mt-4">
        <div className="text-back  leading-snug tracking-wide">
          <motion.div ref={scope}>
            {wordsArray.map((word, idx) => (
              <motion.span
                key={word + idx}
                className=" text-black opacity-0"
                style={{ filter: filter ? "blur(10px)" : "none" }}
              >
                {word}&nbsp;
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
