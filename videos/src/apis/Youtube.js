import axios from "axios";
import config from "./config.json";

const KEY = config.KEY;

export default axios.create({
	baseURL: "https://www.googleapis.com/youtube/v3",
	params: {
		part: "snippet",
		maxResults: 5,
		key: KEY
	}
});

// axios
// 	.get("https://www.googleapis.com/youtube/v3/search/", {
// 		params: {
// 			part: "snippet",
// 			maxResults: 5,
// 			key: config.KEY,
// 			q: term
// 		}
// 	})
// 	.then(res => console.log(res))
// 	.catch(err => console.log(err));
