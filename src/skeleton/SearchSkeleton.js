import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const SearchSkeleton = () => {
    return (
        <ul>
            <ul className='m-2'></ul>
            <li className='p-2 rounded'>
                <Skeleton className='' style={{ width: '100%' }} variant="text" height={40} />
                <Skeleton className='' style={{ width: '100%' }} variant="text" height={40} />
                <Skeleton className='' style={{ width: '100%' }} variant="text" height={40} />
            </li>
        </ul>
  )
}

export default SearchSkeleton
