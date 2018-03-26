import { combineReducers } from 'redux';
import axios from 'axios';
import {
  ENTRY_CHANGE,
  HANDLE_CHANGE,
  HANDLE_SUBMIT,
  HANDLE_LOGIN
} from '../actions';

const initialLoadState = {
  registering: true ,
  login: false,
  email: '' ,
  password: '',
  disable:true,
  logged_in : false
};

const registerReducer = (state = initialLoadState, action) => {
  switch (action.type) {
    case ENTRY_CHANGE:
      let {
        login,
        registering
      } = state;
      registering = registering === true ? false : true;
      login = login === true ? false : true;
      return Object.assign({}, state, {
        login: login,
        registering: registering
      })
    default:
      return state;
  }
};

const handleChangeReducer = (state = initialLoadState, action) => {
  switch (action.type) {
    case HANDLE_CHANGE:
      let {
        email,
        password,
        disable
      } = state;
      const name = action.payload.name;
      email = name === 'email' ? action.payload.value : state.email;
      password = name === 'password' ? action.payload.value : state.password;
      let emailRegx = new RegExp(/(.+)@(.+){2,}\.(.+){2,}/);
      let passRegx = new RegExp(/[a-zA-Z0-9_-]{6,}$/);

      if (emailRegx.test(email) && passRegx.test(password)) {
        disable = false;
      }
      return Object.assign({}, state, {
        email: email,
        password: password,
        disable: disable
      });
    default:
      return state;
  }
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


const rootReducer = combineReducers({
  registering: registerReducer,
  handleChange: handleChangeReducer,
  handleSubmit: handleSubmitReducer,
  handleLogin: handleLoginReducer
});


export default rootReducer;
