import style from './Header.module.scss';

export default function Header() {
    return (
        <header className={style.container}>
            <img src="/assets/logo.png" alt="DarkDawn logo" />
        </header>
    );
}