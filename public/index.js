import { createRoot } from 'react-dom/client';
import { App } from '../src/App';
import { Provider } from 'react-redux';
import App from '../src/App';
import store from '../src/store/store';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
