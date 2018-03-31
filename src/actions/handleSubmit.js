export const HANDLE_SUBMIT = 'HANDLE_SUBMIT';

const handleSubmit = (event) => {
  event.preventDefault();
const registering = true;
  return {
      type: HANDLE_SUBMIT,
      payload: registering
  };
};

export default handleSubmit;
