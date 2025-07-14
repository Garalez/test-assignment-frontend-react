import axios from 'axios';
import { API } from '../utils/constants';

const api = axios.create({
  baseURL: API.BASE_URL,
});

/**
   * Fetch the list of pokemons from API
   * @param offset how many records to skip
   * @param limit how many records to return
   * @returns list of pokemons
   */
export const getList = (offset = 0, limit = API.ITEMS_PER_PAGE) =>
  api.get(`/pokemon?offset=${offset}&limit=${limit}`);

export const getOne = (id: number | string) =>
  api.get(`/pokemon/${id}`);
