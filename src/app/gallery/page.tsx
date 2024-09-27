"use client";

import style from './page.module.scss';
import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
import Header from '@/components/Header/Header';
import { Skeleton } from "@/components/ui/skeleton"
import Modal from 'react-modal';
import { GrPrevious, GrNext } from "react-icons/gr";
import { IoClose } from "react-icons/io5";

const Masonry = dynamic(() => import('react-responsive-masonry'), { ssr: false });

export default function GalleryPage() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [currentImgIndex, setCurrentImgIndex] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(true);

    const preventContextMenu = (event: React.MouseEvent<HTMLImageElement>): void => {
        event.preventDefault();
    };

    useEffect(() => {
        Modal.setAppElement('#__next');
    }, []);

    const images: string[] = [
        '/assets/gallery/intro.jpg',
        '/assets/gallery/char1.jpg',
        '/assets/gallery/char2.jpg',
        '/assets/gallery/char3.jpg',
        '/assets/gallery/char4.jpg',
        '/assets/gallery/char5.jpg',
        '/assets/gallery/char6.jpg',
        '/assets/gallery/char7.jpg',
        '/assets/gallery/char8.jpg',
        '/assets/gallery/char9.jpg',
        '/assets/gallery/char10.jpg',
        '/assets/gallery/char11.jpg',
        '/assets/gallery/char12.jpg',
        '/assets/gallery/char13.jpg',
        '/assets/gallery/boss1.jpg',        
        '/assets/gallery/ilustra1.jpg',
        '/assets/gallery/ilustra2.jpg',
        '/assets/gallery/ilustra3.png',
        '/assets/gallery/ilustra4.jpg',
        '/assets/gallery/ilustra5.jpg',
        '/assets/gallery/ilustra6.png',
        '/assets/gallery/ilustra7.png',
        '/assets/gallery/ilustra8.jpg',
        '/assets/gallery/ilustra9.jpg',
        '/assets/gallery/ilustra10.jpg',
        '/assets/gallery/ilustra11.jpg',
        '/assets/gallery/cenario1.jpg',
        '/assets/gallery/cenario2.jpg',
        '/assets/gallery/cenario3.jpg',
        '/assets/gallery/cenario4.jpg',
        '/assets/gallery/cenario5.jpg',
        '/assets/gallery/cenario6.jpg',
        '/assets/gallery/cenario7.jpg',
        '/assets/gallery/prop1.jpg',
        '/assets/gallery/prop2.jpg',
        '/assets/gallery/prop3.jpg',
        '/assets/gallery/sketch1.jpg',
    ];

    const openModal = (index: number): void => {
        setCurrentImgIndex(index);
        setIsOpen(true);
    };

    const closeModal = (): void => {
        setIsOpen(false);
    };

    const goToNextImage = (): void => {
        setCurrentImgIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const goToPreviousImage = (): void => {
        setCurrentImgIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const handleImageLoad = (): void => {
        setLoading(false);
    };

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (isOpen) {
                if (event.key === "ArrowRight") {
                    goToNextImage();
                } else if (event.key === "ArrowLeft") {
                    goToPreviousImage();
                } else if (event.key === "Escape") {
                    closeModal();
                }
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen, currentImgIndex]);

    return (
        <div className={style.container}>
            <Header />
            <div className={style.title}>
                <h1>Gallery</h1>
            </div>

            <Masonry
                className={style.gallery}
                columnsCount={4}
                gutter="2rem"
            >
                {loading && images.map((_, index) => <Skeleton className="h-[125px] w-[250px] rounded-xl" key={index} />)}
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
                            onLoad={handleImageLoad}
                            onContextMenu={preventContextMenu}
                        />
                    </div>
                ))}
            </Masonry>

            <Modal
                isOpen={isOpen}
                onRequestClose={closeModal}
                shouldCloseOnOverlayClick
                className={style.modalContent}
                overlayClassName={style.modalOverlay}
            >
                <img
                    src={images[currentImgIndex]}
                    alt="Full View"
                    className={style.modalImage}
                    onContextMenu={preventContextMenu}
                />
                <button onClick={closeModal} className={style.closeButton}>
                    <IoClose size={20} />
                </button>
                <button
                    className={`${style.prevBtn} ${currentImgIndex == 0 ? style.disable : ''}`}
                    onClick={goToPreviousImage}
                >
                    <GrPrevious size={50} />
                </button>
                <button
                    className={`${style.nextBtn} ${currentImgIndex == (images.length - 1) ? style.disable : ''}`}
                    onClick={goToNextImage}
                >
                    <GrNext size={50} />
                </button>
            </Modal>
        </div>
    );
}
