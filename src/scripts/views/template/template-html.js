import CONFIG from '../../global/config';

const restaurantItemTemplate = (restaurant, index, lastIndex) => {
	const firstBox = (numIndex) => numIndex === 0 && lastIndex % 2 !== 0;

	return ` 
		<div class="card ${firstBox(index) ? 'box-ganjil' : ''}">
			<a href="#">
		      <div class="img-container">
		        <img class="img-res" alt="image ${
		          restaurant.name
		        }" src="${ CONFIG.BASE_IMAGE_URL_SM + restaurant.pictureId }" crossorigin="anonymous"/>
		        <span class="card-title"><p>${restaurant.name} - ${restaurant.city}</p></span>
		        <span class="card-rating">
		          <i title="ratings" class="fa fa-star"></i>
		          <span>${restaurant.rating}</span>
		        </span>
		      </div>
		      <div class="card-content">
		          <p class="card-content-title">Description :</p>
		          <p class="truncate${firstBox(index) ? '2' : ''}">${restaurant.description}</p>
		      </div>
		    </a>
		</div>
	`
}

const createSkeletonItemTemplate = (count) => {
	const firstBox = (numIndex) => numIndex === 0 && count % 2 !== 0;
	
	let template = '';

	for (let i = 0; i < count; i += 1) {
		template += ` 
			 <div class="card ${firstBox(i) ? 'box-ganjil' : ''}">
		      <div class="img-container">
		        <img class="img-res" alt="image skeleton" src="./images/placeholder-large.jpg"
		        crossorigin="anonymous"/>
		        <span class="card-title"><p>Title - City</p></span>
		        <span class="card-rating">
		          <i title="ratings" class="fa fa-star"></i>
		          <span>5</span>
		        </span>
		      </div>
		      <div class="card-content">
		          <p class="card-content-title">Description :</p>
		          <p class="truncate${
		            firstBox(i) ? '2' : ''
		          }">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sequi ullam ad mollitia cupiditate aut iure officia, voluptate, sapiente modi quisquam est quod quas recusandae quo saepe atque nisi blanditiis.</p>
		      </div>
		    </div>
		`;
	}	
}

export { restaurantItemTemplate, createSkeletonItemTemplate };