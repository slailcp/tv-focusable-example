import React, { Component } from "react";
import '../common/public.css';

import {
  Form,
  InputNumber,
  Input,
  Switch,
  Radio,
  Button,
  Checkbox,
  Row,
  Col,Card 
} from 'antd';
const { TextArea } = Input;
const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
};



class Example10 extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      focusEl: null,
      more:'按ok键选择'
    }
  }

  componentDidMount() {
    window.$tv.focusableClassName = 'r-focusable';
    window.$tv.addFocusableListener(document.querySelector('.InputNumber'),"on-blur", this.numberBlur);
  }
 

  // 获取焦点
  numberClick(){
    document.querySelector('.focus input').focus()
  }
  // 失去焦点
  numberBlur(){
    console.log("blur")
    document.querySelector('.focus input').blur()
  }

  open() {
    this.setState({
      show: true,
      focusEl: document.querySelector('.focus')
    })
    window.$tv.limitingEl = document.querySelector('.ex8-dialog'); // 只有.demo5里面的focusable可以获取焦点
    window.$tv.scrollEl = window.$tv.getElementByPath('//div[@class="ex10-content"]');
    window.$tv.requestFocus(this.refs.fo5);
  }
  close(item) {
    if(item){
      this.setState({ more: item })
    }
    this.setState({ show: false })
    window.$tv.scrollEl = null;
    window.$tv.limitingEl = null;
    if (this.state.focusEl) { window.$tv.requestFocus(this.state.focusEl); }
  }


  render() {
    const onFinish = (values) => {
      console.log('Received values of form: ', values);
    };
    let lists = [];
    for (let i = 0; i < 50; i++) {
      lists.push(<p className="r-focusable" ref={'fo' + (i + 1)} key={i}  onClick={() => this.close(i+1)}> {i + 1} </p>)
    }
    return (
      <div className="antdform">
       <Form
      name="validate_other"
      {...formItemLayout}
      onFinish={onFinish}
      initialValues={{
        'input-number': 3,
        'checkbox-group': ['A', 'B'],
        rate: 3.5,
      }}
    >
      <Form.Item label="Plain Text">
        <span className="ant-form-text r-focusable " onClick={() => this.open()}>{this.state.more}</span>
      </Form.Item>

      <Form.Item label="InputNumber">
        <Form.Item name="input-number" noStyle >
          <span className="inline-block r-focusable InputNumber" onClick={() => this.numberClick()}>
            <InputNumber min={1} max={10} />
          </span>
          
        </Form.Item>
        <span className="ant-form-text"> machines</span>
      </Form.Item>

      <Form.Item name="switch" label="Switch" valuePropName="checked">
        <Switch className="r-focusable"  />
      </Form.Item>

      <Form.Item name="radio-group" label="Radio.Group">
        <Radio.Group>
        <Radio className="r-focusable" value="a">item 1</Radio>
        <Radio className="r-focusable" value="b">item 1</Radio>
        <Radio className="r-focusable" value="c">item 1</Radio>
        </Radio.Group>
      </Form.Item>

      <Form.Item
        name="radio-button"
        label="Radio.Button"
        rules={[
          {
            required: true,
            message: 'Please pick an item!',
          },
        ]}
      >
        <Radio.Group>
          <Radio.Button value="a" className="r-focusable">item 1</Radio.Button>
          <Radio.Button value="b" className="r-focusable">item 2</Radio.Button>
          <Radio.Button value="c" className="r-focusable">item 3</Radio.Button>
        </Radio.Group>
      </Form.Item>

      <Form.Item name="checkbox-group" label="Checkbox.Group">
        <Checkbox.Group>
          <Row>
            <Col span={8}>
              <Checkbox className="r-focusable"
                value="A"
                style={{
                  lineHeight: '32px',
                }}
              >
                A
              </Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox className="r-focusable"
                value="B"
                style={{
                  lineHeight: '32px',
                }}
                disabled
              >
                B
              </Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox className="r-focusable"
                value="C"
                style={{
                  lineHeight: '32px',
                }}
              >
                C
              </Checkbox>
            </Col>
          </Row>
        </Checkbox.Group>
      </Form.Item>

      <Form.Item name="radio-group" label="TextArea">
        <TextArea className="r-focusable" rows={4} />
      </Form.Item>


      <Form.Item
        wrapperCol={{
          span: 12,
          offset: 6,
        }}
      >
        <Button type="primary" htmlType="button" className="r-focusable">
          Submit
        </Button>
      </Form.Item>
    </Form>


        <div className="ex8-dialog" style={{ display: this.state.show ? "block" : "none" }}>
          <Card className="ex8-dialog-demo" title="请选择" extra={<span className="r-focusable" onClick={() => this.close()}>Close</span>} style={{ width: 300}}>
            <div className="ex10-content">
              {lists}
            </div>
          </Card>
        </div>
  </div>
    )
  }
}


export default Example10;
