import React, { Component } from 'react';
import UserCard from '../../../components/Card/Card';
import NewUserCard from '../../../components/Card/NewCard';
import { Row, Col } from 'antd';

class EmployeeSetting extends Component {
	constructor(props) {
		super(props);

		this.state = {
			employees: [
				{ name: 'Pan', position: 'Dresser' },
				{ name: 'Ly', position: 'Stylist' },
				{ name: 'Bualoy', position: 'Staff' },
				{ name: 'Pook', position: 'Owner' },
				{ name: 'Mol', position: 'Senior Hair Dresser' }
			]
		};
	}

	render() {
		const { employees } = this.state;
		return (
			<>
				<Row gutter={48}>
					<Col md={8} style={{ padding: '24px' }}>
						<NewUserCard></NewUserCard>
					</Col>
					{employees.map(employee => (
						<Col md={8} style={{ padding: '24px' }}>
							<UserCard employee={employee} />
						</Col>
					))}
				</Row>
			</>
		);
	}
}

export default EmployeeSetting;
