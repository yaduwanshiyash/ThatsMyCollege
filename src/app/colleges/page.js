"use client"

import { MobileFilter, DesktopFilter } from '@/components/Filter';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import CollegesList from '@/components/CollegesList';
import { useSearchParams } from 'next/navigation';
import { collegeStream } from '@/components/FilterApi';
import { cityAndState } from '@/components/FilterApi';

const Colleges = () => {
  const searchParams = useSearchParams();
  const ct = searchParams.get('name');
  const getCourse = searchParams.get('course') || "";
  const [collegeTypes, setCollegeTypes] = useState(ct)
  const [courseType, setCourseType] = useState(getCourse)
  
  const [activeType, setActiveType] = useState(collegeTypes);
  const [activeCourse, setActiveCourse] = useState(courseType)
  const selectedCourses = collegeStream.find((ctr) => ctr.name === activeType.toLowerCase())?.coursesData || [];

  const [activeState, setActiveState] = useState("");
  const [activeCity, setActiveCity] = useState("");
  const cityOfState = cityAndState.find((sta) => sta.stateName.toLowerCase() === activeState.toLowerCase())?.cityName || [];
  // console.log(activeCity)

  useEffect(() => {
    setCollegeTypes(ct)
    setCourseType(getCourse)
    setActiveType(collegeTypes);
    setActiveCourse(courseType)
  }, [ct, collegeTypes, getCourse, courseType])

  const handleCourse=(type)=>{
    setActiveType(type);
    setActiveCourse("");
  }
  const handleState =(st)=>{
    setActiveState(st);
    setActiveCity("");
  }

  const [filterVisible, setFilterVisible] = useState(false);
  const [page, setPage] = useState(1)

  const { colleges } = useSelector((state) => state.allCollege);
  const totalPages = colleges.data ? Math.ceil(colleges.data.totalDocuments / 10) : 0;

  const toggleFilter = () => {
    setFilterVisible(!filterVisible);
  };
  const handleNextClick = () => {
    if (page < totalPages) setPage(page + 1);
  }
  const handlePrevClick = () => {
    if (page > 1) setPage(page - 1)
  }
  return (
    <>
      <div className='flex justify-end mt-6 mr-6 md:hidden'>
        <button className="bg-blue-600 text-white px-8 py-1 rounded-lg shadow-lg shadow-blue-500/50" onClick={toggleFilter}>
          Filter
        </button>
      </div>
      {filterVisible && (
        <div className="fixed inset-0 flex items-center justify-center z-50 md:hidden">
          <div className="bg-black bg-opacity-50 fixed inset-0"></div>
          <div className="bg-white w-full h-full md:w-3/4 mx-auto md:h-auto md:p-4 md:rounded-lg relative">
            <button className="absolute top-0 right-0 m-2 mt-4 bg-white rounded-full p-2" onClick={toggleFilter}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M4.94 4.94a1 1 0 011.42 0L10 8.59l3.54-3.53a1 1 0 111.42 1.42L11.41 10l3.53 3.54a1 1 0 11-1.42 1.42L10 11.41l-3.54 3.53a1 1 0 01-1.42-1.42L8.59 10 5.06 6.46a1 1 0 010-1.42z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <div className="mt-4">
              <MobileFilter cities={cityOfState} activeCity={activeCity} setActiveCity={setActiveCity} activeState={activeState} setActiveState={setActiveState} stateType={cityAndState.map((st)=>st.stateName)} courses={selectedCourses} types={collegeStream.map((ctr) => ctr.name)} onSelectType={handleCourse} selectedType={activeType} onSelectCourse={setActiveCourse} selectedCourse={activeCourse} toggleFilter={toggleFilter} />
            </div>
          </div>
        </div>
      )}

      <div className="flex md:mx-20 mx-1 my-6 md:my-10">
        <div className="w-1/4 mx-2 space-y-2 hidden md:block">
          <DesktopFilter cities={cityOfState} activeCity={activeCity} setActiveCity={setActiveCity} activeState={activeState} setActiveState={handleState} stateType={cityAndState.map((st)=>st.stateName)} courses={selectedCourses} types={collegeStream.map((ctr) => ctr.name)} onSelectType={handleCourse} selectedType={activeType} onSelectCourse={setActiveCourse} selectedCourse={activeCourse} />
        </div>
        <div className="md:w-3/4 w-[100%] mx-2 space-y-4">
          <CollegesList activeCity={activeCity || ""} setActiveCity={setActiveCity} activeState={activeState || ""} setActiveState={setActiveState} page={page} activeType={activeType} activeCourse={activeCourse} setActiveCourse={setActiveCourse} courseType={courseType} />
          <div className={`flex text-white mx-[2%] ${page === 1 ? 'justify-end' : 'justify-between'}`}>
            <button className={`text-white  bg-gradient-to-l from-blue-400 to-blue-600 hover:bg-gradient-to-br py-1 px-2 flex justify-center gap-2 rounded-l-md ${page === 1 ? 'hidden' : ''}`} onClick={handlePrevClick}>
              <GrFormPrevious className='mt-1' />Prev
            </button>
            <button className={`text-white bg-gradient-to-r from-blue-400 to-blue-600 hover:bg-gradient-to-bl py-1 px-2 flex justify-center gap-2 rounded-r ${page === totalPages ? 'hidden' : ''}`} onClick={handleNextClick}>
              Next<GrFormNext className='mt-1' />
            </button>
          </div>
        </div>
      </div>

    </>
  );
};

export default Colleges;
