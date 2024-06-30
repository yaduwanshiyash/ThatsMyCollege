'use client'
import React, { useState } from 'react';
import { IoIosArrowRoundBack } from "react-icons/io";
import Allsubject_notes from '@/app/notes/Allsubject_notes';

const Branch_notes = ({ toggleView, query }) => {
  const branches = [
    {
      course: 'B.Tech',
      stream: ['Computer Science & Engineering', 'Information Technology',
      //  'Mechanical', 'Civil', 'Electronics and Communication'
      ],
      year: ['1st Year', '2nd Year', '3rd Year', '4th Year']
    },
    {
      course: 'M.Tech',
      stream: ['Computer Science & Engineering', 'Information Technology',
      //  'Mechanical', 'Civil', 'Electronics and Communication'
      ],
      year: ['1st Year', '2nd Year']
    },
    {
      course: 'Diploma',
      stream: ['Computer Science & Engineering', 'Information Technology',
      //  'Mechanical', 'Civil', 'Electronics and Communication'
      ],
      year: ['1st Year', '2nd Year', '3rd Year']
    },
    {
      course: 'BCA',
      stream: ['all stream'],
      year: ['1st Year', '2nd Year', '3rd Year'],
    },
    {
      course: 'MCA',
      stream: ['all stream'],
      year: ['1st Year', '2nd Year']
    },
    {
      course: 'B.Pharma',
      stream: ['all stream'],
      year: ['1st Year', '2nd Year', '3rd Year', '4rt Year'],
    },
    {
      course: 'D.Pharma',
      stream: ['all stream'],
      year: ['1st Year', '2nd Year']
    },
    {
      course: 'M.Pharma',
      stream: ['all stream'],
      year: ['1st Year', '2nd Year']
    }
  ];

  const [selectedStream, setSelectedStream] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);
  const [hideComponent, setHideComponent] = useState(true); 

  const filteredBranches = branches.find(branch => branch.course === query.course);

  const handleSelectStream = (stream) => {
    setSelectedStream(stream);
  };

  const handleSelectYear = (year) => {
    setSelectedYear(year);
    setHideComponent(false); 
  };

  return (
    <>
    <div className='library'>
      <span className='text-gray-100 pl-3 md:pl-12 text-sm underline'>{query.course} &gt;&nbsp; {selectedStream} &gt;&nbsp; {selectedYear}&gt;&nbsp;</span>

      {hideComponent ? (
        <div className='h-2/3 p-8 md:py-8 w-full flex flex-col items-center justify-center'>
          {selectedStream ? (
            <>
              <h1 className='text-white text-3xl text-center capitalize font-semibold tracking-wider'>Please select your year</h1>
              <div className='grid gap-5 py-7 whitespace-nowrap '>
                {filteredBranches.year.map((year, index) => (
                  <button key={index} onClick={() => handleSelectYear(year)} className='bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full capitalize tracking-wide'>{year}</button>
                ))}
              </div>
              <button onClick={() => setSelectedStream(null)} className="flex bg-teal-500 hover:bg-teal-400 text-white font-bold py-2 px-4 rounded gap-2">
                <IoIosArrowRoundBack className='-mt-1 text-3xl font-extrabold' /> Back To Stream
              </button>
            </>
          ) : (
            <>
              <h1 className='text-white text-3xl text-center capitalize font-semibold tracking-wider'>Please select your stream</h1>
              <div className='grid gap-5 py-7 whitespace-nowrap '>
                {filteredBranches && filteredBranches.stream.length > 0 ? (
                  filteredBranches.stream.map((stream, index) => (
                    <button key={index} onClick={() => handleSelectStream(stream)} className='bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full capitalize tracking-wide'>{stream}</button>
                  ))
                ) : (
                  <button onClick={() => setSelectedYear(null)} className='bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full capitalize tracking-wide'>Click here to select year</button>
                )}
              </div>
              <button onClick={toggleView} className="flex bg-teal-500 hover:bg-teal-400 text-white font-bold py-2 px-4 rounded gap-2">
                <IoIosArrowRoundBack className='-mt-1 text-3xl font-extrabold' /> Back To Course
              </button>
            </>
          )}
        </div>
      ) : (<div className='flex justify-center'><Allsubject_notes query={query} selectedStream={selectedStream} selectedYear={selectedYear} setSelectedYear={setSelectedYear} setHideComponent={setHideComponent} /></div>)
      }
    </div>
  </>
  );
};

export default Branch_notes;

