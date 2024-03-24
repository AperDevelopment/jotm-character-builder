import './CharacterCreator.css';
import { useState } from 'react';
import { CreationSteps, SettingsPanel } from '../../components';
import { useCookies } from 'react-cookie';
import PlayerCharacter from '../../models/PlayerCharacter';

export default function CharacterCreator() {
	const [currentStep, setCurrentStep] = useState(0);
	const [cookies, setCookie] = useCookies(['playerCharacter']);

	const onChange = (newCharacter: PlayerCharacter) =>
		setCookie('playerCharacter', newCharacter);

	const getStepPanel = () => {
		switch (currentStep) {
			case 0:
				return (
					<SettingsPanel
						playerCharacter={cookies.playerCharacter}
						onChange={onChange}
					/>
				);
			case 1:
				return <div>Origin</div>;
			case 2:
				return <div>Class</div>;
			case 3:
				return <div>Abilities</div>;
			case 4:
				return <div>Backstory</div>;
			case 5:
				return <div>Equipment</div>;
			case 6:
				return <div>Overview</div>;
			default:
				return <i>This is a secret to everybody</i>;
		}
	};

	return (
		<main>
			<h1>Character Creator</h1>
			<CreationSteps
				currentStep={currentStep}
				setCurrentStep={setCurrentStep}
			/>
			<div className="inner">{getStepPanel()}</div>
		</main>
	);
}
