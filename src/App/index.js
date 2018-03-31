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

        {this.props.registering && <Register
          entryChange={this.props.actions.handleEntryChange}
          handleInput={this.props.actions.handleInput}
          disableBtn={this.props.disable}
          handleSubmit={this.props.actions.handleSubmit}
        />}

        {this.props.login && <Login
          entryChange={this.props.actions.handleEntryChange}
          handleInput = {this.props.actions.handleInput}
          handleLogin = {this.props.actions.handleLogin}
        />}

        {this.props.logged_in && <Home
          userInfo={this.props.email}
        />}

        </div>
      );
  }

}

const mapStateToProps = (state) => {
    return {
      registering: state.handleRegister.registering,
      login: state.handleRegister.login,
      disable: state.handleChange.disable,
      email: state.handleChange.email,
      password: state.handleChange.password,
      logged_in: state.handleRegister.logged_in
    }
}

const mapDispatchToProps = (dispatch) => {
   return { actions: bindActionCreators(actionCreators, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
