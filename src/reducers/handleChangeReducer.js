import { HANDLE_CHANGE } from '../actions/actionTypes';

const initialLoadState = {
  email : '',
  password : '',
  disable : true
};

const handleChangeReducer = (state = initialLoadState, action) => {
  switch (action.type) {
    case HANDLE_CHANGE:
      let { email, password, disable } = state;

      const name = action.payload.name;
      const emailRegx = /(.+)@(.+){2,}\.(.+){2,}/;
      const passRegx = /[a-zA-Z0-9_-]{6,}$/;

      email = name === 'email' ? action.payload.value : state.email;
      password = name === 'password' ? action.payload.value : state.password;
      if (emailRegx.test(email) && passRegx.test(password)) {
        disable = false;
      }
      return Object.assign({}, state, {
        email : email,
        password : password,
        disable : disable
      });
    default:
      return state;
  }
};

export default handleChangeReducer;
