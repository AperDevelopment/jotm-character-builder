import Spell from '../models/Spell';
import { Sheet, Table } from '@mui/joy';

type Props = {
	spells: Spell[];
};

export default function SpellTable({ spells }: Props) {
	return (
		<Sheet sx={{ height: '60vh', overflow: 'auto' }}>
			<Table hoverRow stickyHeader stripe="even">
				<thead>
					<tr>
						<th style={{ width: '15%', textAlign: 'center' }}>
							Name
						</th>
						<th style={{ textAlign: 'center' }}>Effect</th>
						<th style={{ width: '7.5%', textAlign: 'center' }}>
							Source
						</th>
					</tr>
				</thead>
				<tbody>
					{spells.map((spell) => (
						<tr key={spell.name}>
							<td>
								<b>{spell.name}</b>
								<br />
								<i>{`Level ${spell.level} - ${spell.school}`}</i>
							</td>
							<td>{spell.effect}</td>
							<td>{`${spell.source.book}, p.${spell.source.page}`}</td>
						</tr>
					))}
				</tbody>
			</Table>
		</Sheet>
	);
}
