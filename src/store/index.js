import { configureStore } from '@reduxjs/toolkit';
// project imports
import { persistStore } from 'redux-persist';
import rootReducer from './reducer/reducer';

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
            immutableCheck: false
        })
});

const persister = persistStore(store);

export { store, persister };
