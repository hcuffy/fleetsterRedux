import { HANDLE_CHANGE } from './actionTypes';

const handleInput = (event) => {
  
return {
    type : HANDLE_CHANGE,
    payload : event.target
  };
};

export default handleInput;
