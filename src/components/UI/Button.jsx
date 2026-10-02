const Button = ({ children, className = '', bgColor, type = 'button' }) => {
  const color =
    bgColor === 'blue'
      ? 'bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white'
      : 'bg-white hover:bg-gray-300 active:bg-gray-400 text-blue-900';

  return (
    <button type={type} className={`${color} font-medium rounded-sm transition-colors ${className}`}>
      {children}
    </button>
  );
};

export default Button;
