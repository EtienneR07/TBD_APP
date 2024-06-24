import React from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';

const clientId = 'your_client_id'; // Replace with your Google OAuth client ID

const Login: React.FC = () => {
  const onFailure = (error: any) => {
    console.error('Login failed. Error:', error);
  };

  return (
    <div>
      <h2>Login with Google</h2>
        <GoogleLogin
            onSuccess={credentialResponse => {
            console.log(credentialResponse);
            }}
            onError={() => {
             console.log('Login Failed');
  }}
/>;
    </div>
  );
};

export default Login;
