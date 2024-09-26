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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat natus quasi iure accusamus. Nisi voluptate magnam fugiat neque nobis quo nihil ipsum fugit facilis ut. Itaque dolorem quos sapiente harum!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quidem neque nisi voluptatibus vitae deserunt, tempore blanditiis mollitia in quia ex nulla cum porro eum sed aliquid quis et repellat?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse facilis sed reiciendis consectetur necessitatibus consequuntur temporibus odio officiis nemo error, in obcaecati cum iusto! At natus autem voluptatem earum. Accusamus?
                </p>
            </div>        </div>
    );
}
