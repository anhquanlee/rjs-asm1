import cityData from '../../../data/city.json';
import typeData from '../../../data/type.json';
import hotelData from '../../../data/hotel_list.json';

import Navbar from '../../components/includes/Navbar';
import Section from './_components/Section';
import { CardGrid, CityCard, HotelCard, TypeCard } from './_components/CardGrid';
import Footer from '../../components/includes/Footer';

const Home = () => {
  return (
    <>
      <header>
        <Navbar />
        <Section />
      </header>
      <main className='md:pt-16 pt-32'>
        <CardGrid>
          {cityData.map((city) => (
            <CityCard key={city.name} {...city} />
          ))}
        </CardGrid>

        <CardGrid title='Browse by property type'>
          {typeData.map((type) => (
            <TypeCard key={type.name} {...type} />
          ))}
        </CardGrid>

        <CardGrid title='Homes guests love'>
          {hotelData.map((hotel) => (
            <HotelCard key={hotel.name} {...hotel} />
          ))}
        </CardGrid>
      </main>
      <Footer className='mt-12' />
    </>
  );
};

export default Home;
