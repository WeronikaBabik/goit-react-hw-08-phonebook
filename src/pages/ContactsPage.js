import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { useSelector } from 'react-redux';
import { selectLoggedIn } from 'redux/auth/selectors';

const ContactsPage = () => {
  const isLogged = useSelector(selectLoggedIn);

  return (
    <div>
      {isLogged ? (
        <div>
          <ContactForm />
          <Filter />
          <ContactList />
        </div>
      ) : (
        <p>Zaloguj się</p>
      )}
    </div>
  );
};

export default ContactsPage;
