import Router from './router';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '@themes/index';
import GlobalStyle from '@global/globalStyle';
import { ToastContainer } from 'react-toastify';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const App: React.FC = () => {
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
