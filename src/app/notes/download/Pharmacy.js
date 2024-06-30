import React from 'react'

const Pharmacy = () => {
    const aad = 'https://drive.google.com/file/d/1kgmISqyFIhJa_x6SA55gfeZ65AvlyFdL/view?usp=sharing';
    const ga = 'https://drive.google.com/file/d/1V2FGBNYHgvlR0lqIZO1KUK51DSSLU0U7/view?usp=sharing';
    const hop = 'https://drive.google.com/file/d/1X25v5k1jnhJNXnoazCg9tUM6M01wXUor/view?usp=sharing';
    const poh = 'https://drive.google.com/file/d/1O4mIYu9v3xHnlKBoEC6wwbpfcymetXwM/view?usp=sharing';
    const sns = 'https://drive.google.com/file/d/1EvcZyOGh9NpNxRV4zmC8tk_Elq64xTLl/view?usp=sharing';

    const handleDownload = (pdfUrl) => {
        window.open(pdfUrl, '_blank');
    };
    return (
        <>
            <div className="flex justify-center flex-col px-1 my-10 space-y-6">
                <div className="grid grid-rows-2 md:grid-cols-3 space-x-4 gap-2 items-start">
                    <h2 className="font-semibold col-span-2 text-xl">Anti-Anginal Drug</h2>
                    <div className='space-x-4'>
                        <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-4 rounded">View</button>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded" onClick={() => handleDownload(aad)}>Download</button>
                    </div>
                </div>

                <div className="grid grid-rows-2 md:grid-cols-3 space-x-4 gap-2 items-start">
                    <h2 className="font-semibold col-span-2 text-xl">General Anesthesia</h2>
                    <div className='space-x-4'>
                        <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-4 rounded">View</button>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded" onClick={() => handleDownload(ga)}>Download</button>
                    </div>
                </div>

                <div className="grid grid-rows-2 md:grid-cols-3 space-x-4 gap-2 items-start">
                    <h2 className="font-semibold col-span-2 text-xl">History of Pharmacology</h2>
                    <div className='space-x-4'>
                        <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-4 rounded">View</button>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded" onClick={() => handleDownload(hop)}>Download</button>
                    </div>
                </div>

                <div className="grid grid-rows-2 md:grid-cols-3 space-x-4 gap-2 items-start">
                    <h2 className="font-semibold col-span-2 text-xl">Pharmacology of C.V.S. (Heart)</h2>
                    <div className='space-x-4'>
                        <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-4 rounded">View</button>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded" onClick={() => handleDownload(poh)}>Download</button>
                    </div>
                </div>

                <div className="grid grid-rows-2 md:grid-cols-3 space-x-4 gap-2 items-start">
                    <h2 className="font-semibold col-span-2 text-xl">Sympathetic Nervous system</h2>
                    <div className='space-x-4'>
                        <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-4 rounded">View</button>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded" onClick={() => handleDownload(sns)}>Download</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Pharmacy
