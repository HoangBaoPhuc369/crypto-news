import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './store/index';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import ThemeProvider from './theme';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
    // <Provider store={store}>
    // </Provider>
    <QueryClientProvider client={queryClient}>
        <ThemeProvider>
            <Router>
                <App />
            </Router>
        </ThemeProvider>
    </QueryClientProvider>
);
