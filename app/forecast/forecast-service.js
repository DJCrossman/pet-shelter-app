var SECRET_KEY = 'a6801e5f483f73ded1f064aa1b7df331';

var ForecastService = {
  get: function(lat, long){
    return new Promise((resolve, reject) => {
      $.get(`${Endpoints.ForecastAPI}/${SECRET_KEY}/${lat},${long}`)
      .then(resp => {
        resolve(JSON.parse(resp.response));
      })
      .catch(error => {
        reject(error);
      });
    });
  }
};
