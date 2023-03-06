import { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { TextField, Button } from '@mui/material';
import { createUserInLocalStorage } from '../utils/localStorage';
import { validateName, validateUsername, validateEmail, validatePassword, validateConfirmPassword } from '../utils/validators';

const Signup = () => {
//   const history = useHistory();
const navigate = useNavigate();
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = () => {
    const user = {
      name,
      username,
      email,
      password,
    };
    createUserInLocalStorage(user);
    // history.push('/login');
    navigate('/login')
  };

  return (
    <div>
      <h1>Signup</h1>
      <TextField
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
        <br />
      <TextField
        label="Confirm Password"
        type="password"
        value={confirmPassword}
        error={!!confirmPassword && password !== confirmPassword}
        helperText={
          !!confirmPassword && password !== confirmPassword
            ? 'Passwords do not match'
            : ''
        }
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <br />
      <Button variant="contained" onClick={handleSignup}>
        Signup
      </Button>
    </div>
  );
};

export default Signup;