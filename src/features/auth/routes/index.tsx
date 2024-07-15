import { Route } from 'react-router-dom';
import AuthLayout from '../layouts/auth-layout';
import SignIn from '../pages/sign-in';
import SignUp from '../pages/sign-up';

const AuthRoutes: React.FC = () => {
  return (
    <>
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
    </>
  );
};

export default AuthRoutes;
