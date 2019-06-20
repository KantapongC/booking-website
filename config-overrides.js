const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
	fixBabelImports('import', {
		libraryName: 'antd',
		libraryDirectory: 'es',

		style: true
	}),
	addLessLoader({
		javascriptEnabled: true,
		modifyVars: {
			'@primary-color': '#7f8c8d',
			'@layout-header-background': '#ffffff',
			'@layout-header-height': '90px',
			'@layout-header-padding': '0px'
		}
	})
);

//#1890ff
