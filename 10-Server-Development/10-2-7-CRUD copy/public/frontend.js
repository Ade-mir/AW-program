function getUser() {
  const userId = prompt('Enter user ID:');
  $.get(`/user/${userId}`, function (data) {
    $('#response').text(JSON.stringify(data));
  });
}

function createUser() {
  const user = {
    firstName: prompt('Enter first name:'),
    lastName: prompt('Enter last name:'),
    username: prompt('Enter username:'),
    email: prompt('Enter email:'),
  };
  $.post('/user', user, function () {
    $('#response').text('User created!');
  });
}

function updateUser() {
  const userId = prompt('Enter user ID:');
  const updates = {
    firstName: prompt('Enter new first name:'),
    lastName: prompt('Enter new last name:'),
    username: prompt('Enter new username:'),
    email: prompt('Enter new email:'),
  };
  $.ajax({
    url: `/user/${userId}`,
    type: 'PATCH',
    data: updates,
    success: function () {
      $('#response').text('User updated!');
    },
  });
}

function deleteUser() {
  const userId = prompt('Enter user ID:');
  $.ajax({
    url: `/user/${userId}`,
    type: 'DELETE',
    success: function () {
      $('#response').text('User deleted!');
    },
  });
}
