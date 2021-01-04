import React from 'react';
import './loginStyles.css';
import * as api from '../../REST'
class Login extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            login: '',
        };
    }

    handleInput = event => {
        const {
            name,
            value,
        } = event.target;
        const {
            onSaveLogin,
        } = this;

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
        const { 
            saveCurrentUser,
            } = this.props;
        event.preventDefault();
        if(this.state.login.length !== 0){
            saveCurrentUser(this.state.login);
            const userName = this.state.login;
            console.log(userName);
            api.logIn({ userName }).then(res => this.checkLogIn(res))
        } else {
            alert('Введите имя пользователя');
        }
    }

    checkLogIn = result => {
        const { 
            currentUserLoged 
            } = this.props;
        if(result){
            currentUserLoged();
        }else{
            alert("Данное имя на данный момент закреплено за другим пользователем. Попробуйте другое имя.");
        }
      }

    render() {
        const {
            currentUserName,
        } = this.props;
        const {
            handleClick,
            handleInput,
        } = this;
        return (
            <div className={'root__avtoriz-container'}>
                <div className={'avtoriz-container__heder-div'}>
                    <h1 className={'heder-div__heder-text'}
                        children={'Salam Aleykum'}
                    ></h1>
                </div>
                <div className={'window__login-body'}>
                    <div className={'avtoriz-container__login-input-div'}>
                        <input name={'login'}
                            placeholder= {'Введите логин...'}
                            className={'login-input-div__login-input'}
                            onChange={handleInput}
                        /> 
                    </div>
                </div>
                <div className={'avtoriz-container__login-button-div'}>
                    <button id={'login-button'}
                    className={'login-button-div__login-button'}
                    onClick={handleClick}
                    ></button>
                </div>
            </div>
        );
    }
}

export default Login;
