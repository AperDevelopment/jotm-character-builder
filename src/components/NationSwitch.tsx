import { Switch, Typography } from '@mui/joy';
import React, { useState } from 'react';

type Props = {
    nation: string;
    onToggle: (checked: boolean) => void;
}

export default function NationSwitch({nation, onToggle}: Props) {
	const [checked, setChecked] = useState(false);

    const onSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
        onToggle(event.target.checked);
    }

	return (
        <Typography component='label' startDecorator={<Switch checked={checked} onChange={onSwitchChange} />}>
            {nation}
        </Typography>
    );
}
