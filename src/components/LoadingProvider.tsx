"use client";

import { useEffect, useState, ReactNode } from "react";
import { usePathname } from "next/navigation";
import Loader from "./Loader";

interface LoadingProviderProps {
  children: ReactNode;
}

const LoadingProvider: React.FC<LoadingProviderProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();

  // Service colors mapping
  const serviceColors: Record<string, string> = {
    "crescita-personale": "border-t-blue-400",
    "formazione-aziendale": "border-t-green-400",
    "orientamento-scelta": "border-t-purple-500",
    "consulenza-filosofica": "border-t-teal-400",
  };

  // Get color for current service page
  const getLoaderColor = () => {
    if (pathname.startsWith("/servizi/")) {
      const slug = pathname.split("/servizi/")[1];
      return serviceColors[slug] || "border-t-accent-teal";
    }
    return "border-t-accent-teal";
  };

  useEffect(() => {
    setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Loader isLoading={isLoading} color={getLoaderColor()} />
      {children}
    </>
  );
};

export default LoadingProvider;
