import React from 'react';
import './messangerStyled.css';
import Ws from '../../websocket/Websoket';
import * as api from '../../REST';
import Message from './components/Message.jsx'

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
            <div className = {"main-conatiner"}>  
                <div className = {'container__head'}>
                    <div/>
                </div>  
                <div className = {'container__message-input-btn'}>
                    <div className = {'main-container__header'}>
                        <div className = {"header__window-message"}>
                            <div>
                                <ul className = {"window-message__list"} >
                                    { 
                                        this.props.chat.map((item, index) => (
                                            <Message key = {index}
                                                     user = {item.user}
                                                     text = {item.message}
                                                     currentUser = {this.props.user}/>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className = {"main-container__container-input-btn"}>
                        <input onChange = {handleInput}
                               className = {" container-input-btn__input"} />
                        <button name = {"send"} 
                                onClick = {handleClick} 
                                children = {"Send"} 
                                className = {" container-input-btn__button"} />
                    </div>
                </div>    
                <div className = {'main-container__container-log-out'}>
                    <button name = {"close"} 
                            onClick = {handleClick} 
                            children = {"X"} 
                            className = {"container-log-out__btn"} />
                </div>
            </div>
        )
    }
}
