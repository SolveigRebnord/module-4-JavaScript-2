const tokenKey = "token";
const userKey = "user";

function saveToken(token) {
    console.log("token: ", token)
    console.log("tokenKey: ", tokenKey)
    saveToStorage(tokenKey, token);
}

function getToken() {
    const value = localStorage.getItem(tokenKey);
    if (value) {
        return JSON.parse(value); // convert to JS
    } else {
        return null;
    }
}

// save user object
function saveUser(user) {
    saveToStorage(userKey, user);
}

function getUserName() {
    const value = localStorage.getItem(userKey);
    if (value) {
        return JSON.parse(value); // convert to JS
    } else {
        return null;
    }
}

// function which save data to the local storage
function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
}

// function which gets data from the local storage
function getFromStorage(key) {
 
}

function clearStorage() {
    localStorage.clear();
}

export {getToken, saveToken, saveUser, getUserName, clearStorage}
