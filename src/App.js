import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap";
import "./App.css";
import Home from "./pages/home/home";
import Shipment from "./pages/shipment/shipment-parent";
import Header from "./components/header";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import {TRANSLATIONS_AR} from './locales/ar/translation.js';
import {TRANSLATIONS_EN} from './locales/en/translation.js';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useTranslation } from 'react-i18next';


i18next
.use(LanguageDetector)
.use(initReactI18next)
.init({
  resources: {
    en: {
      translation: TRANSLATIONS_EN
    },
    ar: {
      translation: TRANSLATIONS_AR
    }
  },
  interpolation: { escapeValue: false },
});

function App() {
  const { t } = useTranslation();
  return (
    <div className={t('class')}>
      <I18nextProvider i18n={i18next}>
        <Header />
        <Router>
          <Route exact path="/" component={Home}></Route>
          <Route path="/tracking-shipment/" component={Shipment}></Route>
        </Router>
      </I18nextProvider>
    </div>
  );
}

export default App;
