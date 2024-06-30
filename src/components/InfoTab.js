import React from 'react'

const InfoTab = ({ college }) => {
    const { name, details, message } = college.collegeId || {};
    const { courses } = college || [];
    return (
        <>
            <div className='bg-white p-4 space-y-6 w-full'>
                <div className=''>
                    <div className='text-xl text-slate-800 font-semibold pb-2'>{name}</div>
                    <pre className='whitespace-pre-wrap font-serif text-base px-4'>{details}</pre>
                </div>
                <div>
                    <p className='font-semibold text-lg text-slate-800'>{name} - Courses</p>
                    <div className='px-4'>
                        <table className="mt-4 w-[90%]">
                            <thead>
                                <tr className=''>
                                    <th className="border text-left px-4 py-2 bg-gradient-to-l from-blue-300 to-green-300">Courses</th>
                                    <th className="border text-left px-4 py-2 bg-gradient-to-l from-blue-300 to-green-300">Fees</th>
                                    <th className="border text-left px-4 py-2 bg-gradient-to-l from-blue-300 to-green-300">Eligibility</th>
                                </tr>
                            </thead>
                            <tbody>
                                {courses && courses.length > 0 ? (
                                    courses.map((course, index) => (
                                        <tr className='' key={index}>
                                            <td className="border px-2 py-2">{course.courseName}</td>
                                            <td className="border px-2 py-2">&#8377;{course.fee} /year</td>
                                            <td className="border px-3 py-2">{course.eligibility} or equivalent with minimum 50% mark</td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="3" className="border px-4 py-2 text-center">Loading...</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
                {message && message.length > 0 ? (
                    <div className=''>
                        <div className='text-lg text-slate-800 font-semibold pb-2'>Chairman&apos;s Message</div>
                        <pre className='whitespace-pre-wrap font-serif text-base px-4'>{message}</pre>
                    </div>
                ) : ("")}
            </div>

        </>
    )
}

export default InfoTab
