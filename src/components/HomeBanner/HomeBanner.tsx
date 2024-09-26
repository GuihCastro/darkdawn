import style from './HomeBanner.module.scss';

export default function HomeBanner() {
    return (
        <div className={style.container}>
            <img src="/assets/banner2.jpg" alt="Banner" />
            <h2>They&apos;re <span>watching</span> you!</h2>
        </div>
    );
}
