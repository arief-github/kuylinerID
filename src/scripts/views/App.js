import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';
import DarkMode from '../utils/dark-mode';

export default class App {
	constructor({ button, drawer, content, toggle, currentTheme }) {
		this._button = button;
		this._drawer = drawer;
		this._content = content;
		this._toggle = toggle;
		this._currenTheme = currentTheme;

		this._initialAppShell();
		this._initialDarkMode();
	}

	_initialAppShell() {
		DrawerInitiator.init({
			button: this._button,
			drawer: this._drawer,
			content: this._content,
		});
	}

	_initialDarkMode() {
		DarkMode.init({
			toggle: this._toggle,
			currentTheme: this._currenTheme,
		});
	}

	async renderPage() {
		const url = UrlParser.parseActiveUrlWithCombiner();
		const page = routes[url];
		this._content.innerHTML = await page.render();
		await page.afterRender();
	}
}