import { Link } from 'react-router';
import Button from '../../../components/UI/Button';

const SearchResultCard = ({
  name,
  distance,
  tag,
  type,
  description,
  free_cancel,
  price,
  rate,
  rate_text,
  image_url,
}) => {
  return (
    <div
      className='flex flex-col gap-4
        md:grid md:grid-cols-2 md:gap-4
        lg:flex lg:flex-row lg:gap-4
        bg-white border border-gray-200 rounded-md p-3 shadow-sm'>
      <img src={image_url} alt={name} className='w-full h-62 object-cover rounded-xs shrink-0 lg:w-56' />

      <div className='flex flex-col gap-4 lg:flex-1'>
        <Link to='/detail' className='text-blue-700 font-semibold text-2xl hover:underline w-fit'>
          {name}
        </Link>
        <p className='text-sm text-gray-500 -mt-1'>{distance} from center</p>

        {tag && <span className='bg-green-700 text-white text-sm px-2 py-1 rounded-md w-fit'>{tag}</span>}

        <p className='font-semibold text-gray-900'>{description}</p>
        <p className='text-sm text-gray-600 -mt-2'>{type}</p>

        {free_cancel && (
          <>
            <p className='text-green-700 font-medium text-sm'>Free cancellation</p>
            <p className='text-green-700 text-sm'>You can cancel later, so lock in this great price today!</p>
          </>
        )}
      </div>

      <div className='flex flex-row items-center justify-between gap-3 w-full md:col-span-2 lg:flex-col lg:items-end lg:justify-between lg:w-46 lg:shrink-0 lg:gap-0'>
        <div className='flex items-center gap-2 lg:justify-between lg:w-full'>
          <span className='text-gray-900 text-lg font-semibold'>{rate_text}</span>
          <span className='bg-blue-900 text-white text-sm font-semibold px-2 py-1 rounded-sm'>{rate}</span>
        </div>

        <div className='flex items-center gap-4 lg:flex-col lg:items-end lg:gap-0 lg:w-full'>
          <div className='text-right lg:w-full'>
            <p className='text-2xl font-md text-gray-900'>${price}</p>
            <p className='text-sm text-gray-400'>Includes taxes and fees</p>
          </div>

          <Button bgColor='blue' className='text-md px-4 py-2 whitespace-nowrap lg:w-full lg:mt-2'>
            See availability
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchResultCard;
