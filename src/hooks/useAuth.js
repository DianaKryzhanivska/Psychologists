import { useSelector } from 'react-redux';

export const useAuth = () => {
  const { email, id, token, name } = useSelector(state => state.auth);

  return {
    isAuth: !email,
    email,
    token,
    id,
    name,
  };
};
