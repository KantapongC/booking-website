import React, { PureComponent } from 'react';
import { Card, Skeleton, Avatar, Button, Descriptions, Badge, Input, Form } from 'antd';
const { Meta } = Card;

const FormItem = Form.Item;
const formItemLayout = {
	labelCol: {
		span: 1
	},
	wrapperCol: {
		span: 2
	}
};

class ServiceNameCardForm extends PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			isEditing: false
		};
	}

	handleEdition = () => {
		this.setState(prevState => ({
			isEditing: !prevState.isEditing
		}));
	};

	handleCancel = () => {
		console.log('cancel!');
		this.handleEdition();
	};

	handleSubmit = () => {
		console.log('submit!');
		const { form } = this.props;
		const { validateFields } = form;

		validateFields((error, values) => {
			if (error) return;

			console.log(values);
		});
		this.handleEdition();
	};

	renderTitle = () => {
		const {
			props: { heading, subHeading, form },
			state: { isEditing }
		} = this;

		const { getFieldDecorator } = form;

		if (!heading || !subHeading) return;

		if (isEditing) {
			return (
				<FormItem label={heading} {...formItemLayout} style={{ marginBottom: '0px' }}>
					{getFieldDecorator('price', {
						initialValue: subHeading
					})(<Input size='small' defaultValue={subHeading} prefix='฿' />)}
				</FormItem>
			);
		} else {
			return `${heading}:  ฿${subHeading}`;
		}
	};

	renderFooterActions = () => {
		const {
			state: { isEditing },
			handleEdition,
			handleCancel,
			handleSubmit
		} = this;

		let actions = [];

		if (isEditing) {
			actions.push(<Button onClick={handleCancel} icon='close' type='link' />, <Button onClick={handleSubmit} icon='check' type='link' />);
		} else {
			actions.push(<Button onClick={handleEdition} icon='edit' type='link' style={{ fontSize: '20px' }} />);
		}

		return actions;
	};

	renderDesciptionItems = () => {
		const {
			props: { content, form },
			state: { isEditing }
		} = this;

		const { getFieldDecorator } = form;
		if (!content) return;

		const descriptionItems = Object.keys(content).map(item => {
			if (item === 'serviceName' || item === 'price') return null;

			return (
				<Descriptions.Item label={item}>
					{isEditing ? (
						// <FormItem label={heading} {...formItemLayout} style={{ marginBottom: '0px' }}>

						<FormItem style={{ marginBottom: '0px' }}>
							{getFieldDecorator(item, {
								initialValue: content[item]
							})(<Input size='small' defaultValue={content[item]} suffix='%' />)}
						</FormItem>
					) : (
						content[item] + ' %'
					)}
				</Descriptions.Item>
			);
		});

		return descriptionItems;
	};

	render() {
		const {
			props: { heading, subHeading },
			handleEdition
		} = this;

		return (
			<>
				<Card title={this.renderTitle()} actions={this.renderFooterActions()} hoverable>
					<Descriptions column={4} bordered>
						{this.renderDesciptionItems()}
					</Descriptions>
				</Card>
			</>
		);
	}
}

const ServiceNameCard = Form.create()(ServiceNameCardForm);

export default ServiceNameCard;
