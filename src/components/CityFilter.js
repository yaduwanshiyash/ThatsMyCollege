import React from 'react';

const CityFilter = ({ cities, activeCity, setActiveCity }) => {
  return (
    <>
      <div className='pl-4 py-2 flex flex-col items-start'>
        {cities && cities.length > 0 ? (
          cities.map((currElem, index) => (
            <button
              key={index}
              className={`${
                activeCity.toLowerCase() === currElem.toLowerCase()
                  ? 'underline underline-offset-4 text-[#2975f0]'
                  : 'coool-link'
              }`}
              onClick={() => setActiveCity(currElem)}
            >
              {currElem}
            </button>
          ))
        ) : (
          <span>First Select a State</span>
        )}
      </div>
    </>
  );
};

export default CityFilter;
