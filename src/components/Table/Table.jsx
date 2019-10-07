import React from 'react';
import { Table, Form, Popconfirm } from 'antd';

const MenuTable = ({ tableHeader, title, tableData, handleDelete }) => {
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

	const today = new Date().toDateString();
	return (
		<Table
			columns={header}
			dataSource={tableData}
			title={() => <h2>{title + ' ' + today}</h2>}
			bordered
			// pagination={{ position: 'bottom' }}
			pagination={false}
		/>
	);
};

export default MenuTable;
