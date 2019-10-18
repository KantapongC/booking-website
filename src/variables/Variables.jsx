//
// //
// // // For Services
// //
//
export const serviceHeader = [
	{
		title: 'รายการ',
		dataIndex: 'serviceName',
		align: 'center',
		editable: true
	},
	{
		title: 'ราคา',
		dataIndex: 'price',
		align: 'center',
		editable: true
	},
	{
		title: 'สระ',
		dataIndex: 'wash',
		align: 'center',
		editable: true
	},
	{
		title: 'ไดร์',
		dataIndex: 'blowDry',
		align: 'center',
		editable: true
	},
	{
		title: 'ซอย',
		dataIndex: 'thin',
		align: 'center',
		editable: true
	},
	{
		title: 'อบไอน้ำ',
		dataIndex: 'steam',
		align: 'center',
		editable: true
	},
	{
		title: 'ทำสี',
		dataIndex: 'tint',
		align: 'center',
		editable: true
	},
	{
		title: 'เคลือบ',
		dataIndex: 'coat',
		align: 'center',
		editable: true
	},
	{
		title: 'สปาผม',
		dataIndex: 'hairSpa',
		align: 'center',
		editable: true
	},
	{
		title: 'ตัด',
		dataIndex: 'cut',
		align: 'center',
		editable: true
	},
	{
		title: 'เล็บ',
		dataIndex: 'nail',
		align: 'center',
		editable: true
	},
	{
		title: 'นวด',
		dataIndex: 'massage',
		align: 'center',
		editable: true
	},
	{
		title: 'สินค้า',
		dataIndex: 'product',
		align: 'center',
		editable: true
	},
	{
		title: 'ลูกค้า',
		dataIndex: 'customer',
		align: 'center',
		editable: true
	}
];

//
// //
// // // For Service Form Items
// //
//
export const serviceItems = [
	{
		title: 'รายการ',
		dataIndex: 'serviceName',
		hasOptions: true,
		isRequired: true,
		type: 'string'
	},
	{
		title: 'ราคา',
		dataIndex: 'price',
		hasOptions: false,
		isRequired: true,
		type: 'number'
	},
	{
		title: 'สระ',
		dataIndex: 'wash',
		hasOptions: true,
		isRequired: false,
		type: 'string'
	},
	{
		title: 'ไดร์',
		dataIndex: 'blowDry',
		hasOptions: true,
		isRequired: false,
		type: 'string'
	},
	{
		title: 'ซอย',
		dataIndex: 'thin',
		hasOptions: true,
		isRequired: false,
		type: 'string'
	},
	{
		title: 'อบไอน้ำ',
		dataIndex: 'steam',
		hasOptions: true,
		isRequired: false,
		type: 'string'
	},
	{
		title: 'ทำสี',
		dataIndex: 'tint',
		hasOptions: true,
		isRequired: false,
		type: 'string'
	},
	{
		title: 'เคลือบ',
		dataIndex: 'coat',
		hasOptions: true,
		isRequired: false,
		type: 'string'
	},
	{
		title: 'สปาผม',
		dataIndex: 'hairSpa',
		hasOptions: true,
		isRequired: false,
		type: 'string'
	},
	{
		title: 'ตัด',
		dataIndex: 'cut',
		hasOptions: true,
		isRequired: false,
		type: 'string'
	},
	{
		title: 'เล็บ',
		dataIndex: 'nail',
		hasOptions: true,
		isRequired: false,
		type: 'string'
	},
	{
		title: 'นวด',
		dataIndex: 'massage',
		hasOptions: true,
		isRequired: false,
		type: 'string'
	},
	{
		title: 'สินค้า',
		dataIndex: 'product',
		hasOptions: true,
		isRequired: false,
		type: 'string'
	},
	{
		title: 'ลูกค้า',
		dataIndex: 'customer',
		hasOptions: false,
		isRequired: false,
		type: 'string'
	}
];

//
// //
// // // For Employee Form Items
// //
//
export const employeeItems = [
	{
		title: 'ชื่อเล่น',
		dataIndex: 'username',
		hasOptions: false,
		isRequired: true,
		type: 'string'
	},
	{
		title: 'เบอร์โทร',
		dataIndex: 'phone',
		hasOptions: false,
		isRequired: false,
		type: 'number'
	},
	{
		title: 'ชื่อจริง',
		dataIndex: 'firstname',
		hasOptions: false,
		isRequired: true,
		type: 'string'
	},
	{
		title: 'วันเกิด',
		dataIndex: 'dob',
		hasOptions: false,
		isRequired: false,
		type: 'date'
	},
	{
		title: 'นามสกุล',
		dataIndex: 'lastname',
		hasOptions: false,
		isRequired: true,
		type: 'string'
	},
	{
		title: 'ที่อยู่',
		dataIndex: 'address',
		hasOptions: false,
		isRequired: false,
		type: 'address'
	},
	{
		title: 'ตำแหน่ง',
		dataIndex: 'position',
		hasOptions: false,
		isRequired: true,
		type: 'string'
	}
];
