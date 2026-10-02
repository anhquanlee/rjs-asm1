import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBed,
  faPlane,
  faCar,
  faTaxi,
  faBuilding,
} from '@fortawesome/free-solid-svg-icons';
import navBarData from '../../../data/navBar.json';
import Container from '../layout/Container';
import Button from '../UI/Button';
import { useNavigate } from 'react-router';

const iconMap = {
  'fa-bed': faBed,
  'fa-plane': faPlane,
  'fa-car': faCar,
  'fa-taxi': faTaxi,
  'fa-building': faBuilding,
};

const Navbar = () => {
  const [navItems, setNavItems] = useState(navBarData);
  const navigate = useNavigate();

  const handleNavClick = (clickedType) => {
    setNavItems((prevItems) =>
      prevItems.map((item) => ({
        ...item,
        active: item.type === clickedType,
      })),
    );
  };

  const returnHome = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div className='bg-blue-900 pb-8'>
      <Container>
        <div className='flex items-center justify-between py-4'>
          <span
            className='text-white text-xl font-semibold cursor-pointer'
            onClick={returnHome}>
            Booking Website
          </span>

          <div className='flex items-center gap-3'>
            <Button type='submit' className='px-4 py-1.5 text-sm'>
              Register
            </Button>
            <Button type='submit' className='px-4 py-1.5 text-sm'>
              Login
            </Button>
          </div>
        </div>

        <nav className='flex items-center gap-4 py-2'>
          {navItems.map(({ type, active, icon }) => (
            <button
              key={type}
              onClick={() => handleNavClick(type)}
              className={`flex items-center gap-2 text-white text-sm border rounded-full px-3 py-1.5 transition-colors
                ${active ? 'border-white' : 'border-blue-900 hover:opacity-80 active:opacity-60'}`}>
              <FontAwesomeIcon icon={iconMap[icon]} />
              <span>{type}</span>
            </button>
          ))}
        </nav>
      </Container>
    </div>
  );
};

export default Navbar;
