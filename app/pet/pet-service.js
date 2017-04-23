var PetService = {
  create: function(pet) {
    return new Promise((resolve, reject) => {
      $.post(`${Endpoints.PetShelterAPI}/pets`, pet)
      .then(resp => {
        resolve(JSON.parse(resp.response));
      })
      .catch(error => {
        reject(error);
      });
    });
  },
  get: function(id) {
    return new Promise((resolve, reject) => {
      $.get(`${Endpoints.PetShelterAPI}/pets/${id}`)
      .then(resp => {
        resolve(JSON.parse(resp.response));
      })
      .catch(error => {
        reject(error);
      });
    });
  },
  getAll: function(){
     return new Promise((resolve, reject) => {
      $.get(`${Endpoints.PetShelterAPI}/pets`)
      .then(resp => {
        resolve(JSON.parse(resp.response));
      })
      .catch(error => {
        reject(error);
      });
    });
  },
  update: function(pet ){
    return new Promise((resolve, reject) => {
      $.put(`${Endpoints.PetShelterAPI}/pets/${pet.id}`, pet)
      .then(resp => {
        resolve(JSON.parse(resp.response));
      })
      .catch(error => {
        reject(error);
      });
    });
  },
  destroy: function(id) {
    return new Promise((resolve, reject) => {
      $.delete(`${Endpoints.PetShelterAPI}/pets/${id}`)
      .then(resp => {
        resolve(JSON.parse(resp.response));
      })
      .catch(error => {
        reject(error);
      });
    });
  }
}
