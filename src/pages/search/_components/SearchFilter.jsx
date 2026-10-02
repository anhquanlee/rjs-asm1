import { useState } from 'react';
import Button from '../../../components/UI/Button';

const SearchFilter = () => {
  const [searchValues, setSearchValues] = useState({
    destination: '',
    checkInDate: '',
    minPrice: '',
    maxPrice: '',
    adult: 1,
    children: 0,
    room: 1,
  });

  const handleChange = (value, identifier) => {
    setSearchValues((prevValues) => ({
      ...prevValues,
      [identifier]: value,
    }));
  };

  // Keep the current filter values available for later search/filter logic.
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(searchValues);
  };

  return (
    <form onSubmit={handleSubmit} className='bg-amber-400 rounded-md p-3 w-full md:w-72 shrink-0'>
      <h2 className='text-gray-700 font-bold text-lg mb-4'>Search</h2>

      <FormInput
        label='Destination'
        inputValue={searchValues.destination}
        onChange={(event) => handleChange(event.target.value, 'destination')}
      />

      <FormInput
        label='Check-in Date'
        inputValue={searchValues.checkInDate}
        onChange={(event) => handleChange(event.target.value, 'checkInDate')}
        placeholder='06/24/2022 to 06/24/2022'
      />

      <div className='mb-5'>
        <h3 className='text-gray-900 font-semibold mb-2'>Options</h3>

        <MiniFormInput
          inputValue={searchValues.minPrice}
          onChange={(event) => handleChange(event.target.value, 'minPrice')}>
          Min price <span className='text-xs'>per night</span>
        </MiniFormInput>

        <MiniFormInput
          inputValue={searchValues.maxPrice}
          onChange={(event) => handleChange(event.target.value, 'maxPrice')}>
          Max price <span className='text-xs'>per night</span>
        </MiniFormInput>

        <MiniFormInput
          inputValue={searchValues.adult}
          onChange={(event) => handleChange(event.target.value, 'adult')}>
          Adult
        </MiniFormInput>

        <MiniFormInput
          inputValue={searchValues.children}
          onChange={(event) => handleChange(event.target.value, 'children')}>
          Children
        </MiniFormInput>

        <MiniFormInput
          inputValue={searchValues.room}
          onChange={(event) => handleChange(event.target.value, 'room')}>
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
