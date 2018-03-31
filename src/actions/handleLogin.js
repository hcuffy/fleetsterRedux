export const LOGGED_IN = 'LOGGED_IN';
export const HANDLE_LOGIN = 'HANDLE_LOGIN';


const handleLogin = (event) => {
  event.preventDefault();
  const loggingIn = true;
  return{
      type: HANDLE_LOGIN,
      payload: loggingIn
  };
};


export default handleLogin;
