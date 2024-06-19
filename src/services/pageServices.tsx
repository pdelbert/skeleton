import axios from 'axios';

const pageServices = async (path:string) => {
    const response = await axios.get(path);
    return response.data;
};

export { 
    pageServices
};
