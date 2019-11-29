import React, { PureComponent } from 'react';
import { Form, Input, Modal, Select, InputNumber, Row, Col, Button, Avatar } from 'antd';
import { employeeItems } from '../../variables/Variables';

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

class EmployeeModal extends PureComponent {
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
		const { record, form, closeModal, visible, onDelete } = this.props;
		const { getFieldDecorator } = form;

		return (
			<Modal
				title={'เพิ่มพนักงานใหม่'}
				visible={visible}
				onOk={() => {}}
				onCancel={closeModal}
				footer={[
					<Button key='back' type='secondary' onClick={closeModal}>
						กลับ
					</Button>,
					<Button key='submit' type='primary' onClick={this.handleOk}>
						เพื่ม
					</Button>
				]}>
				<Form layout='horizontal'>
					<Row type='flex' justify='center' style={{ marginBottom: '26px' }}>
						<Avatar size={128} icon='user' />
					</Row>
					<Row>
						{employeeItems.map((item, key) => {
							return (
								<Col span={12}>
									<FormItem label={item.title} {...formItemLayout}>
										{getFieldDecorator(item.dataIndex, {
											initialValue: record[item.dataIndex],
											rules: [
												{
													required: item.isRequired,
													...(item.type === 'number' ? { pattern: /^0[289]\d{7,8}$/, message: 'เบอร์โทรไม่ถูกต้อง' } : {})
												}
											]
										})(
											item.hasOptions ? (
												<Select defaultValue='Zhejiang'>
													<Option value='Zhejiang'>Zhejiang</Option>
													<Option value='Jiangsu'>Jiangsu</Option>
												</Select>
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

const EmployeeModalForm = Form.create()(EmployeeModal);

export default EmployeeModalForm;
