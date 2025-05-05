
import React, { useEffect, useRef, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface Props {
  children: ReactNode;
  threshold?: number;
  rootMargin?: string;
  className?: string; // Added className prop
}

const IntersectionObserver: React.FC<Props> = ({
  children,
  threshold = 0.1,
  rootMargin = "0px",
  className = "", // Default to empty string
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin,
        threshold,
      }
    );

    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [rootMargin, threshold]);

  return (
    <div ref={ref} className={cn("animate-on-scroll", className)}>
      {children}
    </div>
  );
};

export default IntersectionObserver;
