import { HANDLE_LOGOUT } from './actionTypes';
import axios from 'axios';
const url = 'http://localhost:3030';


const handleLogout = (event) => {
  event.preventDefault();

  let success = false;

  axios.get(url + '/users/logout')
        .then(function (res) {
          console.log(res);
        })
        .catch(function (err) {
          alert('Logout failed.');
          console.log(err);
          return;
        });

      success = true;
      return{
          type: HANDLE_LOGOUT,
          payload:  success 
      };
}

export default handleLogout;
