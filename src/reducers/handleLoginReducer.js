import { HANDLE_LOGIN, HANDLE_LOGOUT } from '../actions/actionTypes';

const initialLoadState = {
  registering : true,
  login : false,
  logged_in : false
};

const handleLoginReducer = (state = initialLoadState, action) => {
  switch (action.type) {
    case HANDLE_LOGIN:
      const { success, email } = action.payload;

      let {
        registering,
        login,
        logged_in
      } = state;

      if(success){
        registering = false;
        login = false;
        logged_in = true;
      }

      return Object.assign({}, state, {
          email : email,
          registering : registering,
          login : login,
          logged_in : logged_in
      });

    case HANDLE_LOGOUT:
      logged_in = false
      return Object.assign({}, state, { logged_in : logged_in });

    default:
      return state;
  }
};


export default handleLoginReducer;
