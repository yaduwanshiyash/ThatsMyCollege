import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Popup from './Popup';
import Register from './Register';
import EnquiryPopup from './EnquiryPopup';

const CollegeView = (currElm) => {
  const [showPopup, setShowPopup] = useState(false);
  const togglePopup = () => {
    setShowPopup(!showPopup);
  }
  const [enquryPopup, setEnquryPopup] = useState(false);
  const toggleEnqueryPopup = () => {
    setEnquryPopup(!enquryPopup)
  }

  const { _id, name, university, rating, logo } = currElm.college

  const courseNames = currElm.courses?.map((currCourse) => currCourse.courseName);
  const onlyCourseName = courseNames?.join(', ');
  return (
    <>
      <div className="bg-white p-4 pr-2 md:flex rounded">
        <div className='flex'>
          <div className='h-auto w-20'>
            <Image className='object-contain' src={logo} width={60} height={60} alt="" style={{ width: 'auto' }} />
          </div>
          <div>
            <Link href={`/colleges/${_id}`} className='text-blue-700 text-xl'>{name}</Link>
            <p className='flex gap-1 text-sm'><Image src='/images/rating.png' height={10} width={15} alt='rating' className='h-4' /> {rating}</p>
            <p className='text-sm mt-2'>University : <span className='text-gray-500'>{university}</span></p>
            {onlyCourseName && (
              <p className='text-sm mt-2'>Courses : <span className='text-gray-400'>{onlyCourseName}</span></p>
            )}
            <Link href={`/colleges/${_id}`} className='text-sm text-blue-600'>View All Course Fee</Link>
          </div>
        </div>
        <div className='flex flex-col  ml-auto space-y-4 md:mt-0 mt-3 text-center'>
          <button onClick={togglePopup} className="bg-blue-500 text-white px-4 py-[0.32rem] rounded-lg shadow-lg shadow-blue-500/50 hover:bg-blue-600">Apply Now</button>
          <button onClick={toggleEnqueryPopup} className='text-blue-600 border border-blue-600 px-8 py-1 rounded-lg hover:bg-blue-500 hover:text-white'>Enquery</button>
        </div>
      </div>
      {showPopup && (
        <Popup onClose={togglePopup}>
          <Register college={currElm.college || {}} toggleRegisterPopup={togglePopup} />
        </Popup>
      )}
      {enquryPopup && (
        <Popup onClose={toggleEnqueryPopup}>
          <EnquiryPopup toggleEnqueryPopup={toggleEnqueryPopup} collegeData={currElm.college || {}} />
        </Popup>
      )}
    </>
  );
};

export default CollegeView;
