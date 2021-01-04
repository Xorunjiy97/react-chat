import React from 'react';
import { getChat } from './actions';
import './messangerStyled.css';
import Ws from '../../websocket/Websoket';
import * as api from '../../REST';

export default class Messenger extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            message: '',
            allMessages: [],
        }

        this.ws = new Ws();

        api.getAllMessages().then(res => this.printChat(res));
        this.ws.getOnMessage(this.printChat.bind(this));
    }

    printChat = chat => {
        this.setState({
            allMessages: chat,
        });
    }

    handleInput = event => {
        const {
            value,
        } = event.target;
        const {
            onSaveMessage,
        } = this;
        onSaveMessage(value);

        // clearInput = event => { event.target.value = ''; }
    }

    onSaveMessage = value => {
        this.setState(() => ({
            message: value,
            input: value,
        }));
    }

    handleClick = event => {
        const {
            currentUserLoged,
            user
        } = this.props;
        const { name } = event.target;
        event.preventDefault();
        
        if(name === "send") {
           this.sendMessage(this.state.message);
           this.setState({
                input : ''
           });
        } else {
            currentUserLoged();
            console.log(user);
            api.logOut( { user } );
        }
    }

    sendMessage = message => {
        const {
            sendMessage,
            user
        } = this.props;
        const {
            onSaveMessage,
        } = this;
        if(message.length !== 0){
            onSaveMessage(message);
            const messageInfo = {user : user, message: message};
            sendMessage(messageInfo);
            this.ws.sendMessage(messageInfo);
        } else {
            alert('Введите сообщение');
        }
    }

    render() {
        const {
            handleInput,
            handleClick,
        } = this;

        return (
         <div className={"main-conatiner"}>           
            <div className={'main-container__header'}>
                <button name={"close"} className={"main-container__log-out"} children={"X"} onClick={handleClick} />
                <div className={"header__window-message"}>
                    <div>
                        <ul className={"ul__li"} >
                            { // здесь будет отрисовано необходимое кол-во компонентов
                                this.state.allMessages.map((item) => (
                                    <li children= { `${item.user}    ` + `${item.message}`} />
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
            <div className={"main-container__footer"}>
                <input className={" footer__input-footer"} onChange={handleInput} value={this.state.input} />
                <button name={"send"} className={" footer__button-footer"} children={"Send"} onClick={handleClick} />
            </div>
        </div>
        )
    }
}
