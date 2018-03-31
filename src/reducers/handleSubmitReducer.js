import axios from 'axios';
import { HANDLE_SUBMIT } from '../actions/actionTypes';

const initialLoadState = {
  registering: true ,
  login: false,
  email: '' ,
  password: '',
  disable:true,
  logged_in : false
};

const handleSubmitReducer = (state = initialLoadState, action) => {
  switch (action.type) {
    case HANDLE_SUBMIT:
      let {
        email,
        password,
        login,
        registering
      } = action.payload;
      let formData = {
        'username': email,
        'password': password
      }
      const url = "http://localhost:3030";
      console.log(formData);
      axios({
        method: 'post',
        url: url + '/users/signup',
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
      login = true;
      registering = false;
      return Object.assign({}, state, {
        email: email,
        login: login,
        registering: registering
      })
    default:
      return state;
  }
};


export default handleSubmitReducer;
