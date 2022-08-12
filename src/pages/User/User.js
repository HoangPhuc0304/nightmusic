import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import { codePhone, nameCountry } from '../../resources/data/layout'

import 'antd/dist/antd.css'
import { PlusOutlined, UploadOutlined } from '@ant-design/icons'
import ImgCrop from 'antd-img-crop'
import {
  Form,
  Input,
  Button,
  Select,
  DatePicker,
  Upload,
  Radio,
  Tag,
  Cascader,
  message,
} from 'antd'
import { BASE_URL } from '../../config/requestMethod'
import { requestEditUser } from '../../redux/apiCalls/apiUser'
const { RangePicker } = DatePicker
const { TextArea } = Input
const { Option } = Select

function User() {
  const user = useSelector((state) => state.user.currentUser)
  const [disabled, setDisabled] = useState(true)
  const [formData, setFormData] = useState({
    avatar: [],
    name: '',
    birthday: '',
    gender: '',
    phoneNumber: '',
    country: '',
  })
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleChangeInput = (e) => {
    switch (e.target.name) {
      case 'name':
        setFormData((preForm) => ({
          ...preForm,
          name: e.target.value,
        }))
        break
      case 'gender':
        setFormData((preForm) => ({
          ...preForm,
          gender: e.target.value,
        }))
        break
      case 'phone':
        setFormData((preForm) => ({
          ...preForm,
          phoneNumber: e.target.value,
        }))
        break
      default:
    }
  }
  const handleChangeDate = (date) => {
    setFormData((preForm) => ({
      ...preForm,
      birthday: date,
    }))
  }
  const handleSelectAvatar = (newFileList) => {
    if (newFileList.length > 0) {
      setFormData((preForm) => ({
        ...preForm,
        avatar: newFileList,
      }))
    } else {
      setFormData((preForm) => ({
        ...preForm,
        avatar: [],
      }))
    }
  }

  const handleSave = () => {
    const data = new FormData()
    const date = new Date(formData.birthday._d)
    const formatDate = `${date.getFullYear()}-${
      date.getMonth() + 1
    }-${date.getDate()}`

    if (formData.avatar[0] && formData.avatar[0].uid !== -1) {
      data.append('user-avatar', formData.avatar[0].originFileObj)
    }
    user.name !== formData.name && data.append('name', formData.name)
    user.gender !== formData.gender && data.append('gender', formData.gender)
    user.birthday !== formatDate && data.append('birthday', formatDate)
    user.phoneNumber !== formData.phoneNumber &&
      data.append('phoneNumber', formData.phoneNumber)
    user.country !== formData.country &&
      data.append('country', formData.country)
    requestEditUser(dispatch, data)
    message.success('Update your information successfully')
    setDisabled(true)
  }

  useEffect(() => {
    setFormData({
      avatar: [
        {
          uid: -1,
          status: 'done',
          url: user.avatar,
        },
      ],
      name: user.name,
      birthday: user.birthday,
      gender: user.gender,
      phoneNumber: user.phoneNumber,
      country: user.country,
    })
  }, [])

  return (
    <div id="user-page">
      <div
        className="user-icon-return"
        onClick={() => {
          navigate(-1)
        }}
      >
        <i className="bi bi-arrow-left-circle-fill"></i>
      </div>
      <div className="user-page-body">
        <div className="user-page-profile">
          <Form
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 14,
            }}
            layout="horizontal"
          >
            <Form.Item valuePropName="file">
              <ImgCrop rotate grid>
                <Upload
                  action={`${BASE_URL}/api/users/upload-auto`}
                  listType="picture-card"
                  name="avatar"
                  fileList={formData.avatar}
                  onChange={({ fileList: newFileList }) => {
                    handleSelectAvatar(newFileList)
                  }}
                >
                  {formData.avatar.length < 1 && (
                    <div
                      style={{
                        marginTop: 8,
                      }}
                    >
                      Avatar
                    </div>
                  )}
                </Upload>
              </ImgCrop>
            </Form.Item>

            <Form.Item hasFeedback>
              <Input
                value={formData.name}
                name="name"
                placeholder="Name"
                // style={{ width: '250px' }}
                onChange={handleChangeInput}
              />
            </Form.Item>
          </Form>
        </div>
        <div className="user-page-container">
          <Form
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 14,
            }}
            layout="horizontal"
          >
            <Form.Item label="Email">
              <Input
                name="email"
                onChange={(e) => {
                  e.preventDefault()
                }}
                value={user.email}
                disabled={true}
              />
            </Form.Item>
            <Form.Item label="Username" hasFeedback>
              <Input
                name="username"
                onChange={(e) => {
                  e.preventDefault()
                }}
                value={user.username}
                disabled={true}
              />
            </Form.Item>
            <Form.Item label="Password" style={{ color: '#000' }}>
              <Input.Password
                name="password"
                onChange={(e) => {
                  e.preventDefault()
                }}
                value={user.password || '*********'}
                disabled={true}
              />
            </Form.Item>
            <Form.Item label="Birthday">
              <DatePicker
                format={'YYYY-MM-DD'}
                name="birthday"
                onChange={handleChangeDate}
                value={moment(formData.birthday || new Date())}
              />
            </Form.Item>

            <Form.Item label="Gender">
              <Radio.Group
                onChange={handleChangeInput}
                name="gender"
                value={formData.gender}
              >
                <Radio value={'male'} style={{ color: 'var(--text-color)' }}>
                  Male
                </Radio>
                <Radio value={'female'} style={{ color: 'var(--text-color)' }}>
                  Female
                </Radio>
                <Radio value={'other'} style={{ color: 'var(--text-color)' }}>
                  Other
                </Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item label="Phone">
              <Input
                value={formData.phoneNumber}
                style={{
                  width: '100%',
                }}
                name="phone"
                onChange={handleChangeInput}
              />
            </Form.Item>

            <Form.Item label="Country" name="country">
              <Cascader
                // initialvalues={formData.country}
                defaultValue={[formData.country || user.country]}
                options={nameCountry
                  .map((item) => ({
                    label: item.name,
                    value: item.country,
                  }))
                  .sort((a, b) => a.label.localeCompare(b.label))}
                onChange={([value]) => {
                  setFormData((preForm) => ({
                    ...preForm,
                    country: value,
                  }))
                }}
                allowClear={false}
                placeholder="Please select"
                showSearch={(inputValue, path) =>
                  path.some(
                    (option) =>
                      option.label
                        .toLowerCase()
                        .indexOf(inputValue.toLowerCase()) > -1,
                  )
                }
              />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                span: 12,
                offset: 8,
              }}
              className="user-page-tail"
            >
              <Button
                htmlType="submit"
                style={{ margin: '1rem 0.5rem 0 0' }}
                onClick={() => {
                  setDisabled(false)
                }}
              >
                Edit profile
              </Button>

              <Button
                type="primary"
                style={{ margin: '1rem 0 0 0.5rem' }}
                htmlType="submit"
                disabled={disabled}
                onClick={handleSave}
              >
                Save
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default User
