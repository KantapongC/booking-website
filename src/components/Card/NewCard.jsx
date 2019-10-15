import React from 'react';
import { Card, Button } from 'antd';
const { Meta } = Card;

const NewUserCard = () => {
	return (
		<Card style={{ height: 167, textAlign: 'center' }}>
			<Button
				onClick={() => {}}
				icon='plus'
				style={{ margin: '15px 0px 26px 0px' }}
				shape='circle'
				size='large'></Button>
			<Meta title='เพิ่มพนักงาน' />
		</Card>
	);
};

export default NewUserCard;
