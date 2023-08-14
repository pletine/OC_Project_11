import '../styles/Footer.scss';
import logo from '../assets/logo_footer.svg';

function Footer() {
  return (
    <footer>
      <img src={logo} alt="Logo du site" />
      <p>©️ 2020 Kasa. All rights reserverd</p>
    </footer>
  );
}

export default Footer;
