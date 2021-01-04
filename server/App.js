const express = require('express');
const path = require('path');

class App {
    constructor(db) {
        this._db = db;
        this._app = express();
        this._app.use(express.json());
        this._app.use('/', express.static(path.resolve(__dirname, '../public')));

        this._app.get('/getAllMessages', this.getAllMessages);
        this._app.post('/addMessage', this.addMessage);
        this._app.post('/logIn', this.logIn);
        this._app.delete('/logOut', this.logOut);
    }

    getAllMessages = (req, res) => {
        const messages = this._db.getMessages();

        res.send(messages);
        res.end();
    };

    addMessage = (req, res) => {
        const { body } = req;

        this._db.addNewMessage(body);
        res.end();
    };

    logOut = (req, res) => {
        const { user } = req.body;

        this._db.deleteUserFromDb(user);
        res.end();
    };

    logIn = (req, res) => {
        const { user } = req.body;

        res.send(this._db.addUserToDb(user));
        res.end();
    };

    getApp = () => this._app;
}

module.exports = App;
