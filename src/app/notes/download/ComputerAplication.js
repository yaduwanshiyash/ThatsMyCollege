import React from 'react'

const ComputerAplication = () => {
    const cProgramming = 'https://drive.google.com/file/d/1hk4beIUtuuGAyBIpYkbv4yfCKBXGiBoz/view?usp=sharing';
    const daa = 'https://drive.google.com/file/d/11_hYP8sjRWjY0XLOb-Km1qnZnT6lHxNx/view?usp=sharing';
    const discrete_Structure_1 = 'https://drive.google.com/file/d/1Ou_UV7s5KcV7Tj7YqRImxB9S1SBAChZy/view?usp=sharing';
    const discrete_Structure_2 = 'https://drive.google.com/file/d/142Tbp_uFDm-NYXJUvjg8iyKs9kvAPgHT/view?usp=sharing';
    const dsa_1 = 'https://drive.google.com/file/d/151TgviQEaUaj-ovmEiUug9On4YO1_p_V/view?usp=sharing';
    const dsa_2 = 'https://drive.google.com/file/d/1ln97jdrEAvSi76MmASmwv4jH0RPOd5R4/view?usp=sharing';
    const dsa_3 = 'https://drive.google.com/file/d/1BzKCsOA04v36U4Ze2mSH-c0S_AloII1V/view?usp=sharing';

    const handleDownload = (pdfUrl) => {
        window.open(pdfUrl, '_blank');
    };
    return (
        <>
            <div className="flex justify-center flex-col px-1 my-10 space-y-2">
                <div className="grid grid-rows-2 md:grid-cols-3 space-x-4 gap-2 items-start">
                    <h2 className="font-semibold text-xl">C Programming</h2>
                    <div className='space-x-4'>
                        <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-4 rounded">View</button>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded" onClick={() => handleDownload(cProgramming)}>Download</button>
                    </div>
                </div>

                <div className="grid grid-rows-2 md:grid-cols-3 space-x-4 gap-2 items-start">
                    <h2 className="font-semibold col-span-2 text-xl">Design and Analysis of Algorithms</h2>
                    <div className='space-x-4'>
                        <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-4 rounded">View</button>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded" onClick={() => handleDownload(daa)}>Download</button>
                    </div>
                </div>

                <div className="grid grid-rows-2 md:grid-cols-3 space-x-4 gap-2 items-start">
                    <h2 className="font-semibold col-span-2 text-xl">Discrete Structure 1</h2>
                    <div className='space-x-4'>
                        <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-4 rounded">View</button>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded" onClick={() => handleDownload(discrete_Structure_1)}>Download</button>
                    </div>
                </div>

                <div className="grid grid-rows-2 md:grid-cols-3 space-x-4 gap-2 items-start">
                    <h2 className="font-semibold col-span-2 text-xl">Discrete Structure 2</h2>
                    <div className='space-x-4'>
                        <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-4 rounded">View</button>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded" onClick={() => handleDownload(discrete_Structure_2)}>Download</button>
                    </div>
                </div>

                <div className="grid grid-rows-2 md:grid-cols-3 space-x-4 gap-2 items-start">
                    <h2 className="font-semibold col-span-2 text-xl">DSA 1 (Data Structure & Algorithm)</h2>
                    <div className='space-x-4'>
                        <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-4 rounded">View</button>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded" onClick={() => handleDownload(dsa_1)}>Download</button>
                    </div>
                </div>

                <div className="grid grid-rows-2 md:grid-cols-3 space-x-4 gap-2 items-start">
                    <h2 className="font-semibold col-span-2 text-xl">DSA 2 (Data Structure & Algorithm)</h2>
                    <div className='space-x-4'>
                        <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-4 rounded">View</button>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded" onClick={() => handleDownload(dsa_2)}>Download</button>
                    </div>
                </div>

                <div className="grid grid-rows-2 md:grid-cols-3 space-x-4 gap-2 items-start">
                    <h2 className="font-semibold col-span-2 text-xl">DSA 3 (Data Structure & Algorithm)</h2>
                    <div className='space-x-4'>
                        <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-4 rounded">View</button>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded" onClick={() => handleDownload(dsa_3)}>Download</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ComputerAplication
