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
					{getFieldDecorator(heading, {
						initialValue: subHeading
					})(<Input size='small' defaultValue={subHeading} prefix='฿' />)}
				</FormItem>
			);
		} else {
			return `${heading}:  ฿${subHeading}`;
		}
	};

	renderDesciptionItems = () => {
		const {
			props: { content },
			state: { isEditing }
		} = this;

		if (!content) return;

		const descriptionItems = Object.keys(content).map(item => {
			if (item === 'serviceName' || item === 'price') return null;

			return <Descriptions.Item label={item}>{isEditing ? <Input size='small' defaultValue={content[item]} suffix='%' /> : content[item] + ' %'}</Descriptions.Item>;
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
				<Card title={this.renderTitle()} actions={[<Button onClick={handleEdition} icon='edit' type='link' style={{ fontSize: '20px' }} />]} hoverable>
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
