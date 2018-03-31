import axios from 'axios';
export const HANDLE_SUBMIT = 'HANDLE_SUBMIT';
const url = "http://localhost:3030";


const handleSubmit = (event) => {
  event.preventDefault();

  let formData = {
    email: event.target.email.value,
    password: event.target.password.value
  };
  let success = false;

  axios({
      method: 'post',
      url: url + '/users/signup',
      contentType: 'application/json',
      data: formData,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      crossDomain: true,
  }).then(function (res) {
    console.log(res);
    }).catch(function (err) {
      alert('Your form could not be submitted.');
      console.log(err);
      return;
    });

success = true;
  return {
    type: HANDLE_SUBMIT,
    payload: {success}
  };
};

export default handleSubmit;
