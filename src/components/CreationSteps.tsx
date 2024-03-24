import { Step, StepButton, StepIndicator, Stepper } from '@mui/joy';
import { FaCheck, FaEye, FaGears } from 'react-icons/fa6';
import React from 'react';

type Props = {
	currentStep: number;
	setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
};

const STEPS = [
	{ name: 'Settings', indicator: <FaGears /> },
	{ name: 'Origin', indicator: 1 },
	{ name: 'Class', indicator: 2 },
	{ name: 'Abilities', indicator: 3 },
	{ name: 'Backstory', indicator: 4 },
	{ name: 'Equipment', indicator: 5 },
	{ name: 'Overview', indicator: <FaEye /> },
];

export default function CreationSteps({ currentStep, setCurrentStep }: Props) {
	return (
		<Stepper>
			{STEPS.map(({ name, indicator }, index) => (
				<Step
					key={name}
					indicator={
						<StepIndicator
							variant={currentStep < index ? 'soft' : 'solid'}
							color={currentStep < index ? 'neutral' : 'primary'}>
							{currentStep <= index ? indicator : <FaCheck />}
						</StepIndicator>
					}
					orientation="vertical"
					sx={{
						'&::after': {
							...(currentStep > index &&
								index !== STEPS.length - 1 && {
									bgcolor: 'primary.solidBg',
								}),
						},
					}}>
					<StepButton onClick={() => setCurrentStep(index)}>
						{name}
					</StepButton>
				</Step>
			))}
		</Stepper>
	);
}
