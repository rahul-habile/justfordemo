import { Box } from '@mui/material';
import Login from '../components/Login';

const LoginPage = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', pt: 4 }}>
      <Login />
    </Box>
  );
};

export default LoginPage;