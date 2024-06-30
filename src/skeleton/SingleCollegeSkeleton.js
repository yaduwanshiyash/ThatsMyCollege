import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const SingleCollegeSkeleton = () => {
    return (
        <>
            {/* lg screen */}
            <div className='hidden md:block'>
                <div className="py-8 px-4 md:px-8 lg:px-20 bg-white">
                    <div className="text-2xl text-gray-900 font-bold flex items-center space-x-4">
                        <span><Skeleton rectangular width={70} height={70} /></span>
                        <span>
                            <Skeleton className='' variant="text" width={800} height={35} />
                            <div className='md:flex md:space-x-6 font-medium'>
                                <Skeleton variant="text" width={200} height={14} />
                                <Skeleton variant="text" width={200} height={14} />
                                <Skeleton variant="text" width={200} height={14} />
                            </div>
                        </span>
                    </div>
                    <div className="mt-8 flex space-x-4 text-lg">
                        <Skeleton variant="rectangular" width={120} height={32} />
                        <Skeleton variant="rectangular" width={120} height={32} />
                    </div>
                </div>
                <div className='flex flex-nowrap bg-gray-100 md:px-20 shadow-lg  space-x-10 md:py-3 font-[helvetica] text-gray-900 overflow-x-auto scrollbar-hide'>
                    <Skeleton variant="rectangular" width={120} height={32} />
                    <Skeleton variant="rectangular" width={120} height={32} />
                    <Skeleton variant="rectangular" width={120} height={32} />
                    <Skeleton variant="rectangular" width={120} height={32} />
                    <Skeleton variant="rectangular" width={120} height={32} />

                </div>

                <div className='p-4'></div>

                <div className='grid grid-cols-10'>
                    <div className='bg-white p-4 space-y-6 col-span-8'>
                        <Skeleton className='' variant="text" width='80%' height={42} />
                        <div className='bg-white p-2 space-y-6'>
                            <Skeleton variant="text" width="95%" height={14} />
                            <Skeleton variant="text" width="95%" height={14} />
                            <Skeleton variant="text" width="95%" height={14} />
                            <Skeleton variant="text" width="95%" height={14} />
                            <Skeleton variant="text" width="95%" height={14} />
                            <div className='bg-white p-2 space-y-6'>
                                <Skeleton variant="text" width={400} height={14} />
                                <Skeleton variant="text" width={300} height={14} />
                                <Skeleton variant="text" width={400} height={14} />
                                <Skeleton variant="text" width={200} height={14} />
                                <Skeleton variant="text" width={300} height={14} />
                                <Skeleton variant="text" width={100} height={14} />
                                <Skeleton variant="text" width={300} height={14} />
                                <Skeleton variant="text" width={200} height={14} />
                            </div>
                            <table className="mt-4 w-[90%]">
                                <thead>
                                    <tr className=''>
                                        <th className="border text-left px-4 py-2 bg-white"><Skeleton variant="rectangular" width={120} height={32} /></th>
                                        <th className="border text-left px-4 py-2 bg-white"><Skeleton variant="rectangular" width={120} height={32} /></th>
                                        <th className="border text-left px-4 py-2 bg-white"><Skeleton variant="rectangular" width={120} height={32} /></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className=''>
                                        <td className="border px-4 py-2"><Skeleton variant="text" width={100} height={14} /></td>
                                        <td className="border px-4 py-2"><Skeleton variant="text" width={100} height={14} /></td>
                                        <td className="border px-4 py-2"><Skeleton variant="text" width={100} height={14} /></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    {/* Side bar */}
                    <div className='col-span-2 px-6'>
                        <div className='bg-white p-2'>
                        <Skeleton className='mb-2' variant="rectangular" width="" height={32} />
                        <Skeleton variant="rectangular" width="" height={32} />
                        </div>
                    </div>
                </div>
            </div>


            {/* sm screen */}
            <div className='md:hidden'>
                <div className="bg-white p-4 flex">
                    <div className="py-8 px-4 bg-white">
                        <div className="flex items-center space-x-4">
                            <span><Skeleton rectangular width={70} height={70} /></span>
                            <span>
                                <Skeleton className='' variant="text" width={200} height={42} />
                                <div className='mt-2'>
                                    <Skeleton variant="text" width={200} height={14} />
                                    <Skeleton variant="text" width={200} height={14} />
                                    <Skeleton variant="text" width={200} height={14} />
                                    <Skeleton variant="text" width={100} height={10} />
                                    <Skeleton variant="text" width={100} height={10} />
                                    <Skeleton variant="text" width={100} height={10} />
                                </div>
                            </span>
                        </div>
                        <div className="mt-8 flex space-x-4 text-lg">
                            <Skeleton variant="rectangular" width={120} height={32} />
                            <Skeleton variant="rectangular" width={120} height={32} />
                        </div>
                    </div>
                </div>
                <div className='flex flex-nowrap bg-white shadow-lg pb-2 px-2 space-x-4'>
                    <Skeleton variant="rectangular" width={100} height={32} />
                    <Skeleton variant="rectangular" width={100} height={32} />
                    <Skeleton variant="rectangular" width={100} height={32} />
                </div>
                <div className=' bg-#E6E6E6 p-4 space-y-6'></div>
                <div className='bg-white p-2 space-y-6'>
                    <Skeleton variant="text" width="90%" height={36} />
                    <div className='bg-white p-2 space-y-6'>
                        <Skeleton variant="text" width={300} height={14} />
                        <Skeleton variant="text" width={300} height={14} />
                        <Skeleton variant="text" width={200} height={14} />
                        <Skeleton variant="text" width={300} height={14} />
                        <Skeleton variant="text" width={100} height={14} />
                        <Skeleton variant="text" width={300} height={14} />
                        <Skeleton variant="text" width={200} height={14} />
                        <Skeleton variant="text" width={300} height={14} />
                        <Skeleton variant="text" width={200} height={14} />
                        <Skeleton variant="text" width={300} height={14} />
                        <Skeleton variant="text" width={100} height={14} />
                        <Skeleton variant="text" width={300} height={14} />
                        <Skeleton variant="text" width={200} height={14} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleCollegeSkeleton
