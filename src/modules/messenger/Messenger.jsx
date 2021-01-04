import React from 'react';
import { getChat } from './actions';
import './messangerStyled.css';

export default class Messenger extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            message: '',
        }
    }

    handleInput = event => {
        const {
            value,
        } = event.target;
        const {
            onSaveMessage,
        } = this;
        console.log(value);
        onSaveMessage(value);
    }

    onSaveMessage = value => {
        this.setState(() => ({
            message: value,
        }));

    }

    handleClick = event => {
        const {
            currentUserLoged, 
            sendMessage,
            chat,
            user

        } = this.props;
        const { name } = event.target;
        const {
            onSaveMessage,
        } = this;
        event.preventDefault();
        
        if(name === "send") {
            onSaveMessage(this.state);
            const messageInfo = {user : user, message: this.state.message};
            console.log(this.props)
            console.log(messageInfo);
            sendMessage(messageInfo);
            
            
        } else {
            currentUserLoged();
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
                <div></div>
            </div>  
            <div className = {'container__message-input-btn'}>
                <div className = {'main-container__header'}>
                    <div className={"header__window-message"}>
                        <div>
                            <ul className={"ul__li"} >
                            { // здесь будет отрисовано необходимое кол-во компонентов
                                this.props.chat.map((item) => (
                                    <li name = {"li"} children = {`${item.user}    ` + `${item.message}`} />
                                ))
                            }
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={"main-container__container-input-btn"}>
                    <input className={" container-input-btn__input"} onChange = {handleInput} />
                    <button name = {"send"} className={" container-input-btn__button"} children={"Send"} onClick = {handleClick} />
            </div>
            </div>    
            <div className = {'main-container__container-log-out'}>
                 <button name={"close"} className={"container-log-out__btn"} children={"X"} onClick = {handleClick} />
            </div>
        </div>
        )
    }
}
