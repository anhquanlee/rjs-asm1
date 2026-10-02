import SectionForm from './SectionForm';
import Container from '../../../components/layout/Container';
import Button from '../../../components/UI/Button';

const Section = () => {
  return (
    <section className='bg-blue-900'>
      <Container>
        <div className='pm-8'>
          <h1 className='text-white text-3xl font-bold'>A lifetime of discounts? It&apos;s Genius.</h1>
          <p className='text-white mt-2 text-sm'>
            Get rewarded for your travels – unlock instant savings of 10% or more with a free account
          </p>

          <Button type='submit' bgColor='blue' className='text-sm px-4 py-2 mt-4'>
            Sign in / Register
          </Button>
        </div>

        <div className='relative z-999 translate-y-1/4 md:translate-y-1/2'>
          <SectionForm />
        </div>
      </Container>
    </section>
  );
};

export default Section;
