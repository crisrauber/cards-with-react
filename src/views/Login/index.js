import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import api from '../../services/apiCards';
import { Title, Card, SendButton, MyInput } from './styles';
import * as userActions from '../../store/modules/user/actions';

class Login extends Component {
  state = {
    password: '',
    email: '',
  };

  componentDidMount() {}

  componentDidUpdate() {}

  handleSubmit = async e => {
    e.preventDefault();

    const { login } = this.props;

    const response = await api.post('/login', {
      email: this.state.email,
      password: this.state.password,
    });
    const { user, token } = response.data;
    user.token = token;
    login(user);
  };

  handleInputChange = event => {
    const { target } = event;
    console.log(event);
    if (target.name === 'email') {
      this.setState({ email: target.value });
    } else {
      this.setState({ password: target.value });
    }
  };

  render() {
    return (
      <>
        <Card>
          <center>
            <ul>
              <Title>Login</Title>
              <form onSubmit={this.handleSubmit}>
                <MyInput
                  label="Digite seu email:"
                  onChange={this.handleInputChange}
                  name="email"
                  type="text"
                />
                <MyInput
                  label="Digite sua senha:"
                  onChange={this.handleInputChange}
                  name="password"
                  type="password"
                />
                <SendButton type="submit">Enviar</SendButton>
              </form>
            </ul>
          </center>
        </Card>
      </>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(userActions, dispatch);

export default connect(null, mapDispatchToProps)(Login);
