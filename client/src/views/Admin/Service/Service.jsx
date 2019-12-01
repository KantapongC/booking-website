import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Button } from 'antd';
import { serviceHeader } from '../../../variables/Variables';
import MenuTable from '../../../components/Table/Table';
import ServiceModal from '../../../components/Modal/ServiceModal';
// import { createService, updateService, deleteService } from '../../../store/actions/serviceActions';

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

	render() {
		const { services } = this.props;
		const data = services
			? services.map(service => {
					return {
						...service,
						key: service.id
					};
			  })
			: null;

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
		// services: state.firestore.ordered.services
	};
};

const mapDispatchToProps = dispatch => {
	return {
		// createService: service => dispatch(createService(service)),
		// updateService: service => dispatch(updateService(service)),
		// deleteService: service => dispatch(deleteService(service))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Service);

// export default compose(
// 	connect(
// 		mapStateToProps,
// 		mapDispatchToProps
// 	),
// 	firestoreConnect([{ collection: 'services' }])
// )(Service);
