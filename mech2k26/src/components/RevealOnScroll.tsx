import { m } from 'framer-motion';
import { ReactNode } from 'react';

interface RevealOnScrollProps {
    children: ReactNode;
    width?: "fit-content" | "100%";
}

const RevealOnScroll = ({ children, width = "fit-content" }: RevealOnScrollProps) => {
    return (
        <div style={{ position: "relative", width }}>
            <m.div
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-75px" }}
                transition={{ duration: 0.5, delay: 0.25 }}
            >
                {children}
            </m.div>
        </div>
    );
};

export default RevealOnScroll;
