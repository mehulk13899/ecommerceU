import React, { Component } from 'react'
import FormComponent from "../form-component/form.component";
import ButtonComponent from "../button-component/button-component";
import { auth, createUserProfileDocument } from "../../firebase/firebase-utils";
import "./sign-up.styles.scss";
export default class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            displayName: '',
            email: '',
            password: '',
            conform_password: ''
        }
    }
    handleSubmit = async event => {
        const { displayName, email, password, conform_password } = this.state;

        event.preventDefault();
        if (password !== conform_password) {
            alert('Both Password Are not Same');
            return;
        }
        try {
            const user = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, { displayName })
            this.setState({
                displayName: '',
                email: '',
                password: '',
                conform_password: ''
            })
            // console.log(user);
        } catch (error) {
            console.log(error)
        }
    }
    handleOnChange = event => {
        let inputName = event.target.name;
        let value = event.target.value;
        this.setState({ [inputName]: value });
        event.preventDefault();
    }
    render() {
        // const { displayName, email, password, conform_password } = this.state;
        return (
            <div className='sign-up'>
                <h1 className='title'>I do not have an Account</h1>
                <span>Sign up with your email and Password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormComponent
                        handle_change={this.handleOnChange}
                        type='text'
                        name='displayName'
                        value={this.state.displayName}
                        label='Display Name'
                    ></FormComponent>
                    <FormComponent
                        label='Email'
                        handle_change={this.handleOnChange}
                        type='text'
                        name='email'
                        value={this.state.email}
                    ></FormComponent>
                    <FormComponent
                        label='Password'
                        handle_change={this.handleOnChange}
                        type='password'
                        name='password'
                        value={this.state.password}
                    ></FormComponent>
                    <FormComponent
                        label='Conform Password'
                        handle_change={this.handleOnChange}
                        type='password'
                        name='conform_password'
                        value={this.state.conform_password}
                    ></FormComponent>
                    <div className='button'>
                        <ButtonComponent type='submit'>SIGN UP</ButtonComponent>
                    </div>
                </form>
            </div>
        )
    }
}
