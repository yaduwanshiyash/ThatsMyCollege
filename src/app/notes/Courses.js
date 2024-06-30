'use client'
import Branch_notes from '@/app/notes/Branch_notes'
import Image from 'next/image'
import { useState } from 'react'

const Courses = () => {
    const [showCourse, setShowCourse] = useState(true)
    const [query, setQuery] = useState(null)
    const toggleView = (newQuery) => {
        setShowCourse(!showCourse);
        setQuery(newQuery)
    }
    return (
        <>
            {showCourse ? (
                <div className='p-4 bg-gray-50'>
                    <h1 className='text-[#48639E] text-4xl py-2 md:pt-4 text-center'>Handwritten Notes</h1>
                    <div className='md:pb-8 p-1'>
                        <div className='w-full grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 items-center justify-evenly gap-4'>
                            {/* Engineering */}
                            <div className='rounded-lg border border-gray-400'>
                                <div className='bg-[#bed0e1] h-16 rounded-t-lg border-b border-gray-400 p-4 flex items-center gap-20'>
                                    <Image src="/logo/engineering.png" width={50} height={50} alt="engineering" />
                                    <h3 className='text-xl'>Engineering</h3>
                                </div>
                                <div className='p-6 h-36 space-x-2 space-y-2'>
                                    <button onClick={() => toggleView({ course: 'B.Tech', name: 'Engineering' })} className='px-4 py-[0.35rem] border rounded-full border-blue-500 hover:bg-blue-500 hover:text-white inline-block'>BE/B.Tech</button>
                                    <button onClick={() => toggleView({ course: 'M.Tech', name: 'Engineering' })} className='px-4 py-[0.35rem] border rounded-full border-blue-500 hover:bg-blue-500 hover:text-white inline-block'>ME/M.Tech</button>
                                    <button onClick={() => toggleView({ course: 'Diploma', name: 'Engineering' })} className='px-4 py-[0.35rem] border rounded-full border-blue-500 hover:bg-blue-500 hover:text-white inline-block'>Diploma (Polytechnic)</button>
                                </div>
                            </div>
                            {/* Commerce */}
                            {/* <div className='rounded-lg border border-gray-400'>
                                <div className='bg-[#bed0e1] h-16 rounded-t-lg border-b border-gray-400 p-4 flex items-center gap-20'>
                                    <Image src="/logo/commerce.png" width={50} height={50} alt='commerce' />
                                    <h3 className='text-xl'>Commerce</h3>
                                </div>
                                <div className='p-6 h-36 space-x-2 space-y-2'>
                                    <button onClick={() => toggleView({ course: 'B.Com' })} className='px-4 py-[0.35rem] border rounded-full border-blue-500 hover:bg-blue-500 hover:text-white inline-block'>B.Com</button>
                                    <button onClick={() => toggleView({ course: 'M.Com' })} className='px-4 py-[0.35rem] border rounded-full border-blue-500 hover:bg-blue-500 hover:text-white inline-block'>M.Com</button>
                                </div>
                            </div> */}
                            {/* Management */}
                            {/* <div className='rounded-lg border border-gray-400'>
                                <div className='bg-[#bed0e1] h-16 rounded-t-lg border-b border-gray-400 p-4 flex items-center gap-20'>
                                    <Image src="/logo/management1.png" width={50} height={50} alt='management' />
                                    <h3 className='text-xl'>Management</h3>
                                </div>
                                <div className='p-6 h-36 space-x-2 space-y-2'>
                                    <button onClick={() => toggleView({ course: 'BBA' })} className='px-4 py-[0.35rem] border rounded-full border-blue-500 hover:bg-blue-500 hover:text-white inline-block'>BBA</button>
                                    <button onClick={() => toggleView({ course: 'MBA' })} className='px-4 py-[0.35rem] border rounded-full border-blue-500 hover:bg-blue-500 hover:text-white inline-block'>MBA</button>
                                    <button onClick={() => toggleView({ course: 'Executive MBA' })} className='px-4 py-[0.35rem] border rounded-full border-blue-500 hover:bg-blue-500 hover:text-white inline-block'>Executive MBA</button>
                                </div>
                            </div> */}
                            {/* Computer application */}
                            <div className='rounded-lg border border-gray-400'>
                                <div className='bg-[#bed0e1] h-16 rounded-t-lg border-b border-gray-400 p-4 flex items-center gap-20'>
                                    <Image src="/logo/computer.png" width={50} height={50} alt='computer application' />
                                    <h3 className='text-xl'>Computer Application</h3>
                                </div>
                                <div className='p-6 h-36 space-x-2 space-y-2'>
                                    <button onClick={() => toggleView({ course: 'BCA', name: 'ComputerApplication', })} className='px-4 py-[0.35rem] border rounded-full border-blue-500 hover:bg-blue-500 hover:text-white inline-block'>BCA</button>
                                    <button onClick={() => toggleView({ course: 'MCA', name: 'ComputerApplication', })} className='px-4 py-[0.35rem] border rounded-full border-blue-500 hover:bg-blue-500 hover:text-white inline-block'>MCA</button>
                                </div>
                            </div>
                            {/* Pharmacy */}
                            <div className='rounded-lg border border-gray-400'>
                                <div className='bg-[#bed0e1] h-16 rounded-t-lg border-b border-gray-400 p-4 flex items-center gap-20'>
                                    <Image src="/logo/pharmacy.png" width={50} height={50} alt='pharmacy' />
                                    <h3 className='text-xl'>Pharmacy</h3>
                                </div>
                                <div className='p-6 h-36 space-x-2 space-y-2'>
                                    <button onClick={() => toggleView({ course: 'B.Pharma', name: 'Pharmacy' })} className='px-4 py-[0.35rem] border rounded-full border-blue-500 hover:bg-blue-500 hover:text-white inline-block'>B.Pharma</button>
                                    <button onClick={() => toggleView({ course: 'M.Pharma', name: 'Pharmacy' })} className='px-4 py-[0.35rem] border rounded-full border-blue-500 hover:bg-blue-500 hover:text-white inline-block'>M.Pharma</button>
                                    <button onClick={() => toggleView({ course: 'D.Pharma', name: 'Pharmacy' })} className='px-4 py-[0.35rem] border rounded-full border-blue-500 hover:bg-blue-500 hover:text-white inline-block'>D.Pharma</button>
                                </div>
                            </div>
                            {/* Arts */}
                            {/* <div className='rounded-lg border border-gray-400'>
                                <div className='bg-[#bed0e1] h-16 rounded-t-lg border-b border-gray-400 p-4 flex items-center gap-20'>
                                    <Image src="/logo/art.png" width={50} height={50} alt='arts' />
                                    <h3 className='text-xl'>Arts</h3>
                                </div>
                                <div className='p-6 h-36 space-x-2 space-y-2'>
                                    <button onClick={() => toggleView({ course: 'BA' })} className='px-4 py-[0.35rem] border rounded-full border-blue-500 hover:bg-blue-500 hover:text-white inline-block'>BA</button>
                                    <button onClick={() => toggleView({ course: 'MA' })} className='px-4 py-[0.35rem] border rounded-full border-blue-500 hover:bg-blue-500 hover:text-white inline-block'>MA</button>
                                    <button onClick={() => toggleView({ course: 'BFA' })} className='px-4 py-[0.35rem] border rounded-full border-blue-500 hover:bg-blue-500 hover:text-white inline-block'>BFA</button>
                                </div>
                            </div> */}
                            {/* Science */}
                            {/* <div className='rounded-lg border border-gray-400'>
                                <div className='bg-[#bed0e1] h-16 rounded-t-lg border-b border-gray-400 p-4 flex items-center gap-20'>
                                    <Image src="/logo/science.png" width={50} height={50} alt='science' />
                                    <h3 className='text-xl'>Science</h3>
                                </div>
                                <div className='p-6 h-36 space-x-2 space-y-2'>
                                    <button onClick={() => toggleView({ course: 'M.Sc' })} className='px-4 py-[0.35rem] border rounded-full border-blue-500 hover:bg-blue-500 hover:text-white inline-block'>M.Sc</button>
                                    <button onClick={() => toggleView({ course: 'B.Sc' })} className='px-4 py-[0.35rem] border rounded-full border-blue-500 hover:bg-blue-500 hover:text-white inline-block'>B.Sc</button>
                                    <button onClick={() => toggleView({ course: 'B.Sc(Nursing)' })} className='px-4 py-[0.35rem] border rounded-full border-blue-500 hover:bg-blue-500 hover:text-white inline-block'>B.Sc(Nursing)</button>
                                    <button onClick={() => toggleView({ course: 'B.F.Sc' })} className='px-4 py-[0.35rem] border rounded-full border-blue-500 hover:bg-blue-500 hover:text-white inline-block'>B.F.Sc</button>
                                </div>
                            </div> */}
                            {/* Medical */}
                            {/* <div className='rounded-lg border border-gray-400'>
                                <div className='bg-[#bed0e1] h-16 rounded-t-lg border-b border-gray-400 p-4 flex items-center gap-20'>
                                    <Image src="/logo/medical.png" width={50} height={50} alt='medical' />
                                    <h3 className='text-xl'>Medical</h3>
                                </div>
                                <div className='p-6 h-36 space-x-2 space-y-2'>
                                    <button onClick={() => toggleView({ course: 'BAMS' })} className='px-4 py-[0.35rem] border rounded-full border-blue-500 hover:bg-blue-500 hover:text-white inline-block'>BAMS</button>
                                    <button onClick={() => toggleView({ course: 'B.Sc(Medicine)' })} className='px-4 py-[0.35rem] border rounded-full border-blue-500 hover:bg-blue-500 hover:text-white inline-block'>B.Sc(Medicine)</button>
                                    <button onClick={() => toggleView({ course: 'BHMS' })} className='px-4 py-[0.35rem] border rounded-full border-blue-500 hover:bg-blue-500 hover:text-white inline-block'>BHMS</button>
                                </div>
                            </div> */}
                            {/* Law */}
                            {/* <div className='rounded-lg border border-gray-400'>
                                <div className='bg-[#bed0e1] h-16  rounded-t-lg border-b border-gray-400 p-4 flex items-center gap-20'>
                                    <Image src="/logo/law.png" width={50} height={50} alt='law' />
                                    <h3 className='text-xl'>LAW</h3>
                                </div>
                                <div className='p-6 h-36 space-x-2 space-y-2'>
                                    <button onClick={() => toggleView({ course: 'LLB' })} className='px-4 py-[0.35rem] border rounded-full border-blue-500 hover:bg-blue-500 hover:text-white inline-block'>LLB</button>
                                    <button onClick={() => toggleView({ course: 'BA LLB' })} className='px-4 py-[0.35rem] border rounded-full border-blue-500 hover:bg-blue-500 hover:text-white inline-block'>BA LLB</button>
                                    <button onClick={() => toggleView({ course: 'LLM' })} className='px-4 py-[0.35rem] border rounded-full border-blue-500 hover:bg-blue-500 hover:text-white inline-block'>LLM</button>
                                </div>
                            </div> */}
                            {/* Education */}
                            {/* <div className='rounded-lg border border-gray-400'>
                                <div className='bg-[#bed0e1] h-16  rounded-t-lg border-b border-gray-400 p-4 flex items-center gap-20'>
                                    <Image src="/logo/education.png" width={50} height={50} alt='education' />
                                    <h3 className='text-xl'>Education</h3>
                                </div>
                                <div className='p-6 h-36 space-x-2 space-y-2'>
                                    <button onClick={() => toggleView({ course: 'B.Ed' })} className='px-4 py-[0.35rem] border rounded-full border-blue-500 hover:bg-blue-500 hover:text-white inline-block'>B.Ed</button>
                                    <button onClick={() => toggleView({ course: 'M.Ed' })} className='px-4 py-[0.35rem] border rounded-full border-blue-500 hover:bg-blue-500 hover:text-white inline-block'>M.Ed</button>
                                    <button onClick={() => toggleView({ course: 'B.P.Ed' })} className='px-4 py-[0.35rem] border rounded-full border-blue-500 hover:bg-blue-500 hover:text-white inline-block'>B.P.Ed</button>
                                    <button onClick={() => toggleView({ course: 'M.P.Ed' })} className='px-4 py-[0.35rem] border rounded-full border-blue-500 hover:bg-blue-500 hover:text-white inline-block'>M.P.Ed</button>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            ) : (
                <Branch_notes toggleView={toggleView} query={query} />
            )}
        </>
    )
}

export default Courses
