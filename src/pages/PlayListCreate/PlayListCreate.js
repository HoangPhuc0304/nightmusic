import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import 'antd/dist/antd.css'
import { PlusOutlined } from '@ant-design/icons'
import { Form, Input, Button, Select, DatePicker, Upload, Tag } from 'antd'
import { requestCreatePlaylist } from '../../redux/apiCalls'
const { RangePicker } = DatePicker
const { TextArea } = Input
const { Option } = Select

function PlayListCreate() {
  const dispatch = useDispatch()
  const [disabled, setDisabled] = useState(true)
  const [formData, setFormData] = useState({
    color: '',
    type: '',
    img: '',
  })

  const handleChangeInput = (e) => {
    switch (e.target.name) {
      case 'color':
        setFormData((preForm) => ({
          ...preForm,
          color: e.target.value,
        }))
        break
      case 'type':
        setFormData((preForm) => ({
          ...preForm,
          type: e.target.value,
        }))
        break
      default:
    }
  }

  const handleSelectImage = (element) => {
    if (element.fileList.length > 0) {
      setFormData((preForm) => ({
        ...preForm,
        img: element.file,
      }))
    } else {
      setFormData((preForm) => ({
        ...preForm,
        img: '',
      }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const data = new FormData()
    data.append('img', formData.img)
    data.append('color', formData.color)
    data.append('type', formData.type)
    requestCreatePlaylist(dispatch, data)
  }

  useEffect(() => {
    if (formData.color && formData.type && formData.img) {
      disabled && setDisabled(false)
    } else {
      !disabled && setDisabled(true)
    }
  }, [formData])

  console.log(formData)
  return (
    <div id="playlist-create">
      <div className="playlist-create-header"></div>
      <div className="playlist-create-body">
        <div className="playlist-create-container">
          <Form
            labelCol={{
              span: 4,
            }}
            wrapperCol={{
              span: 14,
            }}
            layout="horizontal"
          >
            <Form.Item
              label="Color"
              rules={[
                {
                  required: true,
                  message: 'Please select color!',
                  type: 'array',
                },
              ]}
              hasFeedback
              validateStatus={formData.color ? 'success' : ''}
            >
              <Input name="color" onChange={handleChangeInput} />
            </Form.Item>
            <Form.Item
              label="Type"
              rules={[
                {
                  required: true,
                  message: 'Please select color!',
                  type: 'array',
                },
              ]}
              hasFeedback
              validateStatus={formData.type ? 'success' : ''}
            >
              <Input name="type" onChange={handleChangeInput} />
            </Form.Item>
            <Form.Item label="Image" valuePropName="file">
              <Upload
                beforeUpload={() => {
                  return false
                }}
                listType="picture-card"
                maxCount={1}
                name="img"
                onChange={handleSelectImage}
              >
                <div>
                  <PlusOutlined />
                  <div
                    style={{
                      marginTop: 8,
                    }}
                  >
                    Upload
                  </div>
                </div>
              </Upload>
            </Form.Item>
            <Form.Item
              wrapperCol={{
                span: 12,
                offset: 4,
              }}
            >
              <Button
                type="primary"
                htmlType="submit"
                disabled={disabled}
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
      <div className="playlist-create-tail">
        <Link to="/playlist" style={{ textDecoration: 'none' }}>
          <button>
            <i className="bi bi-arrow-left"></i>
          </button>
        </Link>
      </div>
    </div>
  )
}

export default PlayListCreate
