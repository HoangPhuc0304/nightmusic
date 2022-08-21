import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import 'antd/dist/antd.css'
import { PlusOutlined, UploadOutlined } from '@ant-design/icons'
import { Form, Input, Button, Select, DatePicker, Upload, Tag } from 'antd'
import {
  getAllPlaylists,
  requestCreateSong,
  requestEditSong,
} from '../../redux/apiCalls'
import { adminRequest } from '../../config/requestMethod'
const { RangePicker } = DatePicker
const { TextArea } = Input
const { Option } = Select

function SongEdit() {
  const idSong = useLocation().pathname.split('/')[3]
  const dispatch = useDispatch()
  const [disabled, setDisabled] = useState(true)
  const [formData, setFormData] = useState({
    song: '',
    name: '',
    img: [],
    avatar: [],
    type: [],
    audio: [],
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

  const handleSelectImage = (newFileList) => {
    if (newFileList.length > 0) {
      setFormData((preForm) => ({
        ...preForm,
        img: newFileList,
      }))
    } else {
      setFormData((preForm) => ({
        ...preForm,
        img: [],
      }))
    }
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
  const handleSelectAudio = (newFileList) => {
    if (newFileList.length > 0) {
      setFormData((preForm) => ({
        ...preForm,
        audio: newFileList,
      }))
    } else {
      setFormData((preForm) => ({
        ...preForm,
        audio: [],
      }))
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData()
    if (formData.img.length > 0 && formData.img[0].uid !== -1) {
      data.append('img', formData.img[0].originFileObj)
    }
    if (formData.avatar.length > 0 && formData.avatar[0].uid !== -1) {
      data.append('avatar', formData.avatar[0].originFileObj)
    }
    if (formData.audio.length > 0 && formData.audio[0].uid !== -1) {
      data.append('audio', formData.audio[0].originFileObj)
    }
    data.append('song', formData.song)
    data.append('name', formData.name)
    data.append('link', formData.link)
    data.append('type', formData.type)

    requestEditSong(idSong, data)
  }

  useEffect(() => {
    const requestSongById = async () => {
      const res = await adminRequest.get(`/api/songs/find/${idSong}`)
      setFormData({
        song: res.data.song,
        name: res.data.name,
        img: [
          {
            uid: -1,
            status: 'done',
            url: res.data.img,
          },
        ],
        avatar: [
          {
            uid: -1,
            status: 'done',
            url: res.data.avatar,
          },
        ],
        type: res.data.type,
        audio: [
          {
            uid: -1,
            status: 'done',
            url: res.data.audio,
          },
        ],
        link: res.data.link,
      })
    }
    requestSongById()
  }, [])

  useEffect(() => {
    if (
      formData.song &&
      formData.name &&
      formData.audio.length > 0 &&
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
              <Input
                name="song"
                onChange={handleChangeInput}
                value={formData.song}
              />
            </Form.Item>
            <Form.Item
              label="Name"
              hasFeedback
              validateStatus={formData.name ? 'success' : ''}
            >
              <Input
                name="name"
                onChange={handleChangeInput}
                value={formData.name}
              />
            </Form.Item>
            <Form.Item
              label="MV link"
              hasFeedback
              validateStatus={formData.link ? 'success' : ''}
            >
              <Input
                name="link"
                onChange={handleChangeInput}
                value={formData.link}
              />
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
                disabled={true}
                name="type"
                placeholder="Select types"
                style={{ lineHeight: '32px' }}
                value={formData.type}
              ></Select>
            </Form.Item>
            <Form.Item label="Image" valuePropName="file">
              <Upload
                beforeUpload={() => {
                  return false
                }}
                listType="picture-card"
                maxCount={1}
                name="img"
                onChange={({ fileList: newFileList }) => {
                  handleSelectImage(newFileList)
                }}
                fileList={formData.img}
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
                listType="picture-card"
                maxCount={1}
                name="avatar"
                onChange={({ fileList: newFileList }) => {
                  handleSelectAvatar(newFileList)
                }}
                fileList={formData.avatar}
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
                maxCount={1}
                listType="audio"
                onChange={({ fileList: newFileList }) => {
                  handleSelectAudio(newFileList)
                }}
                fileList={formData.audio}
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

export default SongEdit
