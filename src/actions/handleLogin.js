import { HANDLE_LOGIN } from './actionTypes';
import axios from 'axios';
const url = 'http://localhost:3030';

const handleLogin = (event) => {
  event.preventDefault();

  let formData = {
    email : event.target.email.value,
    password : event.target.password.value
  };

  let email = event.target.email.value;
  let success = false;

  axios({
    method: 'post',
    url: url + '/users/signin',
    contentType: 'application/json',
    data: formData,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    crossDomain: true,
    }).then(function (res) {
        console.log(res);
      }).catch(function (err) {
        alert('Login was not successful.');
        console.log(err);
        return;
      });
  success = true;
  return{
      type: HANDLE_LOGIN,
      payload: {
        success,
        email
      }
  };
};


export default handleLogin;
