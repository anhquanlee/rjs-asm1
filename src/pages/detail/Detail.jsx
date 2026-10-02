import detailData from '../../../data/detail.json';
import Navbar from '../../components/includes/Navbar';
import Container from '../../components/layout/Container';
import DetailBookingCard from './_components/DetailBookingCard';
import DetailDescription from './_components/DetailDescription';
import DetailGallery from './_components/DetailGallery';
import DetailHero from './_components/DetailHero';
import Footer from '../../components/includes/Footer';

const Detail = () => {
  const { name, address, distance, price, photos, title, description, nine_night_price } = detailData;

  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <Container className='py-8'>
          <DetailHero name={name} address={address} distance={distance} price={price} />

          <DetailGallery photos={photos} />

          <div className='flex flex-col md:flex-row gap-6 mt-8'>
            <div className='flex-1'>
              <DetailDescription title={title} description={description} />
            </div>

            <div className='w-full md:w-72 shrink-0'>
              <DetailBookingCard nine_night_price={nine_night_price} />
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default Detail;
