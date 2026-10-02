import { useState } from 'react';
import { useNavigate } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faCalendarDays, faUser } from '@fortawesome/free-solid-svg-icons';
import Button from '../../../components/UI/Button';
import DaterangeInput from './DaterangeInput';

const SectionForm = () => {
  const navigate = useNavigate();

  const [destination, setDestination] = useState('');
  const [guests, setGuests] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/search');

    // console.log({ destination, dateRange, guests });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='bg-white border-3 border-amber-400 rounded-md shadow-lg flex flex-col md:flex-row items-stretch px-8'>
      <FormInput
        icon={faBed}
        inputValue={destination}
        inputChangeHandler={(e) => setDestination(e.target.value)}
        placeholder='Where are you going?'
      />

      <DaterangeInput />

      <FormInput
        icon={faUser}
        inputValue={guests}
        inputChangeHandler={(e) => setGuests(e.target.value)}
        placeholder='1 adult · 0 children · 1 room'
      />

      <Button type='submit' bgColor='blue' className='px-8 py-3 m-2'>
        Search
      </Button>
    </form>
  );
};

const FormInput = ({ icon, inputValue, inputChangeHandler, placeholder }) => {
  return (
    <div className='flex items-center gap-2 px-4 py-3 flex-1 border-b md:border-b-0 border-gray-200'>
      <FontAwesomeIcon icon={icon} className='text-gray-400' />
      <input
        type='text'
        value={inputValue}
        onChange={inputChangeHandler}
        placeholder={placeholder}
        className='w-full outline-none text-sm text-gray-700 placeholder-gray-400'
      />
    </div>
  );
};

export default SectionForm;
