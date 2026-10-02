import Button from '../../../components/UI/Button';

const DetailBookingCard = ({ nine_night_price }) => {
  return (
    <div className='bg-blue-50 border border-blue-100 rounded-md p-4'>
      <h3 className='font-semibold text-gray-900 mb-2'>Perfect for a 9-night stay!</h3>
      <p className='text-sm text-gray-600 mb-4'>
        Located in the real heart of Krakow, this property has an excellent location score of 9.8!
      </p>

      <p className='text-lg'>
        <span className='font-bold text-gray-900'>${nine_night_price}</span>{' '}
        <span className='text-sm text-gray-500'>(9 nights)</span>
      </p>

      <Button bgColor='blue' className='w-full mt-3 text-sm py-2'>
        Reserve or Book Now!
      </Button>
    </div>
  );
};

export default DetailBookingCard;
