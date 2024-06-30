import React, { useState, useEffect, useRef } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSearchCollege } from '@/store/slices/SearchCollege';
import Link from 'next/link';
import Image from 'next/image';
import SearchSkeleton from '@/skeleton/SearchSkeleton';

const SearchPopup = ({ onClose, isOpen }) => {
  const dispatch = useDispatch();
  const { colleges, loading, error } = useSelector((state) => state.searchCollege);
  const [searchQuery, setSearchQuery] = useState('');
  const [queryLimit, setQueryLimit] = useState('Enter 3 or more characters');
  const inputRef = useRef(null);

  let searchTimer;

  const handleSearchInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    clearTimeout(searchTimer);
    if (query.length < 3) {
      setQueryLimit('Enter 3 or more characters');
      return;
    }

    searchTimer = setTimeout(() => {
      if (query) {
        dispatch(fetchSearchCollege(`/api/college?collegeName=${query}`));
      }
    }, 1000);
    setQueryLimit('');
  };

  useEffect(() => {
    if (isOpen) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  return (
    <div className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-20 ${isOpen ? '' : 'hidden'}`}>
      <div className="bg-white p-8 shadow-md w-full absolute top-0">
        <button className="absolute md:top-5 top-6 md:right-4 right-0 mt-2 mr-2 text-gray-500" onClick={onClose}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <div className='relative flex items-center w-[95%]'>
          <input
            type='text'
            className={`h-full w-full p-4 pl-10 rounded-md text-lg font-semibold text-slate-600 ${isOpen ? '' : 'cursor-not-allowed'}`}
            placeholder='Search for Colleges'
            value={searchQuery}
            onChange={handleSearchInputChange}
            disabled={!isOpen}
            ref={inputRef}
            autoFocus={isOpen}
          />
          <div className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl'>
            <AiOutlineSearch />
          </div>
        </div>
        <div className='w-[95%]'>
          {
            queryLimit ? (
              <div className='py-2 px-6 text-xl text-blue-800'>{queryLimit}</div>
            ) : (
              loading ? (
                <div><SearchSkeleton /></div>
              ) : error ? (
                <div>Error: {error.message}</div>
              ) : colleges.data ? (
                colleges.data.colleges.length > 0 ? (
                  <ul className='mx-2 mt-5'>
                    {colleges.data.colleges.map((college) => (
                      <li key={college._id} className='hover:bg-gray-200 bg-gray-100 my-1 p-2 rounded'>
                        <Link href={`/colleges/${college._id}`} className='flex gap-4'>
                          <Image className='rounded-full h-8' src={college.logo} width={40} height={30} alt={college.name} />
                          <span className='mt-1 font-semibold text-gray-600'>{college.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className='py-2 px-6 text-xl text-blue-800'>No college found</div>
                )
              ) : (
                <div><SearchSkeleton /></div>
              )
            )
          }
        </div>
      </div>
    </div>
  );
};

export default SearchPopup;
