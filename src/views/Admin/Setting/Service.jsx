import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import ServiceNameCard from '../../../components/Card/ServiceNameCard';
import ServiceNameModal from '../../../components/Modal/ServiceNameModal';
import { Row, Col, Button } from 'antd';
import { createServiceName } from '../../../store/actions/serviceNameActions';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

const newServiceName = {
	serviceName: '',
	price: 0,
	blowDry: 0,
	coat: 0,
	customer: 0,
	cut: 0,
	hairSpa: 0,
	massage: 0,
	nail: 0,
	product: 0,
	steam: 0,
	thin: 0,
	tint: 0,
	wash: 0
};

class ServiceSetting extends PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			selected: newServiceName,
			showModal: false
		};
	}

	handleOnClick = () => {
		this.setState(prevState => ({
			showModal: !prevState.showModal
		}));
	};

	handleOnClose = () => {};

	render() {
		const { serviceName, createServiceName } = this.props;

		return (
			<>
				<Button onClick={this.handleOnClick} icon='plus' style={{ marginBottom: 16 }} shape='round' size='large'>
					ตั้งค่ารายการใหม่
				</Button>
				<ServiceNameModal visible={this.state.showModal} record={this.state.selected} closeModal={this.handleOnClick} onOk={createServiceName}></ServiceNameModal>
				<Row>
					{serviceName &&
						serviceName.map(name => (
							<Col md={24} style={{ paddingBottom: '24px' }}>
								<ServiceNameCard heading={name.serviceName} subHeading={name.price} content={name} />
							</Col>
						))}
				</Row>
			</>
		);
	}
}

const mapStateToProps = state => {
	return {
		serviceName: state.sampleFirestore.ordered.serviceName
		// state.firestore.ordered.serviceName
	};
};

const mapDispatchToProps = dispatch => {
	return {
		createServiceName: serviceName => dispatch(createServiceName(serviceName))
	};
};

export default compose(
	connect(
		mapStateToProps,
		mapDispatchToProps
	),
	firestoreConnect([{ collection: 'serviceName' }])
)(ServiceSetting);
