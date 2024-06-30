import React from 'react';
import { IoIosArrowRoundBack } from "react-icons/io";
import Engineering from './download/Engineering';
import ComputerAplication from './download/ComputerAplication';
import Pharmacy from './download/Pharmacy';

const Allsubject_notes = ({ query, selectedStream, selectedYear, setSelectedYear, setHideComponent }) => {
    console.log(query.name === 'Engineering', query.name)
    const handleClick = () => {
        setHideComponent(true);
    }

    // Determine which component to render based on the query name
    let selectedComponent;
    switch (query.name) {
        case 'Engineering':
            selectedComponent = <Engineering />;
            break;
        case 'ComputerApplication':
            selectedComponent = <ComputerAplication />;
            break;
        case 'Pharmacy':
            selectedComponent = <Pharmacy />;
            break;
        default:
            selectedComponent = null; 
            break;
    }

    return (
        <div className="container mt-1 mb-0 md:mb-4 sm:w-[50vw] bg-blue-100 shadow-md">
            <div className="flex flex-col justify-center items-center mb-4">
                <span className="text-xl font-medium mt-5" href="#">{selectedYear}</span>
                <h5 className="text-2xl font-semibold mt-1 w-4/5 text-center">{query.course}</h5>

                <div className="bg-blue-500 w-4/5 mt-6 flex flex-col justify-center items-center rounded">
                    <h3 className="text-2xl text-white mt-2 mb-2">{selectedStream}</h3>
                </div>

                {/* Render the selected component */}
                {selectedComponent}

                <button onClick={handleClick} className="flex bg-teal-500 hover:bg-teal-400 text-white font-bold py-2 px-4 rounded gap-2">
                    <IoIosArrowRoundBack className='-mt-1 text-3xl font-extrabold' /> Back To Year List
                </button>
            </div>
        </div>
    );
};

export default Allsubject_notes;
