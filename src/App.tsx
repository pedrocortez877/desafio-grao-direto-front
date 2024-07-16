import Router from './router';
import GlobalStyle from '@global/styles/globalStyle';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '@global/themes/index';
import { ToastContainer } from 'react-toastify';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useAuthStore } from '@features/auth/stores/useAuthStore';
import { useEffect } from 'react';

const queryClient = new QueryClient();

const App: React.FC = () => {
  const initializeSession = useAuthStore((state) => state.initializeSession);

  useEffect(() => {
    initializeSession();
  }, [initializeSession]);

  return (
    <ThemeProvider theme={defaultTheme}>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <ToastContainer
          bodyStyle={{
            fontFamily: 'Nunito, sans-serif',
          }}
        />
        <Router />
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
