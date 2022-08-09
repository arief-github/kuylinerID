import DrawerInitiator from '../utils/drawer-initiator';

export default class App {
	constructor({ button, drawer, content }) {
		this._button = button;
		this._drawer = drawer;
		this._content = content;

		this._initialAppShell();
	}

	_initialAppShell() {
		DrawerInitiator.init({
			button: this._button,
			drawer: this._drawer,
			content: this._content,
		});
	}
}