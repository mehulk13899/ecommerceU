import React, { Component } from 'react'
import FormComponent from "../form-component/form.component";
import ButtonComponent from "../button-component/button-component";
import './sign-in.styles.scss';
import { signInWithGoogle, auth } from "../../firebase/firebase-utils";

export default class SignIn extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' })
    } catch (error) {
      console.log(error)
    }
  }

  handleOnChange = event => {
    event.preventDefault();
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div className='sign-in'>
        <h1 className='title'>I already have an Account</h1>
        <span>Sign in with your email and Password</span>
        <form onSubmit={this.handleSubmit}>
          <FormComponent
            type='email'
            name='email'
            handle_change={this.handleOnChange}
            value={this.state.email}
            label='Email'
          ></FormComponent>
          <FormComponent
            type='password'
            name='password'
            handle_change={this.handleOnChange}
            value={this.state.password}
            label='Password'
          ></FormComponent>
          <div className='buttons'>
            <ButtonComponent type='submit'>Sign in</ButtonComponent>
            <ButtonComponent onClick={signInWithGoogle} isGoogleButton>Sign in with Google</ButtonComponent>
          </div>

        </form>
      </div >
    )
  }
}
