'use client';

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from 'react';
import { FaRegUserCircle } from 'react-icons/fa';
import { GiCheckMark } from "react-icons/gi";
import { VscTriangleUp } from "react-icons/vsc";
import { IoIosLogOut } from "react-icons/io";
import { signOut, useSession } from "next-auth/react";
import { useDispatch, useSelector } from "react-redux";
import { setIsLogin } from "@/store/slices/LoginSlice";
import { RotatingLines } from 'react-loader-spinner'
import { toast } from 'react-toastify';
import { FaRegUser } from "react-icons/fa";

const Navbar = ({ className }) => {
  const dispatch = useDispatch();
  const { isLogin } = useSelector((state) => state.loginStatus);
  const { status, data } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null)

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', closeDropdown);
    return () => {
      document.removeEventListener('mousedown', closeDropdown);
    };
  }, []);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleSignOut = async () => {
    setIsLoading(true)
    try {
      await signOut({ redirect: false, callbackUrl: '/' })
      localStorage.removeItem("authToken");
      toast(<div> Log Out successfully</div>);
      dispatch(setIsLogin(false));
    } catch (error) {
      // console.error('Error signing out:', error);
      toast.error('Error! Try again later.');
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <nav className={`${className} md:border-gray-200 shadow-lg bg-gray-900`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center text-white">
                <Image src="/logo/tmc_white.png" className="h-17 mt-2 w-21 -mr-2" width={70} height={60} priority={true} alt="TMC" />
                <span className="self-center text-xl tracking-wider font-semibold whitespace-nowrap mt-2">ThatsMyCollege</span>
              </Link>
            </div>
            {/* md navbar */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4 text-gray-900">
                <Link href="/notes" className="block py-2 pl-3 pr-4 text-white bg-blue-700 hover:bg-blue-500 rounded md:px-4 md:py-[0.20rem]" aria-current="page">Notes</Link>
                <Link href="/internship" className="block py-2 pl-3 pr-4 text-white bg-blue-700 hover:bg-blue-500 rounded md:px-4 md:py-[0.20rem]" aria-current="page">Internship</Link>
                <Link href="/courses" className=" white-link text-white md:border-0 md:hover:text-blue-500 px-3 py-2 rounded-md">Courses</Link>
                <div className="inline-block relative group z-10">
                  <button className="white-link text-white md:border-0 md:hover:text-blue-500 rounded-md">Colleges</button>
                  <div className="absolute hidden w-56 -right-2 group-hover:block">
                    <div className="h-2 w-full flex justify-end px-2"><VscTriangleUp className="text-2xl -mt-2 text-slate-800" /></div>
                    <div className=" bg-slate-800 text-white p-2 shadow-md ">
                      <div className="flex flex-col justify-center rounded space-y-6">
                        <ul>
                          <li className=" text-[#fff] border-[none] w-1/2 cool-link mx-2 p-1"><Link href={{ pathname: '/colleges', query: { name: 'Engineering' }, }}>Engineering</Link></li>
                          <li className=" text-[#fff] border-[none] w-1/2 cool-link mx-2 p-1"><Link href={{ pathname: '/colleges', query: { name: 'Management' }, }}>Management</Link></li>
                          <li className=" text-[#fff] border-[none] w-1/2 cool-link mx-2 p-1"><Link href={{ pathname: '/colleges', query: { name: 'Commerce' }, }}>Commerce</Link></li>
                          <li className=" text-[#fff] border-[none] w-1/2 cool-link mx-2 p-1"><Link href={{ pathname: '/colleges', query: { name: 'Arts' }, }}>Arts</Link></li>
                          <li className=" text-[#fff] border-[none] w-1/2 cool-link mx-2 p-1"><Link href={{ pathname: '/colleges', query: { name: 'Science' }, }}>Science</Link></li>
                          <li className=" text-[#fff] border-[none] w-1/2 cool-link mx-2 p-1"><Link href={{ pathname: '/colleges', query: { name: 'Pharmacy' }, }}>Pharmacy</Link></li>
                          <li className=" text-[#fff] border-[none] w-1/2 cool-link mx-2 p-1"><Link href={{ pathname: '/colleges', query: { name: 'Medical' }, }}>Medical</Link></li>
                          <li className=" text-[#fff] border-[none] w-1/2 cool-link mx-2 p-1"><Link href={{ pathname: '/colleges', query: { name: 'Computer Application' }, }}>Computer Application</Link></li>
                          <li className=" text-[#fff] border-[none] w-1/2 cool-link mx-2 p-1"><Link href={{ pathname: '/colleges', query: { name: 'Education' }, }}>Education</Link></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <Link href="/about" className="text-white white-link md:border-0 md:hover:text-blue-500 px-3 py-2 rounded-md">About</Link>
                <Link href="/contact" className="text-white white-link md:border-0 md:hover:text-blue-500 px-3 py-2 rounded-md">Contact</Link>
                <div className="inline-block relative group z-10">
                  <button className="text-white md:border-0 md:hover:text-blue-500 text-xl rounded-md h-full">{status === 'authenticated' && isLogin ? (<Image src={data?.user?.image} width={30} height={24} alt="User" className="rounded-full -my-2" />) : (<FaRegUserCircle className="-my-1 text-2xl" />)}</button>
                  <div className="absolute hidden w-56 -right-2 group-hover:block">
                    <div className="h-2 w-full flex justify-end px-2"><VscTriangleUp className="text-2xl -mt-2 text-slate-800" /></div>
                    <div className="bg-slate-800 text-white p-2 shadow-md rounded-md z-10">
                      <div className="flex flex-col justify-center p-4 space-y-6">
                        {status === 'authenticated' && isLogin ? (
                          <div>
                            <div className="mt-2">
                              <span className="font-semibold">Welcome {data?.user?.name}</span>
                            </div>
                            <Link href='/profile' className="flex justify-center items-center space-x-1 bg-gradient-to-r hover:bg-gradient-to-l from-blue-400 to-blue-600 py-2 px-4 text-center text-white rounded text-xl md:text-base font-sans mt-2">
                              <span>Profile</span>
                              <FaRegUser className="-mt-1" />
                            </Link>
                            <button onClick={handleSignOut} className="flex justify-center bg-gradient-to-r hover:bg-gradient-to-l from-blue-400 to-blue-600 py-2 px-4 text-center text-white rounded text-xl md:text-base font-sans mt-2">

                              {isLoading ? (
                                <RotatingLines strokeColor="white" strokeWidth="4" animationDuration="0.75" width="25" visible={true} />
                              ) : (
                                <><span>Log Out</span> <IoIosLogOut className="mx-1 mt-1" /></>
                              )}
                            </button>
                          </div>
                        ) : (
                          <div>
                            <Link href='/profile' className="block bg-gradient-to-r hover:bg-gradient-to-l from-blue-400 to-blue-600 py-2 px-4 text-center text-white rounded text-xl md:text-base font-sans mt-2">
                              Login Your Account
                            </Link>
                            <div className="mt-4">
                              <span className="font-semibold">By creating an account -</span>
                              <span className="flex"><GiCheckMark className="text-green-700" /><p>Get free counselling</p></span>
                              <span className="flex"><GiCheckMark className="text-green-700" /><p>Get Internship offers</p></span>
                              <span className="flex"><GiCheckMark className="text-green-700" /><p>Free expert Advice</p></span>
                            </div>
                          </div>
                        )}

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="-mr-2 flex md:hidden">
              <button
                onClick={toggleNavbar}
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden={!isOpen}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg
                  className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden={isOpen}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* sm navbar */}
        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/courses" onClick={toggleNavbar} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Courses</Link>
            <div className="inline-block relative group z-20" ref={dropdownRef}>
              <button className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={toggleDropdown}>Colleges</button>
              {isDropdownOpen && (
                <div className="absolute w-56">
                  <div className="h-2 w-full flex justify-start px-2">
                    <VscTriangleUp className="text-2xl -mt-2 text-slate-800" />
                  </div>
                  <div className="bg-slate-800 p-2 shadow-md rounded-md">
                    <div className="flex flex-col justify-center p-4 space-y-6">
                      <ul>
                        <li className=" text-[#fff] border-[none] w-1/2 cool-link mx-2 p-1"><Link href={{ pathname: '/colleges', query: { name: 'Engineering' }, }} onClick={toggleNavbar}>Engineering</Link></li>
                        <li className=" text-[#fff] border-[none] w-1/2 cool-link mx-2 p-1"><Link href={{ pathname: '/colleges', query: { name: 'Management' }, }} onClick={toggleNavbar}>Management</Link></li>
                        <li className=" text-[#fff] border-[none] w-1/2 cool-link mx-2 p-1"><Link href={{ pathname: '/colleges', query: { name: 'Commerce' }, }} onClick={toggleNavbar}>Commerce</Link></li>
                        <li className=" text-[#fff] border-[none] w-1/2 cool-link mx-2 p-1"><Link href={{ pathname: '/colleges', query: { name: 'Arts' }, }} onClick={toggleNavbar}>Arts</Link></li>
                        <li className=" text-[#fff] border-[none] w-1/2 cool-link mx-2 p-1"><Link href={{ pathname: '/colleges', query: { name: 'Science' }, }} onClick={toggleNavbar}>Science</Link></li>
                        <li className=" text-[#fff] border-[none] w-1/2 cool-link mx-2 p-1"><Link href={{ pathname: '/colleges', query: { name: 'Pharmacy' }, }} onClick={toggleNavbar}>Pharmacy</Link></li>
                        <li className=" text-[#fff] border-[none] w-1/2 cool-link mx-2 p-1"><Link href={{ pathname: '/colleges', query: { name: 'Medical' }, }} onClick={toggleNavbar}>Medical</Link></li>
                        <li className=" text-[#fff] border-[none] w-1/2 cool-link mx-2 p-1"><Link href={{ pathname: '/colleges', query: { name: 'Computer Application' }, }} onClick={toggleNavbar}>Computer Application</Link></li>
                        <li className=" text-[#fff] border-[none] w-1/2 cool-link mx-2 p-1"><Link href={{ pathname: '/colleges', query: { name: 'Education' }, }} onClick={toggleNavbar}>Education</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <Link href="/about" onClick={toggleNavbar} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About</Link>
            <Link href="/contact" onClick={toggleNavbar} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact</Link>
            <div className="flex space-x-6">
              {status === 'authenticated' ? (
                <Link href="/profile" onClick={() => { toggleNavbar(); }} className="block py-2 pl-3 pr-4 text-white bg-blue-700 hover:bg-blue-500 rounded" aria-current="page">
                  <p>{data?.user?.name}</p>
                  <p className='text-sm text-slate-300'>View Profile</p>
                </Link>
              ) : (
                <Link href="/profile" onClick={() => { toggleNavbar(); }} className="block py-2 pl-3 pr-4 text-white bg-blue-700 hover:bg-blue-500 rounded md:px-4 md:py-[0.20rem]" aria-current="page">Login</Link>
              )}
              <Link href="/notes" onClick={toggleNavbar} className="block py-2 pl-3 pr-4 h-10 text-white bg-blue-700 hover:bg-blue-500 rounded md:px-4 md:py-[0.20rem]" aria-current="page">Notes</Link>
              <Link href="/internship" onClick={toggleNavbar} className="block py-2 pl-3 pr-4 h-10 text-white bg-blue-700 hover:bg-blue-500 rounded md:px-4 md:py-[0.20rem]" aria-current="page">Internship</Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
