class Model {
    constructor() {
        this._messages = [];

        this.logedUsers = [];
    }

    getMessages = () => this._messages;

    addNewMessage = newMessage => {
        this._messages.push(newMessage);
    };

    deleteUserFromDb = user => {
        const index = this.logedUsers.indexOf(user);
        if (index > -1) {
            this.logedUsers.splice(index, 1);
        }
    };

    addUserToDb = user => {
        if (!this.logedUsers.includes(user)) {
            this.logedUsers.push(user);
            return true;
        }
    };
}

module.exports = Model;
