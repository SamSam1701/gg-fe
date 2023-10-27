import axios from "axios";

// Tạo một phiên Axios với base URL cố định
const instance = axios.create({
    baseURL: "https://golden-owl-be.onrender.com",
});

export const getData = async () => {
    try {
        const response = await instance.get('/api/v1/products');
        return response.data;
    } catch (error) {
        console.error('There was a problem with the Axios request:', error);
        throw error; // Re-throw the error to handle it at the caller level if needed.
    }
}