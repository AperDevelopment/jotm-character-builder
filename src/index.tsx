import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from './routes';
import { CookiesProvider } from 'react-cookie';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement,
);

const router = createBrowserRouter(routes);

root.render(
	<React.StrictMode>
		<CookiesProvider>
			<RouterProvider router={router} />
		</CookiesProvider>
	</React.StrictMode>,
);
