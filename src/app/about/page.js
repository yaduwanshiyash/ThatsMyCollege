import Image from 'next/image';
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub, FaArrowUp, FaVoicemail, FaYoutube } from 'react-icons/fa';
import { ImArrowUpRight2, AiOutlineMail } from "react-icons/im";
import { MdOutlineMail } from "react-icons/md";
export const metadata = { title: 'About' };

const About = () => {
  return (
    <>
      <div className=' h-fit w-full bg-[#FAFAFA] font-serif'>
        <div className=' w-full px-5 sm:px-24 py-6 md:py-4'>
          <h1 className=' text-3xl text-[#1A65F2]'>That&apos;s my college</h1>
          <p className=' text-xl sm:text-xl mt-5'>Welcome to That&apos;s my college, your one-stop destination for comprehensive information on colleges and universities, designed to simplify your admission process and help you make informed decisions about your academic future.</p>
        </div>

        <div className='w-full flex flex-col sm:flex-row items-stretch justify-center gap-5 pb-6 px-4 md:px-16 md:pb-10 md:pt-4'>
          <div className='bg-[#FFFFFF] w-full sm:w-1/2 flex items-center justify-center flex-col text-center gap-5 [box-shadow:0px_15px_30px_5px_rgba(0,0,0,0.06)] px-10 py-5'>
            <Image src="/images/icons8-mission-64.png" className="h-17 mt-2 w-21 -mr-2" width={70} height={60} priority={true} alt="TMC" />
            <h2 className='text-2xl text-zinc-800'>Our Mission</h2>
            <p className='text-xl pb-1'>Support students in their studies by providing a seamless and accessible platform that streamlines the university search and admissions process. Our mission is to create educational opportunities, close knowledge gaps, and develop a community where students can thrive academically and professionally.</p>
          </div>
          <div className='bg-[#FFFFFF] w-full sm:w-1/2 flex items-center justify-center flex-col text-center gap-5 [box-shadow:0px_15px_30px_5px_rgba(0,0,0,0.06)] px-10 py-5'>
            <Image src="/images/icons8-people-40.png" className="h-17 mt-2 w-21 -mr-2" width={70} height={60} priority={true} alt="TMC" />
            <h2 className='text-2xl text-zinc-800'>Our Vision</h2>
            <p className='text-xl pb-1'>To be the leading and most trusted online platform by providing a comprehensive and innovative platform that not only accelerates the access process for students seeking higher education but also promotes technical education. We envision a future where all students can easily find and connect with schools, access quality resources, and step into a successful education and career path.</p>
          </div>
        </div>

        <div className='team'>
          <h1 className='text-2xl sm:xl sm:text-3xl mt-5 sm:mt-0'>Meet Our Team</h1>
          <div className=' h-fit w-full flex items-center justify-center flex-col sm:flex-row gap-5 px-10 py-16 flex-wrap'>
            <div className=' members h-[40vw] sm:h-[14vw] sm:w-[17vw] w-11/12 rounded-2xl  [box-shadow:0px_15px_30px_5px_rgba(0,0,0,0.10)] flex  bg-[url("https://img.freepik.com/free-vector/blue-white-gradient-abstract-background_53876-60240.jpg?w=740&t=st=1711735558~exp=1711736158~hmac=69a421f3f332ec4a0962d69b986426ba5b3a3a76c34a0ff3a1b7d6ddb0eb9f29")] bg-left-top bg-cover items-center justify-center sm:flex-col  gap-2'>
              <div className=' h-[11vh] sm:h-[15vh] w-[22vw] sm:w-[7vw]  relative  bg-[url("/team/yash_t.jpg")] bg-cover rounded-full [box-shadow:0px_15px_30px_5px_rgba(0,0,0,0.06)] bg-center '></div>
              <h1 className=' capitalize text-xl '>yash raj thakur</h1>
            </div>
            <div className=' members h-[40vw] sm:h-[14vw] sm:w-[17vw] w-11/12 rounded-2xl  [box-shadow:0px_15px_30px_5px_rgba(0,0,0,0.10)] flex  bg-[url("https://img.freepik.com/free-vector/blue-white-gradient-abstract-background_53876-60240.jpg?w=740&t=st=1711735558~exp=1711736158~hmac=69a421f3f332ec4a0962d69b986426ba5b3a3a76c34a0ff3a1b7d6ddb0eb9f29")] bg-left-top bg-cover items-center justify-center sm:flex-col  gap-5'>
              <div className=' h-[11vh] sm:h-[15vh] w-[22vw] sm:w-[7vw]  relative  bg-[url("/team/ajay.jpg")] bg-cover rounded-full [box-shadow:0px_15px_30px_5px_rgba(0,0,0,0.06)] bg-center '></div>
              <h1 className=' capitalize text-xl '>ajay maurya</h1>
            </div>
            <div className=' members h-[40vw] sm:h-[14vw] sm:w-[17vw] w-11/12 rounded-2xl  [box-shadow:0px_15px_30px_5px_rgba(0,0,0,0.10)] flex  bg-[url("https://img.freepik.com/free-vector/blue-white-gradient-abstract-background_53876-60240.jpg?w=740&t=st=1711735558~exp=1711736158~hmac=69a421f3f332ec4a0962d69b986426ba5b3a3a76c34a0ff3a1b7d6ddb0eb9f29")] bg-left-top bg-cover items-center justify-center sm:flex-col  gap-2'>
              <div className=' h-[11vh] sm:h-[15vh] w-[22vw] sm:w-[7vw]  relative  bg-[url("/team/pradeep.jpg")] bg-cover rounded-full [box-shadow:0px_15px_30px_5px_rgba(0,0,0,0.06)] bg-center '></div>
              <h1 className=' capitalize text-xl '>pradeep maurya</h1>
            </div>
            <div className=' members h-[40vw] sm:h-[14vw] sm:w-[17vw] w-11/12 rounded-2xl  [box-shadow:0px_15px_30px_5px_rgba(0,0,0,0.10)] flex  bg-[url("https://img.freepik.com/free-vector/blue-white-gradient-abstract-background_53876-60240.jpg?w=740&t=st=1711735558~exp=1711736158~hmac=69a421f3f332ec4a0962d69b986426ba5b3a3a76c34a0ff3a1b7d6ddb0eb9f29")] bg-left-top bg-cover items-center justify-center sm:flex-col  gap-5'>
              <div className=' h-[11vh] sm:h-[15vh] w-[22vw] sm:w-[7vw]  relative  bg-[url("/team/yash.jpeg")] bg-cover rounded-full [box-shadow:0px_15px_30px_5px_rgba(0,0,0,0.06)] bg-center '></div>
              <h1 className=' capitalize text-xl '>yash yadav</h1>
            </div>
            <div className=' members h-[40vw] sm:h-[14vw] sm:w-[17vw] w-11/12 rounded-2xl  [box-shadow:0px_15px_30px_5px_rgba(0,0,0,0.10)] flex  bg-[url("https://img.freepik.com/free-vector/blue-white-gradient-abstract-background_53876-60240.jpg?w=740&t=st=1711735558~exp=1711736158~hmac=69a421f3f332ec4a0962d69b986426ba5b3a3a76c34a0ff3a1b7d6ddb0eb9f29")] bg-left-top bg-cover items-center justify-center sm:flex-col  gap-5'>
              <div className=' h-[11vh] sm:h-[15vh] w-[22vw] sm:w-[7vw]  relative  bg-[url("/team/ujjawalf.jpg")] bg-cover rounded-full [box-shadow:0px_15px_30px_5px_rgba(0,0,0,0.06)] bg-center '></div>
              <h1 className=' capitalize text-xl '>ujjawal tiwari</h1>
            </div>
            <div className=' members h-[40vw] sm:h-[14vw] sm:w-[17vw] w-11/12 rounded-2xl  [box-shadow:0px_15px_30px_5px_rgba(0,0,0,0.10)] flex  bg-[url("https://img.freepik.com/free-vector/blue-white-gradient-abstract-background_53876-60240.jpg?w=740&t=st=1711735558~exp=1711736158~hmac=69a421f3f332ec4a0962d69b986426ba5b3a3a76c34a0ff3a1b7d6ddb0eb9f29")] bg-left-top bg-cover items-center justify-center sm:flex-col  gap-5'>
              <div className=' h-[11vh] sm:h-[15vh] w-[22vw] sm:w-[7vw]  relative  bg-[url("/team/esha.jpg")] bg-cover rounded-full [box-shadow:0px_15px_30px_5px_rgba(0,0,0,0.06)] bg-center '></div>
              <h1 className=' capitalize text-xl '>esha gandhi</h1>
            </div>
            <div className=' members h-[40vw] sm:h-[14vw] sm:w-[17vw] w-11/12 rounded-2xl  [box-shadow:0px_15px_30px_5px_rgba(0,0,0,0.10)] flex  bg-[url("https://img.freepik.com/free-vector/blue-white-gradient-abstract-background_53876-60240.jpg?w=740&t=st=1711735558~exp=1711736158~hmac=69a421f3f332ec4a0962d69b986426ba5b3a3a76c34a0ff3a1b7d6ddb0eb9f29")] bg-left-top bg-cover items-center justify-center sm:flex-col  gap-0'>
              <div className=' h-[11vh] sm:h-[15vh] w-[22vw] sm:w-[7vw]  relative  bg-[url("/team/naman.jpg")] bg-cover rounded-full [box-shadow:0px_15px_30px_5px_rgba(0,0,0,0.06)] bg-center ml-5 sm:ml-0 '></div>
              <h1 className=' capitalize text-xl '>naman raghuwanshi</h1>
            </div>
            <div className=' members h-[40vw] sm:h-[14vw] sm:w-[17vw] w-11/12 rounded-2xl  [box-shadow:0px_15px_30px_5px_rgba(0,0,0,0.10)] flex  bg-[url("https://img.freepik.com/free-vector/blue-white-gradient-abstract-background_53876-60240.jpg?w=740&t=st=1711735558~exp=1711736158~hmac=69a421f3f332ec4a0962d69b986426ba5b3a3a76c34a0ff3a1b7d6ddb0eb9f29")] bg-left-top bg-cover items-center justify-center sm:flex-col  gap-5'>
              <div className=' h-[11vh] sm:h-[15vh] w-[22vw] sm:w-[7vw]  relative  bg-[url("/team/bhavya.jpg")] bg-cover rounded-full [box-shadow:0px_15px_30px_5px_rgba(0,0,0,0.06)] bg-center '></div>
              <h1 className=' capitalize text-xl '>Bhavya Dattey</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

