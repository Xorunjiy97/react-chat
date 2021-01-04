// export function addNewMessage(message) {
//     try {
//         return fetch('http://localhost:3002/addMessage', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(message),
//         });
//     } catch (e) {
//         console.log('ERROR', e);
//     }
// }

export function getAllMessages() {
    try {
        return fetch('http://localhost:3002/getAllMessages')
        .then(res => res.json());
    } catch (e) {
        console.log('ERROR', e);
    }
}

export function logIn(user) {
    try {
        return fetch('http://localhost:3002/logIn', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
        .then(res => res.json());
    } catch (e) {
        console.log('ERROR', e);
    }
}

export function logOut(user) {
    try {
        return fetch('http://localhost:3002/logOut', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        });
    } catch (e) {
        console.log('ERROR', e);
    }
}
