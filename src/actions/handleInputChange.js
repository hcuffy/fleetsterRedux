export const HANDLE_CHANGE = 'HANDLE_CHANGE';

const handleInput = (event) => {

return {
    type: HANDLE_CHANGE,
    payload: event.target
  };
};

export default handleInput;
