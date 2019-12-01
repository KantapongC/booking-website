import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
// import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Form, Input, Modal, Select, InputNumber, Row, Col, Button } from 'antd';
import { serviceItems } from '../../variables/Variables';

const FormItem = Form.Item;
const { Option } = Select;

const formItemLayout = {
	labelCol: {
		span: 10
	},
	wrapperCol: {
		span: 14
	}
};

class ServiceNameModal extends PureComponent {
	handleOk = () => {
		const { record, onOk, form, isUpdate, handleUpdate, closeModal } = this.props;
		const { validateFields, getFieldsValue, resetFields } = form;

		validateFields(errors => {
			if (errors) return;

			const data = {
				...record,
				...getFieldsValue()
			};

			if (isUpdate) {
				handleUpdate(data);
			} else {
				onOk(data);
			}

			closeModal();
			resetFields();
		});
	};

	render() {
		const { record, form, closeModal, visible, isUpdate, onDelete, employees } = this.props;
		const { getFieldDecorator } = form;

		return (
			<Modal
				title={isUpdate ? 'แก้ไขรายการ' : 'เพิ่มรายการใหม่'}
				visible={visible}
				onOk={this.handleOk}
				onCancel={closeModal}
				footer={[
					isUpdate ? (
						<Button key='delete' type='danger' onClick={onDelete}>
							ลบ
						</Button>
					) : (
						<Button key='back' type='secondary' onClick={closeModal}>
							 กลับ
						</Button>
					),
					<Button key='submit' type='primary' onClick={this.handleOk}>
						{isUpdate ? 'ยืนยัน' : 'เพื่ม'}
					</Button>
				]}>
				<Form layout='horizontal'>
					<Row>
						{serviceItems.map((item, key) => {
							return (
								<Col span={12}>
									<FormItem label={item.title} {...formItemLayout}>
										{getFieldDecorator(item.dataIndex, {
											initialValue: record[item.dataIndex],
											rules: [
												{
													required: item.isRequired,
													...(item.type === 'number' || item.suffix === '%' ? { type: 'number' } : {})
												}
											]
										})(
											item.type === 'number' ? (
												<InputNumber defaultValue={0} formatter={value => `฿ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')} parser={value => value.replace(/฿\s?|(,*)/g, '')} />
											) : item.suffix === '%' ? (
												<InputNumber defaultValue={0} min={0} max={100} formatter={value => `${value}%`} parser={value => value.replace('%', '')} />
											) : (
												<Input />
											)
										)}
									</FormItem>
								</Col>
							);
						})}
					</Row>
				</Form>
			</Modal>
		);
	}
}

const ServiceNameModalForm = Form.create()(ServiceNameModal);

const mapStateToProps = state => {
	return {
		// serviceName: state.firestore.ordered.serviceName
	};
};

export default connect(mapStateToProps)(ServiceNameModalForm);
// export default compose(
// 	connect(mapStateToProps),
// 	firestoreConnect([{ collection: 'serviceName' }])
// )(ServiceNameModalForm);
