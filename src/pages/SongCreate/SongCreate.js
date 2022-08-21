import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import 'antd/dist/antd.css'
import { PlusOutlined, UploadOutlined } from '@ant-design/icons'
import { Form, Input, Button, Select, DatePicker, Upload, Tag } from 'antd'
import { getAllPlaylists, requestCreateSong } from '../../redux/apiCalls'
const { RangePicker } = DatePicker
const { TextArea } = Input
const { Option } = Select

function SongCreate() {
  const requestGetTypesPlaylist = useSelector(
    (state) => state.playlist.playlists,
  )
  const dispatch = useDispatch()
  const [disabled, setDisabled] = useState(true)
  const [formData, setFormData] = useState({
    song: '',
    name: '',
    img: '',
    avatar: '',
    type: [],
    audio: '',
    link: '',
  })

  const handleChangeInput = (e) => {
    switch (e.target.name) {
      case 'song':
        setFormData((preForm) => ({
          ...preForm,
          song: e.target.value,
        }))
        break
      case 'name':
        setFormData((preForm) => ({
          ...preForm,
          name: e.target.value,
        }))
        break
      case 'link':
        setFormData((preForm) => ({
          ...preForm,
          link: e.target.value,
        }))
        break
      default:
    }
  }
  const handleSelectInput = (value) => {
    setFormData((preForm) => ({
      ...preForm,
      type: value,
    }))
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
  const handleSelectAvatar = (element) => {
    if (element.fileList.length > 0) {
      setFormData((preForm) => ({
        ...preForm,
        avatar: element.file,
      }))
    } else {
      setFormData((preForm) => ({
        ...preForm,
        avatar: '',
      }))
    }
  }
  const handleSelectAudio = (element) => {
    if (element.fileList.length > 0) {
      setFormData((preForm) => ({
        ...preForm,
        audio: element.file,
      }))
    } else {
      setFormData((preForm) => ({
        ...preForm,
        audio: '',
      }))
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault()

    const data = new FormData()
    data.append('img', formData.img)
    data.append('avatar', formData.avatar)
    data.append('audio', formData.audio)
    data.append('song', formData.song)
    data.append('name', formData.name)
    data.append('link', formData.link)
    data.append('type', formData.type)

    requestCreateSong(dispatch, data)
  }

  useEffect(() => {
    !requestGetTypesPlaylist[0] && getAllPlaylists(dispatch)
  }, [])

  useEffect(() => {
    if (
      formData.song &&
      formData.name &&
      formData.audio &&
      formData.link &&
      formData.type.length > 0
    ) {
      disabled && setDisabled(false)
    } else {
      !disabled && setDisabled(true)
    }
  }, [formData])

  console.log(formData)
  return (
    <div id="song-create">
      <div className="song-create-header"></div>
      <div className="song-create-body">
        <div className="song-create-container">
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
              label="Song"
              hasFeedback
              validateStatus={formData.song ? 'success' : ''}
            >
              <Input name="song" onChange={handleChangeInput} />
            </Form.Item>
            <Form.Item
              label="Name"
              hasFeedback
              validateStatus={formData.name ? 'success' : ''}
            >
              <Input name="name" onChange={handleChangeInput} />
            </Form.Item>
            <Form.Item
              label="MV link"
              hasFeedback
              validateStatus={formData.link ? 'success' : ''}
            >
              <Input name="link" onChange={handleChangeInput} />
            </Form.Item>
            <Form.Item
              label="Type"
              rules={[
                {
                  required: true,
                  message: 'Please select types!',
                  type: 'array',
                },
              ]}
              style={{ width: '100%' }}
              hasFeedback
              validateStatus={formData.type.length > 0 ? 'success' : ''}
            >
              <Select
                mode="multiple"
                name="type"
                placeholder="Select types"
                style={{ lineHeight: '32px' }}
                onChange={handleSelectInput}
              >
                {requestGetTypesPlaylist.map((playlist) => (
                  <Option
                    key={playlist._id}
                    value={playlist.type}
                    label={playlist.type}
                  >
                    <Tag
                      color="blue"
                      style={{ lineHeight: '90%', padding: '4px' }}
                    >
                      {playlist.type}
                    </Tag>
                  </Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item label="Image" valuePropName="file">
              <Upload
                beforeUpload={() => {
                  return false
                }}
                action="/upload.do"
                listType="picture-card"
                onPreview={() => {
                  return
                }}
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
            <Form.Item label="Avatar" valuePropName="file">
              <Upload
                beforeUpload={() => {
                  return false
                }}
                action="/upload.do"
                listType="picture-card"
                onPreview={() => {
                  return
                }}
                maxCount={1}
                name="avatar"
                onChange={handleSelectAvatar}
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
              label="Audio"
              valuePropName="file"
              rules={[
                {
                  required: true,
                  message: 'Please select image!',
                },
              ]}
              hasFeedback
              validateStatus={formData.audio ? 'success' : ''}
            >
              <Upload
                beforeUpload={() => {
                  return false
                }}
                name="audio"
                action="/upload.do"
                listType="audio"
                maxCount={1}
                onChange={handleSelectAudio}
              >
                <Button icon={<UploadOutlined />}>Click to upload</Button>
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
      <div className="song-create-tail">
        <Link to="/song" style={{ textDecoration: 'none' }}>
          <button>
            <i className="bi bi-arrow-left"></i>
          </button>
        </Link>
      </div>
    </div>
  )
}

export default SongCreate
