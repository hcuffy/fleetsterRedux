import React from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../../actions';
import { bindActionCreators} from 'redux';
import '../style.css';

const Home = ({email, actions}) => {
  return (
    <div className="profile-wrapper">
        <p className="profile">{email}</p>
        <button className="logout-btn" onClick={actions.handleLogout}>Logout</button>
    </div>
 );
}

const mapStateToProps = (state) => {
    return {
      email: state.handleChange.email
    }
}

const mapDispatchToProps = (dispatch) => {
   return { actions: bindActionCreators(actionCreators, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
