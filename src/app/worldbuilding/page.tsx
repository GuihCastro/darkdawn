"use client";

import { useState, useEffect, useRef } from 'react';
import styles from './page.module.scss';
import Header from '@/components/Header/Header';

export default function WorldbuildingPage() {
    const [isAboutVisible, setIsAboutVisible] = useState(false);
    const [isTalesVisible, setIsTalesVisible] = useState(false);
    const aboutRef = useRef<HTMLDivElement>(null);
    const talesRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (entry.isIntersecting) {
                    setIsAboutVisible(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.1,
            }
        );

        const currentRef = aboutRef.current; // Copia para uma variável
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) observer.unobserve(currentRef);
        };
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (entry.isIntersecting) {
                    setIsTalesVisible(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.5,
            }
        );

        const currentRef = talesRef.current; // Copia para uma variável
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) observer.unobserve(currentRef);
        };
    }, []);

    return (
        <div className={styles.container}>
            <Header />
            <section className={styles.welcome}>
                <h1
                    className={`${isAboutVisible ? styles.hide : ''}`}
                >The world of Darkdawn</h1>
            </section>
            <section
                ref={aboutRef}
                className={`${styles.about} ${isAboutVisible ? styles.visible : ''}`}
            >
                <div className={`${styles.text} ${isAboutVisible ? styles.visible : ''}`}>
                    <h2>About the project</h2>
                    {/* <hr /> */}
                    <p>The project was born in 2020, when Mari and Mike were classmates in João Paulo Bragato&apos;s Character Design course, and decided to come together for a collab.
                    </p>
                    <br />
                    <p>The work together was so successful, and the ideas were so rich, that the project grew, and it was almost natural that it would be revisited and amplified now in 2024.
                        The lore was deepened, new characters were born, others evolved and the universe expanded. In this new cycle, the world of Darkdawn seems so alive and pulsating that it is almost risky to inhale and be intoxicated by the evil fog that fills the city&apos;s streets and factories. The same streets and factories that are stage for the confrontation between the revolutionary Guardians of the Sun and the mysterious Eclipse Corp.
                    </p>
                    <br />
                    <p>We invite everyone to sneak into these dark alleys and take their side in the battle for the sun of DarkDawn.</p>
                </div>
                <div className={`${styles.char} ${isAboutVisible ? styles.visible : ''}`}>
                    <img src="/assets/worldbuilding.png" alt="City landscape art" />
                </div>
            </section>
            <section
                ref={talesRef}
                className={`${styles.tales} ${isTalesVisible ? styles.visible : ''}`}
            >
                <div
                    ref={talesRef}
                    className={`${styles.content} ${isTalesVisible ? styles.visible : ''}`}
                >
                    <div className={styles.title}>
                        <h2>Tales</h2>
                        {/* <hr /> */}
                    </div>
                    <div className={styles.txts}>
                        <div>
                            <h3>Workers</h3>
                            <img src="/assets/worker.png" alt="Worker Character" />
                            <p>Day after day, night after night, masses of people move through the alleys, cross walkways and fill the factories, inhaling the toxic gas excreted by the machinery of which their own flesh is the raw material.
                                Their movement is coordinated and follows a perfect rhythm in an endless flow. They enter, clock in, deposit their lives in the gears of some construct they don&apos;t even know what it is, clock out and return home, even more emptied than when they arrived. And they repeat the cycle as long as there is still some blood pumping in their veins, or until they are consumed and completely bewildered by the fog.
                            </p>
                            <br />
                            <p>When a gear breaks, it is discarded and replaced by another; no more, no less. Exactly like this is the (non)life cycle of Eclipse Corporation workers. Mere biological appendages of mechanical monstrosities, in a dead organism that insatiably feeds on life.</p>
                        </div>
                        <div>
                            <h3>Tempo Priest</h3>
                            <img src="/assets/priest.png" alt="Priest Character" />
                            <p>Ih the beats of the clock, infinite is the turning of time,
                                yet finite is the life that runs towards demise.
                                Something draws your attention,
                                you fell attracted towards the pendulum of Smoke,
                                sudenly you feel tired, tired and angry.
                                There is no time to be a child in the darknes of the fog, as youth gives way yourself
                                into another whell of the cog of the Dark Eclipse.</p>
                            <br />
                            <p>Lures with his pendulum,
                                and accelerates time around himself,
                                causing the children of the dark mist to grow old and more dangerous </p>
                        </div>
                        <div>
                            <h3>Overseer</h3>
                            <img src="/assets/overseer.png" alt="Overseer Character" />
                            <p>The Inspectors are key pieces on the cogs of the titanic machinery of Eclipse Corp., even though they are as replaceable as the workers themselves. Overseeing the laborers, their role is to ensure that the work gets done and production doesn&apos;t halt, as well as to suppress the slightest sign of an uprising, in the least friendly manner possible. Though they may not realize it, they do belong to the same caste as those they control, never hesitating to employ complete brutality against their own kind in favor of the interests of the elite to which they aspire to belong.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
