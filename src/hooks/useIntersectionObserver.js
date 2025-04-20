import { useEffect, useState, useRef } from 'react';

export default function useIntersectionObserver(options = {}) {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIsIntersecting(entry.isIntersecting);
        }, {
            root: null,
            rootMargin: '0px',
            threshold: 0.1,
            ...options
        });

        const currentElement = elementRef.current;

        if (currentElement) {
            observer.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, [options]);

    return [elementRef, isIntersecting];
}