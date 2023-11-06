import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import expireReducer from 'redux-persist-expire';
import AuthReducer from '../slices/auth';
import LocalReducer from '../slices/local';
// ==============================|| COMBINE REDUCER ||============================== //

const reducer = combineReducers({
    auth: AuthReducer,
    local: persistReducer(
        {
            key: 'local',
            storage,
            keyPrefix: 'cryptoNews-'
        },
        LocalReducer
    )
});

export default reducer;
