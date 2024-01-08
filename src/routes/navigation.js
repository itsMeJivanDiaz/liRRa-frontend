import LoginScreen from '../screens/Landing/LoginSreen';
import SignUpScreen from '../screens/Landing/SignUpScreen';
import DashboardScreen from '../screens/Main/DashboardScreen';

export const nav = [
	{ path: "/", name: "Login", element: <LoginScreen />, isMenu: true, isPrivate: false },
	{ path: "/signup", name: "SignUp", element: <SignUpScreen />, isMenu: true, isPrivate: false },
	{ path: "/dashboard", name: "Dashboard", element: <DashboardScreen />, isMenu: true, isPrivate: true },
];