import axios from 'axios';

import { CONIFG } from '@/shared/model/config';

export const clientApi = axios.create({
  baseURL: CONIFG.API_URL
});
