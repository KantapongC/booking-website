import React from 'react';
import { connect } from 'react-redux';
import { message } from 'antd';

const Alert = ({ alerts }) => {
	if (alerts !== null && alerts.length > 0) {
		return alerts.map(alert => {
			switch (alert.alertType) {
				case 'info':
					return message.info(alert.msg);
				case 'warning':
					return message.warning(alert.msg);
				default:
					return message.error(alert.msg);
			}
		});
	}

	return null;
};

const mapStateToProps = state => ({
	alerts: state.alert
});

export default connect(mapStateToProps)(Alert);
