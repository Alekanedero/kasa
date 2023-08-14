import '../style/header.css';
import logokasa from '../assets/logo.png';

import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <img className="logokasa" src={logokasa} alt="Logo Kasa" />
      <nav className="nav">
        <NavLink to="/">Accueil</NavLink>
        <NavLink activeClassName="is-active" to="/about" exact>
          A propos
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;