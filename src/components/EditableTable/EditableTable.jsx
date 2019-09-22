import React from 'react';
import { Table, Form, Popconfirm } from 'antd';
import { EditableContext } from '../../ContextProvider/ServiceContext';
import EditableCell from './EditableCell';

const EditableRow = ({ form, index, ...props }) => (
	<EditableContext.Provider value={form}>
		<tr {...props} />
	</EditableContext.Provider>
);

const EditableFormRow = Form.create()(EditableRow);

const EditableTable = ({ tableHeader, title, handleSave, tableData, handleDelete }) => {
	const header = [
		...tableHeader,
		{
			title: 'Action',
			align: 'center',
			render: (text, record) =>
				tableData.length >= 1 ? (
					<Popconfirm title='Confirm Delete' onConfirm={() => handleDelete(record.key)}>
						<a>Delete</a>
					</Popconfirm>
				) : null
		}
	];

	const components = {
		body: {
			row: EditableFormRow,
			cell: EditableCell
		}
	};

	const tableColumn = header.map(col => {
		if (!col.editable) {
			return col;
		}

		return {
			...col,
			onCell: record => ({
				record,
				title: col.title,
				dataIndex: col.dataIndex,
				editable: col.editable,
				handleSave
			})
		};
	});

	return (
		<Table
			components={components}
			rowClassName={() => 'editable-row'}
			columns={tableColumn}
			dataSource={tableData}
			title={() => <h2>{title}</h2>}
			bordered
			// pagination={{ position: 'bottom' }}
			pagination={false}
		/>
	);
};

export default EditableTable;
