import { RouteObject } from 'react-router-dom';
import Home from './Home';
import Error from './Error/Error';
import CharacterCreator from './CharacterCreator';

const routes: RouteObject[] = [
	{
		path: '/',
		element: <Home />,
		errorElement: <Error />,
	},
	{
		path: '/create',
		element: <CharacterCreator />,
	},
];

export default routes;
