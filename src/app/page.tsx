"use client";

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import style from './page.module.scss';
import CardSection from '@/components/CardSection/CardSection';

export default function Home() {
  const [isAbstractVisible, setIsAbstractVisible] = useState(false);
  const [isFactionsVisible, setIsFactionsVisible] = useState(false);
  const abstractRef = useRef<HTMLDivElement>(null);
  const factionsRef = useRef<HTMLDivElement>(null);

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
        threshold: 0.05,
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
        threshold: 0.05,
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
    <div className={style.container}>
      <main>
        <header>
          <Image src="/assets/logo.png" alt="DarkDawn logo" />
        </header>
        <h1>The sun will shine again for us</h1>
      </main>

      <section
        ref={abstractRef}
        className={`${style.abstract} ${isAbstractVisible ? style.visible : ''}`}
      >
        <div className={style.info}>
          <div className={`${style.characters} ${isAbstractVisible ? style.visible : ''}`}>
            <img className={style.man} src="/assets/abstract1.png" alt="Worker character" />
            <img className={style.woman} src="/assets/abstract2.png" alt="Worker character" />
          </div>
          <div className={`${style.text} ${isAbstractVisible ? style.visible : ''}`}>
            <div className={style.title}>
              <h2>Darkdawn</h2>
              <hr />
              <p>An art project by Mari Livraes and Mike Azevedo</p>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat natus quasi iure accusamus. Nisi voluptate magnam fugiat neque nobis quo nihil ipsum fugit facilis ut. Itaque dolorem quos sapiente harum!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quidem neque nisi voluptatibus vitae deserunt, tempore blanditiis mollitia in quia ex nulla cum porro eum sed aliquid quis et repellat?
            </p>
            <br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse facilis sed reiciendis consectetur necessitatibus consequuntur temporibus odio officiis nemo error, in obcaecati cum iusto! At natus autem voluptatem earum. Accusamus?
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati necessitatibus voluptatum id praesentium commodi possimus dicta accusantium sed totam, quasi harum autem nobis magni, eum perspiciatis doloremque aliquid! Dolore, velit!
            </p>
          </div>
        </div>
      </section>

      <section
        ref={factionsRef}
        className={`${style.factions} ${isFactionsVisible ? style.visible : ''}`}
      >
        <div className={isFactionsVisible ? style.visible : ''}>
          <Image className={style.guardians} src="/assets/guardians.png" alt="Guardians of the Sun logo" />
          <div className={style.info}>
            <h3>Guardians of The Sun</h3>
            <hr />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quod dignissimos suscipit numquam dolor hic illo quo ullam, nulla molestias id libero rerum, delectus voluptatem, consequatur exercitationem autem soluta ratione.</p>
            <br />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, est molestias! Excepturi at incidunt ea praesentium quaerat magnam, deleniti odit exercitationem laudantium ab porro voluptates ratione sunt doloribus doloremque repudiandae.</p>
          </div>
        </div>
        <div className={isFactionsVisible ? style.visible : ''}>
          <Image className={style.eclipse} src="/assets/eclipse_corp.png" alt="Eclipse Corp. logo" />
          <div className={style.info}>
            <h3>Eclipse Corp.</h3>
            <hr />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quod dignissimos suscipit numquam dolor hic illo quo ullam, nulla molestias id libero rerum, delectus voluptatem, consequatur exercitationem autem soluta ratione.</p>
            <br />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, est molestias! Excepturi at incidunt ea praesentium quaerat magnam, deleniti odit exercitationem laudantium ab porro voluptates ratione sunt doloribus doloremque repudiandae.</p>
          </div>
        </div>
      </section>

      <CardSection />
    </div>
  );
}
