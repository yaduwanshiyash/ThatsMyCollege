import React from 'react';
import Image from 'next/image';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { setIsLogin } from "@/store/slices/LoginSlice";
import axiosInstance from '@/config/AxiosIntercepter';
import { useEffect, useState } from 'react';
import AppliedCollegeList from './AppliedCollegeList';
import AppliedInternship from './AppliedInternship';
import { IoIosLogOut } from "react-icons/io";

const UserProfile = ({ sessionData }) => {
  const { user = {} } = sessionData;
  const { email = {} } = user;
  const Api = process.env.SERVICE_BASE_URL;
  const router = useRouter();
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({});
  const [appliedColleges, setappliedColleges] = useState({})

  const handleLogout = async () => {
    await signOut();
    localStorage.removeItem("authToken");
    toast(<div> Log Out successfully</div>);
    dispatch(setIsLogin(false));
    router.push('/profile')
  }

  const getAppliedColleges = async (userId) => {
    try {
      const { data } = await axiosInstance.get(`${Api}/api/admission-application/user/${userId}`);
      return data;
    } catch (error) {
      console.error('Error get user data :', error);
      return false;
    }
  };
  const fetchAppliedColleges = async () => {
    const fetchColleges = await getAppliedColleges(userData?.data?._id);
    if (fetchColleges) {
      setappliedColleges(fetchColleges);
    }
  }

  const getUserDataFromBD = async (email) => {
    try {
      const { data } = await axiosInstance.get(`${Api}/api/users/email/${email}`);
      localStorage.setItem('authToken', data.data.authToken)
      return data;
    } catch (error) {
      console.error('Error get user data :', error);
      return false;
    }
  };

  useEffect(() => {
    const fetchUserData = async () => {
      const fetchedUserData = await getUserDataFromBD(email);
      if (fetchedUserData) {
        setUserData(fetchedUserData);
      }
    };
    if (!userData || !userData.data) {
      fetchUserData();
    }

    if (!appliedColleges || Object.keys(appliedColleges).length === 0) {
      fetchAppliedColleges();
    }
  }, [userData, appliedColleges, setUserData]);

  const { firstName = "", lastName = "", phone, gender, profilePic, qualification } = userData?.data || {};

  return (
    <div className='max-h-[200vh]  w-[95vw] sm:w-[90vw]  rounded-[10px] bg-[#fff] overflow-hidden relative shadow-md'>
      <div className="p-[2vw] flex flex-col sm:flex-row sm:p-[1vw] items-center justify-between bg-cover bg-top">
        <div className='h-[26vh] w-[95vw] sm:h-[30vh] sm:w-auto top-[0] left-[0] absolute z-0 overflow-hidden'>
          <Image src='/images/back-img.jpeg' width={1400} height={100} alt="" className='h-[300%] w-full sm:h-[30vh] pointer-events-none sm:w-[90vw] object-cover object-top filter brightness-[80%]' />
        </div>
        <div className='justify-center gap-[4vw] sm:gap-1 bg-transparent flex items-center md:space-x-4 z-10 '>
          <div className="m-2">
            {profilePic ? (
              <Image src={profilePic} width={90} height={90} alt="User" className="rounded-md pointer-events-none" />
            ) : (
              <div className="relative w-20 h-20 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                <svg className="absolute w-16 h-16 text-gray-400 left-2 top-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
              </div>
            )}
            <Link href="" className='md:hidden text-center py-2 block bg-gradient-to-r hover:bg-gradient-to-l from-blue-400 to-blue-600 text-white rounded font-sans mt-2' onClick={handleLogout}>Log Out</Link>
          </div>
          <div className='user flex flex-col space-y-1 mt-2 md:mt-0'>
            <h2 className="sm:text-[35px] text-[6vw] capitalize text-white font-semibold">{firstName} {lastName}</h2>
            <p className="text-white text-[4vw] sm:text-xl">{email}</p>
            <p className="text-white text-[4vw] sm:text-sm flex">Mobile: &nbsp; {phone}</p>
            <p className="text-white text-[4vw] sm:text-sm">Gender: {gender}</p>
            <p className="text-white text-[4vw] capitalize sm:text-sm">Qualification: {qualification}</p>
          </div>
        </div>
        <div className='flex justify-center gap-[2vw] z-0'>
          <Link href="" className='hidden md:block px-4 py-[0.35rem] bg-gradient-to-r hover:bg-gradient-to-l from-blue-400 to-blue-600 text-center text-white rounded text-lg font-sans mt-2 md:flex justify-center items-center' onClick={handleLogout}><span>Log Out</span> <IoIosLogOut className="mx-1 mt-1" /></Link>
        </div>
      </div>

      <div className='max-h-screen w-full flex flex-col items-center justify-center px-[4vw] mt-8 md:mt-4 divide-y'>
        <AppliedCollegeList appliedColleges={appliedColleges} setappliedColleges={setappliedColleges} />
        <AppliedInternship />
      </div>

    </div>
  );
};

export default React.memo(UserProfile);
