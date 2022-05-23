import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";


const AddEditUser = () => {
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
        label="Username"
         name="username"
         rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
        
        >
          <Input placeholder="Username" />
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
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input type="password" placeholder="password" />
        </Form.Item>
        <Form.Item 
        label="Phone"
        name="phone"
        >
          <Input placeholder="Phone" />
        </Form.Item>
        <Form.Item 
        label="Address"
        name="address"
         >
          <Input placeholder="Address" />
        </Form.Item>
        <Form.Item 
        label="Role"
         name="role"
         rules={[
          {
            required: true,
            message: "Please input your role!",
          },
        ]}
        >
          <Input placeholder="Role" />
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

export default AddEditUser;
