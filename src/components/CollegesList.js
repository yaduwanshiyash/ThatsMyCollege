import React, { useEffect } from 'react'
import CollegeView from './CollegeView'
import { useDispatch, useSelector } from 'react-redux';
import { fetchColleges } from '@/store/slices/FilterCollege';
import CollegeListSkeleton from '@/skeleton/CollegeListSkeleton';
import { IoMdClose } from "react-icons/io";

const CollegesList = ({ activeState, setActiveState, activeCity, setActiveCity, page, activeType, activeCourse, setActiveCourse, courseType }) => {
    const dispatch = useDispatch();
    const { colleges, loading, error } = useSelector((state) => state.allCollege);
    const courses = colleges.courses || (colleges.data && colleges.data.courses) || [];
    const totleColleges = colleges.totalDocuments || (colleges.data && colleges.data.totalDocuments) || [];

    useEffect(() => {
        const apiPost = `/api/courses/get-all/college-details?collegeType=${activeType.toLowerCase()}&courseName=${activeCourse.toLowerCase()}&state=${activeState}&city=${activeCity}&page=${page}`
        dispatch(fetchColleges(apiPost));
    }, [dispatch, page, activeType, activeCourse, activeCity, activeState]);

    if (loading) {
        return <CollegeListSkeleton />
    }
    if (error) {
        return <p>Error: {error.message}</p>;
    }
    const closeCourseFilter = () => {
        setActiveCourse("");
    }
    const closeStateFilter = () => {
        setActiveCity("");
        setActiveState("");
    }
    const closeCityFilter = () => {
        setActiveCity("");
    }
    return (
        <>
            <div className='mx-4'>
                <p className='text-2xl font-semibold text-blue-900'>List of {activeType.charAt(0).toUpperCase() + activeType.slice(1)} colleges </p>
                <div className='md:flex gap-2 my-1'>
                    {activeCourse && (
                        <p className="flex justify-between w-[70%] md:w-auto items-center gap-1 font-semibold text-blue-900 border border-blue-700 rounded-lg my-2 px-4 md:px-1 bg-blue-100">
                            <span>Course: {activeCourse}</span>  <IoMdClose onClick={closeCourseFilter} className='cursor-pointer' />
                        </p>
                    )}
                    {activeState && (
                        <p className=" flex justify-between w-[70%] md:w-auto items-center gap-1 font-semibold text-blue-900 border border-blue-700 rounded-lg my-2 px-4 md:px-1 bg-blue-100">
                            State : {activeState}  <IoMdClose onClick={closeStateFilter} className='cursor-pointer' />
                        </p>
                    )}
                    {activeCity && (
                        <p className=" flex justify-between w-[70%] md:w-auto items-center gap-1 font-semibold text-blue-900 border border-blue-700 rounded-lg my-2 px-4 md:px-1 bg-blue-100">
                            City : {activeCity}  <IoMdClose onClick={closeCityFilter} className='cursor-pointer' />
                        </p>
                    )}
                </div>
                <p className='text-sm text-slate-500'>Found {totleColleges ? (totleColleges):("0")} colleges</p>
            </div>
            {courses.length > 0 ? (
                courses.map((currElm, indx) => {
                    return <CollegeView key={indx} {...currElm} />
                })
            ) : (
                <p>No colleges available.</p>
            )}
        </>
    )
}

export default CollegesList
