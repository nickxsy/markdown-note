import axios from 'axios';

import { CONFIG } from '@/shared/model/config';

export const clientApi = axios.create({
  baseURL: CONFIG.API_URL
});
