import './SpellList.css';
import { Spells } from '../../data';
import { Button, Checkbox, List, ListItem, Option, Select } from '@mui/joy';
import { ChangeEvent, SyntheticEvent, useState } from 'react';
import { SpellTable } from '../../components';

export default function SpellList() {
	const [spells, setSpells] = useState(Spells);

	const filterSpellsByLevel = (level: number, addSpells: boolean) => {
		setSpells(
			(addSpells
				? [
						...spells,
						...Spells.filter((spell) => spell.level === level),
					]
				: spells.filter((spell) => spell.level !== level)
			).sort((spellA, spellB) => spellA.compareTo(spellB)),
		);
	};

	const filterSpellsByClass = (cls: string) => {
		setSpells(
			Spells.filter(
				(spell) =>
					cls === 'View all spells' ||
					spell.available_to[cls] === true,
			).sort((spellA, spellB) => spellA.compareTo(spellB)),
		);
	};

	return (
		<main>
			<h1>Journey of the Marked</h1>
			<h2>Spell List</h2>
			<div>
				<List
					size="sm"
					orientation="horizontal"
					sx={{ '--List-gap': '8px' }}>
					<ListItem>
						<b>Level</b>
					</ListItem>
					{[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((level) => (
						<ListItem
							key={level}
							sx={{
								aspectRatio: '1 / 1',
								justifyContent: 'center',
							}}>
							<Checkbox
								label={`${level}`}
								defaultChecked
								disableIcon
								overlay
								onChange={(
									event: ChangeEvent<HTMLInputElement>,
								) =>
									filterSpellsByLevel(
										level,
										event.target.checked,
									)
								}
							/>
						</ListItem>
					))}
				</List>
				<Select
					sx={{ width: '15%' }}
					defaultValue="View all spells"
					onChange={(
						e: SyntheticEvent | null,
						value: string | null,
					) => filterSpellsByClass(`${value}`)}
					slotProps={{
						listbox: {
							sx: {
								maxHeight: 'unset',
							},
						},
					}}>
					{[
						'View all spells',
						'arcane_trickster',
						'artificer',
						'bard',
						'cleric',
						'druid',
						'eldritch_knight',
						'paladin',
						'ranger',
						'sorcerer',
						'warlock',
						'wizard',
					].map((cls) => (
						<Option key={cls} value={cls}>
							{cls
								.split('_')
								.map(
									(word) =>
										word[0].toUpperCase() +
										word.substring(1),
								)
								.join(' ')}
						</Option>
					))}
				</Select>
			</div>
			<hr />
			<SpellTable spells={spells} />
			<br />
			<Button component="a" href="/" variant="soft" size="md">
				Home
			</Button>
		</main>
	);
}
