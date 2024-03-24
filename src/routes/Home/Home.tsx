import './Home.css';
import { Button } from '@mui/joy';
import { GiQuillInk, GiSpellBook } from 'react-icons/gi';

export default function Home() {
	return (
		<main>
			<h1>Journey of the Marked</h1>
			<h2>Character creator</h2>
			<hr />
			<Button
				component="a"
				href="/create"
				endDecorator={<GiQuillInk />}
				size="lg">
				Create a character
			</Button>
			<br style={{ margin: '2em 0' }} />
			<Button
				component="a"
				href="/spell-list"
				endDecorator={<GiSpellBook />}
				variant="soft"
				size="md">
				Spell list
			</Button>
		</main>
	);
}
