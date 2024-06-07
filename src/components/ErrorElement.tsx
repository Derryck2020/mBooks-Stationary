import { useRouteError } from 'react-router-dom';

const ErrorElement = () => {
	const error = useRouteError();
	console.log(error);
	return (
		<div className='flex flex-col text-3xl justify-center items-center gap-y-4'>
			<h4>Oops! 🥶</h4>
			<p>There was an error...</p>
		</div>
	);
};
export default ErrorElement;
