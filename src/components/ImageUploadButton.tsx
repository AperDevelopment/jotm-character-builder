import { Avatar, styled } from '@mui/joy';
import { useState } from 'react';

const VisuallyHiddenInput = styled('input')`
	clip: rect(0 0 0 0);
	clip-path: inset(50%);
	height: 1px;
	overflow: hidden;
	position: absolute;
	bottom: 0;
	left: 0;
	white-space: nowrap;
	width: 1px;
`;

type Props = {
	onAvatarUpdate: any;
};

export default function ImageUploadButton({ onAvatarUpdate }: Props) {
	const [avatar, setAvatar] = useState('');

	return (
		<Avatar src={avatar}>
			<VisuallyHiddenInput type="file" />
		</Avatar>
	);
}
