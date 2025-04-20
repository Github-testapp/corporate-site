// components/ScrollTrigger.jsx
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function AnimatedContainer({ children, id }) {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.from(`#${id} .animate-item`, {
            opacity: 0,
            y: 50,
            stagger: 0.2,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
                trigger: `#${id}`,
                start: "top 80%",
                toggleActions: "play none none none"
            }
        });

        return () => {
            // クリーンアップ
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, [id]);

    return (
        <div id={id}>
            {children}
        </div>
    );
}