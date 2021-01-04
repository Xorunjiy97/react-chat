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
            handleClick,
            handleInput,
        } = this;

        return (
            <div className = {'root__avtoriz-container'}>
                <div className = {' root__line'}>
                    <div/>
                </div>
                <div className = {'root__container-header'}>
                    <div className = {'avtoriz-container__header-div'}>
                        <h1 children={'Salam Aleykum'}
                            className = {'header-div__header-text'}>  
                        </h1>
                    </div>
                    <div className = {'window__login-body'}>
                        <div className = {'avtoriz-container__login-input-div'}>
                            <input name={'login'}
                                onChange={handleInput}
                                className = {'login-input-div__login-input'}
                                placeholder= {'Введите логин...'}/>                             
                        </div>
                    </div>
                    <div className = {'avtoriz-container__login-button-div'}>
                        <button id = {'login-button'}
                                onClick={handleClick}
                                children= {'Next'}
                                className = {'login-button-div__login-button'}>
                        </button>                    
                    </div>
                </div>
                <div className = {'avtoriz-container__container-btn'}>
                    <button className = {'container-btn__btn-circle'}>
                    </button>
                </div>
            </div>
        );
    }
}

export default Login;
