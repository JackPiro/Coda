// import axios to make HTTP requests
import axios from 'axios';

// a constant to store the API_URL
const API_URL = 'http://localhost:5000/api/auth/';

// register method to make a POST request to the API’s register endpoint
const register = async (email, username, password, userType) => {
    // use axios to make a POST request to the API’s register endpoint
    const response = await axios.post(API_URL + 'register', {
    // pass the email, username, password, and userType to the request body
    email,
    username,
    password,
    userType,
    });

    // return the response data
    return response.data;
};

// login method to make a POST request to the API’s login endpoint
const login = async (email, password) => {
    // use axios to make a POST request to the API’s login endpoint
    const response = await axios.post(API_URL + 'login', {
        // pass the email and password to the request body
        email,
        password,
    });

    // if the response data contains an accessToken
    if (response.data.accessToken) {
        // store the response data in the browser’s local storage
        localStorage.setItem('user', JSON.stringify(response.data));
    }

    // return the response data
    return response.data;
};

// logout method to remove the user data from local storage
const logout = () => {
    localStorage.removeItem('user');
};

// export the methods as an object
const authService = {
    register,
    login,
    logout,
};

// export the authService object as the default export
export default authService;