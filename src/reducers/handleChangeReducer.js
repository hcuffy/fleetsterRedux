import { HANDLE_CHANGE } from '../actions/actionTypes';
// TODO:  clean up intial state
const initialLoadState = {
  registering: true ,
  login: false,
  email: '' ,
  password: '',
  disable:true,
  logged_in : false
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

export default handleChangeReducer;
