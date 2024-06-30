'use client'
import React, { useEffect, useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Link from 'next/link';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFeaturedCollege } from '@/store/slices/FeaturedSlice';
import FeaturedCollegeSkeleton from '@/skeleton/FeaturedCollegeSkeleton';
import Image from 'next/image';

const TopBTechCollege = () => {
    const dispatch = useDispatch();
    const { college, loading, error } = useSelector((state) => state.featuredCollege);

    useEffect(() => {
        const apiPost = `/api/courses/get-all/college-details?collegeType=engineering&featured=true`
        dispatch(fetchFeaturedCollege(apiPost));
    }, [dispatch]);

    const [chunkSize, setChunkSize] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth >= 1024) {
                setChunkSize(4);
            } else if (screenWidth >= 768) {
                setChunkSize(3)
            } else if (screenWidth >= 640) {
                setChunkSize(2);
            } else {
                setChunkSize(1);
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    if (loading) {
        return <FeaturedCollegeSkeleton />
    }
    if (error) {
        return <p>Please reload the page</p>
    }
    const featuredCollege = college.data.courses;

    const chunkedFeaturedColleges = [];
    for (let i = 0; i < featuredCollege.length; i += chunkSize) {
        chunkedFeaturedColleges.push(featuredCollege.slice(i, i + chunkSize));
    }
    // console.log(chunkedFeaturedColleges)

    const firstCourseDetails = (coursesDetails) => {
        return coursesDetails.map(elm => {
            if (elm.courseName === 'BE/B.Tech' || elm.courseName === 'B.Tech' || elm.courseName === 'BE') {
                return (
                    <div key={elm.id} className='flex flex-col items-start'>
                        <span className="font-semibold">{elm.courseName}</span>
                        <span className="text-gray-600 text-sm">{elm.fee} Total Fees</span>
                    </div>
                );
            }
            return null;
        });
    };
    return (
        <div className=' px-4 pb-12 sm:px-8 bg-white'>
            <div className='p-4 text-2xl sm:text-3xl text-[#262626] font-bold pointer-events-none'>Top B.Tech Colleges</div>
            <div className="w-full mt-1">
                <Carousel
                    showArrows={true}
                    emulateTouch={true}
                    showStatus={false}
                    showThumbs={false}
                    infiniteLoop={false}
                    renderIndicator={false}
                    renderArrowPrev={(onClickHandler, hasPrev, label) =>
                        hasPrev && (
                            <button
                                onClick={onClickHandler}
                                title={label}
                                className="absolute z-10 left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-l"
                            >
                                <BsArrowLeft />
                            </button>
                        )
                    }
                    renderArrowNext={(onClickHandler, hasNext, label) =>
                        hasNext && (
                            <button
                                onClick={onClickHandler}
                                title={label}
                                className="absolute z-10 right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-r"
                            >
                                <BsArrowRight />
                            </button>
                        )
                    }
                >
                    {chunkedFeaturedColleges.map(chunk => (
                        <div key={chunk[0].collegeId} className="grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 md:px-12 px-4 gap-4 bg-white">
                            {chunk.map(clg => (
                                <div className="rounded-b-md" key={clg.collegeId} >
                                    <Link href={`/colleges/${clg.collegeId}`} className="h-48 mx-[0.03rem] sm:h-56 bg-cover text-white px-4 rounded-t-md" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(${clg.college.image[0]})`, display: 'flex', alignItems: 'flex-end' }}>
                                        <div>
                                            <span className="font-semibold text-lg">{clg.college.name}</span>
                                            <p className="text-sm font-normal px-1">{clg.college.address}</p>
                                        </div>
                                    </Link>
                                    <div className="p-4 border-2 border-t-0">
                                        <div className="pb-2 flex items-start justify-between">
                                            {firstCourseDetails(clg.courses)}
                                            <div className='flex gap-1 text-sm'><Image src='/images/rating.png' height={10} width={10} alt='rating' className='h-4' /> {clg?.college?.rating}</div>
                                        </div>
                                        <div className='w-full h-[0.05rem] bg-slate-200'></div>
                                        <div className='flex flex-col items-start'>
                                            <div className="py-1 text-sm"><Link href={`/colleges/${clg.collegeId}`}>Show All Courses</Link></div>
                                            <div className='w-full h-[0.05rem] bg-slate-200'></div>
                                            <div className="py-1 text-sm"><Link href={`/colleges/${clg.collegeId}`}>Download Brochure</Link></div>
                                            <div className='w-full h-[0.05rem] bg-slate-200'></div>
                                            <div className="py-1 text-sm"><Link href={`/colleges/${clg.collegeId}`}>Admission</Link></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    );
};

export default TopBTechCollege;
