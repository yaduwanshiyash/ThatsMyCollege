import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

export const metadata = {
    title: 'Courses'
}

const Courses = () => {
    return (
        <>
            <div className='p-4 bg-gray-50'>
                <h1 className='text-[#48639E] text-4xl text-center'>Choose Your Course for Colleges</h1>
                <div className='md:p-8 p-1'>
                    <div className='w-full grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 items-center justify-evenly gap-4'>
                        <div className='rounded-lg border border-gray-400'>
                            <div className='bg-[#bed0e1] rounded-t-lg border-b border-gray-400 p-4 flex items-center gap-20'>
                                <Image src="/logo/engineering.png" width={50} height={50} alt="engineering" />
                                <h3 className='text-xl'>Engineering</h3>
                            </div>
                            <div className='p-6 h-40 space-x-2 space-y-2'>
                                <Link href={{ pathname: '/colleges', query: { course: 'B.Tech', name: 'Engineering' }, }} className='px-4 py-[0.35rem] border rounded-full border-blue-500 hover:bg-blue-500 hover:text-white inline-block'>BE/B.Tech</Link>
                                <Link href={{ pathname: '/colleges', query: { course: 'M.Tech', name: 'Engineering' }, }} className='px-4 py-[0.35rem] border rounded-full border-blue-500 hover:bg-blue-500 hover:text-white inline-block'>ME/M.Tech</Link>
                                <Link href={{ pathname: '/colleges', query: { course: 'Diploma', name: 'Engineering' }, }} className='px-4 py-[0.35rem] border rounded-full border-blue-500 hover:bg-blue-500 hover:text-white inline-block'>Diploma (Polytechnic)</Link>
                            </div>

                        </div>
                        <div className='rounded-lg border border-gray-400'>
                            <div className='bg-[#bed0e1] rounded-t-lg border-b border-gray-400 p-4 flex items-center gap-20'>
                                <Image src="/logo/commerce.png" width={50} height={50} alt='commerce' />
                                <h3 className='text-xl'>Commerce</h3>
                            </div>
                            <div className='p-6 h-40 space-x-2 space-y-2'>
                                <Link href={{ pathname: '/colleges', query: { course: 'B.Com', name: 'Commerce' }, }} className='px-4 py-[0.35rem] border rounded-full border-blue-500 hover:bg-blue-500 hover:text-white inline-block'>B.Com</Link>
                                <Link href={{ pathname: '/colleges', query: { course: 'M.Com', name: 'Commerce' }, }} className='px-4 py-[0.35rem] border rounded-full border-blue-500 hover:bg-blue-500 hover:text-white inline-block'>M.Com</Link>
                            </div>
                        </div>
                        <div className='rounded-lg border border-gray-400'>
                            <div className='bg-[#bed0e1] rounded-t-lg border-b border-gray-400 p-4 flex items-center gap-20'>
                                <Image src="/logo/management1.png" width={50} height={50} alt='management' />
                                <h3 className='text-xl'>Management</h3>
                            </div>
                            <div className='p-6 h-40 space-x-2 space-y-2'>
                                <Link href={{ pathname: '/colleges', query: { course: 'BBA', name: 'Management' }, }} className='px-4 py-[0.35rem] border rounded-full border-blue-500 hover:bg-blue-500 hover:text-white inline-block'>BBA</Link>
                                <Link href={{ pathname: '/colleges', query: { course: 'MBA', name: 'Management' }, }} className='px-4 py-[0.35rem] border rounded-full border-blue-500 hover:bg-blue-500 hover:text-white inline-block'>MBA</Link>
                                <Link href={{ pathname: '/colleges', query: { course: 'Executive MBA', name: 'Management' }, }} className='px-4 py-[0.35rem] border rounded-full border-blue-500 hover:bg-blue-500 hover:text-white inline-block'>Executive MBA</Link>
                            </div>
                        </div>
                        <div className='rounded-lg border border-gray-400'>
                            <div className='bg-[#bed0e1] rounded-t-lg border-b border-gray-400 p-4 flex items-center gap-20'>
                                <Image src="/logo/art.png" width={50} height={50} alt='arts' />
                                <h3 className='text-xl'>Arts</h3>
                            </div>
                            <div className='p-6 h-40 space-x-2 space-y-2'>
                                <Link href={{ pathname: '/colleges', query: { course: 'BA', name: 'Arts' }, }} className='px-4 py-[0.35rem] border rounded-full border-blue-500 hover:bg-blue-500 hover:text-white inline-block'>BA</Link>
                                <Link href={{ pathname: '/colleges', query: { course: 'MA', name: 'Arts' }, }} className='px-4 py-[0.35rem] border rounded-full border-blue-500 hover:bg-blue-500 hover:text-white inline-block'>MA</Link>
                                <Link href={{ pathname: '/colleges', query: { course: 'BFA', name: 'Arts' }, }} className='px-4 py-[0.35rem] border rounded-full border-blue-500 hover:bg-blue-500 hover:text-white inline-block'>BFA</Link>
                            </div>
                        </div>
                        <div className='rounded-lg border border-gray-400'>
                            <div className='bg-[#bed0e1] rounded-t-lg border-b border-gray-400 p-4 flex items-center gap-20'>
                                <Image src="/logo/science.png" width={50} height={50} alt='science' />
                                <h3 className='text-xl'>Science</h3>
                            </div>
                            <div className='p-6 h-40 space-x-2 space-y-2'>
                                <Link href={{ pathname: '/colleges', query: { course: 'M.Sc', name: 'Science' }, }} className='px-4 py-[0.35rem] border rounded-full border-blue-500 hover:bg-blue-500 hover:text-white inline-block'>M.Sc</Link>
                                <Link href={{ pathname: '/colleges', query: { course: 'B.Sc', name: 'Science' }, }} className='px-4 py-[0.35rem] border rounded-full border-blue-500 hover:bg-blue-500 hover:text-white inline-block'>B.Sc</Link>
                                <Link href={{ pathname: '/colleges', query: { course: 'B.Sc(Nursing)', name: 'Science' }, }} className='px-4 py-[0.35rem] border rounded-full border-blue-500 hover:bg-blue-500 hover:text-white inline-block'>B.Sc(Nursing)</Link>
                                <Link href={{ pathname: '/colleges', query: { course: 'B.F.Sc', name: 'Science' }, }} className='px-4 py-[0.35rem] border rounded-full border-blue-500 hover:bg-blue-500 hover:text-white inline-block'>B.F.Sc</Link>
                            </div>
                        </div>
                        <div className='rounded-lg border border-gray-400'>
                            <div className='bg-[#bed0e1] rounded-t-lg border-b border-gray-400 p-4 flex items-center gap-20'>
                                <Image src="/logo/pharmacy.png" width={50} height={50} alt='pharmacy' />
                                <h3 className='text-xl'>Pharmacy</h3>
                            </div>
                            <div className='p-6 h-40 space-x-2 space-y-2'>
                                <Link href={{ pathname: '/colleges', query: { course: 'B.Pharma', name: 'Pharmacy' }, }} className='px-4 py-[0.35rem] border rounded-full border-blue-500 hover:bg-blue-500 hover:text-white inline-block'>B.Pharma</Link>
                                <Link href={{ pathname: '/colleges', query: { course: 'M.Pharma', name: 'Pharmacy' }, }} className='px-4 py-[0.35rem] border rounded-full border-blue-500 hover:bg-blue-500 hover:text-white inline-block'>M.Pharma</Link>
                                <Link href={{ pathname: '/colleges', query: { course: 'D.Pharma', name: 'Pharmacy' }, }} className='px-4 py-[0.35rem] border rounded-full border-blue-500 hover:bg-blue-500 hover:text-white inline-block'>D.Pharma</Link>
                            </div>
                        </div>
                        <div className='rounded-lg border border-gray-400'>
                            <div className='bg-[#bed0e1] rounded-t-lg border-b border-gray-400 p-4 flex items-center gap-20'>
                                <Image src="/logo/medical.png" width={50} height={50} alt='medical' />
                                <h3 className='text-xl'>Medical</h3>
                            </div>
                            <div className='p-6 h-40 space-x-2 space-y-2'>
                                <Link href={{ pathname: '/colleges', query: { course: 'BAMS', name: 'Medical' }, }} className='px-4 py-[0.35rem] border rounded-full border-blue-500 hover:bg-blue-500 hover:text-white inline-block'>BAMS</Link>
                                <Link href={{ pathname: '/colleges', query: { course: 'B.Sc(Medicine)', name: 'Medical' }, }} className='px-4 py-[0.35rem] border rounded-full border-blue-500 hover:bg-blue-500 hover:text-white inline-block'>B.Sc(Medicine)</Link>
                                <Link href={{ pathname: '/colleges', query: { course: 'BHMS', name: 'Medical' }, }} className='px-4 py-[0.35rem] border rounded-full border-blue-500 hover:bg-blue-500 hover:text-white inline-block'>BHMS</Link>
                            </div>
                        </div>
                        <div className='rounded-lg border border-gray-400'>
                            <div className='bg-[#bed0e1] rounded-t-lg border-b border-gray-400 p-4 flex items-center gap-20'>
                                <Image src="/logo/computer.png" width={50} height={50} alt='computer application' />
                                <h3 className='text-xl'>Computer Application</h3>
                            </div>
                            <div className='p-6 h-40 space-x-2 space-y-2'>
                                <Link href={{ pathname: '/colleges', query: { course: 'BCA', name: 'Computer Application' }, }} className='px-4 py-[0.35rem] border rounded-full border-blue-500 hover:bg-blue-500 hover:text-white inline-block'>BCA</Link>
                                <Link href={{ pathname: '/colleges', query: { course: 'MCA', name: 'Computer Application' }, }} className='px-4 py-[0.35rem] border rounded-full border-blue-500 hover:bg-blue-500 hover:text-white inline-block'>MCA</Link>
                            </div>
                        </div>
                        <div className='rounded-lg border border-gray-400'>
                            <div className='bg-[#bed0e1]  rounded-t-lg border-b border-gray-400 p-4 flex items-center gap-20'>
                                <Image src="/logo/law.png" width={50} height={50} alt='law' />
                                <h3 className='text-xl'>LAW</h3>
                            </div>
                            <div className='p-6 h-40 space-x-2 space-y-2'>
                                <Link href={{ pathname: '/colleges', query: { course: 'LLB', name: 'LAW' }, }} className='px-4 py-[0.35rem] border rounded-full border-blue-500 hover:bg-blue-500 hover:text-white inline-block'>LLB</Link>
                                <Link href={{ pathname: '/colleges', query: { course: 'BA LLB', name: 'LAW' }, }} className='px-4 py-[0.35rem] border rounded-full border-blue-500 hover:bg-blue-500 hover:text-white inline-block'>BA LLB</Link>
                                <Link href={{ pathname: '/colleges', query: { course: 'LLM', name: 'LAW' }, }} className='px-4 py-[0.35rem] border rounded-full border-blue-500 hover:bg-blue-500 hover:text-white inline-block'>LLM</Link>
                            </div>
                        </div>
                        <div className='rounded-lg border border-gray-400'>
                            <div className='bg-[#bed0e1]  rounded-t-lg border-b border-gray-400 p-4 flex items-center gap-20'>
                                <Image src="/logo/education.png" width={50} height={50} alt='education' />
                                <h3 className='text-xl'>Education</h3>
                            </div>
                            <div className='p-6 h-40 space-x-2 space-y-2'>
                                <Link href={{ pathname: '/colleges', query: { course: 'B.Ed', name: 'Education' }, }} className='px-4 py-[0.35rem] border rounded-full border-blue-500 hover:bg-blue-500 hover:text-white inline-block'>B.Ed</Link>
                                <Link href={{ pathname: '/colleges', query: { course: 'M.Ed', name: 'Education' }, }} className='px-4 py-[0.35rem] border rounded-full border-blue-500 hover:bg-blue-500 hover:text-white inline-block'>M.Ed</Link>
                                <Link href={{ pathname: '/colleges', query: { course: 'B.P.Ed', name: 'Education' }, }} className='px-4 py-[0.35rem] border rounded-full border-blue-500 hover:bg-blue-500 hover:text-white inline-block'>B.P.Ed</Link>
                                <Link href={{ pathname: '/colleges', query: { course: 'M.P.Ed', name: 'Education' }, }} className='px-4 py-[0.35rem] border rounded-full border-blue-500 hover:bg-blue-500 hover:text-white inline-block'>M.P.Ed</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Courses
