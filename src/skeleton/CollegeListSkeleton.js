import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


const CollegeListSkeleton = () => {
    return (
        <>
        <div className='space-y-2' style={{width:'70%'}}>
            <Skeleton className='' variant="text" width="" height={32} />
            <Skeleton className='' variant="text" width="" height={20} />
        </div>
            {
                Array.from({ length: 10 }).map((el, i) => {
                    return <div className='' key={i}>
                        <div className='hidden md:block'>
                            <div className="bg-white p-4 flex rounded">
                                <div className='flex gap-2'>
                                    <div>
                                        <Skeleton circle width={70} height={70} />
                                    </div>
                                    <div>
                                        <Skeleton variant="text" width={300} height={22} />
                                        <Skeleton variant="text" width={100} height={14} />
                                        <Skeleton variant="text" width={200} height={14} />
                                        <Skeleton variant="text" width={300} height={14} />
                                        <Skeleton variant="text" width={300} height={14} />
                                        <Skeleton variant="text" width={100} height={14} />
                                    </div>
                                </div>
                                <div className='flex flex-col ml-auto space-y-2 mt-0 text-center'>
                                    <Skeleton variant="rectangular" width={120} height={32} />
                                    <Skeleton variant="rectangular" width={120} height={32} />
                                </div>
                            </div>
                        </div>


                        <div className='md:hidden bg-white'>
                            <div className='flex'>
                                <div className="bg-white p-2 rounded items-center">
                                    <Skeleton circle width={50} height={45} />
                                </div>
                                <div className='flex flex-col justify-start pt-4 w-full pr-3'>
                                    <Skeleton className='' variant="text" width="" height={22} />
                                    <div className='pr-4'>
                                        <Skeleton className='w-20' variant="text" width="" height={10} />
                                        <Skeleton className='' variant="text" width="" height={10} />
                                        <Skeleton className='' variant="text" width="" height={10} />
                                        <Skeleton className='' variant="text" width="" height={10} />
                                        <Skeleton className='' variant="text" width="" height={10} />
                                        <Skeleton className='' variant="text" width="" height={10} />
                                        <Skeleton className='' variant="text" width="" height={10} />
                                    </div>
                                </div>
                            </div>
                            <div className='p-4'>
                                <Skeleton className='w-full mb-2' variant="rectangular" width="" height={25} />
                                <Skeleton className='w-full' variant="rectangular" width="" height={25} />
                            </div>

                        </div>
                    </div>
                })
            }
        </>
    )
}

export default CollegeListSkeleton
