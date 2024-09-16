import Link from 'next/link';
import style from './page.module.scss';
import Header from '@/components/Header/Header';
import { FaArtstation, FaInstagram, FaGlobe } from "react-icons/fa";

export default function ArtistsPage() {
    return (
        <div className={style.container}>
            <Header />
            <div className={style.mari}>
                <img src="/assets/mari.jpeg" alt="Avatar Mari Livraes" />
                <h2>Mari Livraes</h2>
                <hr />
                <p>Concept Artist com especial paixão por temas de Dark Fantasy. Tendo vasta experiência trabalhando com diversas empresas e projetos, tanto no mercado nacional quanto internacional AAA.</p>
                <br />
                <span>
                    <Link href='https://www.artstation.com/marilivraes' target='_blank'>
                        <FaArtstation size={25} />
                    </Link>
                    <Link href='https://www.instagram.com/marilivraes/' target='_blank'>
                        <FaInstagram size={25} />
                    </Link>
                    <Link href='https://marianalivraes.com/' target='_blank'>
                        <FaGlobe size={25} />
                    </Link>
                </span>
            </div>
            <div className={style.mike}>
                <img src="/assets/mike.jpeg" alt="Avatar Mike Azevedo" />
                <h2>Mike Azevedo</h2>
                <hr />
                <p>Ilustrador e Concept Artist nascido em Osasco, trabalha com games e já teve como clientes Riot Games / Valve / Blizzard / NCsoft / Tencent / Supercell / Guerrilla. Gosta de fazer pinturas digitais e tradicionais coloridas e divertidas, criador da MAR Studio e professor na ICS desde 2013.</p>
                <br />
                <span>
                    <Link href='https://www.artstation.com/mikeazevedo' target='_blank'>
                        <FaArtstation size={25} />
                    </Link>
                    <Link href='https://www.instagram.com/mikeazevedoart/' target='_blank'>
                        <FaInstagram size={25} />
                    </Link>
                </span>
            </div>
        </div>
    );
}
