import Link from 'next/link';
import style from './Footer.module.scss';
import { FaArtstation, FaInstagram, FaGlobe } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className={style.container}>
            <div className={style.content}>
                <div className={style.links}>
                    <div>
                        <h3>Mari</h3>
                        <span>
                            <Link href='https://www.artstation.com/marilivraes' target='_blank'>
                                <FaArtstation size={15} />
                            </Link>
                            <Link href='https://www.instagram.com/marilivraes/' target='_blank'>
                                <FaInstagram size={15} />
                            </Link>
                            <Link href='https://marianalivraes.com/' target='_blank'>
                                <FaGlobe size={15} />
                            </Link>
                        </span>
                    </div>
                    <div>
                        <h3>Mike</h3>
                        <span>
                            <Link href='https://www.artstation.com/mikeazevedo' target='_blank'>
                                <FaArtstation size={15} />
                            </Link>
                            <Link href='https://www.instagram.com/mikeazevedoart/' target='_blank'>
                                <FaInstagram size={15} />
                            </Link>
                        </span>
                    </div>
                </div>
                <div className={style.copyright}>
                    <p>© 2024 DarkDawn. All rights reserved.</p>
                    <p>This website and its content, including but not limited to images, text, and design, are the intellectual property of Mariana Livraes and Mike Azevedo and are protected by applicable copyright and trademark laws. Unauthorized reproduction, distribution, or use is strictly prohibited.</p>
                </div>
            </div>
        </footer>
    );
}