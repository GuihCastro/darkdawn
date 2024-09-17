"use client";

import { useState, useEffect, useRef } from 'react';
import styles from './page.module.scss';
import Header from '@/components/Header/Header';

export default function WorldbuildingPage() {
    const [isAboutVisible, setIsAboutVisible] = useState(false);
    const aboutRef = useRef<HTMLDivElement>(null);

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

    return (
        <div className={styles.container}>
            <Header />
            <section className={styles.welcome}>
                <h1>The world of Darkdawn</h1>
            </section>
            <section 
                ref={aboutRef}
                className={`${styles.about} ${isAboutVisible ? styles.visible : ''}`}
            >
                <div className={`${styles.text} ${isAboutVisible ? styles.visible : ''}`}>
                    <h2>About the project</h2>
                    <hr />
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni iste velit voluptatibus illum, dolorum facilis doloribus non maxime aperiam sit soluta est molestiae aliquam explicabo perferendis eaque harum ipsum saepe.</p>
                    <br />
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque beatae expedita rerum vero natus, voluptates hic! Explicabo minima temporibus perferendis mollitia voluptate voluptates magni? Doloremque esse eum accusamus totam voluptas.</p>
                    <br />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, voluptatibus consequatur repudiandae nam sint quibusdam et officia, fugiat esse vitae cupiditate vero nulla saepe autem. Quae sit quia dignissimos fuga!</p>
                </div>
                <div className={`${styles.char} ${isAboutVisible ? styles.visible : ''}`}>
                    <img src="/assets/sowilo1.png" alt="Sowilo character art" />
                </div>
            </section>
        </div>
    );
}
