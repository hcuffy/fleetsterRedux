import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import './style.css';
import Register from './register';
import Login from './login';
import Home from './home';
import { actionCreators } from '../../actions';

class App extends Component {

  render() {
      return ( <div>
        <h1 className = "my-header" > Carsharing
        </h1>

        {this.props.registering && <Register
          entryChange={this.props.actions.entryChange}
          handleChange={this.props.actions.handleChange}
          disableBtn={this.props.disable}
          handleSubmit={this.props.actions.handleSubmit}
        />}

        {this.props.login && <Login
          entryChange={this.props.actions.entryChange}
          handleChange = {this.props.actions.handleChange}
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
console.log(state.registering.logged_in);
    return {
      registering: state.registering.registering,
      login: state.registering.login,
      disable: state.handleChange.disable,
      email: state.handleChange.email,
      password: state.handleChange.password,
      logged_in: state.registering.logged_in
    }
}

const mapDispatchToProps = (dispatch) => {
   return { actions: bindActionCreators(actionCreators, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
