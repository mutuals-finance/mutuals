import axios from 'axios';

export function getAPIClient(baseURL: string) {
  return axios.create({
    baseURL,
  });
}
