import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserCard from '../../../components/Card/Card';
import NewUserCard from '../../../components/Card/NewCard';
import { Row, Col } from 'antd';
import { createEmployee, getEmployee, updateEmployee, deleteEmployee } from '../../../store/actions/employeeActions';

class EmployeeSetting extends Component {
  componentDidMount() {
    const { employee, getEmployee } = this.props;
    if (!employee.employees) getEmployee();
  }

  componentDidUpdate(prevProps) {
    const { employee, getEmployee } = this.props;
    if (prevProps.employee.isLoading !== employee.isLoading) getEmployee();
  }

  render() {
    const { employee, createEmployee, updateEmployee, deleteEmployee } = this.props;
    return (
      <>
        <Row gutter={48}>
          <Col md={6} style={{ padding: '24px' }}>
            <NewUserCard onSubmit={createEmployee}></NewUserCard>
          </Col>
          {employee.employees &&
            employee.employees.docs.map(employee => (
              <Col md={6} style={{ padding: '24px' }}>
                <UserCard heading={employee.username} subHeading={employee.position} handleUpdate={updateEmployee} />
              </Col>
            ))}
        </Row>
      </>
    );
  }
}

const mapStateToProps = state => ({
  employee: state.employee
});

export default connect(mapStateToProps, { createEmployee, getEmployee, updateEmployee, deleteEmployee })(EmployeeSetting);
