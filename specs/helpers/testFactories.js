import LikeButtonInitiator from '../../src/scripts/utils/like-button-presenter';
import FavRestaurantIdb from '../../src/scripts/data/restaurant-idb';

const createLikeButtonPresenterWithRestaurant = async( restaurant ) => {
	await LikeButtonInitiator.init({
		likeButtonContainer: document.querySelector('#likeButtonContainer'),
		favoriteRestaurant: FavRestaurantIdb,
		data: {
			restaurant,
		},
	});
};

export { createLikeButtonPresenterWithRestaurant };