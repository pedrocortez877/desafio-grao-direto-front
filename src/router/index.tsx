import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@pages/home';
import Restaurant from '@pages/restaurant';
import SignIn from '@pages/signin';
import SignUp from '@pages/signup';
import AuthLayout from '@layouts/AuthLayout';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/entrar'
          element={
            <AuthLayout>
              <SignIn />
            </AuthLayout>
          }
        />
        <Route
          path='/cadastro'
          element={
            <AuthLayout>
              <SignUp />
            </AuthLayout>
          }
        />
        <Route path='/restaurant/:id' element={<Restaurant />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
