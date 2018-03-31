import { ENTRY_CHANGE } from '../actions/actionTypes';

const initialLoadState = {
  registering: true ,
  login: false,
  email: '' ,
  password: '',
  disable:true,
  logged_in : false
};

const handleRegisterReducer = (state = initialLoadState, action) => {
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

export default handleRegisterReducer;
