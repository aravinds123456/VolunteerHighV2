import { useEffect, useRef, useState } from 'react';

export function useCountUp(target, start, durationMs = 1500, instant = false) {
  const [value, setValue] = useState(instant ? target : 0);
  const startedRef = useRef(false);
  const frameRef = useRef(null);

  useEffect(() => {
    if (instant) {
      setValue(target);
      return;
    }
    if (!start || startedRef.current) return;
    startedRef.current = true;

    const startTime = performance.now();

    const tick = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      setValue(Math.floor(progress * target));
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(tick);
      }
    };

    frameRef.current = requestAnimationFrame(tick);
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [start, instant]);

  return value;
}

export function useScrollVisibility(threshold = 0.5) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= threshold) {
          setIsVisible(true);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isVisible];
}

export function useScrollTransition(threshold = 0.35) {
  const ref = useRef(null);
  const [isIdentity, setIsIdentity] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIdentity(entry.isIntersecting && entry.intersectionRatio >= threshold);
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isIdentity];
}

const HOME_ANIMATION_KEY = 'volunteerhigh_home_animations_played';

export function shouldPlayHomeAnimations() {
  return sessionStorage.getItem(HOME_ANIMATION_KEY) !== 'true';
}

export function markHomeAnimationsPlayed() {
  sessionStorage.setItem(HOME_ANIMATION_KEY, 'true');
}

export function resetHomeAnimations() {
  sessionStorage.removeItem(HOME_ANIMATION_KEY);
}
