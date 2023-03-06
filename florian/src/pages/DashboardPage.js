import { Box } from '@mui/material';
import Dashboard from '../components/Dashboard';

const DashboardPage = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', pt: 4 }}>
      <Dashboard />
    </Box>
  );
};

export default DashboardPage;