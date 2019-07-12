import axios from "axios";

export const getHomeData = (callback) => {
    axios.get("http://localhost:8084/api/gateway/travel-experience/home/data")
        .then((response) => {
            callback(response.data);
        })
        .catch((err) => {
            console.log(err);
        });
};

