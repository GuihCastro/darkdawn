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
                    <hr />
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni iste velit voluptatibus illum, dolorum facilis doloribus non maxime aperiam sit soluta est molestiae aliquam explicabo perferendis eaque harum ipsum saepe.</p>
                    <br />
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque beatae expedita rerum vero natus, voluptates hic! Explicabo minima temporibus perferendis mollitia voluptate voluptates magni? Doloremque esse eum accusamus totam voluptas.</p>
                    <br />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, voluptatibus consequatur repudiandae nam sint quibusdam et officia, fugiat esse vitae cupiditate vero nulla saepe autem. Quae sit quia dignissimos fuga!</p>
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
                        <hr />
                    </div>
                    <div className={styles.txts}>
                        <div>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque fuga harum voluptates eligendi nemo ut enim est amet perspiciatis corporis. Voluptas a omnis similique earum ea sint quo quos rerum?</p>
                            <br />
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam atque modi itaque commodi. Accusantium doloremque, officiis commodi amet asperiores laudantium architecto excepturi hic? Accusamus, cupiditate commodi. Sapiente rerum possimus sit.</p>
                            <br />
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad magni in ex sed fugit quasi? Neque similique, delectus molestiae ex repudiandae nesciunt corporis optio, maxime tempore dolore veritatis dolorem nobis?</p>
                        </div>
                        <div>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque distinctio eveniet eius molestias quisquam accusamus minus, cumque veritatis quia ea eum, optio dolore laboriosam alias ut nihil sapiente delectus? Repudiandae.</p>
                            <br />
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste temporibus ducimus, ipsam corrupti ex consectetur incidunt a rerum veritatis fugiat quis, facere id. Blanditiis reprehenderit iusto recusandae aliquid consectetur alias?</p>
                            <br />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci rerum perferendis odio minus porro doloremque dicta cumque vero. Ex assumenda at asperiores dolor deleniti minima! Ab architecto eos consequatur magni.</p>
                        </div>
                        <div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, ad exercitationem quod voluptatum cum, iste odit praesentium provident, architecto similique facere voluptate consequatur enim qui magni aperiam illo libero dolor?</p>
                            <br />
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum eaque labore qui et id asperiores molestias temporibus commodi a sint ut dicta ea eligendi, sed provident iure, atque aperiam perspiciatis?</p>
                            <br />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae aperiam cumque minus maxime, recusandae delectus maiores animi reiciendis deserunt perspiciatis id, ut facere voluptates aliquid quas odit sunt quasi quis.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
