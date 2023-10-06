import axios from 'axios';

const API_URL = 'http://localhost:5001/api/auth/';

// handle registering a new user
const register = async (firstName, lastName, email, username, password, role) => {
    // send a POST request to the API with the user's information
    try {
        const response = await axios.post(API_URL + 'register', {
            firstName,
            lastName,
            email,
            username,
            password,
            role,
        });
    
        // return the response from the API
        return response.data;
    } catch (error) {
        console.log(error, "error registering");
    }
};

// handle logging in an existing user
const login = async (email, password) => {
    // send a POST request to the API with the user's information
    const response = await axios.post(API_URL + 'login', {
        email,
        password,
    }, {withCredentials: true});

    // if the API returns an access token, store the user's information in local storage
    if (response.data.userToken) {
        console.log(response.data)
        localStorage.setItem('user', JSON.stringify(response.data));
    }

    console.log(response.data)

    // return the response from the API
    return response.data;
};


// handle logging out the current user
const logout = async () => {
    // remove the user's information from local storage
    // localStorage.removeItem('user');
    try {
        await axios.post('http://localhost:5001/api/auth/logout');
        console.log("Logged out from the server");
    } catch (error) {
        console.log("Error logging out from the server", error);
    }
};

// define the authentication service object
const authService = {
    register,
    login,
    logout,
};

// export the authentication service object
export default authService;
