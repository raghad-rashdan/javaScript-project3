// let passReg =  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
let passReg = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}/;
let nameReg = /[a-zA-Z]/;

function signnup() {
  var userna = document.getElementById('fullname').value;

  var msgf = document.getElementById('msgfull');

  var email = document.getElementById('emaill').value;

  var msgem = document.getElementById('msgemail');

  // passwordlocal
  var upass = document.getElementById('pass').value;
  // localStorage.setItem('passw', upass);
  // localStorage.getItem('passw');

  var msgp = document.getElementById('msgpass');
  // localStorage.setItem('mpass', msgp);
  // localStorage.getItem('mpass');

  // repeatlocal
  var repass = document.getElementById('rpass').value;
  // localStorage.setItem('rrpass', repass);
  // localStorage.getItem('rrpass');

  var mrepass = document.getElementById('msgrepass').innerHTML;
  // localStorage.setItem('mre', mrepass);
  // localStorage.getItem('mre');

  //  email match

  if (email.endsWith('.com') === false || email.includes('@') === false) {
    msgem.style.display = 'inline';
  } else {
    msgem.style.display = 'none';
  }

  //  password match

  if (upass.match(passReg)) {
    msgp.style.display = 'none';
    if (upass === repass) {
      msgp.style.display = 'none';
      //   window.location.href = "../LoginPage/Login.html"
    } else {
      msgp.style.display = 'none'; //change
    }
  } else {
    msgp.style.display = 'none'; //change
  }

  // fullname match
  if (fullname.value.match(nameReg)) {
    msgf.style.display = 'none';
  } else {
    msgf.style.display = 'inline';
  }
////////errors conditions
  if (
    msgf.style.display == 'inline' ||
    msgem.style.display == 'inline' ||
    msgp.style.display == 'inline'
  ) {
    return;
  }

  //console.log('not working');

  // event.preventDefault();

  var username = userna;

  var password = upass;

  var currentUser = {
    username: username,

    email: email,

    password: password,
  };



  if (localStorage.getItem('users')) {
    let users = JSON.parse(localStorage.getItem('users'));  //json.parse to convert json to obj
    //console.log(users[0].username);
    if (users.length == 0) {
      users.push(currentUser);
      //console.log(users[0].username);
    } else {
      //console.log(users[0].username); //nsreen

      function isExist() {
        for (let i = 0; i < users.length; i++) {
          if (users[i].email == currentUser.email) {
            return true;
          }
        }

        return false;
      }

      if (isExist()) {
        // console.log(users[i].username)
        //console.log(currentUser.username);
        console.log("email already registerd")
        //document.getElementById('result').innerHTML = 'email already registerd';
      } else {
        users.push(currentUser);
        localStorage.setItem('users', JSON.stringify(users));
      }
    }
  } else {
    let users = [];
    users.push(currentUser);
    localStorage.setItem('users', JSON.stringify(users));//JSON.parse()
  }

  var json = JSON.stringify(currentUser);

  localStorage.setItem('username', json);
  window.location.href = './login.html';
  // window.location.href = './resultpage.html';
}
