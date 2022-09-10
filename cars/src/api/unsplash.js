import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID JVkltHULiIvWwZQqpJNWnTYgpRnLR8ER_G6GAtQcfec'
    }
});