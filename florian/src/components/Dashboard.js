import { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

const Dashboard = () => {
//   const history = useHistory();
const navigate=useNavigate();
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem('currentUser'))
  );

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    setCurrentUser(null);
    // history.push('/login');
    navigate('/login');
  };

  return (
    <div>
      <h1>Dashboard</h1>
      {currentUser && <h2>Welcome, {currentUser.name}!</h2>}
      <Button variant="contained" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
};

export default Dashboard;