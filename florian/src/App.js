import { createBrowserRouter, BrowserRouter,Routes, Route,Link } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import DashboardPage from './pages/DashboardPage';

// const router = createBrowserRouter([
//   {
//     path: '/login',
//     element: <LoginPage />,
//   },
//   {
//     path: '/signup',
//     element: <SignupPage />,
//   },
//   {
//     path: '/dashboard',
//     element: <DashboardPage />,
//   },
//   {
//     path: '*',
//     element: <LoginPage />,
//   },
// ]);

function App() {
//   return <BrowserRouter router={router} />;
<>


<SignupPage/>
</>
   /* <Link to='/'>LoginPage</Link>
   <Link to='/signup'>SignupPage</Link>
   <Link to='/dashboardPage'>DashboardPage</Link>


   <Routes>
    <Route exact path='/' element={<LoginPage/>}/>
    <Route exact path='/signup' element={<SignupPage/>}/>
    <Route exact path='/dashboardPage' element={<DashboardPage/>}/>
   </Routes>
</> */
}

export default App;