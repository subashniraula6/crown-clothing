import React from 'react'
import './sign-up.styles.scss'
import { FormInput } from '../form-input/form-input.component'
import { CustomButton } from '../custom-button/custom-button.component'
import { connect } from 'react-redux'
import { signUpStart } from '../../redux/user/user.actions'

class SignUp extends React.Component {
    constructor() {
        super();
        this.state = {
            displayName: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
    }
    handleSubmit = async event => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state
        const { signUpStart } = this.props

        if (password !== confirmPassword) {
            alert("Password Mismatch");
            return;
        }
        
        signUpStart({ email, password, displayName })
        
        this.setState({
            displayName: "",
            email: "",
            password: "",
            confirmPassword: ""
        })
    }

    handleChange = event => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state
        return (
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span>Sign Up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput
                        type="text"
                        name="displayName"
                        value={displayName}
                        handleChange={this.handleChange}
                        label="Display Name"
                        required
                    />
                    <FormInput
                        type="email"
                        name="email"
                        value={email}
                        handleChange={this.handleChange}
                        label="Email"
                        required
                    />
                    <FormInput
                        type="password"
                        name="password"
                        value={password}
                        handleChange={this.handleChange}
                        label="Password"
                        required
                    />
                    <FormInput
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        handleChange={this.handleChange}
                        label="Confirm Password"
                        required
                    />
                    <CustomButton type="submit"> SIGN UP </CustomButton>
                </form>

            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(SignUp)