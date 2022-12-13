import React from "react";
import Head from "next/head";
import Image from "next/image";
import data from "./galleri/images.json";
import { Carousel } from "flowbite-react";
import Overlay from "../components/Overlay";
import { useState } from "react";

import image_01 from "../public/group_01.webp";
import image_02 from "../public/group_02.webp";
import image_03 from "../public/group_03.webp";

const Gallery = () => {
    const [clickedImg, setClickedImg] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(null);

    const handleClick = (item, index) => {
        setCurrentIndex(index);
        setClickedImg(item.link);
    };

    const handleRotationRight = () => {
        const totalLength = data.data.length;

        if (currentIndex + 1 >= totalLength) {
            setCurrentIndex(0);
            const newUrl = data.data[0].link;
            setClickedImg(newUrl);
            return;
        }
        const newIndex = currentIndex + 1;
        const newUrl = data.data.filter((item) => {
            return data.data.indexOf(item) === newIndex;
        });
        const newItem = newUrl[0].link;

        setClickedImg(newItem);
        setCurrentIndex(newIndex);
    };

    const handleRotationLeft = () => {
        const totalLength = data.data.length;

        if (currentIndex === 0) {
            setCurrentIndex(totalLength);
            const newUrl = data.data[totalLength - 1].link;
            setClickedImg(newUrl);
            return;
        }
        const newIndex = currentIndex - 1;
        const newUrl = data.data.filter((item) => {
            return data.data.indexOf(item) === newIndex;
        });
        const newItem = newUrl[0].link;

        setClickedImg(newItem);
        setCurrentIndex(newIndex);
    };

    return (
        <>
            <Head>
                <title>Galleri</title>
                <meta
                    name='description'
                    content='Bildegalleriet til Bergen Armwrestling Club er en samling av håndbakbilder'
                ></meta>
            </Head>
            <h1 className='pt-8 text-5xl text-center md:mb-12 text-ba-color-gold'>
                Galleri
            </h1>
            <div className='mx-auto lg:max-w-5xl'>
                <div className='h-[300px] mb-4 sm:h-64 w-[90%]  mx-auto  md:w-[615px] md:h-[400px] lg:w-[930px]'>
                    <Carousel slideInterval={5000} className='rounded-md'>
                        <Image
                            src={image_01}
                            alt='Medlemmer av Bergen Armwrestling på scenen som jubler etter en seier '
                            width={930}
                            priority
                            className='rounded-md'
                        />
                        <Image
                            src={image_02}
                            alt='Seks deltakere fra Bergen Armwrestling som står på scenen med medalje rundt halsen og en deltaker har også seiersbeltet over nakken'
                            width={930}
                        />
                        <Image
                            src={image_03}
                            alt='Fra en trening der deltakere bryter håndbak med hverandre'
                            width={930}
                        />
                    </Carousel>
                </div>
                <div className='flex flex-col flex-wrap items-center justify-center gap-4 pb-6 mx-auto md:flex-row'>
                    {data.data.map((item, index) => (
                        <Image
                            className='rounded-md w-[90%] max-w-[425px]  md:w-[300px] md:h-[200px] h-[auto] object-cover hover:cursor-pointer'
                            key={index}
                            src={`/${item.link}`}
                            width={400}
                            height={300}
                            alt={item.text}
                            onClick={() => handleClick(item, index)}
                        />
                    ))}
                </div>
                {clickedImg && (
                    <Overlay
                        clickedImg={clickedImg}
                        setClickedImg={setClickedImg}
                        handleRotationRight={handleRotationRight}
                        handleRotationLeft={handleRotationLeft}
                    />
                )}
            </div>
        </>
    );
};

export default Gallery;
