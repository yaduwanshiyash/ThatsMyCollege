'use client'

import React, { useState, useEffect } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import SearchPopup from './SearchPopup';
import Link from 'next/link';

const Carousel = () => {
  const [searchBar, setSearchBar] = useState(false);
  const toggleSearch = () => {
    setSearchBar(!searchBar);
  };

  const slides = [
    {
      url: '/images/download.webp',
    },
    {
      url: '/images/download2.webp',
    },
    {
      url: '/images/download3.webp',
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  
  useEffect(() => {
    // Auto-slide every 3 seconds
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <>
      <div className='md:h-[450px] h-[350px] w-full m-auto relative group z-0'>
        <div
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)), url(${slides[currentIndex].url})`,
          }}
          className='w-full h-full bg-center bg-cover duration-500'
        ></div>
        <div className='absolute inset-0 flex flex-col items-center justify-center'>
          {/* Search Bar */}
          <div className='flex w-10/12 md:w-8/12 cursor-pointer'>
            <div className='relative flex items-center w-10/12'>
              <input
                type='text'
                className='h-full w-full p-4 pl-10 rounded-l-lg'
                placeholder='Search for Colleges'
                onClick={toggleSearch}
              />
              <span className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500'>
                <AiOutlineSearch />
              </span>
            </div>
            <Link href='' className='md:w-2/12 w-[25%] h-full bg-blue-700 flex justify-center items-center text-white rounded-r-lg'>Search</Link>
          </div>

          <div className='mt-8'>
            <Link href='/admission' className='bg-blue-700 text-white px-10 py-[0.4rem] rounded-md'>Admission Enquiry 2024</Link>
          </div>
        </div>
        <div className='flex top-4 justify-center py-2'>
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className='text-2xl cursor-pointer'
            ></div>
          ))}
        </div>
      </div>

      {/* Search Popup */}
      {searchBar && (
        <SearchPopup onClose={toggleSearch} isOpen={searchBar} />
      )}
    </>
  );
};

export default Carousel;
