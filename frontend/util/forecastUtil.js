import axios from 'axios';

const forecastUtil = (place) => {
    axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json?access_token=pk.eyJ1IjoicHJvc2UwMDIxIiwiYSI6ImNrMzZoYWdidTAxcm8zaW82MW5jZmV6c2EifQ.PRbSpg500wqcoctnYFTIog&autocomplete=true`)
        .then((res) => {
            return res
        })
}

export default forecastUtil