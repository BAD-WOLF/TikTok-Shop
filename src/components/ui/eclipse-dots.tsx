import React, {ReactElement, useEffect} from "react";
import {motion, useMotionValue, animate, useTransform} from "framer-motion";

export default function EclipseDots(
    {
        size = 24,
        distance = 13,
        duration = 1.2,
        leftColor = "#ff2d55",
        rightColor = "#00f2ea",}: {
        size,
        distance: number,
        duration: number,
        leftColor: string,
        rightColor: string }): ReactElement {
    const xLeft = useMotionValue(-distance);
    const xRight = useMotionValue(distance);

    useEffect(() => {
        const c1 = animate(xLeft, [-distance, distance], {
            duration,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
        });

        const c2 = animate(xRight, [distance, -distance], {
            duration,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
        });

        return () => {
            c1.stop();
            c2.stop();
        };
    }, [distance, duration, xLeft, xRight]);

    // Quem está na frente
    const whoIsFront = useTransform([xLeft, xRight], ([lx, rx]) =>
        lx > rx ? "left" : "right"
    );

    // Overlap 0 → longe, 1 → sobrepostos
    const overlap = useTransform([xLeft, xRight], ([lx, rx]) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const d = Math.abs(lx - rx);
        const maxOverlap = size * 0.9;
        return Math.max(0, 1 - d / maxOverlap);
    });

    // Escala atrás (1 → 0.7)
    const scaleLeft = useTransform([whoIsFront, overlap], ([front, ov]) =>
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        front === "left" ? 1 : 1 - ov * 0.3
    );
    const scaleRight = useTransform([whoIsFront, overlap], ([front, ov]) =>
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        front === "right" ? 1 : 1 - ov * 0.3
    );

    // Cor interpolada p/ quem está atrás
    const colorLeft = useTransform([whoIsFront, overlap], ([front, ov]) =>
        front === "left" ? leftColor : mixColor(leftColor, "#000000", ov)
    );
    const colorRight = useTransform([whoIsFront, overlap], ([front, ov]) =>
        front === "right" ? rightColor : mixColor(rightColor, "#000000", ov)
    );

    // Opacidade base fixa (ambas já transparentes desde o início)
    const baseOpacity = 0.6;

    return (
        <div
            className="relative"
            style={{width: distance * 2 + size, height: size * 2}}
        >
            {/* Dot Esquerda */}
            <motion.div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
                style={{
                    width: size,
                    height: size,
                    x: xLeft,
                    backgroundColor: colorLeft,
                    scale: scaleLeft,
                    opacity: baseOpacity,
                }}
            />

            {/* Dot Direita */}
            <motion.div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
                style={{
                    width: size,
                    height: size,
                    x: xRight,
                    backgroundColor: colorRight,
                    scale: scaleRight,
                    opacity: baseOpacity,
                }}
            />
        </div>
    );
}

// Função para interpolar cor
function mixColor(c1, c2, t) {
    const parseHex = (c) =>
        c
            .replace("#", "")
            .match(/.{1,2}/g)
            .map((x) => parseInt(x, 16));
    const [r1, g1, b1] = parseHex(c1);
    const [r2, g2, b2] = parseHex(c2);
    const r = Math.round(r1 + (r2 - r1) * t);
    const g = Math.round(g1 + (g2 - g1) * t);
    const b = Math.round(b1 + (b2 - b1) * t);
    return `rgb(${r},${g},${b})`;
}