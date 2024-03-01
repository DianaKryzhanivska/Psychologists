import HomePage from 'pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Psychologists from 'pages/Psychologists';
import Favorites from 'pages/Favorites';
import PrivateRoute from 'routes/PrivateRoute';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="psychologists" element={<Psychologists />} />
          <Route
            path="favorites"
            element={
              <PrivateRoute>
                <Favorites />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </>
  );
};
