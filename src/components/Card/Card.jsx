import React from 'react';
import { Card, Skeleton, Avatar, Button } from 'antd';
const { Meta } = Card;

const UserCard = ({ employee }) => {
	return (
		<>
			<Card actions={[<Button onClick={() => {}} icon='edit' type='link' style={{ fontSize: '20px' }} />]} hoverable>
				<Skeleton loading={false} avatar active>
					<Meta avatar={<Avatar size={64} icon='user' />} title={employee.username} description={employee.position} />
				</Skeleton>
			</Card>
		</>
	);
};

export default UserCard;
