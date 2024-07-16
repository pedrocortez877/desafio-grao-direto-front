import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import RestaurantsList from '@features/restaurant/pages/RestaurantsList';
import AuthLayout from '@features/auth/layouts/auth-layout';
import SignIn from '@features/auth/pages/sign-in';
import SignUp from '@features/auth/pages/sign-up';
import MainLayout from '@global/layouts/MainLayout';
import RestaurantDetails from '@features/restaurant/pages/RestaurantDetails';
import Favorites from '@features/favorites/pages/Favorites';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route element={<MainLayout />}>
            <Route path='/' element={<RestaurantsList />} />
            <Route path='/restaurantes/:id' element={<RestaurantDetails />} />
            <Route path='/favoritos' element={<Favorites />} />
          </Route>
        </Route>

        {/* AUTH ROUTES */}
        <Route
          path='/entrar'
          element={
            <AuthLayout title='Acesse seus restaurantes prediletos'>
              <SignIn />
            </AuthLayout>
          }
        />
        <Route
          path='/cadastro'
          element={
            <AuthLayout title='Cadastre-se'>
              <SignUp />
            </AuthLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
