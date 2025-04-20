import useIntersectionObserver from '../../hooks/useIntersectionObserver';

export default function AnimatedSection({
    children,
    className = '',
    delay = 0,
    animation = 'fade-up', // fade-up, fade-in, slide-left, slide-right
    threshold = 0.1,
}) {
    const [ref, isIntersecting] = useIntersectionObserver({
        threshold: threshold,
        triggerOnce: true,
    });

    const getAnimationClasses = () => {
        if (isIntersecting) {
            return 'opacity-100 translate-y-0 translate-x-0';
        }

        switch (animation) {
            case 'fade-up':
                return 'opacity-0 translate-y-10';
            case 'fade-in':
                return 'opacity-0';
            case 'slide-left':
                return 'opacity-0 -translate-x-10';
            case 'slide-right':
                return 'opacity-0 translate-x-10';
            default:
                return 'opacity-0 translate-y-10';
        }
    };

    return (
        <div
            ref={ref}
            className={`transition-all duration-700 ease-out ${className} ${getAnimationClasses()}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
}