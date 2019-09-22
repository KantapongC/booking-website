import React, { Component } from 'react';
import { Button } from 'antd';
import { serviceHeader } from '../../../variables/Variables';
import EditableTable from '../../../components/EditableTable/EditableTable';

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
			]
		};
	}

	handleDelete = key => {
		const data = [...this.state.data];
		this.setState({ data: data.filter(item => item.key !== key) });
	};

	handleAdd = () => {
		const { count, data } = this.state;
		const defaultField = serviceHeader.map(item => item.dataIndex);

		let newData = {
			key: count
		};

		defaultField.forEach(element => (newData[element] = '-'));

		this.setState({
			data: [...data, newData],
			count: count + 1
		});
	};

	handleSave = row => {
		const newData = [...this.state.data];
		const index = newData.findIndex(item => row.key === item.key);
		const item = newData[index];

		newData.splice(index, 1, {
			...item,
			...row
		});

		this.setState({ data: newData });
	};

	render() {
		return (
			<>
				<Button onClick={this.handleAdd} type='primary' style={{ marginBottom: 16 }}>
					Add a row
				</Button>
				<EditableTable
					title='รายการวันนี้'
					tableHeader={serviceHeader}
					tableData={this.state.data}
					handleSave={this.handleSave}
					handleDelete={this.handleDelete}
				/>
			</>
		);
	}
}

export default Service;
