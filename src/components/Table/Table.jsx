import React from 'react';
import { Table, Popconfirm } from 'antd';

const MenuTable = ({ tableHeader, title, tableData, handleDelete, onRowClick }) => {
	const header = [
		...tableHeader,
		{
			title: 'Action',
			align: 'center',
			render: (text, record) =>
				tableData.length >= 1 ? (
					<Popconfirm title='Confirm Delete' onConfirm={() => handleDelete(record.key)}>
						<a href='/' >Delete</a>
					</Popconfirm>
				) : null
		}
	];

	const today = new Date().toDateString();
	return (
		<Table
			columns={tableHeader}
			dataSource={tableData}
			title={() => <h2>{title + ' ' + today}</h2>}
			bordered
			// pagination={{ position: 'bottom' }}
			pagination={false}
			onRowClick={onRowClick}
		/>
	);
};

export default MenuTable;
