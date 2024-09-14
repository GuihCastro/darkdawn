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
                threshold: 0.1, // Anima quando 10% da seção está visível
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
            title: 'Artistas',
            items: ['Mari Livraes', 'Mike Azevedo'],
        },
        {
            backgroundImage: '/assets/card2.jpg',
            title: 'Wordbuilding',
            items: ['Sobre o projeto', 'Contos'],
        },
        {
            backgroundImage: '/assets/card3.jpg',
            title: 'Galeria',
            items: ['Ilustras', 'Cenários', 'Characters', 'Props', 'Extras'],
        },
        {
            backgroundImage: '/assets/card4.jpg',
            title: 'WIPs',
            items: [''],
        },
        // Adicione mais cards conforme necessário
    ];

    return (
        <div className={`${style.container} ${isVisible ? style.visible : ''}`} ref={sectionRef}>
            {cards.map((card, index) => (
                <Card
                    key={index}
                    backgroundImage={card.backgroundImage}
                    title={card.title}
                    items={card.items}
                />
            ))}
        </div>
    );
}
