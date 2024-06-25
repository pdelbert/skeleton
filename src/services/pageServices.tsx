import axios from 'axios';
import { Methods } from '../types';

const api = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,  
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json',
      },
});

const pageServices = async (requestType: Methods, path:string):Promise<object | unknown> => {
    const response = await api[requestType]<object>(path);
    return response.data;
};

api.interceptors.response.use((response)  =>  {
    console.log(response.data);
    return response;
})


export { 
    pageServices
};
