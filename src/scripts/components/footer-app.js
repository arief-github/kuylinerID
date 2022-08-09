class FooterApp extends HTMLElement {
	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = ` 
			 <footer>
		        <ul>
		          <li><span>Copyright © 2022 - KuyLiner</span></li>
		          <li><span>Made with <i title="love" class="fa fa-heart"></i> by Arief Kurniawan</span></li>
		        </ul>
		      </footer>
		`
	}
}

customElements.define('footer-app', FooterApp);