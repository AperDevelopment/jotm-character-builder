import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import { Button } from '@mui/joy';

export default function Error() {
	const error = useRouteError();
	console.error(error);

	return (
		<main>
			<h1>Ouch, Nat 1!</h1>
			<h2>Sorry, an unexpected error has occurred.</h2>
			<hr />
			<p>
				<i>{isRouteErrorResponse(error) && error.statusText}</i>
			</p>
			<hr />
			<Button component="a" href="/" size="lg" color="danger">
				Return to the roots
			</Button>
		</main>
	);
}
