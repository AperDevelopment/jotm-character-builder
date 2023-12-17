import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

export default function Error() {
	const error = useRouteError();
	console.error(error);

	return (
		<main>
			<h1>Ouch, Nat 1!</h1>
			<h2>Sorry, an unexpected error has occurred.</h2>
			<p>
				<i>{isRouteErrorResponse(error) && error.statusText}</i>
			</p>
		</main>
	);
}
