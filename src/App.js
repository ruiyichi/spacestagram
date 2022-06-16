import { useNasa } from "./NasaContext";
import Post from "./Components/Post";
import "./App.scss";

const App = () => {
	const { postData } = useNasa();

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
