import axios from 'axios';

const KEY = 'AIzaSyBuRMvCe6O_VO_IR-gtnfi0xQ-NH5Rtbj0'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});