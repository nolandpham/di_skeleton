import axios from 'axios';
import { REQUEST_TIMEOUT } from '../env';

const apiConfig = {
  returnRejectedPromiseOnError: true,
  timeout: REQUEST_TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
};

export const request = axios.create(apiConfig);
