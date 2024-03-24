export default class Spell {
	known: boolean;
	level: number = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
	name: string;
	school:
		| 'Abjuration'
		| 'Conjuration'
		| 'Divination'
		| 'Enchantment'
		| 'Evocation'
		| 'Illusion'
		| 'Necromancy'
		| 'Transmutation';
	casting_time:
		| '1 minute'
		| '10 minutes'
		| '1 hour'
		| '8 hours'
		| '12 hours'
		| '24 hours'
		| 'Action'
		| 'Bonus action'
		| 'Reaction';
	range: string;
	area_targets: string;
	effect: string;
	save_attack: '' | 'Attack' | 'STR' | 'DEX' | 'CON' | 'INT' | 'WIS' | 'CHA';
	duration: string;
	concentration: boolean;
	ritual: boolean;
	components: {
		verbal: boolean;
		somatic: boolean;
		material: boolean;
		cost?: string;
	};
	source: {
		book: string;
		page: number;
	};
	available_to: {
		arcane_trickster: boolean;
		artificer: boolean;
		bard: boolean;
		cleric: boolean;
		druid: boolean;
		eldritch_knight: boolean;
		paladin: boolean;
		ranger: boolean;
		sorcerer: boolean;
		warlock: boolean;
		wizard: boolean;
		[key: string]: any;
	};

	constructor(obj: any) {
		this.known = false;
		this.level = obj.level;
		this.name = obj.name;
		this.school = obj.school;
		this.casting_time = obj.casting_time;
		this.range = obj.range;
		this.area_targets = obj.area_targets;
		this.effect = obj.effect;
		this.save_attack = obj.save_attack;
		this.duration = obj.duration;
		this.concentration = obj.concentration;
		this.ritual = obj.ritual;
		this.components = obj.components;
		this.source = obj.source;
		this.available_to = obj.available_to;
	}

	public toString(): string {
		return `
		{
			"level": ${this.level},
			"name": "${this.name}",
			"school": "${this.school}",
			"casting_time": "${this.casting_time}",
			"range": "${this.range}",
			"area_targets": "${this.area_targets}",
			"effect": "${this.effect}",
			"save_attack": "${this.save_attack}",
			"duration": "${this.duration}",
			"concentration": ${this.concentration},
			"ritual": ${this.ritual},
			"components": {
				"verbal": ${this.components.verbal},
				"somatic": ${this.components.somatic},
				"material": ${this.components.material},
				${this.components.material ? `cost: "${this.components.cost}"` : ''}
			},
			"source": {
				"book": "${this.source.book}",
				"page": ${this.source.page}
			},
			"available_to": {
				"arcane_trickster": ${this.available_to.arcane_trickster},
				"artificer": ${this.available_to.artificer},
				"bard": ${this.available_to.bard},
				"cleric": ${this.available_to.cleric},
				"druid": ${this.available_to.druid},
				"eldritch_knight": ${this.available_to.eldritch_knight},
				"paladin": ${this.available_to.paladin},
				"ranger": ${this.available_to.ranger},
				"sorcerer": ${this.available_to.sorcerer},
				"warlock": ${this.available_to.warlock},
				"wizard": ${this.available_to.wizard}
			}
		}
		`;
	}

	public compareTo(other: Spell): number {
		if (this.level === other.level) {
			return this.name.localeCompare(other.name);
		}
		return this.level > other.level ? 1 : -1;
	}
}
