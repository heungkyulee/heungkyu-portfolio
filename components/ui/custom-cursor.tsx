"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
    const [isPointer, setIsPointer] = useState(false);
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 700 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);

            const target = e.target as HTMLElement;
            setIsPointer(
                window.getComputedStyle(target).cursor === "pointer" ||
                target.tagName === "A" ||
                target.tagName === "BUTTON"
            );
        };

        window.addEventListener("mousemove", moveCursor);
        return () => window.removeEventListener("mousemove", moveCursor);
    }, [cursorX, cursorY]);

    return (
        <>
            {/* Main cursor dot - Animated gradient */}
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-50 mix-blend-difference"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    translateX: "-50%",
                    translateY: "-50%",
                    background: "linear-gradient(90deg, #FF6B35, #EC4899, #A855F7, #FF6B35)",
                    backgroundSize: "300% 100%",
                }}
                animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                }}
            />

            {/* Outer ring - Animated */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-50 mix-blend-difference"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    translateX: "-50%",
                    translateY: "-50%",
                    border: "1px solid",
                    borderImageSlice: 1,
                    borderImageSource: "linear-gradient(90deg, rgba(255,107,53,0.5), rgba(236,72,153,0.5), rgba(168,85,247,0.5))",
                }}
                animate={{
                    scale: isPointer ? 1.5 : 1,
                    opacity: isPointer ? 0.5 : 1,
                    rotate: [0, 360],
                }}
                transition={{ 
                    scale: { duration: 0.15 },
                    opacity: { duration: 0.15 },
                    rotate: { duration: 8, repeat: Infinity, ease: "linear" }
                }}
            />

            {/* Glow trail effect */}
            <motion.div
                className="fixed top-0 left-0 w-12 h-12 rounded-full pointer-events-none z-40 mix-blend-screen"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    translateX: "-50%",
                    translateY: "-50%",
                    background: "radial-gradient(circle, rgba(255,107,53,0.15) 0%, transparent 70%)",
                }}
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
        </>
    );
}
