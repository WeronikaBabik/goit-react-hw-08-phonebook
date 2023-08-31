import { lazy, useEffect } from 'react';
import { Layout } from './Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/actions';
import { RestrictRoute } from 'routes/RestrictRoute';
import RegisterPage from '../pages/RegisterPage';
import LoginPage from '../pages/LoginPage';
import ContactsPage from '../pages/ContactsPage';
import { PrivateRoute } from 'routes/PrivateRoute';

const Home = lazy(() => import('../pages/Home/HomePage'));

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
        <Route
          path="/register"
          element={
            <RestrictRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={<RestrictRoute redirectTo="/" component={<LoginPage />} />}
        />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};
