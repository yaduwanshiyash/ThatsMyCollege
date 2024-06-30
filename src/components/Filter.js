import React, { useState } from 'react';
import { RxCaretUp, RxCaretDown, RxCaretRight } from 'react-icons/rx';
import TypeFilter from './TypeFilter';
import CourseFilter from './CourseFilter';
import CityFilter from './CityFilter';
import StateFilter from './StateFilter';
import Link from 'next/link';

export const MobileFilter = ({ cities, activeCity, setActiveCity, activeState, setActiveState, stateType, courses, types, onSelectType, onSelectCourse, selectedCourse, selectedType, toggleFilter }) => {
  const [content, setContent] = useState('collegeType');
  const handleButtonClick = (newContent) => {
    setContent(newContent);
  };

  return (
    <>
      <div className='md:hidden font-semibold text-2xl flex justify-center'>Filter</div>
      <div className="border-t border-gray-300 mt-2"></div>
      <div className='grid grid-cols-5 divide-x'>
        <div className='col-span-2 divide-y'>
          <button
            className={`px-2 py-4 flex items-center justify-between w-full ${content === 'collegeType' ? 'text-blue-600' : ''}`}
            onClick={() => handleButtonClick('collegeType')}
          >
            College Type <RxCaretRight />
          </button>
          <button
            className={`px-2 py-4 flex items-center justify-between w-full ${content === 'course' ? 'text-blue-600' : ''}`}
            onClick={() => handleButtonClick('course')}
          >
            Courses <RxCaretRight />
          </button>
          <button
            className={`px-2 py-4 flex items-center justify-between w-full ${content === 'state' ? 'text-blue-600' : ''}`}
            onClick={() => handleButtonClick('state')}
          >
            State <RxCaretRight />
          </button>
          <button
            className={`px-2 py-4 flex items-center justify-between w-full ${content === 'city' ? 'text-blue-600' : ''}`}
            onClick={() => handleButtonClick('city')}
          >
            City <RxCaretRight />
          </button>
        </div>

        {/* Type Filter Mobile  */}
        <div className='col-span-3 mt-4 px-4'>
          {content === 'collegeType' &&
            <TypeFilter types={types} onSelectType={onSelectType} selectedType={selectedType} />
          }

          {/* Course Filter Mobile */}
          {content === 'course' &&
            <CourseFilter courses={courses} onSelectCourse={onSelectCourse} selectedCourse={selectedCourse} />
          }

          {/* City Filter Mobile */}
          {content === 'city' &&
            <CityFilter cities={cities} activeCity={activeCity} setActiveCity={setActiveCity} />
          }

          {/* state Filter MObile */}
          {content === 'state' &&
            <StateFilter stateType={stateType} activeState={activeState} setActiveState={setActiveState} />
          }

        </div>
      </div>
      <div onClick={toggleFilter} className='absolute bottom-0 bg-blue-700 p-4 text-white w-full text-center text-lg'>
        <Link href="">Apply Filter</Link>
      </div>
    </>
  );
};


export const DesktopFilter = ({ cities, activeCity, setActiveCity, activeState, setActiveState, stateType, courses, types, onSelectType, onSelectCourse, selectedCourse, selectedType }) => {
  const [collegeTypeOpen, setCollegeTypeOpen] = useState(true);
  const [courseTypeOpen, setCourseTypeOpen] = useState(true)
  const [cityTypeOpen, setCityTypeOpen] = useState(true);
  const [stateTypeOpen, setStateTypeOpen] = useState(true)

  const toggleAccordion1 = () => {
    setCollegeTypeOpen(!collegeTypeOpen);
  };
  const toggleAccordion2 = () => (
    setCourseTypeOpen(!courseTypeOpen)
  )
  const toggleAccordion3 = () => (
    setCityTypeOpen(!cityTypeOpen)
  )
  const toggleAccordion4 = () => (
    setStateTypeOpen(!stateTypeOpen)
  )

  return (
    <>
      {/* Type Filter */}
      <div className='bg-white p-4 rounded'>
        <div className='px-4 py-2 flex justify-between items-center cursor-pointer' onClick={toggleAccordion1}>
          <h2 className='font-semibold text-gray-700'>College Type</h2>
          <span className='text-xl'>{collegeTypeOpen ? <RxCaretUp /> : <RxCaretDown />}</span>
        </div>
        {collegeTypeOpen && (
          <div>
            <TypeFilter types={types} onSelectType={onSelectType} selectedType={selectedType} />
          </div>
        )}
      </div>

      {/* Course Filter */}
      <div className='bg-white p-4 rounded'>
        <div className='px-4 py-2 flex justify-between items-center cursor-pointer' onClick={toggleAccordion2}>
          <h2 className='font-semibold text-gray-700'>Courses</h2>
          <span className='text-xl'>{courseTypeOpen ? <RxCaretUp /> : <RxCaretDown />}</span>
        </div>
        {courseTypeOpen && (
          <div>
            <CourseFilter courses={courses} onSelectCourse={onSelectCourse} selectedCourse={selectedCourse} />
          </div>
        )}
      </div>

      {/* State Filter */}
      <div className='bg-white p-4 rounded'>
        <div className='px-4 py-2 flex justify-between items-center cursor-pointer' onClick={toggleAccordion4}>
          <h2 className='font-semibold text-gray-700'>State</h2>
          <span className='text-xl'>{stateTypeOpen ? <RxCaretUp /> : <RxCaretDown />}</span>
        </div>
        {stateTypeOpen && (
          <div>
            <StateFilter stateType={stateType} activeState={activeState} setActiveState={setActiveState} />
          </div>
        )}
      </div>

      {/* City Filter */}
      <div className='bg-white p-4 rounded'>
        <div className='px-4 py-2 flex justify-between items-center cursor-pointer' onClick={toggleAccordion3}>
          <h2 className='font-semibold text-gray-700'>City</h2>
          <span className='text-xl'>{cityTypeOpen ? <RxCaretUp /> : <RxCaretDown />}</span>
        </div>
        {cityTypeOpen && (
          <div>
            <CityFilter cities={cities} activeCity={activeCity} setActiveCity={setActiveCity} />
          </div>
        )}
      </div>
    </>
  );
};
