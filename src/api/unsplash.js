import axios from 'axios'

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID vBuFa5Lv435K0uUPL4t_Co6HKIlsf4n1H1MAfoLr1dU"
    }
});