import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppRouter from './routes/AppRouter.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./global.css"
import { Provider } from 'react-redux';
import { store } from './store/store.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Provider store={store}>
    <AppRouter/>
    </Provider>
  </StrictMode>,
)
