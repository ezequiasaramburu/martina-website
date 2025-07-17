"use client";

import { useEffect, useState } from "react";

interface LoaderProps {
  isLoading: boolean;
  color?: string;
}

const Loader: React.FC<LoaderProps> = ({
  isLoading,
  color = "border-t-accent-teal",
}) => {
  const [shouldShow, setShouldShow] = useState(isLoading);

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
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-dark-900 transition-opacity duration-300 ${
        isLoading ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="text-center">
        <div
          className={`w-16 h-16 border-4 border-dark-600 ${color} rounded-full animate-spin`}
        ></div>

        <p className="mt-4 text-foreground/70 text-sm font-medium">
          Caricamento...
        </p>
      </div>
    </div>
  );
};

export default Loader;
