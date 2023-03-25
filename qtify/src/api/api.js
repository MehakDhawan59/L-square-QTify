// https://qtify-backend-labs.crio.do/albums/top

// https://qtify-backend-labs.crio.do/albums/new

import axios from 'axios';
const Backend_url = "https://qtify-backend-labs.crio.do";

export const fetchTopSongs = async () => {
    try {
        const response = await axios.get(`${Backend_url}/albums/top`);
        console.log(response.data);
        return response.data;
    }
    catch (e) {
        console.log(e);
    }

}

export const fetchNewSongs = async () => {
    try {
        const response = await axios.get(`${Backend_url}/albums/new`);
        console.log(response.data);
        return response.data;
    }
    catch (e) {
        console.log(e);
    }

}

