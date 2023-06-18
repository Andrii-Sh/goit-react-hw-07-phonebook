import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { App } from 'components/App/App';
// import { PersistGate } from 'redux-persist/integration/react';
import { store } from './redux/store';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    {/* <PersistGate loading={null} persistor={persistor}> */}
    <React.StrictMode>
      <App />
    </React.StrictMode>
    {/* </PersistGate> */}
  </Provider>
);
