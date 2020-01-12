import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Form, Input, Modal, Select, InputNumber, Row, Col, Button } from 'antd';
import { serviceItems } from '../../variables/Variables';

const FormItem = Form.Item;
const { Option } = Select;

const formItemLayout = {
  labelCol: {
    span: 10
  },
  wrapperCol: {
    span: 14
  }
};

class ServiceModal extends PureComponent {
  handleOk = () => {
    const { record, onOk, form, isUpdate, handleUpdate } = this.props;
    const { validateFields, getFieldsValue, resetFields } = form;

    validateFields(errors => {
      if (errors) return;

      const data = {
        ...record,
        ...getFieldsValue()
      };

      if (isUpdate) {
        handleUpdate(data);
      } else {
        onOk(data);
      }

      resetFields();
    });
  };

  render() {
    const { record, form, onCancel, visible, isUpdate, onDelete, employee } = this.props;
    const { getFieldDecorator } = form;

    return (
      <Modal
        title={isUpdate ? 'แก้ไขรายการ' : 'เพิ่มรายการวันนี้'}
        visible={visible}
        onOk={this.handleOk}
        onCancel={onCancel}
        footer={[
          isUpdate ? (
            <Button key='delete' type='danger' onClick={onDelete}>
              ลบ
            </Button>
          ) : (
            <Button key='back' type='secondary' onClick={onCancel}>
               กลับ
            </Button>
          ),
          <Button key='submit' type='primary' onClick={this.handleOk}>
            {isUpdate ? 'ยืนยัน' : 'เพื่ม'}
          </Button>
        ]}>
        <Form layout='horizontal'>
          <Row>
            {serviceItems.map((item, key) => {
              return (
                <Col span={12}>
                  <FormItem label={item.title} {...formItemLayout}>
                    {getFieldDecorator(item.dataIndex, {
                      initialValue: record[item.dataIndex],
                      rules: [
                        {
                          required: item.isRequired,
                          ...(item.type === 'number' ? { type: item.type } : {})
                        }
                      ]
                    })(
                      item.hasOptions ? (
                        <Select>{employee.employees && employee.employees.docs.map(employee => <Option value={employee.username}>{employee.username}</Option>)}</Select>
                      ) : item.type === 'number' ? (
                        <InputNumber defaultValue={0} formatter={value => `฿ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')} parser={value => value.replace(/฿\s?|(,*)/g, '')} />
                      ) : (
                        <Input />
                      )
                    )}
                  </FormItem>
                </Col>
              );
            })}
          </Row>
        </Form>
      </Modal>
    );
  }
}

const ServiceModalForm = Form.create()(ServiceModal);

const mapStateToProps = state => {
  return {
    employee: state.employee
  };
};

export default connect(mapStateToProps)(ServiceModalForm);
