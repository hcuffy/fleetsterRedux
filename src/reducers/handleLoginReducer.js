import axios from 'axios';
import { HANDLE_LOGIN } from '../actions/actionTypes';

const initialLoadState = {
  registering: true ,
  login: false,
  email: '' ,
  password: '',
  disable:true,
  logged_in : false
};

const handleLoginReducer = (state = initialLoadState, action) => {
  switch (action.type) {
    case HANDLE_LOGIN:
      var {
        email,
        password,
        login,
        registering,
        logged_in
      } = action.payload;
      let formData = {
        'username': email,
        'password': password
      }
      const url = "http://localhost:3030";

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
        console.log(err);
      });
      console.log('yay');
      login = false;
      registering = false;
      logged_in = true;
      return Object.assign({}, state, {
        email: email,
        login: login,
        registering: registering,
        logged_in: logged_in
      });

    default:
      return state;
  }
};


export default handleLoginReducer;
