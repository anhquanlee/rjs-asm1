import { useState } from 'react';
import Button from '../../../components/UI/Button';

const SearchFilter = () => {
  const [destination, setDestination] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [adult, setAdult] = useState(1);
  const [children, setChildren] = useState(0);
  const [room, setRoom] = useState(1);

  // Keep the current filter values available for later search/filter logic.
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ destination, checkInDate, minPrice, maxPrice, adult, children, room });
  };

  return (
    <form onSubmit={handleSubmit} className='bg-amber-400 rounded-md p-3 w-full md:w-72 shrink-0'>
      <h2 className='text-gray-700 font-bold text-lg mb-4'>Search</h2>

      <FormInput
        label='Destination'
        inputValue={destination}
        onChange={(event) => setDestination(event.target.value)}
      />

      <FormInput
        label='Check-in Date'
        inputValue={checkInDate}
        onChange={(event) => setCheckInDate(event.target.value)}
        placeholder='06/24/2022 to 06/24/2022'
      />

      <div className='mb-5'>
        <h3 className='text-gray-900 font-semibold mb-2'>Options</h3>

        <MiniFormInput inputValue={minPrice} onChange={(event) => setMinPrice(event.target.value)}>
          Min price <span className='text-xs'>per night</span>
        </MiniFormInput>

        <MiniFormInput inputValue={maxPrice} onChange={(event) => setMaxPrice(event.target.value)}>
          Max price <span className='text-xs'>per night</span>
        </MiniFormInput>

        <MiniFormInput inputValue={adult} onChange={(event) => setAdult(event.target.value)}>
          Adult
        </MiniFormInput>

        <MiniFormInput inputValue={children} onChange={(event) => setChildren(event.target.value)}>
          Children
        </MiniFormInput>

        <MiniFormInput inputValue={room} onChange={(event) => setRoom(event.target.value)}>
          Room
        </MiniFormInput>
      </div>

      <Button type='submit' bgColor='blue' className='w-full py-2.5'>
        Search
      </Button>
    </form>
  );
};

const FormInput = ({ label, inputValue, onChange, placeholder }) => {
  return (
    <div>
      <label className='block text-sm font-medium text-gray-900 mb-1'>{label}</label>
      <input
        type='text'
        value={inputValue}
        onChange={onChange}
        className='bg-white w-full rounded-sm px-3 py-2 text-sm outline-none mb-4 placeholder-gray-400'
        placeholder={placeholder}
      />
    </div>
  );
};

const MiniFormInput = ({ children, inputValue, onChange }) => {
  return (
    <div className='flex items-center justify-between mb-2 pl-3'>
      <label className='text-sm text-gray-900'>{children}</label>
      <input
        type='number'
        value={inputValue}
        onChange={onChange}
        className='bg-white w-16 rounded-sm px-2 py-1 text-sm outline-none'
      />
    </div>
  );
};

export default SearchFilter;
