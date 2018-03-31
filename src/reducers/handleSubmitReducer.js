import { HANDLE_SUBMIT } from '../actions/actionTypes';

const initialLoadState = {
  registered: false ,
};

const handleSubmitReducer = (state = initialLoadState, action) => {
  switch (action.type) {
    case HANDLE_SUBMIT:
      let { success } = action.payload;
      let {
      registered
    } = state;
    if(success){
      registered = true;
    }
      return Object.assign({}, state, {
        registered: registered,
      })
    default:
      return state;
  }
};


export default handleSubmitReducer;
