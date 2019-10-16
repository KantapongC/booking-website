import React, { PureComponent } from 'react';
import { Card, Button } from 'antd';
import EmployeeModal from '../Modal/EmployeeModal';
const { Meta } = Card;

class NewUserCard extends PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			showModal: false
		};
	}

	handleOnClick = () => {
		this.setState(prevState => ({
			showModal: !prevState.showModal
		}));
	};

	render() {
		return (
			<Card style={{ height: 167, textAlign: 'center' }}>
				<Button onClick={this.handleOnClick} icon='plus' style={{ margin: '15px 0px 26px 0px' }} shape='circle' size='large'></Button>
				<Meta title='เพิ่มพนักงาน' />
				<EmployeeModal visible={this.state.showModal} record={{}} onCancel={this.handleOnClick}></EmployeeModal>
			</Card>
		);
	}
}

export default NewUserCard;
