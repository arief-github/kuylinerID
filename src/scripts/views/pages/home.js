import RestaurantSource from '../../data/restaurant-source';
import { restaurantItemTemplate, createSkeletonItemTemplate } from '../template/template-html.js';

const Home = {
	async render() {
		return ` 
		<div class="container">
	      <div class="main">
	        <h2 class="title-container">List Restaurant</h2>
	        <section id="list-rest">
	          ${createSkeletonItemTemplate(20)}
	        </section>
	      </div>
	    </div>
		`;
	},

	async afterRender() {
		const main = document.querySelector('.main');
		const listContainer = document.querySelector('#list-rest');

		main.style.display = 'none';
		listContainer.innerHTML = '';

		try {
			const data = await RestaurantSource.listRestaurant();
			const total = data.restaurants.length;
			data.restaurants.forEach((restaurant, index) => {
				listContainer.innerHTML += restaurantItemTemplate(restaurant, index, total);
			});
			main.style.display = 'block';
		} catch(error) {
			main.style.display = 'block';
			listContainer.innerHTML = ` Error: ${error}, swipe up refresh!`;
		}
	}
}

export default Home;