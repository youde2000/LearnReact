import './index.scss';
import { Card,Form,Input,Button, message } from 'antd';
import logo from '@/assets/logo.png';
import { useDispatch } from 'react-redux';
import { fetchLogin } from '@/store/modules/user';
import { useNavigate } from 'react-router-dom';

const Login=()=>{
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onFinish = async (values)=>{
        console.log(values)

        // 触发异步action fetchLogin
        await dispatch(fetchLogin(values))  // 必须保证完全异步完成之后再做跳转
        // 1、跳转到首页
        navigate('/')

        // 2、提示用户是否登录成功
        message.success("登录成功")
    }

    return (
        <div className='login'>
            <Card className='login-container'>
                <img className='login-logo' src={logo} alt=''/>
                {/* 登录表单 */}
                <Form onFinish={onFinish} 
                    validateTrigger='onBlur'>
                    <Form.Item 
                        name='tel' 
                        label=''
                        // 多条校验逻辑，先验证第一条，通过后再验证后面的
                        rules={[
                            {
                                required: true,
                                message: '请输入你的手机号码'
                            },
                            {
                                // 使用正则表达式验证手机号码
                                pattern:/^1[3-9]\d{9}$/,
                                message:'请输入中国的手机号码'
                            }
                        ]} >
                        <Input size='large' placeholder='输入手机号'/>
                    </Form.Item>
                    <Form.Item
                        name='code'
                        label=''
                        rules={[
                            {
                                required:true,
                                message:'请输入验证码'
                            }
                        ]} >
                        <Input size='large' placeholder='请输入验证码'/>
                    </Form.Item>
                    <Form.Item>
                        <Button type='primary' htmlType='submit' size='large' block>
                            登录
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    )
}

export default Login;