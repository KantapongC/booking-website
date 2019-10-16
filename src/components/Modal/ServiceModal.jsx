import React, { PureComponent } from 'react';
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

class ServiceModal extends PureComponent {
	handleOk = () => {
		const { record, onOk, form, isUpdate, handleUpdate } = this.props;
		const { validateFields, getFieldsValue, resetFields } = form;

		validateFields(errors => {
			if (errors) return;

			const data = {
				...getFieldsValue(),
				...record
			};

			if (isUpdate) {
				handleUpdate(data);
			} else {
				onOk(data);
			}

			resetFields();
		});
	};

	render() {
		const { record, form, onCancel, visible, isUpdate, onDelete } = this.props;
		const { getFieldDecorator } = form;

		return (
			<Modal
				title={isUpdate ? 'แก้ไขรายการ' : 'เพิ่มรายการวันนี้'}
				visible={visible}
				onOk={this.handleOk}
				onCancel={onCancel}
				footer={[
					<Button key='delete' type='danger' onClick={onDelete}>
						ลบ
					</Button>,
					<Button key='submit' type='primary' onClick={this.handleOk}>
						เพื่ม
					</Button>
				]}>
				<Form layout='horizontal'>
					<Row>
						<Col span={12}>
							{serviceItems.map((item, key) => {
								if (key % 2 === 0) {
									return (
										<FormItem label={item.title} {...formItemLayout}>
											{getFieldDecorator(item.dataIndex, {
												initialValue: record[item.dataIndex],
												rules: [
													{
														required: item.isRequired,
														...(item.type === 'number' ? { type: item.type } : {})
													}
												]
											})(
												item.hasOptions ? (
													<Select defaultValue='Zhejiang'>
														<Option value='Zhejiang'>Zhejiang</Option>
														<Option value='Jiangsu'>Jiangsu</Option>
													</Select>
												) : item.type === 'number' ? (
													<InputNumber
														defaultValue={0}
														formatter={value => `฿ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
														parser={value => value.replace(/฿\s?|(,*)/g, '')}
													/>
												) : (
													<Input />
												)
											)}
										</FormItem>
									);
								} else return null;
							})}
						</Col>
						<Col span={12}>
							{serviceItems.map((item, key) => {
								if (key % 2 !== 0) {
									return (
										<FormItem label={item.title} {...formItemLayout}>
											{getFieldDecorator(item.dataIndex, {
												initialValue: record[item.dataIndex],
												rules: [
													{
														required: item.isRequired,
														...(item.type === 'number' ? { type: item.type } : {})
													}
												]
											})(
												item.hasOptions ? (
													<Select defaultValue='Zhejiang'>
														<Option value='Zhejiang'>Zhejiang</Option>
														<Option value='Jiangsu'>Jiangsu</Option>
													</Select>
												) : item.type === 'number' ? (
													<InputNumber
														defaultValue={0}
														formatter={value => `฿ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
														parser={value => value.replace(/฿\s?|(,*)/g, '')}
													/>
												) : (
													<Input />
												)
											)}
										</FormItem>
									);
								} else return null;
							})}
						</Col>
					</Row>
				</Form>
			</Modal>
		);
	}
}

const ServiceModalForm = Form.create()(ServiceModal);

export default ServiceModalForm;
