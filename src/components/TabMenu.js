import { useState } from 'react';
import InfoTab from './InfoTab';
import GalleryTab from './GalleryTab';
import AdmissionTab from './AdmissionTab';
import PlacementTab from './PlacementTab';
import SideTab from './SideTab';
import FeesTab from './FeesTab';


const TabMenu = (college) => {
    const [activeTab, setActiveTab] = useState('tab1');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="">
            <div className="flex flex-nowrap bg-white md:px-20 px-2 shadow-lg space-x-10 md:py-3 font-[helvetica] text-gray-900 overflow-x-auto scrollbar-hide">
                <button
                    className={`${activeTab === 'tab1'
                        ? 'border-b-2 border-blue-500 text-blue-500'
                        : 'border-b-2 border-transparent'
                        }`}
                    onClick={() => handleTabClick('tab1')}
                >
                    Overview
                </button>
                <button
                    className={`${activeTab === 'tab2'
                        ? 'border-b-2 border-blue-500 text-blue-500'
                        : 'border-b-2 border-transparent'
                        }`}
                    onClick={() => handleTabClick('tab2')}
                >
                    Courses / fees
                </button>
                <button
                    className={`${activeTab === 'tab3'
                        ? 'border-b-2 border-blue-500 text-blue-500'
                        : 'border-b-2 border-transparent'
                        }`}
                    onClick={() => handleTabClick('tab3')}
                >
                    Admission
                </button>
                <button
                    className={`${activeTab === 'tab4'
                        ? 'border-b-2 border-blue-500 text-blue-500'
                        : 'border-b-2 border-transparent'
                        }`}
                    onClick={() => handleTabClick('tab4')}
                >
                    Placement
                </button>
                <button
                    className={`${activeTab === 'tab5'
                        ? 'border-b-2 border-blue-500 text-blue-500'
                        : 'border-b-2 border-transparent'
                        }`}
                    onClick={() => handleTabClick('tab5')}
                >
                    Gallery
                </button>
            </div>

            <div className="py-4 mt-2">
                {/* Tab 1 content */}
                <div id="tab1" className={`tab-content ${activeTab === 'tab1' ? '' : 'hidden'}`}>
                    <div className='md:grid md:grid-cols-10 px-1'>
                        <div className='md:col-span-8 mx-2 rounded-md'>
                            <InfoTab college={college} />
                        </div>
                        <div className='md:col-span-2'>
                            <SideTab college={college} />
                        </div>
                    </div>
                </div>


                {/* Tab 2 content */}
                <div id="tab2" className={`tab-content ${activeTab === 'tab2' ? '' : 'hidden'}`}>
                    <div className='flex md:grid grid-cols-10 px-1'>
                        <div className='col-span-8 mx-2 rounded-md'>
                            <FeesTab college={college} />
                        </div>
                        <div className='md:block hidden col-span-2'>
                            <SideTab college={college} />
                        </div>
                    </div>
                </div>


                {/* Tab 3 content */}
                {activeTab === 'tab3' && (
                    <div id="tab3" className={`tab-content`}>
                        <div className='flex md:grid grid-cols-10 px-1'>
                            <div className='col-span-8 bg-white mx-2 rounded-md'>
                                <AdmissionTab college={college} />
                            </div>
                            <div className='md:block hidden col-span-2'>
                                <SideTab college={college} />
                            </div>
                        </div>
                    </div>
                )}

                {/* Tab 4 content */}
                {activeTab === 'tab4' && (
                    <div id="tab4" className={`tab-content`}>
                        <div className='flex md:grid grid-cols-10 px-1'>
                            <div className='col-span-8 bg-white mx-2 rounded-md'>
                                <PlacementTab />
                            </div>
                            <div className='md:block hidden col-span-2'>
                                <SideTab college={college} />
                            </div>
                        </div>
                    </div>
                )}

                {/* Tab 5 content */}
                {activeTab === 'tab5' && (
                    <div id="tab5" className={`tab-content`}>
                        <div className='flex md:grid grid-cols-10 px-1'>
                            <div className='col-span-8 bg-white mx-2 rounded-md'>
                                <GalleryTab college={college} />
                            </div>
                            <div className='md:block hidden col-span-2'>
                                <SideTab college={college} />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TabMenu;
