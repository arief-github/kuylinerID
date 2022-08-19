const DarkMode = {
    init({ toggle, currentTheme }) {
        toggle.addEventListener('click', (event) => {
            // set toggle here
            this._toggleSwitch(event);
        });

        if(currentTheme) {
        	document.documentElement.setAttribute('data-theme', currentTheme);
        }
    },

    _toggleSwitch(event) {
        event.stopPropagation();

        const checkTheme = (event) => event.target.classList.value === 'light' || event.path[1].classList.value === 'light';

        if (checkTheme(event)) {
            // set attribute from root element
            document.documentElement.setAttribute('data-theme', 'dark');

            // set target dark mode and save preferences into local storage
            event.target.classList.remove('light');
            event.target.classList.add('dark');
            event.path[1].classList.remove('light');
            event.path[1].classList.add('dark');

            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');

            // set target dark mode and save preferences into local storage
            event.target.classList.remove('dark');
            event.target.classList.add('light');
            event.path[1].classList.remove('dark');
            event.path[1].classList.add('light');

            localStorage.setItem('theme', 'light');
        }

    }
}

export default DarkMode;