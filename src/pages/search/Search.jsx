import searchData from '../../../data/search.json';
import SearchFilter from './_components/SearchFilter';
import SearchResultCard from './_components/SearchResultCard';
import Container from '../../components/layout/Container';

const Search = () => {
  return (
    <>
      <Container className='py-8 max-w-7xl'>
        <div className='flex flex-col md:flex-row gap-6 items-start'>
          <SearchFilter />

          <div className='flex-1 flex flex-col gap-4 w-full'>
            {searchData.map((item) => (
              <SearchResultCard key={item.name} {...item} />
            ))}
          </div>
        </div>
      </Container>
    </>
  );
};

export default Search;
