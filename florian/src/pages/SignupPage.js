import { Box } from '@mui/material';
import Signup from '../components/Signup';

const SignupPage = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', pt: 4 }}>
      <Signup />
    </Box>
  );
};

export default SignupPage;