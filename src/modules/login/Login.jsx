import React from 'react';
import './loginStyles.css';

export default class Login extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            login: '',
        }
    }

    handleInput = event => {
        const {
            name,
            value,
        } = event.target;

        const { onSaveLogin } = this;

         if (name === 'login') {
            onSaveLogin(value);
        }
    }

    onSaveLogin = value => {
        this.setState(() => ({
            login: value,
        }));
    }

    handleClick = event => {
        // const {
        //     saveCurrentUser,
        //     } = this.props;
        event.preventDefault();

        // saveCurrentUser(this.state.login);

    }

    render() {
        const {
            handleClick,
            handleInput,
        } = this;
        console.log('--------render-------')
        return (
            <div className = {'root__avtoriz-container'}>
                <div className = {'avtoriz-container__heder-div'}>
                    <h1 className = {'heder-div__heder-text'}
                        children={'Salam Aleykum'}
                    />
                </div>
                <div className = {'window__login-body'}>
                    <div className = {'avtoriz-container__login-input-div'}>
                        <input name={'login'}
                               placeholder= {'Введите логин...'}
                               className = {'login-input-div__login-input'}
                               onChange={handleInput}
                        />
                    </div>
                </div>
                <div className = {'avtoriz-container__login-button-div'}>
                    <button id = {'login-button'}
                            className = {'login-button-div__login-button'}
                            onClick={handleClick}
                    />
                </div>
            </div>
        );
    }
}
