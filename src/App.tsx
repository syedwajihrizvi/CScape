import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { RouterProvider } from 'react-router-dom';
import router from './routes/routes';
import GlobalProvider from './providers/global-provider';

const darkTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

const queryClient = new QueryClient()

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      <QueryClientProvider client={queryClient}>
        <GlobalProvider>
          <RouterProvider router={router}/>
        </GlobalProvider>
        <ReactQueryDevtools initialIsOpen={true}/>
      </QueryClientProvider>
    </ThemeProvider>
  )
}

export default App
