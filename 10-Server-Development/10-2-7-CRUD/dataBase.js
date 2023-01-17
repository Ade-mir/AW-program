const fs = require('fs');

let currentId = 1;
function getNextId() {
  return currentId++;
}

const UserAPI = (function () {
  let users = [];

  return {
    createUser: function (user) {
      const newUser = {
        id: getNextId(),
        firstName: user.firstName,
        lastName: user.lastName,
        username: user.username,
        email: user.email,
      };

      users.push(newUser);
      return newUser;
    },

    getUser: function (userId) {
      const id = parseInt(userId, 10);
      return users.find((user) => user.id === id);
    },

    updateUser: function (userId, updates) {
      const userIndex = users.findIndex(
        (user) => user.id === parseInt(userId, 10)
      );
      if (userIndex !== -1) {
        users[userIndex] = { ...users[userIndex], ...updates };
      }
    },

    deleteUser: function (userId) {
      users = users.filter((user) => user.id !== parseInt(userId, 10));
    },

    load: function (save) {
      try {
        const data = fs.readFileSync(save);
        users = JSON.parse(data);
      } catch (err) {
        console.error(err);
      }
    },

    save: function (save) {
      try {
        const data = JSON.stringify(users);
        fs.writeFileSync(save, data);
      } catch (err) {
        console.error(err);
      }
    },
  };
})();

module.exports = {
  createUser: UserAPI.createUser,
  getUser: UserAPI.getUser,
  updateUser: UserAPI.updateUser,
  deleteUser: UserAPI.deleteUser,
  load: UserAPI.load,
  save: UserAPI.save,
};
