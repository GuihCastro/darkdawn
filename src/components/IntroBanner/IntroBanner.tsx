"use client";

import { useEffect, useRef, useState } from 'react';
import style from './IntroBanner.module.scss';

export default function IntroBanner() {
    const [isAbstractVisible, setIsAbstractVisible] = useState(false);
    const abstractRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (entry.isIntersecting) {
                    setIsAbstractVisible(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.02,
            }
        );

        const currentRef = abstractRef.current; // Copia para uma variável
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) observer.unobserve(currentRef);
        };
    }, []);

    return (
        <div
            ref={abstractRef}
            className={`${style.container} ${isAbstractVisible ? style.visible : ''}`}
        >
            <img
                className={`${style.bg} ${isAbstractVisible ? style.visible : ''}`}
                src="/assets/banner3.jpg" alt="Banner"
            />
            <div className={`${style.text} ${isAbstractVisible ? style.visible : ''}`}>
                <div className={style.title}>
                    <h2>
                        <img src="/assets/logo.png" alt="DarkDawn logo" />
                    </h2>
                    <h3>An art project by Mari Livraes and Mike Azevedo</h3>
                </div>
                <p>What to do when the city streets are taken over by a mystical haze that intoxicates, inebriates and transforms everyone around you?
                    Factories, buildings and colossal machines emerge from nowhere, and, from one moment to the next, all citizens become Kafkaesque workers at the service of the great Eclipse Corp.
                    It may seem like this is how things have always been and always will be, as if seeing the absurdity of this dystopia isn&apos;t even possible. But not for The Bright One.
                    For some reason, Sowilo was unaffected by the fog illusions. Managing to awaken some of their comrades, they form the Guardians of the Sun, a small and powerful revolutionary group determined to free the city from the Eclipse&apos;s tentacles.
                </p>
            </div>
        </div>
    );
}
