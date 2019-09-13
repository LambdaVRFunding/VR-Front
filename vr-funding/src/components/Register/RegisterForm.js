import React from 'react';
import Styled from 'styled-components';

class RegisterForm extends React.Component {
  state = {
    name: '',
    email: '',
    password: '',
    type_id: null
  };

  formHandler() {

  }

  inputHandler = e => {
    console.log(e.target.name);
    
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <Form>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.inputHandler}
          placeholder="Name"
        ></input>
        <input
          type="text"
          name="email"
          value={this.state.email}
          onChange={this.inputHandler}
          placeholder="Email"
        ></input>
        <input
          type="text"
          name="password"
          value={this.state.password}
          onChange={this.inputHandler}
          placeholder="Password"
        ></input>
        <div>
            <label>Dreamer</label>
            <input type="radio" name="type_id" value="1" onChange={this.inputHandler}></input>
        </div>
        <div>
            <label>Investor</label>
            <input type="radio" name="type_id" value="2" onChange={this.inputHandler}></input>
        </div>
        <button type="submit">Submit</button>
      </Form>
    )
  }
}

const Form = Styled.form`
  display: flex;
  flex-direction: column;
  flex-flow: column no-wrap;
  justify-content: center;
`;

export default RegisterForm;