import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import './style.css';
import Register from './components/register';
import Login from './components/login';
import Home from './components/home';
import { actionCreators } from '../actions';

class App extends Component {

    render() {
        return ( <div>
                    <h1 className = "my-header" > Carsharing
                    </h1>
                    { this.props.registering && <Register/> }
                    { (this.props.login && !this.props.logged_in) && <Login/>}
                    { this.props.logged_in && <Home/>}
                 </div>
                 );
   }
}

const mapStateToProps = (state) => {
    return {
      registering: state.handleRegister.registering,
      login: state.handleRegister.login,
      logged_in: state.handleLogin.logged_in,
    }
}

const mapDispatchToProps = (dispatch) => {
   return { actions: bindActionCreators(actionCreators, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
