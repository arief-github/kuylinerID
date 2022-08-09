class NavBar extends HTMLElement {
	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = ` 
			<nav class="nav">
		        <div class="menu-hp">
		            <div>
		            <a href="/" class="logo-font">
		                Kuyliner.ID
		            </a>
		            </div>
		            <div class="menu-container">
		            <button aria-label="button menu dropdown on mobile" class="menu" type="button">
		                <span class="fa fa-caret-down"></span>
		            </button>
		            </div>
		        </div>

		        <ul class="nav-list">
		            <li class="nav-item"><a href="#/home">Home</a></li>
		            <li class="nav-item"><a href="#/favorite">FavoriTe</a></li>
		            <li class="nav-item">
		            <a href="https://github.com/arief-github" target="_blank" rel="noopener noreferrer"
		                >AbouT Us</a
		            >
		            </li>
		            <li class="nav-item">
		            <button
		                tabindex="0"
		                aria-label="button for toggle light or dark mode"
		                type="button"
		                id="dark-mode"
		                class="light"
		            >
		                <i class="fas fa-moon"></i>
		            </button>
		            </li>
		        </ul>
      		</nav>
		`
	}
}

customElements.define('app-bar', NavBar);