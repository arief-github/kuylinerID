const createLikeRestoBtnTemplate = () => ` 
	<button aria-label="like this restaurant" id="likeButton">
		<i class="far fa-heart" aria-hidden="true"></i>
	</button>
`

const createUnlikeRestoBtnTemplate = () => ` 
	<button aria-label="unlike this restaurant" id="likedButton">
		<i class="fa fa-heart" aria-hidden="true"></i>
	</button>
`

export { createLikeRestoBtnTemplate, createUnlikeRestoBtnTemplate };