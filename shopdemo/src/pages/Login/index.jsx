import React, { useState } from 'react'
import myCss from './index.module.css'
import { Button, Checkbox, Form, Input, Avatar, message } from 'antd';
import { useNavigate,useLocation} from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import {setName} from '../../store/userAction'
export default (props) => {
  let navigate = useNavigate();
  console.log("navigate",navigate);
  const location = useLocation();
  console.log("location",location);
  // let { state, setState } = useState({ name: "wodfe" })
  let [longinForm] = Form.useForm();
  let dispatch=useDispatch();
  function onFinish(obj) {
    const { username, password } = obj;
    if (username == "admin" && password == "123456") {
      message.success('login in success');
   
       dispatch(setName({name:username,password:password}));
       localStorage.setItem("isLogin","true")
       localStorage.setItem("name",username)
      //第一种使用方式：指定具体的路径
      navigate('/home', {
        replace: false,
        state: { a: 1, b: 2 },
      })
      //第二种使用方式：传入数值进行前进或后退，类似于5.x中的 history.go()方法
      //navigate(-1)
    } else {
      message.error('username or password is error');
    }
  }
  function onFinishFailed(errorInfo) {
    console.log('Failed:', errorInfo);
  }
  function onReset() {
    longinForm.resetFields();
    longinForm.setFieldValue("remember", false)
  }
  function onFill() {
    longinForm.setFieldsValue({
      username: 'admin',
      password: '123456',
      remember: true
    });
  }
  return (
    <div className={myCss.login}>
      <div className={myCss.title}>
        <Avatar className={myCss.headImg} size={64} style={{ backgroundColor: '#87d068' }} src={require("../../Imgs/yasuo.jpg")} />
        Login In
      </div>
      <div className={myCss.form}>
        <Form
          form={longinForm}
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              登录
            </Button>
            <Button htmlType="button" onClick={onReset}>
              清空
            </Button>
            <Button type="link" htmlType="button" onClick={onFill}>
              Fill form
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
