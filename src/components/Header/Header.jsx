import { NavLink } from 'react-router-dom';
import css from './Header.module.css';

const Header = () => {
  return (
    <header className={css.header}>
     <div className='container'>
     <NavLink className={css.navLink} to="/">
        Home
      </NavLink>
      <NavLink className={css.navLink} to="/movies">
        Movies
      </NavLink>
     </div>
    </header>
  );
};

export default Header;
