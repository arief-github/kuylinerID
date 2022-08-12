import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import { restaurantDetailTemplate } from '../template/template-html';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavRestaurantIdb from '../../data/restaurant-idb';

const Detail = {
    async render() {
        return ` 
            <div class="container">
            <div class="main">
                <h2 class="title-container">Detail Restaurant</h2>
                <section id="detail-rest"></section>
                <div class="like" id="likeButtonContainer"></div>
                <div class="form-review">
                <form>
                    <div class="mb-3">
                    <label for="inputName" class="form-label">Name</label>
                    <input name="inputName" type="text" class="form-control" id="inputName">
                    </div>
                    <div class="mb-3">
                    <label for="inputReview" class="form-label">Review</label>
                    <input name="inputReview" type="text" class="form-control" id="inputReview">
                    </div>
                    <button id="submit-review" type="submit" class="btn2">Submit</button>
                </form>
                </div>
            </div>
            </div>
        `;
    },

    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const detailContainer = document.querySelector("#detail-rest");
        const main = document.querySelector('.main');

        main.style.display = 'none';

        try {
            const data = await RestaurantSource.detailRestaurant(url.id);
            detailContainer.innerHTML += restaurantDetailTemplate(data.restaurant);

            await LikeButtonPresenter.init({
                likeButtonContainer: document.querySelector('#likeButtonContainer'),
                favoriteRestaurant: FavRestaurantIdb,
                data,
            });

            main.style.display = 'block';
        } catch (error) {
            detailContainer.innerHTML = `Error: ${error}, swipe up to refresh!`;
            main.style.display = 'block';
        }
    }
}

export default Detail;
