import React from 'react';
import { Table } from 'antd';

const MenuTable = ({ tableHeader, title, tableData, onRowClick }) => {
  const today = new Date().toLocaleDateString('th-TH', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  // .toDateString()

  return (
    <Table
      columns={tableHeader}
      dataSource={tableData}
      title={() => (
        <h2>
          {title + ' : '}
          <b>{today}</b>
        </h2>
      )}
      bordered
      scroll={{ x: 1060 }}
      // pagination={{ position: 'bottom' }}
      pagination={false}
      onRowClick={onRowClick}
      loading={tableData === null ? true : false}
      hasData={tableData && tableData.length === 0 ? true : false}
    />
  );
};

export default MenuTable;
