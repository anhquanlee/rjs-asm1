import FooterLinks from './FooterLinks';
import FooterSubscribe from './FooterSubscribe';

const Footer = ({ className }) => {
  return (
    <footer className={className}>
      <FooterSubscribe />
      <FooterLinks />
    </footer>
  );
};

export default Footer;
