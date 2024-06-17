import axios from 'axios';

const productionUrl = 'https://gh-books-and-stationery.onrender.com/api/v1';

export const customFetch = axios.create({
	baseURL: productionUrl,
});
