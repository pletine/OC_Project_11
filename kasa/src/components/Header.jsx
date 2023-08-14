import { Link } from 'react-router-dom';
import '../styles/Header.scss';
import logo from '../assets/logo.svg';

function Header() {
  return (
    <header>
      <img src={logo} alt="Logo du site" />

      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/about">A propos</Link>
      </nav>
    </header>
  );
}

export default Header;
