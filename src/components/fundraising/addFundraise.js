import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";


const AddFundraise = () => {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState("horizontal");
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );
  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };

  const onFinish = (values) => {
    console.log("values: ", values);
    // dispatch(login(values));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const formItemLayout =
    formLayout === "horizontal"
      ? {
          labelCol: {
            span: 4,
          },
          wrapperCol: {
            span: 14,
          },
        }
      : null;
  const buttonItemLayout =
    formLayout === "horizontal"
      ? {
          wrapperCol: {
            span: 14,
            offset: 4,
          },
        }
      : null;
  return (
    <div className="my-10">
      <Form
        {...formItemLayout}
        layout={formLayout}
        form={form}
        initialValues={{
          layout: formLayout,
        }}
        onValuesChange={onFormLayoutChange}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className=""
      >
        <Form.Item 
        label="Title"
         name="title"
         rules={[
          {
            required: true,
            message: "Please input your name of Title!",
          },
        ]}
        
        >
          <Input placeholder="Title" />
        </Form.Item>
        <Form.Item
          label="Description"
          name="description"
          rules={[
            {
              required: true,
              message: "Please input your description!",
            },
          ]}
        >
          <Input placeholder="Description" />
        </Form.Item>
        <Form.Item
          label="Amount"
          name="amount"
          rules={[
            {
              required: true,
              message: "Please input your amount!",
            },
          ]}
        >
          <Input  placeholder="Amount" />
        </Form.Item>
        
        <Form.Item {...buttonItemLayout}>
          <Button type="primary" htmlType="submit" loading={isLoading}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddFundraise;
