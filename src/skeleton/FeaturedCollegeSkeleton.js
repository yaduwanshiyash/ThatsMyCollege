import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const FeaturedCollegeSkeleton = () => {
    const [length, setLength] = useState(4)
    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth >= 1024) {
                setLength(4);
            } else if (screenWidth >= 768) {
                setLength(3)
            } else if (screenWidth >= 640) {
                setLength(2);
            } else {
                setLength(1);
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <>
            <div className='md:px-8 px-6 pb-12 bg-white'>
                <div className='p-4 text-2xl sm:text-3xl text-[#262626] font-bold'>Top Colleges</div>
                <div className=" bg-white overflow-hidden grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 md:px-8 px-4">
                    {
                        Array.from({ length }).map((el, indx) => {
                            return <div key={indx} className='hidden md:block'>
                                <div className='px-3'>
                                    <div className='border rounded-lg -mt-2'>
                                        <Skeleton variant="rounded" width="100%" height={220} />
                                        <div className='px-4 pb-4'>
                                            <Skeleton className='mt-4' variant="text" width="" height={14} />
                                            <Skeleton className='mb-4' variant="text" width="" height={10} />
                                            <Skeleton variant="text" width={200} height={14} />
                                            <Skeleton variant="text" width={200} height={14} />
                                            <Skeleton variant="text" width={150} height={14} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                    <div className='md:hidden'>
                        <div className=''>
                            <div className='border rounded-lg -mt-2'>
                                <Skeleton variant="rounded" width="100%" height={260} />
                                <div className='px-4 pb-4'>
                                    <Skeleton className='mt-4' variant="text" width="" height={14} />
                                    <Skeleton className='mb-4' variant="text" width="" height={10} />
                                    <Skeleton variant="text" width={200} height={14} />
                                    <Skeleton variant="text" width={200} height={14} />
                                    <Skeleton variant="text" width={150} height={14} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default FeaturedCollegeSkeleton
