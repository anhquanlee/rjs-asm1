import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Button from '../../../components/UI/Button';

const DetailHero = ({ name, address, distance, price }) => {
  return (
    <div className='flex items-start justify-between gap-4'>
      <div>
        <h1 className='text-2xl font-bold text-gray-900'>{name}</h1>
        <p className='flex items-center gap-1 text-xs text-gray-500 mt-1'>
          <FontAwesomeIcon icon={faLocationDot} />
          {address}
        </p>
        <p className='text-blue-700 text-sm mt-2'>{distance}</p>
        <p className='text-green-700 text-sm font-medium mt-1'>{price}</p>
      </div>

      <Button bgColor='blue' className='text-sm px-4 py-2 shrink-0'>
        Reserve or Book Now!
      </Button>
    </div>
  );
};

export default DetailHero;
