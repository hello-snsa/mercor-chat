import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import { I18nContext } from 'react-i18next';

import './index.css'
import i18n from './i18n/i18n.js';
import ErrorBoundary from './utils/ErrorBoundary.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <I18nContext.Provider value={i18n}>
      <BrowserRouter >
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
      </BrowserRouter>
    </I18nContext.Provider>
)
