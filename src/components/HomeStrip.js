'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const HomeStrip = () => {
    const [dot, setDot] = useState(true);

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.matchMedia('(min-width: 768px)').matches) {
                setDot(false);
            } else {
                setDot(true);
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <div className={`h-32 w-full px-16 border-2 border-gray-300 shadow-lg shadow-indigo-500/40  bg-white gap-32 text-black py-6 md:py-10`}>
                <Carousel
                    swipeable={false}
                    draggable={false}
                    showDots={dot}
                    responsive={responsive}
                    ssr={true}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={2000}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
                    // deviceType={this.props.deviceType}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                >
                    <div>
                        <div className="flex items-center justify-center">
                            <div className="mr-2">
                                <Image src='/logo/college.png' alt="" width={50} height={50} />
                            </div>
                            <div className="text-left">
                                <div>
                                    <span className="block text-xl font-bold">1000+</span>
                                    <span className="block">Colleges Listed</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-center">
                            <div className="mr-2">
                                <Image src='/logo/expert.png' alt="" width={50} height={50} />
                            </div>
                            <div className="text-left">
                                <div>
                                    <span className="block text-xl font-bold">10+</span>
                                    <span className="block">Experts Available Every Time</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-center">
                            <div className="mr-2">
                                <Image src='/logo/admission.png' alt="" width={50} height={50} />
                            </div>
                            <div className="text-left">
                                <div>
                                    <span className="block text-xl font-bold">1000+</span>
                                    <span className="block">Admissions completed This Year</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div>Item 4</div> */}
                </Carousel>
            </div>
        </>
    );
};

export default HomeStrip;
