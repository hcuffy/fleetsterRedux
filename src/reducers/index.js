import { combineReducers } from 'redux';
import handleChangeReducer from './handleChangeReducer';
import handleLoginReducer from './handleLoginReducer';
import handleSubmitReducer from './handleSubmitReducer';
import handleRegisterReducer from './handleRegisterReducer';


const rootReducer = combineReducers({
  handleRegister: handleRegisterReducer,
  handleChange: handleChangeReducer,
  handleSubmit: handleSubmitReducer,
  handleLogin: handleLoginReducer
});


export default rootReducer;
