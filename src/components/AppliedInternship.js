import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { MdDelete } from "react-icons/md";

const AppliedInternship = () => {
  return (
    <>
      <div className='mt-4 text-[4vw] sm:text-[1.5vw]'>
        <h2 className='capitalize text-xl md:font-semibold mt-2'>applied internship</h2>
        <div className='[&::-webkit-scrollbar]:hidden h-[40vh] md:h-[40vh] w-[85vw] flex items-center overflow-x-scroll overflow-y-hidden whitespace-nowrap p-2 gap-3'>
          <div className='-mt-24 px-10'>
            <p className='text-base'>Internship data not found</p>
            {/* <p className='text-base italic'>
              click <Link className='text-blue-700' href={{ pathname: '/colleges', query: { name: 'Engineering' }, }}>here</Link> to apply colleges
            </p> */}
          </div>
          {/* <div className='flex gap-2 flex-col border-2 border-solid border-[rgb(241,238,238)] rounded-lg shadow-md'>
              <div className='h-[25vh] w-[280px] md:w-[300px] relative bg-[lavender] flex flex-col items-center justify-center rounded-t-lg overflow-hidden'>
                <div className='bg-cover bg-center'>
                  <Image src='/images/back-img.jpeg' width={1000} height={400} alt="" className='object-cover object-center h-full w-full filter brightness-[90%]' />
                </div>
                <div className='absolute bottom-[10%] bg-transparent'>
                  <p className='text-[#fff] md:text-sm'>
                    Millennium Group of Institutions, Bhopal
                  </p>
                </div>
              </div>
              <div className='px-2 space-y-2 text-lg mx-1'>
                <p className=''>Status : <span className='text-base'>Apply and Forword</span></p>
                <button className='text-2xl'><MdDelete /></button>
              </div>
            </div>
            <div className='flex gap-2 flex-col border-2 border-solid border-[rgb(241,238,238)] rounded-lg shadow-md'>
              <div className='h-[25vh] w-[280px] md:w-[300px] relative bg-[lavender] flex flex-col items-center justify-center rounded-t-lg overflow-hidden'>
                <div className='bg-cover bg-center'>
                  <Image src='/images/back-img.jpeg' width={1000} height={400} alt="" className='object-cover object-center h-full w-full filter brightness-[90%]' />
                </div>
                <div className='absolute bottom-[10%] bg-transparent'>
                  <p className='text-[#fff] md:text-sm'>
                    Millennium Group of Institutions, Bhopal
                  </p>
                </div>
              </div>
              <div className='px-2 space-y-2 text-lg mx-1'>
                <p className=''>Status : <span className='text-base'>Apply and Forword</span></p>
                <button className='text-2xl'><MdDelete /></button>
              </div>
            </div>
            <div className='flex gap-2 flex-col border-2 border-solid border-[rgb(241,238,238)] rounded-lg shadow-md'>
              <div className='h-[25vh] w-[280px] md:w-[300px] relative bg-[lavender] flex flex-col items-center justify-center rounded-t-lg overflow-hidden'>
                <div className='bg-cover bg-center'>
                  <Image src='/images/back-img.jpeg' width={1000} height={400} alt="" className='object-cover object-center h-full w-full filter brightness-[90%]' />
                </div>
                <div className='absolute bottom-[10%] bg-transparent'>
                  <p className='text-[#fff] md:text-sm'>
                    Millennium Group of Institutions, Bhopal
                  </p>
                </div>
              </div>
              <div className='px-2 space-y-2 text-lg mx-1'>
                <p className=''>Status : <span className='text-base'>Apply and Forword</span></p>
                <button className='text-2xl'><MdDelete /></button>
              </div>
            </div>
            <div className='flex gap-2 flex-col border-2 border-solid border-[rgb(241,238,238)] rounded-lg shadow-md'>
              <div className='h-[25vh] w-[280px] md:w-[300px] relative bg-[lavender] flex flex-col items-center justify-center rounded-t-lg overflow-hidden'>
                <div className='bg-cover bg-center'>
                  <Image src='/images/back-img.jpeg' width={1000} height={400} alt="" className='object-cover object-center h-full w-full filter brightness-[90%]' />
                </div>
                <div className='absolute bottom-[10%] bg-transparent'>
                  <p className='text-[#fff] md:text-sm'>
                    Millennium Group of Institutions, Bhopal
                  </p>
                </div>
              </div>
              <div className='px-2 space-y-2 text-lg mx-1'>
                <p className=''>Status : <span className='text-base'>Apply and Forword</span></p>
                <button className='text-2xl'><MdDelete /></button>
              </div>
            </div> */}
        </div>
      </div>
    </>
  )
}

export default AppliedInternship
