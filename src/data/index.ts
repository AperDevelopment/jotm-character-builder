import Nation from '../models/Nation';
import nations from './nations.json';

import JsonSpells from './spells.json';
import Spell from '../models/Spell';

const Nations = nations
	.filter((nation) => nation.name !== '')
	.map((nation) => new Nation(nation));
const DefaultRaces = nations
	.filter((nation) => nation.name === '')
	.map((nation) => nation.races)
	.flat();

const Spells: Spell[] = JsonSpells.map((spell) => new Spell(spell));

export { Nations, DefaultRaces, Spells };
