import { useAuth } from 'hooks/useAuth';

const PrivateRoute = ({ children }) => {
  const { isAuth } = useAuth();
  if (!isAuth) {
    return children;
  }
};

export default PrivateRoute;
