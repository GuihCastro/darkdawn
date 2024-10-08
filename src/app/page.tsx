"use client";

import { useEffect, useRef, useState } from 'react';
import style from './page.module.scss';
import CardSection from '@/components/CardSection/CardSection';
import IntroBanner from '@/components/IntroBanner/IntroBanner';
import HomeBanner from '@/components/HomeBanner/HomeBanner';
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
    const timer = setTimeout(() => {
      setContentVisible(true);
    }, 2900);

    return () => clearTimeout(timer);
  }, []);

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

    const currentRef = abstractRef.current; 
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

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

    const currentRef = factionsRef.current;
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
        <header className={`${contentVisible ? style.fadeIn : ''}`}>
          <img src="/assets/logo.png" alt="DarkDawn logo" />
        </header>
        <h1>The sun will shine again for us</h1>
      </main>

      <IntroBanner />

      <section
        ref={abstractRef}
        className={`${style.abstract} ${isAbstractVisible ? style.visible : ''}`}
      >
        <div className={style.info}>
          <div className={`${style.characters} ${isAbstractVisible ? style.visible : ''}`}>
            <img src="/assets/abstract1.png" alt="Sowilo" onContextMenu={preventContextMenu} />
          </div>
          <div className={`${style.text} ${isAbstractVisible ? style.visible : ''}`}>
            <div className={style.title}>
              <h2>
                <img src="/assets/logo.png" alt="DarkDawn logo" />
              </h2>
              <h3>An art project by Mari Livraes and Mike Azevedo</h3>
            </div>
            <p>What to do when the city streets are taken over by a mystical haze that intoxicates, inebriates and transforms everyone around you?
              Factories, buildings and colossal machines emerge from nowhere, and, from one moment to the next, all citizens become Kafkaesque workers at the service of the great Eclipse Corp.
              It may seem like this is how things have always been and always will be, as if seeing the absurdity of this dystopia isn&apos;t even possible. But not for The Bright One.
              For some reason, Sowilo was unaffected by the fog illusions. Managing to awaken some of their comrades, they form the Guardians of the Sun, a small and powerful revolutionary group determined to free the city from the Eclipse&apos;s tentacles.
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

      <HomeBanner />

      <Footer />
    </div>
  );
}
