"use client";

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import style from './CardSection.module.scss';
import Card from '../Card/Card';

export default function CardSection() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.1,
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    const cards = [
        {
            backgroundImage: '/assets/card1.jpg',
            title: 'Artists',
            items: ['Mari Livraes', 'Mike Azevedo'],
            href: '/artists',
        },
        {
            backgroundImage: '/assets/card2.jpg',
            title: 'Worldbuilding',
            items: ['About the project', 'Tales'],
            href: '/worldbuilding',
        },
        {
            backgroundImage: '/assets/card3.jpg',
            title: 'Gallery',
            items: ['Illustrations', 'Environments', 'Characters', 'Props', 'Extra'],
            href: '/gallery',
        },
        {
            backgroundImage: '/assets/card4.jpg',
            title: 'WIPs',
            items: [''],
            href: '/wips',
        },
    ];

    return (
        <section className={`${style.container} ${isVisible ? style.visible : ''}`} ref={sectionRef}>
            <div className={`${style.content} ${isVisible ? style.visible : ''}`}>
                {cards.map((card, index) => (
                    <Link href={card.href} key={index}>
                        <Card
                            key={index}
                            backgroundImage={card.backgroundImage}
                            title={card.title}
                            items={card.items}
                        />
                    </Link>
                ))}
            </div>
        </section>
    );
}
