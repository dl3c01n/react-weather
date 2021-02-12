import axios from 'axios';

const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?';
const apiKey = 'e31e537a98b61a14fbf95f19935ee090';

export const getWeather = async (cityname) => {
    try{
        const {data} = await axios.get(baseUrl + `q=${cityname}&lang=fr&appid=${apiKey}`);
        return data;
    }catch(error) {
        throw error;
    }
}