export const ENTRY_CHANGE = 'ENTRY_CHANGE';
export const HANDLE_CHANGE = 'HANDLE_CHANGE';
export const HANDLE_SUBMIT = 'HANDLE_SUBMIT';
export const LOGGED_IN = 'LOGGED_IN';
export const HANDLE_LOGIN = 'HANDLE_LOGIN';

const entryChange = () => {
  return {
    type: ENTRY_CHANGE
  };
};

const handleChange = (event) => {
  return {
    type: HANDLE_CHANGE,
    payload: event.target
  };
};


const handleSubmit = (event) => {
  event.preventDefault();
  return (dispatch, getState) => {
    const registering = getState().handleChange;
    dispatch({
      type: HANDLE_SUBMIT,
      payload: registering
    });
  };
};

const handleLogin = (event) => {
  event.preventDefault();
  return (dispatch, getState) => {
    const loggingIn = getState().handleChange;
    dispatch({
      type: HANDLE_LOGIN,
      payload: loggingIn
    });
  };
};

export const actionCreators = {
  entryChange,
  handleChange,
  handleSubmit,
  handleLogin

};
