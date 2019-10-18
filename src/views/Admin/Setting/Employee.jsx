import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserCard from '../../../components/Card/Card';
import NewUserCard from '../../../components/Card/NewCard';
import { Row, Col } from 'antd';
import { createEmployee } from '../../../store/actions/employeeActions';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class EmployeeSetting extends Component {
	render() {
		const { employees, createEmployee } = this.props;
		return (
			<>
				<Row gutter={48}>
					<Col md={6} style={{ padding: '24px' }}>
						<NewUserCard onSubmit={createEmployee}></NewUserCard>
					</Col>
					{employees &&
						employees.map(employee => (
							<Col md={6} style={{ padding: '24px' }}>
								<UserCard employee={employee} />
							</Col>
						))}
				</Row>
			</>
		);
	}
}

const mapStateToProps = state => {
	return {
		employees: state.firestore.ordered.employees
	};
};

const mapDispatchToProps = dispatch => {
	return {
		createEmployee: employee => dispatch(createEmployee(employee))
	};
};

export default compose(
	connect(
		mapStateToProps,
		mapDispatchToProps
	),
	firestoreConnect([{ collection: 'employees' }])
)(EmployeeSetting);
