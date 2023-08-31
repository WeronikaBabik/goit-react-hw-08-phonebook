import { useAuthUser } from '../hooks/useAuthUser';
import { Navigate } from 'react-router-dom';

export const RestrictRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLogged } = useAuthUser();

  return isLogged ? <Navigate to={redirectTo} /> : Component;
};
