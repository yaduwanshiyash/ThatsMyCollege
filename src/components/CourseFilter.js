import React from 'react';

const CourseFilter = ({ courses, onSelectCourse, selectedCourse }) => {
  // console.log(courses);
  return (
    <>
      <div className='pl-4 py-2 flex flex-col items-start'>
        {courses.map((course, indx) => (
          <button key={indx}
            className={`${selectedCourse.toLocaleLowerCase() === course.toLocaleLowerCase() ? 'underline underline-offset-4 text-[#2975f0]' : 'coool-link'}`}
            onClick={() => onSelectCourse(course)} >
            {course}
          </button>
        ))}
      </div>
    </>
  );
};

export default CourseFilter;
