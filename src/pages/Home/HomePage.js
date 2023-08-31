import { useSelector } from 'react-redux';
import { selectLoggedIn } from 'redux/auth/selectors';
import css from './HomePage.module.css';

const HomePage = () => {
  const isLogged = useSelector(selectLoggedIn);
  return (
    <main className={css.main}>
      <div className={css.logged}>
        {isLogged ? 'You are logged in' : 'You are logged out'}
      </div>
      <h1 className={css.title}>Phonebook</h1>
      <h2 className={css.description}>Home page</h2>
    </main>
  );
};

export default HomePage;
