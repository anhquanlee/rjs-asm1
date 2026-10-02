const DetailGallery = ({ photos }) => {
  const [row1, row2] = [photos.slice(0, 3), photos.slice(3, 6)];

  return (
    <div className='mt-6 space-y-2'>
      <div className='grid grid-cols-3 gap-2'>
        {row1.map((photo) => (
          <img key={photo} src={photo} alt='Hotel' className='w-full h-64 object-cover rounded-md' />
        ))}
      </div>
      <div className='grid grid-cols-3 gap-2'>
        {row2.map((photo) => (
          <img key={photo} src={photo} alt='Hotel' className='w-full h-48 object-cover rounded-md' />
        ))}
      </div>
    </div>
  );
};

export default DetailGallery;
