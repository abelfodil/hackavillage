import * as React                      from 'react';
import Input, { InputLabel }           from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';
import { ChangeEvent }                 from 'react';
import Button                          from 'material-ui/Button';

interface RegisterState {
    email: string;
    emailError: boolean;
    emailErrorText: string;
    password: string;
    passwordError: boolean;
    passwordErrorText: string;
    firstName: string;
    firstNameError: boolean;
    firstNameErrorText: string;
    lastName: string;
    lastNameError: boolean;
    lasttNameErrorText: string;
}

interface RegisterProps {
    handleRegister(email: string, password: string, firstName: string, lastName: string): void;
}

class Register extends React.Component<RegisterProps, RegisterState> {
    constructor(props: RegisterProps) {
        super(props);
        this.state = {
            email: '',
            emailError: false,
            emailErrorText: '',
            password: '',
            passwordError: false,
            passwordErrorText: '',
            firstName: '',
            firstNameError: false,
            firstNameErrorText: '',
            lastName: '',
            lastNameError: false,
            lasttNameErrorText: ''
        };
    }

    sanitizeText = (text: string): [boolean, string] => {
        if (!text.replace(/\s/g, '').length) { // Whitespace only
            return [true, 'Write something...'];
        }
        if (/\s/.test(text)) {
            return [true, 'Contain spaces'];
        }
        if (!(/^[a-z0-9@.]+$/i.test(text))) {
            return [true, 'Only alphanumerics'];
        }
        return [false, ''];
    }

    handleChangeEmail = (emailToSanitize: string) => {
        let [errorBool, errorText] = this.sanitizeText(emailToSanitize);
        this.setState({
            email: emailToSanitize,
            emailError: errorBool,
            emailErrorText: errorText
        });
        return errorBool;
    }
    handleChangePassword = (passwordToSanitize: string) => {
        let [errorBool, errorText] = this.sanitizeText(passwordToSanitize);
        this.setState({
            password: passwordToSanitize,
            passwordError: errorBool,
            passwordErrorText: errorText
        });
        return errorBool;
    }

    handleChangeFirstName = (fNameToSanitize: string) => {
        let [errorBool, errorText] = this.sanitizeText(fNameToSanitize);
        this.setState({
            firstName: fNameToSanitize,
            firstNameError: errorBool,
            firstNameErrorText: errorText
        });
        return errorBool;
    }

    handleChangeLastName = (lNameToSanitize: string) => {
        let [errorBool, errorText] = this.sanitizeText(lNameToSanitize);
        this.setState({
            lastName: lNameToSanitize,
            lastNameError: errorBool,
            lasttNameErrorText: errorText
        });
        return errorBool;
    }

    render() {
        return (
            <main>
                <span>Register</span>
                <br/>
                <FormControl className="LeftField" error={this.state.firstNameError}>
                    <InputLabel htmlFor="name-simple">First Name</InputLabel>
                    <Input
                        id="name-simple"
                        value={this.state.firstName}
                        onChange={(event: ChangeEvent<HTMLInputElement>) => {
                            this.setState({firstName: event.target.value});
                        }}
                    />
                    <FormHelperText id="name-helper-text"> {this.state.firstNameErrorText}</FormHelperText>
                </FormControl>
                <FormControl className="RightField" error={this.state.lastNameError}>
                    <InputLabel htmlFor="name-simple">Last Name</InputLabel>
                    <Input
                        id="name-simple"
                        value={this.state.lastName}
                        onChange={(event: ChangeEvent<HTMLInputElement>) => {
                            this.setState({lastName: event.target.value});
                        }}
                    />
                    <FormHelperText id="name-helper-text"> {this.state.lasttNameErrorText}</FormHelperText>
                </FormControl>
                <br/>
                <FormControl className="LeftField" error={this.state.emailError}>
                    <InputLabel htmlFor="name-simple">Email</InputLabel>
                    <Input
                        id="name-simple"
                        value={this.state.email}
                        onChange={(event: ChangeEvent<HTMLInputElement>) => {
                            this.setState({email: event.target.value});
                        }}
                    />
                    <FormHelperText id="name-helper-text"> {this.state.emailErrorText}</FormHelperText>
                </FormControl>
                <FormControl className="RightField" error={this.state.passwordError}>
                    <InputLabel htmlFor="name-helper">Password</InputLabel>
                    <Input
                        id="name-helper"
                        type="password"
                        value={this.state.password}
                        onChange={(event: ChangeEvent<HTMLInputElement>) => {
                            this.setState({password: event.target.value});
                        }}
                    />
                    <FormHelperText id="name-helper-text">{this.state.passwordErrorText}</FormHelperText>
                </FormControl>
                <br/>
                <Button
                    raised={true}
                    onClick={() => {
                        let errorUser = this.handleChangeEmail(this.state.email);
                        let errorPassword = this.handleChangePassword(this.state.password);
                        let errorFirstName = this.handleChangeFirstName(this.state.firstName);
                        let errorLastName = this.handleChangeLastName(this.state.lastName);
                        if (errorUser || errorPassword || errorFirstName || errorLastName) {
                            return;
                        } else {
                            this.props.handleRegister(
                                this.state.email, this.state.password, this.state.firstName, this.state.lastName);
                        }
                    }}
                >
                    Submit
                </Button>
            </main>
        );
    }
}

export default Register;
