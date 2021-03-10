import { createStore, applyMiddleware, combineReducers } from 'redux';
import { configureApiData, reducer, ApiDataState, afterRehydrate } from 'react-api-data';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { endpointConfig } from './endpointConfig';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const enhancer = composeWithDevTools(applyMiddleware(thunk));

export type State = {
    apiData: ApiDataState;
};

const storeInit = () => {
    const persistConfig = {
        key: 'root',
        storage,
        blacklist: ['apiData'],
    };

    const apiDataPersistConfig = {
        key: 'apiData',
        storage,
        blacklist: ['endpointConfig', 'globalConfig'],
    };

    const persistedReducer = persistReducer(
        persistConfig,
        combineReducers<any, any>({ apiData: persistReducer(apiDataPersistConfig, reducer) })
    );

    const store = createStore(persistedReducer, enhancer);

    const persistor = persistStore(store, {}, () => store.dispatch(afterRehydrate()));
    store.dispatch(configureApiData({}, endpointConfig));
    return { store, persistor };
};

export default storeInit;
