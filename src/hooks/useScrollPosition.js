import { useState, useEffect } from 'react';

export default function useScrollPosition() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const position = window.pageYOffset;
            setScrollPosition(position);
            setIsScrolled(position > 10);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        // Initial check
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return { scrollPosition, isScrolled };
}