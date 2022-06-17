import { useState } from "react";

const Post = ({ imageSrc, title, date, description }) => {
	const [liked, setLiked] = useState(false);
	const [imgLoaded, setImgLoaded] = useState(false);

	return (
		<div 
			className="post"
		>
			<div id="header">
				<h1>{title}</h1>
				<h6>{date}</h6>
			</div>
			<img 
				style={imgLoaded ? {} : {visibility: 'hidden'}}
				src={imageSrc}
				alt={description}
				onLoad={() => setImgLoaded(true)}
			>
			</img>
			<div id="footer">
				<div id="description">{description}</div>
				<button 
					className={liked ? "filled" : "empty"}
					onClick={() => setLiked(!liked)}
				>
					{liked ? 'Unlike' : 'Like'}
				</button>
			</div>
			
		</div>
	)
}

export default Post