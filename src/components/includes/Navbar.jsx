import { useState } from 'react';
import { useNavigate } from 'react-router';
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

  // Keep exactly one navigation item active after each click.
  const handleNavClick = (clickedType) => {
    setNavItems((prevItems) =>
      prevItems.map((item) => ({
        ...item,
        active: item.type === clickedType,
      })),
    );
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <div className='bg-blue-900 pb-8'>
      <Container>
        <div className='flex items-center justify-between py-4'>
          <span
            className='text-white text-xl font-semibold cursor-pointer'
            onClick={handleLogoClick}>
            Booking Website
          </span>

          <div className='flex items-center gap-3'>
            <Button className='px-4 py-1.5 text-sm'>Register</Button>
            <Button className='px-4 py-1.5 text-sm'>Login</Button>
          </div>
        </div>

        <nav className='flex items-center gap-4 py-2'>
          {navItems.map(({ type, active, icon }) => (
            <button
              type='button'
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
