import React from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../../actions';
import { bindActionCreators} from 'redux';
import '../style.css';

const Login = ({actions}) => {

  return (
    <div className="form-wrapper">
        <form onSubmit={actions.handleLogin} method="POST" >
          <input name="email" type="text" placeholder="Enter your email"
          onChange={actions.handleInput}/>
          <input name="password" type="password" placeholder="Enter your password"
          onChange={actions.handleInput}/>
          <button className="custom-btn">Login</button>
        </form>

        <span onClick={actions.handleEntryChange} className="register">Register</span>
    </div>
  );
};

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
   return { actions: bindActionCreators(actionCreators, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
