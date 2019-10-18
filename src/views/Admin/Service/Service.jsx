import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Button } from 'antd';
import { serviceHeader } from '../../../variables/Variables';
import MenuTable from '../../../components/Table/Table';
import ServiceModal from '../../../components/Modal/ServiceModal';
import { createService } from '../../../store/actions/serviceActions';

class Service extends Component {
	constructor(props) {
		super(props);

		this.state = {
			count: 4,
			data: [
				{
					key: '1',
					serviceName: 'Cut',
					price: 1650,
					wash: 'Pook',
					blowDry: 'Mol',
					cut: 'Mol'
				},
				{
					key: '2',
					serviceName: 'Tint',
					price: 3600,
					massage: 'Lee',
					wash: 'Pook',
					tint: 'Mol'
				},
				{
					key: '3',
					serviceName: 'Wash',
					price: 300,
					blowDry: 'Pan',
					wash: 'Vaew'
				}
			],
			visible: false,
			selectedRecord: {},
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
		const data = [...this.state.data];
		this.setState({ data: data.filter(item => item.key !== this.state.selectedRecord.key), visible: false, selectedRecord: {} });
	};

	handleAdd = newData => {
		const { data } = this.state;

		this.setState({
			data: [...data, newData],
			visible: false,
			selectedRecord: {}
		});
	};

	handleUpdate = newData => {
		const data = [...this.state.data];
		const index = data.findIndex(item => this.state.selectedRecord.key === item.key);
		data[index] = newData;

		this.setState({ data, visible: false, selectedRecord: {} });
	};

	onRowClick = record => {
		this.setState({ visible: true, isUpdate: true, selectedRecord: record });
	};

	render() {
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
				<MenuTable title='รายการวันนี้' tableHeader={serviceHeader} tableData={this.state.data} handleDelete={this.handleDelete} onRowClick={this.onRowClick} />
			</>
		);
	}
}

const mapStateToProps = state => {
	return {
		services: state.firestore.data.services
	};
};

const mapDispatchToProps = dispatch => {
	return {
		createService: service => dispatch(createService(service))
	};
};

export default compose(
	connect(
		mapStateToProps,
		mapDispatchToProps
	),
	firestoreConnect([{ collection: 'services' }])
)(Service);
