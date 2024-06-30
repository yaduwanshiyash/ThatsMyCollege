import React from 'react'

const AdmissionTab = ({ college }) => {
  const { name, collegeType } = college.collegeId || {};
  const { courses } = college || [];
  // console.log(typeof branches);
  const firstName = name.substring(0, name.indexOf(' '));
  const courseNames = courses.map(course => course.courseName + ", ");

  let year = new Date().getFullYear();
  return (
    <>
      <div className='container mx-auto p-4 mb-8'>
        <h1 className='mb-4 mt-2'>
          <span className='font-semibold font-[halvetica] text-xl text-gray-800'>{name} </span>
          admission {year} :
        </h1>
        <p>{name} takes more than 1000+ admission in different stream like
          {collegeType && collegeType.length > 0 ? (
            <span>
              {collegeType.map((stream, index) => (
                <span key={index}>
                  {" " + stream.charAt(0).toUpperCase() + stream.slice(1)},
                </span>
              ))}
            </span>
          ) : (
            "many stream"
          )}
          &nbsp; etc.
        </p>
        <p className='my-3 font-semibold text-blue-900'>Admission process of {name} is very easy. Click on apply button and fill some information to apply and our expert will cantact you and done all admission process.</p>
        <p>Courses offered by {firstName} is &nbsp;{courseNames} and many courses.</p>
        <p>The admission to all the courses will be based on marks obtained by the students in higher secondary education and other corresponding degree</p>

        <div className='mt-6'>
          <p className='text-xl text-blue-800 font-semibold'>See all courses and eligibility :</p>
          <div className='flex justify-center'>
            <table className="mt-4 w-full">
              <thead>
                <tr className='bg-blue-300'>
                  <th className="border text-left px-4 py-2">Courses</th>
                  <th className="border text-left px-4 py-2">Fees</th>
                  <th className="border text-left px-4 py-2">Eligibility</th>
                </tr>
              </thead>
              <tbody>
                {courses && courses.length > 0 ? (
                  courses.map((course, index) => (
                    <tr className='' key={index}>
                      <td className="border px-3 py-2">{course.courseName}</td>
                      <td className="border px-3 py-2">&#8377;{(course.fee).toLocaleString('en-us')} /year</td>
                      <td className="border px-4 py-2">{course.eligibility}</td>
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

        <div className='mt-8'>
          <p className='text-xl text-blue-800 font-semibold'>All Specialization in different courses :</p>
          <div className='flex justify-center'>
            <table className="mt-4 w-full">
              <thead>
                <tr className="bg-green-200">
                  <th className="border text-left px-4 py-2">Courses</th>
                  <th className="border text-left px-4 py-2">Specializations</th>
                </tr>
              </thead>
              <tbody>
                {courses && courses.length > 0 ? (
                  courses.map((course, index) => (
                    <tr key={index}>
                      <td className="border px-4 py-2">{course.courseName}</td>
                      <td className="border px-4 py-2">{course.branches.join(" | ")}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="2" className="border px-4 py-2 text-center">Loading...</td>
                  </tr>
                )}
              </tbody>
            </table>

          </div>
        </div>
      </div>
    </>
  )
}

export default AdmissionTab
