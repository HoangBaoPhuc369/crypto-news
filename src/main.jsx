import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import ThemeProvider from './theme';
// import 'flag-icon-css/css/flag-icon.min.css';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { persister, store } from './store/index.js';
import { PersistGate } from 'redux-persist/integration/react';
import NavigationScroll from './utils/NavigationScroll.jsx';

const queryClient = new QueryClient();

i18next
    .use(HttpApi)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        supportedLngs: ['en', 'jp'],
        fallbackLng: 'en',
        debug: false,
        // Options for language detector
        detection: {
            order: ['path', 'cookie', 'htmlTag'],
            caches: ['cookie']
        },
        // react: { useSuspense: false },
        backend: {
            loadPath: '/assets/locales/{{lng}}/translation.json'
        }
    });

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persister}>
            <QueryClientProvider client={queryClient}>
                <ThemeProvider>
                    <Router>
                        <NavigationScroll>
                            <App />
                        </NavigationScroll>
                    </Router>
                </ThemeProvider>
            </QueryClientProvider>
        </PersistGate>
    </Provider>
);
