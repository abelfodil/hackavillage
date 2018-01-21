import * as React                      from 'react';
import Input, { InputLabel }           from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';
import { ChangeEvent }                 from 'react';
import Button                          from 'material-ui/Button';

interface LoginState {
    email: string;
    password: string;
    emailError: boolean;
    passwordError: boolean;
    emailErrorText: string;
    passwordErrorText: string;
}

interface LoginProps {
    handleLogin(email: string, password: string): void;
}

class Login extends React.Component<LoginProps, LoginState> {
    constructor(props: LoginProps) {
        super(props);
        this.state = {
            email: '',
            emailError: false,
            emailErrorText: '',
            password: '',
            passwordError: false,
            passwordErrorText: ''
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

    handleChangeUser = (user: string) => {
        let userToSanitize: string = user;
        let [errorBool, errorText] = this.sanitizeText(userToSanitize);
        this.setState({
            email: userToSanitize,
            emailError: errorBool,
            emailErrorText: errorText
        });
        return errorBool;
    }
    handleChangePassword = (password: string) => {
        let passwordToSanitize: string = password;
        let [errorBool, errorText] = this.sanitizeText(passwordToSanitize);
        this.setState({
            password: passwordToSanitize,
            passwordError: errorBool,
            passwordErrorText: errorText
        });
        return errorBool;
    }

    render() {
        return (
            <main>
                <span>Login</span>
                <br/>
                <FormControl error={this.state.emailError}>
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
                <br/>
                <FormControl error={this.state.passwordError}>
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
                        let errorEmail = this.handleChangeUser(this.state.email);
                        let errorPassword = this.handleChangePassword(this.state.password);
                        if (errorEmail || errorPassword) {
                            return;
                        } else {
                            this.props.handleLogin(this.state.email, this.state.password);
                        }
                    }}
                >
                    Submit
                </Button>
            </main>
        );
    }
}

export default Login;
