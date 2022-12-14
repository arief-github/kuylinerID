import {
    createLikeRestoBtnTemplate,
    createUnlikeRestoBtnTemplate,
} from '../views/template/button-html';

import NotifHelper from './notif-helper';

const LikeButtonPresenter = {
    async init({ likeButtonContainer, favoriteRestaurant, data }) {
        this._likeButtonContainer = likeButtonContainer;
        this._favoriteRestaurant = favoriteRestaurant;
        this._restaurant = data.restaurant;

        await this._renderButton();
    },

    async _renderButton() {
        const { id } = this._restaurant;

        if (await this._isRestaurantExist(id)) {
            this._renderLiked();
        } else {
            this._renderLike();
        }
    },

    async _isRestaurantExist(id) {
        const restaurant = await this._favoriteRestaurant.getRestaurant(id);
        return !!restaurant;
    },

    _renderLike() {
        this._likeButtonContainer.innerHTML = createLikeRestoBtnTemplate();

        const likeButton = document.querySelector("#likeButton");

        likeButton.addEventListener('click', async () => {
            await this._favoriteRestaurant.putRestaurant(this._restaurant);
            this._renderButton();

            let message = `Resto ${this._restaurant.name} added to favorite `;
            let title = 'KuylinerID';
            let options = {
                body: message,
                icon: "icons/icon-192x192.png",
                badge: "icons/icon-192x192.png",
            };

            NotifHelper.showNotification({ message: message, title: title, options: options });
        })
    },

    _renderLiked() {
        this._likeButtonContainer.innerHTML = createUnlikeRestoBtnTemplate();

        const likedButton = document.querySelector("#likeButton");
        likeButton.addEventListener('click', async () => {
            await this._favoriteRestaurant.deleteRestaurant(this._restaurant.id);
            this._renderButton();
            let message = `Resto  ${this._restaurant.name} deleted from favorite`;
            let title = 'KuylinerID';
            let options = {
                body: message,
                icon: "icons/icon-192x192.png",
                badge: "icons/icon-192x192.png",
            }
            NotifHelper.showNotification({ message: message, title: title, options: options });
        })
    }
}

export default LikeButtonPresenter;