const TypeFilter = ({ types, onSelectType, selectedType }) => {
  return (
    <div className='pl-4 py-2 flex flex-col items-start'>
      {types.map((currElem, index) => {
        const truncatedElem = currElem.length > 14 ? currElem.slice(0, 14) + '...' : currElem;
        return (
          <button
            key={index}
            className={`${selectedType.toLowerCase() === currElem.toLowerCase() ? 'underline underline-offset-4 text-[#2975f0]' : 'coool-link'}`} 
            onClick={() => onSelectType(currElem)}
          >
            {truncatedElem.charAt(0).toUpperCase() + truncatedElem.slice(1)}
          </button>
        );
      })}
    </div>
  );
};

export default TypeFilter;
