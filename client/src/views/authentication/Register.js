import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import authService from '../../services/authService'
import '../../components/shared/button/button.css'


import { Button, ToggleButtonGroup, Container, styled, ToggleButton, TextField, Typography, Box} from '@mui/material';



const Register = () => {
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [userType, setUserType] = useState('listener');
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const firstNameInput = React.useRef(null);
    const lastNameInput = React.useRef(null);
    const emailInput = React.useRef(null);
    const usernameInput = React.useRef(null);
    const passwordInput = React.useRef(null);
    
    useEffect(() => {
        lastNameInput.current.focus();
    }, [lastName]);
    
    useEffect(() => {
        emailInput.current.focus();
    }, [email]);
    
    useEffect(() => {
        usernameInput.current.focus();
    }, [username]);
    
    useEffect(() => {
        passwordInput.current.focus();
    }, [password]);
    
    useEffect(() => {
        firstNameInput.current.focus();
    }, [firstName]);

    const FormContainer = styled('div')(({ theme }) => ({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        borderRadius: '10px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        backgroundColor: 'white',
        marginTop: '60px'
    }));

    const FormTitle = styled(Typography)(({ theme }) => ({
        marginBottom: '2rem',
        fontFamily: 'Poppins, sans-serif',
    }));

    const FormInput = styled(TextField)(({ theme }) => ({
        marginBottom: '1rem',
        width: '100%',
    }));

    const SubmitButton = styled(Button)(({ theme }) => ({
        marginTop: '1rem',
    }));

    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
    
        setLoading(true);
        setErrorMessage('');
    
        try {
            await authService.register(firstName, lastName, email, username, password, userType);
            navigate('/login');
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                setErrorMessage(error.response.data.message);
            } else {
                setErrorMessage('An error occurred while registering. Please try again later.');
            }
        } finally {
            setLoading(false);
        }
    };
    



    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     setLoading(true);
    //     setErrorMessage('');

    //     try {
    //         await authService.register(firstName, lastName, email, username, password, userType);
    //         navigate('/login');
    //     } catch (error) {
    //         setErrorMessage(error.message);
    //     } finally {
    //         setLoading(false);
    //     }
    // };

    return (
        <Container maxWidth="xs">
            <FormContainer className='form-container'>
                <FormTitle variant="h4">
                    Welcome to <span className='highlight' >Coda</span>
                </FormTitle>
                <FormTitle variant="h6">
                    Sign Up :)
                </FormTitle> 
                <Link style={{marginBottom: "20px", marginTop: "-30px"}} to={'/login'}>or login</Link>
                {errorMessage && <div className="error-message">{errorMessage}</div>}
                <form onSubmit={handleSubmit}>
                    <FormInput
                        className='form-input'
                        label="First Name"
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        inputRef={firstNameInput}
                        required
                    />
                    <FormInput
                        className='form-input'
                        label="Last Name"
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        inputRef={lastNameInput}
                        required
                    />
                    <FormInput
                        className='form-input'
                        label="Email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        inputRef={emailInput}
                        required
                    />
                    <FormInput
                        className='form-input'
                        label="Create a username"
                        type="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        inputRef={usernameInput}
                        required
                    />
                    <FormInput
                        className='form-input'
                        label="Create a Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        inputRef={passwordInput}
                        required
                    />
                        <Box display="block" marginBottom="1rem">
                            <ToggleButtonGroup
                                value={userType}
                                exclusive
                                onChange={(event, newType) => {
                                    if (newType !== null) {
                                        setUserType(newType);
                                    }
                                }}
                                aria-label="user type"
                                className="custom-toggle-button-group"
                            >
                                <ToggleButton value="listener" aria-label="listener">
                                    Listener
                                </ToggleButton>
                                <ToggleButton value="artist" aria-label="artist">
                                    Artist
                                </ToggleButton>
                            </ToggleButtonGroup>
                        </Box>
                    <SubmitButton
                        className="register-button"
                        type="submit"
                        variant="contained"
                        color="primary"
                    >
                        Join!
                    </SubmitButton>
                </form>
            </FormContainer>
        </Container>
    );
}

export default Register;

/*
This code defines the Register component, which handles user registration. 
It includes a form with fields for email, username, password, and user type (listener or artist). 
When the form is submitted, the component calls the authService.register() function, passing the input values. 
If the registration is successful, the user is redirected to the login page. 
If there's an error, an error message is displayed.
*/