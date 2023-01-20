const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

const carAPI = (function () {
  let cars = [];

  return {
    createcar: function (car) {
      const newcar = {
        id: uuidv4(),
        name: car.name,
        maker: car.maker,
        range: car.range,
        fastCharge: car.fastCharge,
      };

      cars.push(newcar);
      return newcar;
    },

    getcars: function () {
      return cars;
    },

    getcar: function (carId) {
      const id = carId;
      return cars.find((car) => car.id === id);
    },

    deletecar: function (carId) {
      cars = cars.filter((car) => car.id !== carId, 10);
    },

    load: function (save) {
      try {
        const data = fs.readFileSync(save);
        cars = JSON.parse(data);
      } catch (err) {
        console.error(err);
      }
    },

    save: function (save) {
      try {
        const data = JSON.stringify(cars, null, 2);
        fs.writeFileSync(save, data);
      } catch (err) {
        console.error(err);
      }
    },
  };
})();

module.exports = {
  createcar: carAPI.createcar,
  getcars: carAPI.getcars,
  getcar: carAPI.getcar,
  deletecar: carAPI.deletecar,
  load: carAPI.load,
  save: carAPI.save,
};
