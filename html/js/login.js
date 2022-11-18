function signin() {
  var email = document.getElementById('username').value;

  var password = document.getElementById('password').value;

  // event.preventDefault();

  let currentUser = {
    email: email,
    password: password,
  };

  let users = JSON.parse(localStorage.getItem('users'));
  console.log(currentUser.email);

  function isExist() {
    for (let i = 0; i < users.length; i++) {
      if (users[i].email == currentUser.email) {
        sessionStorage.setItem('fullName', users[i].username);
        return true;
      }
    }

    return false;
  }

  if (isExist()) {
    sessionStorage.setItem('currentUser', JSON.stringify(currentUser));
    //document.getElementById('result').innerHTML = 'loged in ';
  } else {
    //document.getElementById('result').innerHTML = 'not exist user ';
    return;
  }
  window.location.href = './welcome.html';
}
