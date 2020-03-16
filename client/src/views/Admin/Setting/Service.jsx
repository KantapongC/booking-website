import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import ServiceNameCard from '../../../components/Card/ServiceNameCard';
import ServiceNameModal from '../../../components/Modal/ServiceNameModal';
import { Row, Col, Button } from 'antd';
import { createServiceRules, getServiceRules, updateServiceRule, deleteServiceRule } from '../../../store/actions/serviceNameActions';

const newServiceName = {
  serviceName: '',
  price: 0,
  blowDry: 0,
  coat: 0,
  customer: 0,
  cut: 0,
  hairSpa: 0,
  massage: 0,
  nail: 0,
  product: 0,
  steam: 0,
  thin: 0,
  tint: 0,
  wash: 0
};

class ServiceSetting extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      selected: newServiceName,
      showModal: false
    };
  }

  handleOnClick = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal
    }));
  };

  handleOnClose = () => {};

  componentDidMount() {
    this.props.getServiceRules();
  }

  render() {
    const { serviceRules, createServiceRules } = this.props;

    return (
      <>
        <Button onClick={this.handleOnClick} icon='plus' style={{ marginBottom: 16 }} shape='round' size='large'>
          ตั้งค่ารายการใหม่
        </Button>
        <ServiceNameModal visible={this.state.showModal} record={this.state.selected} closeModal={this.handleOnClick} onOk={createServiceRules}></ServiceNameModal>
        <Row>
          {serviceRules &&
            serviceRules.map(name => (
              <Col md={24} style={{ paddingBottom: '24px' }}>
                <ServiceNameCard heading={name.serviceName} subHeading={name.price} content={name} />
              </Col>
            ))}
        </Row>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    serviceRules: state.serviceSetting.serviceRules
  };
};

export default connect(mapStateToProps, { createServiceRules, getServiceRules, updateServiceRule, deleteServiceRule })(ServiceSetting);
