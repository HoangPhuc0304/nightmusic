import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import 'antd/dist/antd.css'
import { PlusOutlined, InboxOutlined, UploadOutlined } from '@ant-design/icons'
import { Form, Input, Button, Select, DatePicker, Upload, Tag } from 'antd'
import { uploadFileResources } from '../../redux/apiCalls'
const { RangePicker } = DatePicker
const { TextArea } = Input
const { Option } = Select

function UploadFile() {
  const dispatch = useDispatch()
  const [disabled, setDisabled] = useState(true)
  const [formData, setFormData] = useState({
    images: [],
    audios: [],
    videos: [],
  })

  const handleSelectImage = (newFileList) => {
    if (newFileList.length > 0)
      setFormData((preForm) => ({
        ...preForm,
        images: newFileList,
      }))
    else {
      setFormData((preForm) => ({
        ...preForm,
        images: [],
      }))
    }
  }
  const handleSelectAudios = (newFileList) => {
    if (newFileList.length > 0)
      setFormData((preForm) => ({
        ...preForm,
        audios: newFileList,
      }))
    else {
      setFormData((preForm) => ({
        ...preForm,
        audios: [],
      }))
    }
  }
  const handleSelectVideo = (newFileList) => {
    if (newFileList.length > 0)
      setFormData((preForm) => ({
        ...preForm,
        videos: newFileList,
      }))
    else {
      setFormData((preForm) => ({
        ...preForm,
        videos: [],
      }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const dataImages = new FormData()
    const dataAudios = new FormData()
    const dataVideos = new FormData()
    formData.images.forEach((form) => {
      dataImages.append('images', form.originFileObj)
    })
    formData.audios.forEach((form) => {
      dataAudios.append('audios', form.originFileObj)
    })
    formData.videos.forEach((form) => {
      dataVideos.append('videos', form.originFileObj)
    })

    uploadFileResources(dataImages, dataAudios, dataVideos)
  }

  useEffect(() => {
    if (
      formData.audios.length > 0 ||
      formData.videos.length > 0 ||
      formData.images.length > 0
    ) {
      disabled && setDisabled(false)
    } else {
      !disabled && setDisabled(true)
    }
  }, [formData])

  console.log(formData)
  return (
    <div className="upload-file">
      <div className="upload-file-header"></div>
      <div className="upload-file-body">
        <div className="upload-file-container">
          <Form
            labelCol={{
              span: 4,
            }}
            wrapperCol={{
              span: 14,
            }}
            layout="horizontal"
          >
            <Form.Item label="Images" valuePropName="file">
              <Upload
                beforeUpload={() => {
                  return false
                }}
                multiple
                listType="picture-card"
                name="images"
                onChange={({ fileList: newFileList }) => {
                  handleSelectImage(newFileList)
                }}
                fileList={formData.images}
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
            <Form.Item label="Audios" valuePropName="file" hasFeedback>
              <Upload
                beforeUpload={() => {
                  return false
                }}
                name="audios"
                multiple
                listType="audios"
                onChange={({ fileList: newFileList }) => {
                  handleSelectAudios(newFileList)
                }}
                fileList={formData.audios}
              >
                <Button icon={<UploadOutlined />}>Click to upload</Button>
              </Upload>
            </Form.Item>
            <Form.Item label="Videos" valuePropName="file" hasFeedback>
              <Upload.Dragger
                beforeUpload={() => {
                  return false
                }}
                name="videos"
                multiple
                onChange={({ fileList: newFileList }) => {
                  handleSelectVideo(newFileList)
                }}
                fileList={formData.videos}
              >
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">
                  Click or drag file to this area to upload
                </p>
                <p className="ant-upload-hint">
                  Support for a single or bulk upload. Strictly prohibit from
                  uploading company data or other band files
                </p>
              </Upload.Dragger>
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
      <div className="upload-file-tail">
        <Link to="/playlist" style={{ textDecoration: 'none' }}>
          <button>
            <i className="bi bi-arrow-left"></i>
          </button>
        </Link>
      </div>
    </div>
  )
}

export default UploadFile
