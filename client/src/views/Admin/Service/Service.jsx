import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
import { serviceHeader } from '../../../variables/Variables';
import MenuTable from '../../../components/Table/Table';
import ServiceModal from '../../../components/Modal/ServiceModal';
import { createService, getService, updateService, deleteService } from '../../../store/actions/serviceActions';
import { getEmployee } from '../../../store/actions/employeeActions';

const initialState = {
	serviceName: '',
	price: '',
	blowDry: '',
	coat: '',
	customer: '',
	cut: '',
	hairSpa: '',
	massage: '',
	nail: '',
	product: '',
	steam: '',
	thin: '',
	tint: '',
	wash: ''
};

const options = {
	startDate: new Date(new Date().setHours(0, 0, 0, 0)).toISOString(),
	endDate: new Date(new Date(new Date().setHours(23, 59, 59, 999))).toISOString()
};

class Service extends Component {
	constructor(props) {
		super(props);

		this.state = {
			visible: false,
			selectedRecord: initialState,
			isUpdate: false
		};
	}

	handleOnClick = () => {
		this.setState(prevState => ({ visible: !prevState.visible, isUpdate: false }));
	};

	handleOnCancel = () => {
		this.setState(prevState => ({ visible: !prevState.visible, isUpdate: true }));
	};

	handleDelete = () => {
		const {
			state: { selectedRecord },
			props: { deleteService }
		} = this;

		deleteService(selectedRecord);

		this.setState({
			visible: false,
			selectedRecord: initialState
		});
	};

	handleAdd = newData => {
		const { createService } = this.props;

		createService(newData);
		getService(options);

		this.setState({
			visible: false,
			selectedRecord: initialState
		});
	};

	handleUpdate = newData => {
		const { updateService } = this.props;

		updateService(newData);

		this.setState({
			visible: false,
			selectedRecord: initialState
		});
	};

	onRowClick = record => {
		this.setState({ visible: true, isUpdate: true, selectedRecord: record });
	};

	async componentDidMount() {
		const { getService, employee, getEmployee } = this.props;

		getService(options);

		if (!employee.employees) getEmployee();
	}

	render() {
		const { service } = this.props;
		const data = service.services ? service.services.docs : null;

		return (
			<>
				<Button onClick={this.handleOnClick} icon='plus' style={{ marginBottom: 16 }} shape='round' size='large'>
					เพิ่มรายการใหม่
				</Button>
				<ServiceModal
					visible={this.state.visible}
					onCancel={this.handleOnCancel}
					onOk={this.handleAdd}
					record={this.state.selectedRecord}
					isUpdate={this.state.isUpdate}
					handleUpdate={this.handleUpdate}
					onDelete={this.handleDelete}
				/>
				<MenuTable title='รายการวันนี้' tableHeader={serviceHeader} tableData={data} handleDelete={this.handleDelete} onRowClick={this.onRowClick} />
			</>
		);
	}
}

const mapStateToProps = state => {
	return {
		service: state.service,
		employee: state.employee
	};
};

export default connect(mapStateToProps, { createService, getService, getEmployee })(Service);
