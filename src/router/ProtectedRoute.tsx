import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStore } from '@features/auth/stores/useAuthStore';

const ProtectedRoute: React.FC = () => {
  const { token } = useAuthStore();

  if (!token) {
    return <Navigate to='/entrar' />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
