import { useState } from 'react';
import Container from '../layout/Container';
import Button from '../UI/Button';

const FooterSubscribe = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ email });
  };

  return (
    <div className='bg-blue-900'>
      <Container className='py-12 text-center'>
        <h2 className='text-white text-3xl font-bold'>Save time, save money!</h2>
        <p className='text-white mt-2'>Sign up and we&apos;ll send the best deals to you</p>

        <form onSubmit={handleSubmit} className='flex justify-center gap-2 mt-6 max-w-md mx-auto'>
          <input
            type='email'
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder='Your Email'
            className='flex-1 bg-white rounded-sm px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 outline-none'
          />
          <Button type='submit' bgColor='blue' className='px-6 py-2.5 text-sm'>
            Subscribe
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default FooterSubscribe;
