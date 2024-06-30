import React from 'react'
import Image from 'next/image'

const GalleryTab = ({ college }) => {
    const { image, name } = college.collegeId
    const actName = name.split(",")[0];
    return (
        <>
            <div className="container mx-auto p-4">
                <h1 className="text-xl font-semibold mb-4">{actName} - Image Gallery</h1>
                {image && image.length > 0 ? (
                    <div className="flex flex-wrap -m-2">
                        {image.map((img, index) => (
                            <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 p-2" key={index}>
                                <div className="bg-gray-200 rounded-lg overflow-hidden">
                                    <Image src={img} alt={`Image ${index + 1}`} className="w-full h-40 object-cover transition-transform duration-300 hover:scale-110" width={500} height={500} />
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No image available.</p>
                )}
            </div>
        </>
    )
}

export default GalleryTab
