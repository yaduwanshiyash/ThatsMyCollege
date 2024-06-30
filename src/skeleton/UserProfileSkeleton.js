import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


const UserProfileSkeleton = () => {
    return (
        <>
            <SkeletonTheme baseColor="#cccccc" highlightColor="#a6a6a6">
                <div className='hidden md:block w-full'>
                    <div className='' style={{ width: '100%' }}>
                        <Skeleton className='' variant="text" width="" height={200} />
                    </div>
                    <div className='space-x-4' style={{ width: '100%', marginTop: '40px', display: 'flex', paddingLeft: '25px' }}>
                        <div style={{ width: '30%', borderRadius: '10px' }}>
                            <Skeleton className='' variant="text" width="" height={180} />
                        </div>
                        <div style={{ width: '30%' }}>
                            <Skeleton className='' variant="text" width="" height={180} />
                        </div>
                        <div style={{ width: '30%' }}>
                            <Skeleton className='' variant="text" width="" height={180} />
                        </div>
                    </div>
                </div>
                <div className='md:hidden w-full flex justify-center'>
                    <div className='' style={{ width: '90%', }}>
                        <Skeleton className='' variant="text" width="" height={170} />
                        <div className='mt-10' style={{ width: '90%', borderRadius: '10px', display:'flex', flexDirection:'column' }}>
                        <Skeleton className='' variant="text" width="" height={170} />
                        <Skeleton className='mt-8' variant="text" width="" height={170} />
                        </div>
                    </div>
                </div>

            </SkeletonTheme>
        </>
    )
}

export default UserProfileSkeleton
