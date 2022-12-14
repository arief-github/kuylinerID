const createLikeRestoBtnTemplate = () => ` 
	<button aria-label="like this restaurant" id="likeButton" class="like">
		<i class="far fa-heart" aria-hidden="true"></i>
	</button>
`

const createUnlikeRestoBtnTemplate = () => ` 
	<button aria-label="unlike this restaurant" id="likeButton" class="like">
		<i class="fa fa-heart" aria-hidden="true"></i>
	</button>
`

export { createLikeRestoBtnTemplate, createUnlikeRestoBtnTemplate };