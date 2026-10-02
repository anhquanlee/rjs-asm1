import { useState, useRef, useEffect } from 'react';
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

const DateRangeField = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [range, setRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  });
  const wrapperRef = useRef(null);

  // Close the date picker when the user clicks outside the date field.
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const displayText = `${format(range.startDate, 'MM/dd/yyyy')} to ${format(range.endDate, 'MM/dd/yyyy')}`;

  return (
    <div
      ref={wrapperRef}
      className='relative flex items-center gap-2 px-4 py-3 flex-1 border-b md:border-b-0 border-gray-200'>
      <FontAwesomeIcon icon={faCalendarDays} className='text-gray-400' />

      <button
        type='button'
        onClick={() => setIsOpen((prev) => !prev)}
        className='w-full text-left outline-none text-sm text-gray-400'>
        {displayText}
      </button>

      {isOpen && (
        <div className='absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white shadow-lg rounded-md overflow-hidden'>
          <DateRange
            ranges={[range]}
            onChange={(item) => setRange(item.selection)}
            moveRangeOnFirstSelection={false}
            rangeColors={['#2563eb']}
          />
        </div>
      )}
    </div>
  );
};

export default DateRangeField;
