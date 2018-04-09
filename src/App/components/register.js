import React from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../../actions';
import { bindActionCreators} from 'redux';
import '../style.css';

const Register = ({disable, actions}) => {
  return (
    <div className="form-wrapper">

        <form onSubmit={actions.handleSubmit}>
          <input name="email" type="text" placeholder="Enter a valid email."
            onChange={actions.handleInput}/>
          <input name="password" type="password" placeholder="Enter a valid password greater than six characters."
            onChange={actions.handleInput} />
          <button type="submit" className="custom-btn"
            disabled={disable}>Register</button>
        </form>
        <span onClick={actions.handleEntryChange} className="login">Login</span>
    </div>
  );
}

const mapStateToProps = (state) => {
    return {
      disable: state.handleChange.disable
    }
}

const mapDispatchToProps = (dispatch) => {
   return { actions: bindActionCreators(actionCreators, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
