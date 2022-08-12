import FavRestaurantIdb from '../../data/restaurant-idb';
import { restaurantItemTemplate } from '../template/template-html';

const Favorite = {
	async render() {
		return ` 
			<div class="container">
				<h2 class="title-container"> Resto Favorite Anda </h2>
				<section id="list-rest"></section>
			</div>
		`;
	},

	async afterRender() {
		const data = await FavRestaurantIdb.getAllRestaurants();
		const listContainer = document.querySelector('#list-rest');
		if(data.length === 0) {
			listContainer.innerHTML = ` 
				Anda belum memiliki restoran favorite
			`;
		}

		// total of restaurant
		const total = data.length;
		data.forEach((restaurant, index) => {
			listContainer.innerHTML += restaurantItemTemplate(restaurant, index, total);
		});
	}
}

export default Favorite;