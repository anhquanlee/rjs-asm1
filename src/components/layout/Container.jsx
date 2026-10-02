const Container = ({ children, className = '', ...props }) => {
  return (
    <div className={`max-w-5xl mx-auto px-6 ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Container;
