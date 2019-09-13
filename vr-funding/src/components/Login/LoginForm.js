import React from 'react';
import Styled from 'styled-components';

class LoginForm extends React.Component {
  state = {
    email: '',
    password: '',
  }

  render() {
    return (
      <Form>
        <input
          type="text"
          name="email"
          value={this.state.email}
        ></input>
        <input
          type="text"
          name="password"
          value={this.state.password}
        ></input>
      </Form>
    )
  }
}

const Form = Styled.form`
  display: flex;
  flex-flow: column no-wrap;
  justify-content: center;
`;

export default LoginForm;