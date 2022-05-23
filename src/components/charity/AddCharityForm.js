import React, { useState } from "react";
import { Form, Input, Button } from "antd";



const AddCharity = () => {
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
        label="Name"
         name="name"
         rules={[
          {
            required: true,
            message: "Please input your name of Charity!",
          },
        ]}
        
        >
          <Input placeholder="Name" />
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
          label="Category"
          name="category"
          rules={[
            {
              required: true,
              message: "Please input your category!",
            },
          ]}
        >
          <Input  placeholder="Category" />
        </Form.Item>
        <Form.Item 
        label="Email"
        name="email"
        rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input placeholder="Email" />
        </Form.Item>
        <Form.Item 
        label="Address"
        name="address"
         >
          <Input placeholder="Address" />
        </Form.Item>
        <Form.Item 
        label="Phone"
         name="phone"
        >
          <Input placeholder="Phone" />
        </Form.Item>
        <Form.Item >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
    </div>
  );
};

export default AddCharity;