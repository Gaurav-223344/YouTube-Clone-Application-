import axios from "axios"
const VITE_YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY
const BASE_URL = "https://youtube138.p.rapidapi.com"
// const BASE_URL = "https://yt-api.p.rapidapi.com"
const options = {
	headers: {
		'x-rapidapi-key': VITE_YOUTUBE_API_KEY,
		'x-rapidapi-host': 'youtube138.p.rapidapi.com'
	}
};

export const fetchData = async (url:string) => {
    try {
        const {data} = await axios.get(`${BASE_URL}/${url}`, options)
        return data
    } catch (error) {
        console.error("error while fetching data: ",error)
    }
}