import React from 'react';
import './loginStyles.css';

class Login extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            login: '',
            password: '',
        }
        console.log('-----constructor----');
    }

    componentDidMount() {
        console.log('--------componentDidMount------');
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('-------componentDidUpdate------');
    }

    componentDidCatch(error, errorInfo) {
        console.log('error', error);
        console.log('errorInfo', errorInfo)
    }

    componentWillUnmount() {
        console.log('--------componentWillUnmount-------');
    }

    handleInput = event => {
        const {
            name,
            value,
        } = event.target;
        const {
            onSaveLogin,
            onSavePassword,
        } = this;

        if(name === 'password') {
            onSavePassword(value);
        } else if (name === 'login') {
            onSaveLogin(value);
        }
    }

    onSavePassword = value => {
        this.setState(() => ({
            password: value,
        }));
    }

    onSaveLogin = value => {
        this.setState(() => ({
            login: value,
        }));
    }

    handleClick = event => {
        const { saveCurrentUser } = this.props;
        event.preventDefault();

        saveCurrentUser(this.state.login);
    }

    render() {
        const {
            currentUserName,
        } = this.props;
        console.log(this.props)
        const {
            handleClick,
            handleInput,
        } = this;
        console.log('--------render-------')
        return (
            <div className={'wrapper'}>
                <input name={'login'}
                       value={this.state.login}
                       onChange={handleInput}
                       className={'login__input'}
                       placeholder={'Введите логин...'}
                />
                <input name={'password'}
                       onChange={handleInput}
                       className={'password__input'}
                       placeholder={'Введите пароль...'}
                />
                <button onClick={handleClick}
                        children={'Sign Up'}
                />
            </div>
        );
    }
}

export default Login;
