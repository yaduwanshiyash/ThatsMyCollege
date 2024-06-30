import Image from 'next/image'
import React, { useEffect, useState } from 'react';
import { MdDelete } from "react-icons/md";
import axiosInstance from '@/config/AxiosIntercepter';
import Link from 'next/link';

const AppliedCollegeList = ({ appliedColleges, setappliedColleges }) => {
  const Api = process.env.SERVICE_BASE_URL;

  const handleDelete = async (applicationId) => {
    const confirmDelete = window.confirm(`Are you sure you want to delete?`);
    if (confirmDelete) {
      try {
        await axiosInstance.delete(`${Api}/api/admission-application/${applicationId}`);
        setappliedColleges((prev) => ({
          ...prev,
          data: {
            applications: prev.data.applications.filter(app => app._id !== applicationId)
          }
        }));
      } catch (error) {
        console.error("Error deleting college:", error);
      }
    }
  };
  return (
    <>
      <div className='mt-[1vw] text-[4vw] sm:text-[1.5vw]'>
        <h2 className='capitalize text-xl md:font-semibold'>applied colleges</h2>
        <div className='[&::-webkit-scrollbar]:hidden h-[40vh] md:h-[40vh] w-[85vw] flex items-center overflow-x-scroll overflow-y-hidden whitespace-nowrap p-2 gap-3'>
          {appliedColleges?.data?.applications.length === 0 ? (
            <div className='-mt-24 px-10'>
              <p className='text-base'>No data found</p>
              <p className='text-base italic'>
                click <Link className='text-blue-700' href={{ pathname: '/colleges', query: { name: 'Engineering' }, }}>here</Link> to apply colleges
              </p>
            </div>
          ) : (<>
            {appliedColleges?.data?.applications.map((college, index) => (
              <div key={index} className='flex gap-2 flex-col border-2 border-solid border-[rgb(241,238,238)] rounded-lg shadow-md'>
                <Link href={`/colleges/${college.collegeId._id}`} className='h-[25vh] w-[280px] md:w-[300px] relative bg-[lavender] flex flex-col items-center justify-center rounded-t-lg overflow-hidden'>
                  <div className='h-48 w-full mx-[0.03rem] sm:h-56 bg-cover text-white px-4 rounded-t-md' style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(${college.collegeId.image[0]})`, display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
                    <div className=' mb-5 w-fit relative whitespace-normal'>
                      <h2 className="font-semibold text-center text-[4.5vw] md:text-base">{college.collegeId.name}</h2>
                    </div>
                  </div>
                </Link>
                <div className='px-2 mb-1 space-y-2 text-lg mx-1 flex place-content-around'>
                  <p className=''>Status: <span className='text-base'>{college.status}</span></p>
                  <button className='text-2xl' onClick={() => handleDelete(college._id)}>
                    <MdDelete className='-mt-2' />
                  </button>
                </div>
              </div>
            ))}
          </>
          )}
        </div>
      </div>
    </>
  );
};

export default AppliedCollegeList
