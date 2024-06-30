import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';


const Footer = () => {
  return (
    <>
      <footer className="bg-gray-800 text-white pt-16 pb-2">
        <div className="container mx-auto divide-y divide-slate-500">
          <div className="flex flex-wrap pb-4">
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 pl-6 mb-8 sm:mb-0">
              <span><Image src="/logo/tmc_lightblue.png" className="-mb-4 -ml-4" width={120} height={80} alt="Flowbite Logo" style={{ width: 'auto' }} /></span>
              <span>
                <h1 className="text-3xl text-blue-500 font-semibold shadow-blue-600">ThatsMyCollege</h1>
                <p className='text-sm'>Empowering Futures, One Admission at a Time: <br /> Your Pathway to Education Begins with TMC!</p>
              </span>

              <div className="flex mt-8">
                <a href="" className="w-10 h-10 bg-white bg-opacity-20 mr-4 flex items-center justify-center rounded-full transition-colors duration-300 hover:text-gray-800 hover:bg-white" target='_blank'>
                  <FaFacebookF />
                </a>
                <a href="https://x.com/thatsmycollege?s=08" className="w-10 h-10 bg-white bg-opacity-20 mr-4 flex items-center justify-center rounded-full transition-colors duration-300 hover:text-gray-800 hover:bg-white" target='_blank'>
                  <FaTwitter />
                </a>
                <a href="https://www.instagram.com/thats_mycollege?utm_source=qr&igsh=czVsdmxnejI3Z3Ro" className="w-10 h-10 bg-white bg-opacity-20 mr-4 flex items-center justify-center rounded-full transition-colors duration-300 hover:text-gray-800 hover:bg-white" target='_blank'>
                  <FaInstagram />
                </a>
                <a href="https://www.linkedin.com/in/that-s-my-college-3470392ab/" className="w-10 h-10 bg-white bg-opacity-20 mr-4 flex items-center justify-center rounded-full transition-colors duration-300 hover:text-gray-800 hover:bg-white" target='_blank'>
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4 px-10 mb-8 sm:mb-0">
              <h4 className="text-lg font-semibold mb-6">Top Colleges</h4>
              <ul>
                <li><Link href={{ pathname: '/colleges', query: { name: 'Engineering' }, }} className="text-gray-400 hover:text-white" >Engineering</Link></li>
                <li><Link href={{ pathname: '/colleges', query: { name: 'Management' }, }} className="text-gray-400 hover:text-white" >Management</Link></li>
                <li><Link href={{ pathname: '/colleges', query: { name: 'Commerce' }, }} className="text-gray-400 hover:text-white" >Commerce</Link></li>
                <li><Link href={{ pathname: '/colleges', query: { name: 'Arts' }, }} className="text-gray-400 hover:text-white" >Arts</Link></li>
                <li><Link href={{ pathname: '/colleges', query: { name: 'Science' }, }} className="text-gray-400 hover:text-white" >Science</Link></li>
                <li><Link href={{ pathname: '/colleges', query: { name: 'Pharmacy' }, }} className="text-gray-400 hover:text-white" >Pharmacy</Link></li>
                <li><Link href={{ pathname: '/colleges', query: { name: 'Education' }, }} className="text-gray-400 hover:text-white" >Education</Link></li>
              </ul>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4 px-10 mb-8 sm:mb-0">
              <h4 className="text-lg font-semibold mb-6">Top Courses</h4>
              <ul>
                <li><Link href={{ pathname: '/colleges', query: { course: 'B.Tech', name: 'Engineering' }, }} className="text-gray-400 hover:text-white">B.Tech</Link></li>
                <li><Link href={{ pathname: '/colleges', query: { course: 'M.Tech', name: 'Engineering' }, }} className="text-gray-400 hover:text-white">M.Tech</Link></li>
                <li><Link href={{ pathname: '/colleges', query: { course: 'MBA', name: 'Management' }, }} className="text-gray-400 hover:text-white">MBA</Link></li>
                <li><Link href={{ pathname: '/colleges', query: { course: 'BBA', name: 'Management' }, }} className="text-gray-400 hover:text-white">BBA</Link></li>
                <li><Link href={{ pathname: '/colleges', query: { course: 'BCA', name: 'Computer Application' }, }} className="text-gray-400 hover:text-white">BCA</Link></li>
                <li><Link href={{ pathname: '/colleges', query: { course: 'B.Pharma', name: 'Pharmacy' }, }} className="text-gray-400 hover:text-white">B.Pharma</Link></li>
                <li><Link href={{ pathname: '/colleges', query: { course: 'D.Pharma', name: 'Pharmacy' }, }} className="text-gray-400 hover:text-white">D.Pharma</Link></li>
              </ul>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4 px-8 mb-8 sm:mb-0">
              <h4 className="text-lg font-semibold mb-6">Site Links</h4>
              <ul>
                <li><Link href="/internship" className="text-gray-400 hover:text-white">Internship</Link></li>
                <li><Link href="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact Us</Link></li>
                <li><Link href="/career" className="text-gray-400 hover:text-white">Career</Link></li>
              </ul>
            </div>
          </div>
          <div className='container p-2 text-sm'>&#169; 2024 ThatsMyCollege</div>
        </div>
      </footer>
    </>
  )
}

export default Footer
