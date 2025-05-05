
import React, { useEffect, useRef, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  threshold?: number;
  rootMargin?: string;
}

const IntersectionObserver: React.FC<Props> = ({
  children,
  threshold = 0.1,
  rootMargin = "0px",
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
    <div ref={ref} className="animate-on-scroll">
      {children}
    </div>
  );
};

export default IntersectionObserver;
