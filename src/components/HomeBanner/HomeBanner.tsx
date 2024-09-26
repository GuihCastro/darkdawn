"use client";

import { useEffect, useRef, useState } from 'react';
import style from './HomeBanner.module.scss';

export default function HomeBanner() {
    const [isBannerVisible, setIsBannerVisible] = useState(false);
    const bannerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (entry.isIntersecting) {
                    setIsBannerVisible(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.02,
            }
        );

        const currentRef = bannerRef.current; // Copia para uma variável
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) observer.unobserve(currentRef);
        };
    }, []);

    return (
        <div
            ref={bannerRef}
            className={`${style.container} ${isBannerVisible ? style.visible : ''}`}
        >
            <img
                className={`${isBannerVisible ? style.visible : ''}`}
                src="/assets/banner2.jpg" alt="Banner"
            />
            <h2 className={`${isBannerVisible ? style.visible : ''}`}>
                They&apos;re <span>watching</span> you!
            </h2>
        </div>
    );
}
