import { useState, useEffect, useRef } from 'react';

interface AnimatedCounterProps {
    end: number;
    duration?: number;
    prefix?: string;
    suffix?: string;
    className?: string;
}

const AnimatedCounter = ({ 
    end, 
    duration = 2000, 
    prefix = '', 
    suffix = '',
    className = ''
}: AnimatedCounterProps) => {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const counterRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasAnimated) {
                        setHasAnimated(true);
                        animateCounter();
                    }
                });
            },
            { threshold: 0.3 }
        );

        if (counterRef.current) {
            observer.observe(counterRef.current);
        }

        return () => {
            if (counterRef.current) {
                observer.unobserve(counterRef.current);
            }
        };
    }, [hasAnimated]);

    const animateCounter = () => {
        const startTime = Date.now();
        const endTime = startTime + duration;

        const updateCounter = () => {
            const now = Date.now();
            const progress = Math.min((now - startTime) / duration, 1);
            
            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const currentCount = easeOutQuart * end;
            
            setCount(currentCount);

            if (now < endTime) {
                requestAnimationFrame(updateCounter);
            } else {
                setCount(end);
            }
        };

        requestAnimationFrame(updateCounter);
    };

    const isInteger = Number.isInteger(end);

    return (
        <div ref={counterRef} className={className}>
            {prefix}
            {isInteger 
                ? Math.floor(count) 
                : count.toFixed(2).replace(/\.?0+$/, '')}
            {suffix}
        </div>
    );
};

export default AnimatedCounter;
