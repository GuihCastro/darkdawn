import Link from 'next/link';
import style from './Header.module.scss';

export default function Header() {
    return (
        <header className={style.container}>
            <Link href='/'>
                <img src="/assets/logo.png" alt="DarkDawn logo" />
            </Link>
        </header>
    );
}