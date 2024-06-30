import Link from 'next/link'
import { BsDownload } from 'react-icons/bs';

const SideTab = ({ college }) => {
    const { address } = college.collegeId || {};
    // console.log(college);
    return (
        <>
            <div className=' px-2 py-6 md:py-1 mx-2'>
                <Link href="" className="bg-blue-500 text-white px-6 py-2 flex rounded shadow-lg shadow-blue-500/50 hover:bg-blue-600">
                    <span className="flex-grow">Download Brochure</span>
                    <BsDownload className="text-xl" />
                </Link>

                <div className='bg-white mt-5 rounded-md divide-y p-2'>
                    <p className='font-semibold text-lg text-gray-800'>College Address</p>
                    <p>{address}</p>
                </div>
            </div>
        </>
    )
}

export default SideTab
