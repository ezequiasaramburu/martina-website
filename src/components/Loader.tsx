"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";

interface LoaderProps {
  isLoading: boolean;
  color?: string;
}

const Loader: React.FC<LoaderProps> = ({
  isLoading,
  color = "accent-teal",
}) => {
  const [shouldShow, setShouldShow] = useState(isLoading);

  const getColorValue = (colorClass: string) => {
    const colorMap: Record<string, string> = {
      "border-t-blue-400": "blue-400",
      "border-t-green-400": "green-400",
      "border-t-purple-500": "purple-500",
      "border-t-teal-400": "teal-400",
      "border-t-accent-teal": "accent-teal",
    };
    return colorMap[colorClass] || "accent-teal";
  };

  const activeColor = getColorValue(color);

  useEffect(() => {
    if (isLoading) {
      setShouldShow(true);
    } else {
      const timer = setTimeout(() => setShouldShow(false), 150);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  if (!shouldShow) return null;

  return (
    <AnimatePresence>
      {shouldShow && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-dark-900"
        >
          <div className="text-center">
            {/* Animated loader container */}
            <div className="relative">
              {/* Outer rotating ring */}
              <motion.div
                className={`w-24 h-24 border-2 border-dark-600 rounded-full`}
                style={{
                  borderTopColor: `var(--color-${activeColor})`,
                  borderRightColor: `var(--color-${activeColor})`,
                }}
                animate={{ rotate: 360 }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Inner pulsing ring */}
              <motion.div
                className="absolute inset-2 border border-dark-700 rounded-full"
                style={{
                  borderColor: `var(--color-${activeColor})`,
                }}
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Icon in center */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{ color: `var(--color-${activeColor})` }}
                >
                  <Sparkles size={32} strokeWidth={1.5} />
                </motion.div>
              </div>
            </div>

            {/* Loading text */}
            <motion.div
              className="mt-6"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <p className="text-foreground/70 text-sm font-medium">
                Caricamento...
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
