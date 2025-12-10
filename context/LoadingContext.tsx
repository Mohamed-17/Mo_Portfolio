"use client";
import React, {
  createContext,
  useState,
  useEffect,
  useTransition,
} from "react";
import { usePathname } from "next/navigation";

type LoadingContextType = {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

export const LoadingContext = createContext<LoadingContextType | undefined>(
  undefined
);

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [, startTransition] = useTransition();

  useEffect(() => {
    startTransition(() => {
      setIsLoading(true);
      setHasLoaded(false);
    });
  }, [pathname]);

  useEffect(() => {
    if (hasLoaded || !isLoading) return;

    const timer = setTimeout(() => {
      setIsLoading(false);
      setHasLoaded(true);
      document.body.style.cursor = "default";
      window.scrollTo(0, 0);
    }, 2000);

    return () => clearTimeout(timer);
  }, [hasLoaded, isLoading]);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoadingContext.Provider>
  );
}
