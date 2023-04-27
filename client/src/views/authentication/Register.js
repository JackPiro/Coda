import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../../services/authService'

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';



const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [userType, setUserType] = useState('listener');
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const FormContainer = styled('div')(({ theme }) => ({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        borderRadius: '10px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        backgroundColor: 'white',
        marginTop: '100px'
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
            await authService.register(email, username, password, userType);
            navigate('/login');
        } catch (error) {
            setErrorMessage(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container maxWidth="xs">
            <FormContainer>
                <FormTitle variant="h4">
                    Welcome to Coda
                </FormTitle>
                <FormTitle variant="h6">
                    Register
                </FormTitle>
                <form onSubmit={handleSubmit}>
                    <FormInput
                        label="Name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <FormInput
                        label="Email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <FormInput
                        label="Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <SubmitButton
                        type="submit"
                        variant="contained"
                        color="primary"
                    >
                        Register
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