import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import {
	HomeLayout,
	Landing,
	Error,
	Products,
	SingleProduct,
	Cart,
	About,
	Contact,
	Register,
	Login,
	Checkout,
	Orders,
} from './pages';
import { ErrorElement } from './components';

import { loader as landingLoader } from './pages/Landing';
import { loader as proudctsLoader } from './pages/Products';
import { loader as singleProudctLoader } from './pages/SingleProduct';

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomeLayout />,
		errorElement: <Error />,
		children: [
			{
				index: true,
				element: <Landing />,
				errorElement: <ErrorElement />,
				loader: landingLoader,
			},
			{
				path: 'products',
				element: <Products />,
				errorElement: <ErrorElement />,
				loader: proudctsLoader,
			},
			{
				path: 'products/:id',
				element: <SingleProduct />,
				errorElement: <ErrorElement />,
				loader: singleProudctLoader,
			},
			{
				path: 'cart',
				element: <Cart />,
				errorElement: <ErrorElement />,
			},
			{
				path: 'about',
				element: <About />,
				errorElement: <ErrorElement />,
			},
			{
				path: 'contact',
				element: <Contact />,
				errorElement: <ErrorElement />,
			},
			{
				path: 'checkout',
				element: <Checkout />,
				errorElement: <ErrorElement />,
			},
			{
				path: 'orders',
				element: <Orders />,
				errorElement: <ErrorElement />,
			},
		],
	},
	{
		path: '/login',
		element: <Login />,
		errorElement: <Error />,
	},
	{
		path: '/register',
		element: <Register />,
		errorElement: <Error />,
	},
]);

const App = () => {
	return <RouterProvider router={router} />;
};
export default App;
