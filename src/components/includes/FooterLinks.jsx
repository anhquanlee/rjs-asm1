import Container from '../layout/Container';
import footerData from '../../../data/footer.json';

const FooterLinks = () => {
  return (
    <div className='bg-white'>
      <Container className='py-12'>
        <div className='flex flex-wrap gap-8'>
          {footerData.map(({ col_number, col_values }) => (
            <ul key={col_number} className='flex-1 min-w-40 space-y-2'>
              {col_values.map((value) => (
                <li key={value}>
                  <a className='text-blue-700 hover:underline text-sm'>{value}</a>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default FooterLinks;
