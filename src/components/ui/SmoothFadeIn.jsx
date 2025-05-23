// components/SmoothFadeIn.jsx
import { motion } from 'framer-motion';

export default function SmoothFadeIn({ children, delay = 0 }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: delay / 1000 }}
        >
            {children}
        </motion.div>
    );
}