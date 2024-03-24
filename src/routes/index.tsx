import '@fontsource/inter';
import { RouteObject } from 'react-router-dom';
import Home from './Home';
import Error from './Error/Error';
import CharacterCreator from './CharacterCreator';
import SpellList from './SpellList';

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
	{
		path: '/spell-list',
		element: <SpellList />,
	},
];

export default routes;
