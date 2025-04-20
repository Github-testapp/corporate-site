import { useState, useEffect } from 'react';

export default function useMediaQuery(query) {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        // Check if window is available (client-side)
        if (typeof window !== 'undefined') {
            const media = window.matchMedia(query);

            // Set initial value
            setMatches(media.matches);

            // Define callback
            const listener = () => {
                setMatches(media.matches);
            };

            // Add listener
            media.addEventListener('change', listener);

            // Clean up
            return () => {
                media.removeEventListener('change', listener);
            };
        }
    }, [query]);

    return matches;
}