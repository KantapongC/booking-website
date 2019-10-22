import React from 'react';
import { Card, Skeleton, Avatar, Button } from 'antd';
const { Meta } = Card;

const ServiceNameCard = ({ heading, subHeading }) => {
	return (
		<>
			<Card actions={[<Button onClick={() => {}} icon='edit' type='link' style={{ fontSize: '20px' }} />]} hoverable>
				<Skeleton loading={false} active>
					<Meta title={heading} description={subHeading} />
				</Skeleton>
			</Card>
		</>
	);
};

export default ServiceNameCard;
