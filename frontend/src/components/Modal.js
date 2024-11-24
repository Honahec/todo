import React, { Component } from "react";
import {
  Modal,
  Form,
  Input,
  Checkbox,
  Button,
} from '@arco-design/web-react';

const FormItem = Form.Item;

class CustomModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: this.props.activeItem,
    };
  }

  handleChange = (name, value) => {
    const activeItem = { ...this.state.activeItem, [name]: value };
    this.setState({ activeItem });
  };

  render() {
    const { toggle, onSave } = this.props;
    const { activeItem } = this.state;

    return (
      <Modal
        visible={true}
        onCancel={toggle}
        title="任务详情"
        footer={
          <>
            <Button onClick={toggle}>取消</Button>
            <Button type="primary" onClick={() => onSave(activeItem)}>
              保存
            </Button>
          </>
        }
      >
        <Form layout="vertical">
          <FormItem label="标题">
            <Input
              value={activeItem.title}
              onChange={(value) => this.handleChange('title', value)}
              placeholder="请输入任务标题"
            />
          </FormItem>
          <FormItem label="描述">
            <Input.TextArea
              value={activeItem.description}
              onChange={(value) => this.handleChange('description', value)}
              placeholder="请输入任务描述"
            />
          </FormItem>
          <FormItem>
            <Checkbox
              checked={activeItem.completed}
              onChange={(checked) => this.handleChange('completed', checked)}
            >
              已完成
            </Checkbox>
          </FormItem>
        </Form>
      </Modal>
    );
  }
}

export default CustomModal;
