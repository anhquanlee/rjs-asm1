import Container from '../../../components/layout/Container';

const CardGrid = ({ title, children }) => {
  return (
    <Container className='py-6'>
      {title && <h2 className='text-xl font-bold text-gray-900 mb-4'>{title}</h2>}
      <div
        className='flex gap-4 overflow-x-auto md:flex-wrap md:overflow-visible
          scrollbar-none [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden'>
        {children}
      </div>
    </Container>
  );
};

const CityCard = ({ name, subText, image }) => {
  return (
    <div className='relative flex-1 min-w-55 h-62 rounded-md overflow-hidden shrink-0'>
      <img src={image} alt={name} className='w-full h-full object-cover' />
      <div className='absolute inset-0 bg-linear-to-t from-black/70 to-transparent' />
      <div className='absolute bottom-3 left-3 text-white'>
        <p className='text-4xl font-semibold'>{name}</p>
        <p className='text-lg font-medium'>{subText}</p>
      </div>
    </div>
  );
};

const HotelCard = ({ name, city, price, rate, type, image_url }) => {
  return (
    <div className='flex-1 min-w-55 shrink-0'>
      <img src={image_url} alt={name} className='w-full h-40 object-cover rounded-md mb-2' />
      <p className='text-purple-800 font-semibold underline'>{name}</p>
      <p className='text-sm text-gray-500'>{city}</p>
      <p className='text-sm text-gray-900 mt-1 font-semibold'>Starting from ${price}</p>
      <div className='flex items-center gap-2 mt-1'>
        <span className='bg-blue-900 text-white text-xs font-semibold px-1.5 py-0.5 rounded-sm'>{rate}</span>
        <span className='text-sm text-gray-700 font-medium'>{type}</span>
      </div>
    </div>
  );
};

const TypeCard = ({ name, count, image }) => {
  return (
    <div className='flex-1 min-w-37.5 shrink-0'>
      <img src={image} alt={name} className='w-full h-32 object-cover rounded-md mb-2' />
      <p className='font-semibold text-gray-900'>{name}</p>
      <p className='text-sm text-stone-500'>{count} hotels</p>
    </div>
  );
};

export { CardGrid, CityCard, HotelCard, TypeCard };
