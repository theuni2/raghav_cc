'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function AnimatedCounter({ value, duration = 1800 }) {
  const [displayValue, setDisplayValue] = useState('0');
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    // Extract numerical part and any prefix/suffix (+, commas)
    const rawString = String(value);
    const numericMatch = rawString.replace(/,/g, '').match(/\d+/);

    if (!numericMatch) {
      setDisplayValue(rawString);
      return;
    }

    const targetNumber = parseInt(numericMatch[0], 10);
    const hasPlus = rawString.includes('+');

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const startTime = performance.now();

          const updateCount = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // easeOutExpo for natural acceleration and smooth deceleration
            const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            const currentCount = Math.floor(easeProgress * targetNumber);

            setDisplayValue(currentCount.toLocaleString() + (hasPlus ? '+' : ''));

            if (progress < 1) {
              requestAnimationFrame(updateCount);
            } else {
              setDisplayValue(rawString);
            }
          };

          requestAnimationFrame(updateCount);
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [value, duration, hasAnimated]);

  return (
    <span ref={elementRef} className="tabular-nums font-extrabold">
      {displayValue}
    </span>
  );
}
