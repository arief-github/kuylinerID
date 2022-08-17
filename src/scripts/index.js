import '../styles/style.css';
import '../styles/responsive.css';
import './components/navbar';
import './components/hero-image';
import './components/footer-app';
import App from './views/App';
import swRegister from './utils/sw-register';

const app = new App({
	button: document.querySelector('.menu'),
	drawer: document.querySelector('.nav-list'),
	content: document.querySelector('#main-content'),
})

// render page berdasarkan route url/ konsep SPA
window.addEventListener('hashchange', () => {
	app.renderPage();
});

// render assets per page
window.addEventListener('DOMContentLoaded', () => {
  app.renderPage();
  swRegister();
});
