import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import authService from '../../services/authService';
import '../../components/shared/button/button.css';

import jwt_decode from "jwt-decode";

import { Button, Container, styled, TextField, Typography } from '@mui/material';



const Login = () => {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const emailInput = React.useRef(null);
    const passwordInput = React.useRef(null);
    
    useEffect(() => {
        passwordInput.current.focus();
    }, [password]);

    useEffect(() => {
        emailInput.current.focus();
    }, [email]);


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
            await authService.login( email, password);
            navigate('/Home');
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                setErrorMessage(error.response.data.message);
            } else {
                setErrorMessage('An error occurred while registering. Please try again.');
            }
        } finally { //
            const user = JSON.parse(localStorage.getItem('user'));
            console.log(user.role, user.id)
            setLoading(false);
        }
    };

    return (
        <Container maxWidth="xs">
            <FormContainer className='form-container'>
                <FormTitle variant="h4">
                    Welcome back :O
                </FormTitle>
                <FormTitle variant="h6">
                    Login
                </FormTitle> 
                <Link style={{marginBottom: "20px", marginTop: "-30px"}} to={'/register'}>or register</Link>
                {errorMessage && <div className="error-message">{errorMessage}</div>}
                <form onSubmit={handleSubmit}>
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
                        label="Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        inputRef={passwordInput}
                        required
                    />
                    <Link style={{marginTop: "0px", display: "block"}} to={'/'}>forgot ya password hmmmm?</Link>
                    <SubmitButton
                        className='register-button'
                        type="submit"
                        variant="contained"
                        color="primary"
                    >
                        welcome
                    </SubmitButton>
                </form>
            </FormContainer>
        </Container>
    );
}

export default Login;


