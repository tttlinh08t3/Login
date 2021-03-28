
export const service = {
    login,
    logout,
};

async function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };

    //assume that user is valid and login successful (not call backend now)
    const user ={
        "name": "linh",
        "id": 1
    }
    localStorage.setItem('user', JSON.stringify(user));
    return user;
}

function logout() {
    localStorage.removeItem('user');
}