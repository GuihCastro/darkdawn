import style from './Card.module.scss';

interface CardProps {
    backgroundImage: string;
    title: string;
    items: string[];
}

export default function Card({ backgroundImage, title, items }: CardProps) {
    return (
        <div
            className={`${style.container} ${style.card}`}
            style={{ '--background-image': `url(${backgroundImage})`, } as React.CSSProperties}
        >
            <div>
                <ul>
                    {items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <h2>{title}</h2>
                <span></span>
            </div>
        </div>
    )
}