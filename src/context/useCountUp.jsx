import { useEffect, useRef, useState } from "react";

export function useCountUp(target, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null); // always a valid ref object

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;

      let start = 0;
      const increment = target / (duration / 16);

      function update() {
        start += increment;
        if (start < target) {
          setCount(Math.floor(start));
          requestAnimationFrame(update);
        } else {
          setCount(target);
        }
      }

      update();

      observer.disconnect(); // stop observing after counting
    });

    observer.observe(element);

    return () => observer.disconnect();
  }, [target, duration]);

  return { count, ref };
}
