import React from 'react';
import { Card, Skeleton, Avatar, Button } from 'antd';
const { Meta } = Card;

const UserCard = ({ heading, subHeading }) => {
	return (
		<>
			<Card actions={[<Button onClick={() => {}} icon='edit' type='link' style={{ fontSize: '20px' }} />]} hoverable>
				<Skeleton loading={false} avatar active>
					<Meta avatar={<Avatar size={64} icon='user' />} title={heading} description={subHeading} />
				</Skeleton>
			</Card>
		</>
	);
};

export default UserCard;
