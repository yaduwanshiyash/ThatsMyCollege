import React from 'react'

const StateFilter = ({stateType, activeState, setActiveState}) => {
    // console.log(stateName)
  return (
    <>
      <div className='pl-4 py-2 flex flex-col items-start'>
      {stateType?.map((currElem, index) => {
        return (
          <button
            key={index}
            className={`${activeState.toLowerCase() === currElem.toLowerCase() ? 'underline underline-offset-4 text-[#2975f0]' : 'coool-link'}`} 
            onClick={() => setActiveState(currElem)}
          >
            {currElem}
          </button>
        );
      })}
    </div>
    </>
  )
}

export default StateFilter
