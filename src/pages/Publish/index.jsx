import {
    Card,
    Breadcrumb,
    Form,
    Button,
    Radio,
    Input,
    Upload,
    Space,
    Select
} from 'antd'

import { PlusOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import './index.scss'

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'
import { useEffect, useState } from 'react';
import { createArticleAPI } from '@/apis/article';

const {Option}  = Select;

const Publish =()=>{
    // 获取频道列表
    const [channelList,setChannelList] = useState([])

    // 提交表单的回调函数
    const onFinish=(formValue)=>{
        // 结构获取到的数据
        const {title,content,channel_id} = formValue
        // 处理收集到的表单数据
        const reqData = {
            title,
            content,
            cover:{
                type:0,
                images:[]
            },
            channel_id
        }
        // 再调用接口提交
        createArticleAPI(reqData)
    }

    // 上传回调
    const [imageList,setImageList] = useState([])
    const onChange=(value)=>{
        setImageList(value.fileList)
    }

    // 切换图片封面类型
    const [imageType,setImageType] = useState(0)
    const onTypeChange=(e)=>{
        setImageType(e.target.value)
    }

    useEffect(()=>{
        // 1、封装函数，在函数体内调用接口
        const getChannelList = async()=>{
            const res = await getChannelAPI()
            setChannelList(res.data.channels)
        }
        // 2、 调用函数
        getChannelList()
    },[])
    return (
        <div className="publish">
            <Card title={
                <Breadcrumb items={[
                    {title:<Link to={'/'}>首页</Link>},
                    {title:'发布文章'},
                ]}
                />
            }
            >
                <Form labelCol={{span:4}} wrapperCol={{span:16}} initialValues={{type:0}} onFinish={onFinish}>
                    <Form.Item label="标题" name="title" rules={[{required:true,message:'请输入文章标题'}]}>
                        <Input placeholder='请输入文章标题' style={{width:4000}}/>
                    </Form.Item>
                    <Form.Item label="频道" name="channel_id" rules={[{required:true,message:'请选择文章频道'}]}>
                        <Select placeholder="请选择文章频道" style={{width:400}}>
                            {channelList.map(item=><Option key={item.id} value={item.id}>{item.name}</Option>)}
                        </Select>
                    </Form.Item>
                    <Form.Item label='封面'>
                        <Form.Item name="type">
                            <Radio.Group onChange={onTypeChange}>
                                <Radio value={1}>单图</Radio>
                                <Radio value={3}>三图</Radio>
                                <Radio value={0}>无图</Radio>
                            </Radio.Group>
                        </Form.Item>
                        {/* 条件渲染
                        showUploadList：控制显示上传列表 
                        */}
                        {imageType > 0 && <Upload listType='picture-card' 
                                showUploadList
                                action={'http://geek.itheima.net/v1_0/upload'}
                                name='image'
                                onChange={onChange}
                                >
                            <div style={{marginTop:8}}>
                                <PlusOutlined/>
                            </div>
                        </Upload>}
                    </Form.Item>
                    <Form.Item label="内容" name="content" rules={[{required:true,message:'请输入文章内容'}]}>
                        <ReactQuill
                        className='publish-quill'
                        theme='snnow'
                        placeholder='请输入文章内容'>

                        </ReactQuill>
                    </Form.Item>
                    <Form.Item wrapperCol = {{offset:4}}>
                        <Space>
                            <Button size="large" type='primary' htmlType="submit">
                                发布文章
                            </Button>
                        </Space>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    )
}

export default Publish;