import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logOut } from 'redux/auth/actions';
import css from './Navigation.module.css';
import { selectLoggedIn } from 'redux/auth/selectors';

export const Navigation = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logOut());
  };
  const isLoggedIn = useSelector(selectLoggedIn);
  const navLink = ({ isActive }) => (isActive ? css['active'] : css['navLink']);
  return (
    <header className={css.header}>
      <nav className={css.navigation}>
        <NavLink to="/" className={navLink}>
          Home
        </NavLink>
        {isLoggedIn ? (
          <div className={css.mainNav}>
            <NavLink to="/contacts" className={navLink}>
              Contacts
            </NavLink>
            <button onClick={handleLogout}>
              Log out
            </button>
          </div>
        ) : (
          <div>
            <NavLink to="/register" className={navLink}>
              Register
            </NavLink>
            <NavLink to="/login" className={navLink}>
              Login
            </NavLink>
          </div>
        )}
      </nav>
    </header>
  );
};
