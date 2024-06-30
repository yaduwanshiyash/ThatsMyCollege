'use client';
import React, { useEffect } from 'react';
import Branch_notes from '@/app/notes/Branch_notes'

const Course_notes = () => {
  const xyz = {
    'b.tech': []
  }
  useEffect(() => {
    const myElement = document.querySelector('.myClass');
    const branch = document.querySelector('.branch');
    const btn = document.querySelectorAll('.btn');
    const close = document.querySelector('.close');
    btn.forEach((element) => {
      element.addEventListener('click', () => {
        myElement.classList.add('hidden');
        branch.classList.remove('hidden');
      })
    });
    close.addEventListener('click', () => {
      branch.classList.add('hidden');
      myElement.classList.remove('hidden');
    })
  }, []);

  return (
    <>
      <div className=' library h-screen w-full  items-center justify-center flex'>
        <div className=' h-1/2 w-11/12 sm:w-4/5 '>
          <div className=' '>
            <h1 className=' text-6xl tracking-wide text-center font-semibold text-white'>Welcome to <span className=''>B.Tech</span></h1>
          </div>
          <div className='branch hidden h-fit w-full border-2 border-slate-500 mt-10 px-5 py-5 flex flex-col items-center justify-center gap-1 sm:gap-5 bg-white bg-opacity-10 backdrop-blur-[3px] rounded drop-shadow-lg shadow-[0_10px_50px_rgba(8,_112,_184,_0.5)]'>
            <h1 className=' text-white text-3xl text-center capitalize font-semibold tracking-widest'>Please select your Branch !</h1>
            <div className=' flex items-center justify-center gap-5 py-7  flex-wrap '>
              <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full capitalize tracking-widest'>Computer Science</button>
              <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full capitalize tracking-widest '>Mechanical</button>
              <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full capitalize tracking-widest'>Information Technology</button>
              <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full capitalize tracking-widest'>Electronics & Comm.</button>
              <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full capitalize tracking-widest '> Civil</button>
            </div>
            <div>
              <button className=' close bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full capitalize tracking-widest'>Back to year list</button>
            </div>
          </div>
          <div className=' myClass h-2/3 w-full border-2 border-slate-500 mt-10 px-5 py-5 flex flex-col items-center justify-center gap-1 sm:gap-5 bg-white bg-opacity-10 backdrop-blur-[3px] rounded drop-shadow-lg shadow-[0_10px_50px_rgba(8,_112,_184,_0.5)]'>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 max-w-fit tracking-widest rounded-full'>Previous Year Question Paper</button>
            <h1 className=' text-white text-2xl text-center capitalize font-semibold tracking-wider'>Please select your Year !</h1>
            <div className=' grid grid-cols-2 sm:flex items-center justify-center gap-5 py-7  whitespace-nowrap '>
              <button className='btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full capitalize tracking-widest'>First Year</button>
              <button className='btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full capitalize tracking-widest'>Secound Year</button>
              <button className='btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full capitalize tracking-widest'>third Year</button>
              <button className='btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full capitalize tracking-widest'>fourth Year</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Course_notes
