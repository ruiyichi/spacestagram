import { useNasa } from "./NasaContext";
import Post from "./Components/Post";
import "./App.scss";
import { useEffect } from "react";

const App = () => {
	const { postData, fetchPostData } = useNasa();

	const onScroll = () => {
		if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
			fetchPostData();
			window.removeEventListener('scroll', onScroll);
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', onScroll)
	}, [postData])
	
	return (
		<div>
			{
				postData.map((post, idx) => {
					return (
						<Post
							key={idx}
							imageSrc={post.hdurl}
							description={post.explanation}
							title={post.title}
							date={post.date} 
						></Post>
					)
				})
			}
		</div>
	);
}

export default App;
