import React, { useState } from "react";
import { Form, Input, Button } from "antd";


const AddFundraise = () => {
  const [form] = Form.useForm();
  



  const onFinish = (values) => {
    console.log("values: ", values);
    // dispatch(login(values));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="my-10 my-10 w-2/3 px-10 py-5 shadow-xl">
      <Form
        form={form}
        initialValues={{}}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout="vertical"
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
        
        <Form.Item >
          <Button type="primary" htmlType="submit" >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
    </div>
  );
};

export default AddFundraise;
