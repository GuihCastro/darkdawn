"use client";

import { useEffect, useRef, useState } from 'react';
import style from './page.module.scss';
// import Header from '@/components/Header/Header';
import CardSection from '@/components/CardSection/CardSection';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  const [isAbstractVisible, setIsAbstractVisible] = useState(false);
  const [isFactionsVisible, setIsFactionsVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const abstractRef = useRef<HTMLDivElement>(null);
  const factionsRef = useRef<HTMLDivElement>(null);

  const preventContextMenu = (event: React.MouseEvent<HTMLImageElement>): void => {
    event.preventDefault();
  };

  useEffect(() => {
    // Define um timeout que coincide com a duração da animação
    const timer = setTimeout(() => {
      setContentVisible(true);
    }, 2900); // 3000ms é o tempo da animação text-flicker-in-glow

    return () => clearTimeout(timer); // Limpa o timer se o componente for desmontado
  }, []);

  // Hook para animar a seção abstract
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

  // Hook para animar a seção factions
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsFactionsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    const currentRef = factionsRef.current; // Copia para uma variável
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div className={`${style.container} ${contentVisible ? style.fadeIn : ''}`}>
      <main className={contentVisible ? style.bgVisible : ''}>
        {/* <Header contentVisible={contentVisible} /> */}
        <header className={`${contentVisible ? style.fadeIn : ''}`}>
          <img src="/assets/logo.png" alt="DarkDawn logo" />
        </header>
        <h1>The sun will shine again for us</h1>
      </main>

      <section
        ref={abstractRef}
        className={`${style.abstract} ${isAbstractVisible ? style.visible : ''}`}
      >
        <div className={style.info}>
          <div className={`${style.characters} ${isAbstractVisible ? style.visible : ''}`}>
            <img src="/assets/abstract1.png" alt="Sowilo" onContextMenu={preventContextMenu} />
            {/* <img className={style.woman} src="/assets/abstract2.png" alt="Worker character" onContextMenu={preventContextMenu} /> */}
          </div>
          <div className={`${style.text} ${isAbstractVisible ? style.visible : ''}`}>
            <div className={style.title}>
              <h2>Darkdawn</h2>
              {/* <hr /> */}
              <h3>An art project by Mari Livraes and Mike Azevedo</h3>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat natus quasi iure accusamus. Nisi voluptate magnam fugiat neque nobis quo nihil ipsum fugit facilis ut. Itaque dolorem quos sapiente harum!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quidem neque nisi voluptatibus vitae deserunt, tempore blanditiis mollitia in quia ex nulla cum porro eum sed aliquid quis et repellat?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse facilis sed reiciendis consectetur necessitatibus consequuntur temporibus odio officiis nemo error, in obcaecati cum iusto! At natus autem voluptatem earum. Accusamus?
            </p>
          </div>
        </div>
      </section>

      <section
        ref={factionsRef}
        className={`${style.factions} ${isFactionsVisible ? style.visible : ''}`}
      >
        <div className={isFactionsVisible ? style.visible : ''}>
          <img className={style.guardians} src="/assets/guardians.png" alt="Guardians of the Sun logo" onContextMenu={preventContextMenu} />
          <div className={style.info}>
            <h2>Guardians of The Sun</h2>
            <hr />
            <p>Despite the intoxicating state imposed by the magic of the Mist, a few workers manage to awaken from mechanistic apathy and, freed from stunning blindness, see the destination to which they are being guided day after day. Brothers wasting away, going crazy, becoming beasts and even disappearing, while the others simply continue going on, following the same repetitive and exhausting routine, as if nothing had happened; as if nothing could even happen.
              Once aware and determined to avoid the inexorable future, they meet, unite, organize themselves... And thus the resistance group called Guardians of the Sun was born.
              Its leader, The Bright One, Sowilo is the bastion of this revolutionary phalanx, and the greatest threat ever known to the Eclipse Corp.
              They are determined to make the sun shine once again on the city taken by shadows.
            </p>
            <br />
            <p></p>
          </div>
        </div>
        <div className={isFactionsVisible ? style.visible : ''}>
          <img className={style.eclipse} src="/assets/eclipse_corp.png" alt="Eclipse Corp. logo" onContextMenu={preventContextMenu} />
          <div className={style.info}>
            <h2>Eclipse Corp.</h2>
            <hr />
            <p>No one knows how or when they arrived. It&apos;s as if they&apos;ve been there forever, although that&apos;s not true.
              Their faces are unknown, and their whereabouts even more so. They are right there, dominating, sucking, parasitizing those people and their homes, but it&apos;s as if they didn&apos;t even exist. Although witnesses of their presence are everywhere: all the factories, buildings, colossal machines and, obviously, its fog that takes over every corner of the city. All of this belongs to them, and it is right there, imposing itself on every miserable citizen of that place.
              Their will is asserted through the workers themselves, or rather a small portion of them, who, in exchange for some derisory advantage (true crumbs!) throw their own brothers into the mouths of the furnaces that feed those metal titans.
              One may not see them, and even ignore their existence, but one don&apos;t take a single step outside the line they have drawn.</p>
            <br />
            <p></p>
          </div>
        </div>
      </section>

      <CardSection />

      <Footer />
    </div>
  );
}
