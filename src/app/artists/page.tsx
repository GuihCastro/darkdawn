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
                {/* <hr /> */}
                <p>Concept Artist with a special passion for Dark Fantasy themes. Having extensive experience working with various companies and projects, both in the national and international AAA market. Art and Character Design Instructor at ICS</p>
                <p>I believe that the artist's soul is freed when we can expand the connection between the artist's technique and interpretation, his worldview and his ideals.
                In 2024 I gave myself the freedom to produce things that I feel are true and that I would like to bring to the world. This is my cry, which can echo beyond my existence.</p>
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
                {/* <hr /> */}
                <p>Illustrator and Concept Artist born in Osasco, works with games and has had Riot Games / Valve / Blizzard / NCsoft / Tencent / Supercell / Guerrilla as clients. He enjoys making colorful and fun digital and traditional paintings, creator of MAR Studio and teacher at ICS since 2013.</p>
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
