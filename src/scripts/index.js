import '../styles/style.css';
import '../styles/responsive.css';
import './components/navbar';
import './components/hero-image';
import './components/footer-app';
import App from './views/App';

const app = new App({
	button: document.querySelector('.menu'),
	drawer: document.querySelector('.nav-list'),
	content: document.querySelector('#main-content'),
})

window.addEventListener('DOMContentLoaded', () => {
  app.renderPage();
});
