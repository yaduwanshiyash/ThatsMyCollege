import Link from 'next/link'
import React, {useState} from 'react'
import { BsArrowRightShort, BsDownload } from 'react-icons/bs';
import Popup from './Popup';
import Register from './Register';

const FeesTab = ({ college }) => {
  const [showPopup, setShowPopup] = useState(false);
  const togglePopup = () => {
    setShowPopup(!showPopup);
  }

  const { name } = college.collegeId || {};
  const { courses } = college || [];
  return (
    <>
      <div className='bg-white mb-2 p-4'>
        <p className='text-blue-900 text-lg font-semibold'>{name} Courses and Fees :</p>
        <div className='flex justify-center'>
          <table className="mt-4 w-[90%]">
            <thead>
              <tr className=''>
                <th className="border text-left px-4 py-2 bg-gradient-to-l from-blue-300 to-green-300">Courses</th>
                <th className="border text-left px-4 py-2 bg-gradient-to-l from-blue-300 to-green-300">Fees</th>
                <th className="border text-left px-4 py-2 bg-gradient-to-l from-blue-300 to-green-300">Eligibility</th>
              </tr>
            </thead>
            <tbody>
              {courses && courses.length > 0 ? (
                courses.map((course, index) => (
                  <tr className='' key={index}>
                    <td className="border px-3 py-2">{course.courseName}</td>
                    <td className="border px-3 py-2">&#8377;{(course.fee).toLocaleString('en-US')} /year</td>
                    <td className="border px-4 py-2">{course.eligibility} or equivalent qualification</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="border px-4 py-2 text-center">Loading...</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className='bg-white divide-y'>
        <div className='md:px-8 px-4 py-4 text-blue-900 text-lg font-semibold'>Top Courses offered by {name} :</div>
        {courses && courses.length > 0 ? (
          courses.map((course, index) => (
            <div className='md:px-10 px-6 py-4' key={index}>
              <h2 className='text-lg font-semibold text-gray-800 pb-1'>{course.courseName}</h2>
              <div className='space-y-1'>
                <div className='flex justify-between'>
                  <p className=''>Fees :<span className='font-semibold text-blue-950 text-sm'> &#8377;{(course.fee).toLocaleString('en-us')}/year</span></p>
                  <p className=''>Duration :<span className='font-semibold text-blue-950 text-sm'> {course.duration}Year</span></p>
                  <p className=''>Study Mode :<span className='font-semibold text-blue-950 text-sm'> Regular</span></p>
                </div>
                <p className=''>Specialization : <span className='font-semibold text-blue-950 text-sm'>
                  <span>{course.branches.join(" | ")}</span>
                </span></p>
                <div className='font-semibold text-sm flex space-x-6 py-1'>
                  <button onClick={togglePopup} className='flex text-blue-700 hover:text-blue-500'>Apply Now <BsArrowRightShort className='mt-[0.2rem]' /></button>
                  <Link href="/" className='flex text-[#339933] hover:text-[#53c653]'>Download Brochure &nbsp; <BsDownload className='mt-[0.2rem]' /></Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="px-4 py-2 text-center">Loading...</p>
        )}
      </div>
      {showPopup && (
        <Popup onClose={togglePopup}>
          <Register college={college.collegeId || {}} toggleRegisterPopup={togglePopup} />
        </Popup>
      )}

    </>
  )
}

export default FeesTab
