"use client";

import style from './page.module.scss';
import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
import Header from '@/components/Header/Header';
import Modal from 'react-modal';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoClose } from "react-icons/io5";

// Importação dinâmica correta para Masonry e ResponsiveMasonry
const Masonry = dynamic(() => import('react-responsive-masonry'), { ssr: false });

export default function GalleryPage() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [currentImgIndex, setCurrentImgIndex] = useState<number>(0);

    useEffect(() => {
        // Defina corretamente o appElement para evitar erro
        Modal.setAppElement('#__next');
    }, []);

    const images: string[] = [
        '/assets/gallery/ilustra1.png',
        '/assets/gallery/ilustra2.png',
        '/assets/gallery/ilustra3.jpg',
        '/assets/gallery/ilustra4.jpg',
        '/assets/gallery/ilustra5.png',
        '/assets/gallery/ilustra6.jpg',
        '/assets/gallery/ilustra7.jpg',
        '/assets/gallery/ilustra8.jpg',
        '/assets/gallery/ilustra9.jpg',
        '/assets/gallery/ilustra10.png',
    ];

    const openModal = (index: number): void => {
        setCurrentImgIndex(index);
        setIsOpen(true);
    };

    const closeModal = (): void => {
        setIsOpen(false);
        // setCurrentImg('');
    };

    const goToNextImage = (): void => {
        setCurrentImgIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const goToPreviousImage = (): void => {
        setCurrentImgIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className={style.container}>
            <Header />
            <div className={style.title}>
                <h1>Gallery</h1>
                <hr />
            </div>

            {/* Chamada de Masonry sem erros */}
            <Masonry
                // columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
                className={style.gallery}
                columnsCount={4}
                gutter="2rem"
            >
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={style.imageWrapper}
                        onClick={() => openModal(index)}
                    >
                        <img
                            src={image}
                            alt={`Gallery Image ${index + 1}`}
                            className={style.galleryImage}
                        />
                    </div>
                ))}
            </Masonry>

            {/* Modal para visualização das imagens em tela cheia */}
            <Modal
                isOpen={isOpen}
                onRequestClose={closeModal}
                className={style.modalContent}
                overlayClassName={style.modalOverlay}
            >
                <img src={images[currentImgIndex]} alt="Full View" className={style.modalImage} />
                <button onClick={closeModal} className={style.closeButton}>
                    <IoClose size={20} />
                </button>
                <button
                    className={`${style.prevBtn} ${currentImgIndex == 0 ? style.disable : ''}`}
                    onClick={goToPreviousImage}
                    // disabled={currentImgIndex == 0}
                >
                    <IoIosArrowBack size={100} />
                </button>
                <button
                    className={`${style.nextBtn} ${currentImgIndex == (images.length - 1) ? style.disable : ''}`}
                    onClick={goToNextImage}
                    // disabled={images.length <= 1}
                >
                    <IoIosArrowForward size={100} />
                </button>
            </Modal>
        </div>
    );
}
