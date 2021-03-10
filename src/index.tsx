import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyling from './GlobalStyling';
import reportWebVitals from './reportWebVitals';
import storeInit from './store';
import { Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react';

const { store, persistor } = storeInit();

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <App />
                <GlobalStyling />
            </PersistGate>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
