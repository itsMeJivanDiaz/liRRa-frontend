/* eslint-disable no-unused-vars */
import { useSelector } from 'react-redux';
import { createContext } from 'react';
import { nav } from './navigation'
import { 
	BrowserRouter,
	Router,
	Route,
	Routes,
	Link
} from 'react-router-dom';
import Header from '../components/Header';

const RoutesProvider = () => {

	const userData = useSelector((state) => state.user.userData);

	return (
		<BrowserRouter>
			<Header nav={nav} userData={userData} />
			<Routes>
				{ 
					nav.map((r, i) => {
						if (r.isPrivate && userData) {
							return <Route key={i} path={r.path} element={r.element} />
						}
						if (!r.isPrivate) {
							return <Route key={i} path={r.path} element={r.element} />
						}
						return null;
					}) 
				}
			</Routes>
		</BrowserRouter>
	);
};

export default RoutesProvider;