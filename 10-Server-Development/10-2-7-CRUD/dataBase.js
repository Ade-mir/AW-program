const { v4: uuidv4 } = require('uuid'); // Random id node module
const fs = require('fs');

const UserAPI = (function () {
  let users = [];

  return {
    createUser: function (user) {
      const newUser = {
        id: uuidv4(),
        firstName: user.firstName,
        lastName: user.lastName,
        username: user.username,
        email: user.email,
      };

      users.push(newUser);
      return newUser;
    },

    getUser: function (userId) {
      const id = userId;
      return users.find((user) => user.id === id);
    },

    updateUser: function (userId, updates) {
      const userIndex = users.findIndex((user) => user.id === userId);
      if (userIndex !== -1) {
        users[userIndex] = { ...users[userIndex], ...updates };
      }
    },

    deleteUser: function (userId) {
      users = users.filter((user) => user.id !== userId, 10);
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
