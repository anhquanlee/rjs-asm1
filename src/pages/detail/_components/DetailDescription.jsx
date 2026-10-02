const DetailDescription = ({ title, description }) => {
  return (
    <div>
      <h2 className='text-xl font-bold text-gray-900 mb-3'>{title}</h2>
      <p className='text-sm text-gray-700 leading-relaxed'>{description}</p>
    </div>
  );
};

export default DetailDescription;
