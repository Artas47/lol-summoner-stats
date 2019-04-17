//RGAPI-75da5f05-293a-467d-92cb-6b788a9314e8 API KEY

// https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/NaturalHigh47?api_key=RGAPI-75da5f05-293a-467d-92cb-6b788a9314e8
import lol from '../api/lol';

const API_KEY = 'RGAPI-75da5f05-293a-467d-92cb-6b788a9314e8';


export const fetchUser = (summonerName) => async (dispatch) => {
  const response = await lol.get(`summoner/v4/summoners/by-name/${summonerName}?api_key=${API_KEY}`)

  dispatch({type: 'FETCH_USER', payload: response.data})
}


