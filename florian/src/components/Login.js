import { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Snackbar, TextField, Button } from '@mui/material';
import { getUserFromLocalStorage } from '../utils/localStorage';

const Login = () => {
//   const history = useHistory();
const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleLogin = () => {
    const user = getUserFromLocalStorage(username);
    if (user && user.password === password) {
      localStorage.setItem('currentUser', JSON.stringify(user));
    //   history.push('/dashboard');
    navigate('/dashboard');
    } else {
      setOpenSnackbar(true);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <TextField
        label="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <Button variant="contained" onClick={handleLogin}>
        Login
      </Button>
      <Snackbar
        open={openSnackbar}
        onClose={() => setOpenSnackbar(false)}
        message="Invalid username or password"
      />
    </div>
  );
};

export default Login;