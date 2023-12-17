import './Home.css';
import { Link } from 'react-router-dom';

export default function Home() {
	return (
		<main>
			<h1>Journey of the Marked</h1>
			<h2>Character creator</h2>

			<Link to="/create" className="button">
				Create a character
			</Link>
		</main>
	);
}
