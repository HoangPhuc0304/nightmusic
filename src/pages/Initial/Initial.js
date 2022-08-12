import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { requestGetAllInfoPlaylists } from '../../redux/apiCalls/apiPlaylist'
import { requestGetAllSingers } from '../../redux/apiCalls/apiSinger'
import 'antd/dist/antd.css'
import { PlusOutlined, UploadOutlined } from '@ant-design/icons'
import { Form, Input, Button, Select, DatePicker, Tag } from 'antd'
import { useNavigate } from 'react-router-dom'
import { displayLoading } from '../../redux/slices/layoutSlice'
import { requestCreateLibrary } from '../../redux/apiCalls/apiLibrary'
const { RangePicker } = DatePicker
const { TextArea } = Input
const { Option } = Select

function Initial() {
  const requestType = useSelector((state) => state.playlist.playlistInfo)
  const requestSingers = useSelector((state) => state.singer.singers)

  const [types, setTypes] = useState([])
  const [singers, setSingers] = useState([])
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleSelectTypes = (types) => {
    setTypes(types)
  }
  const handleSelectSingers = (singers) => {
    setSingers(singers)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    requestCreateLibrary(dispatch, {
      type: types,
      singer: singers,
    })
    dispatch(displayLoading(true))
    setTimeout(() => {
      navigate('/', { replace: true })
      dispatch(displayLoading(false))
    }, 2000)
  }
  const handleSkip = (e) => {
    e.preventDefault()
    requestCreateLibrary(dispatch, {
      type: [],
      singer: [],
    })
    dispatch(displayLoading(true))
    setTimeout(() => {
      navigate('/', { replace: true })
      dispatch(displayLoading(false))
    }, 2000)
  }

  useEffect(() => {
    !requestType[0] && requestGetAllInfoPlaylists(dispatch)
    !requestSingers[0] && requestGetAllSingers(dispatch)
  }, [])

  return (
    <div id="initial">
      <div className="initial-header">
        <h3>Get started</h3>
        <p>Please select item to initialize your library</p>
      </div>
      <div className="initial-body">
        <div className="initial-container">
          <Form
            labelCol={{
              span: 4,
            }}
            wrapperCol={{
              span: 14,
            }}
            layout="horizontal"
          >
            <Form.Item label="Type" className="type-item">
              <Select
                mode="multiple"
                allowClear
                name="type"
                placeholder="Select types"
                style={{ width: '100%', lineHeight: '32px' }}
                onChange={handleSelectTypes}
              >
                {requestType &&
                  requestType.map((playlist) => (
                    <Option
                      key={playlist._id}
                      value={playlist.type}
                      label={playlist.type}
                    >
                      <Tag
                        color={playlist.color || 'blue'}
                        style={{ lineHeight: '90%', padding: '4px' }}
                      >
                        {playlist.type}
                      </Tag>
                    </Option>
                  ))}
              </Select>
            </Form.Item>
            <Form.Item label="Singer" className="singer-item">
              <Select
                mode="multiple"
                allowClear
                name="singer"
                placeholder="Select singers"
                style={{ width: '100%', lineHeight: '32px' }}
                onChange={handleSelectSingers}
              >
                {requestSingers &&
                  requestSingers.map((singer) => (
                    <Option
                      key={singer._id}
                      value={singer.name}
                      label={singer.name}
                    >
                      <Tag
                        color="blue"
                        style={{ lineHeight: '90%', padding: '4px' }}
                      >
                        {singer.name}
                      </Tag>
                    </Option>
                  ))}
              </Select>
            </Form.Item>
            <Form.Item
              wrapperCol={{
                span: 12,
              }}
              className="tail-item"
            >
              <Button
                htmlType="submit"
                style={{ margin: '1rem 0.5rem 0 0' }}
                onClick={handleSkip}
              >
                Skip
              </Button>

              <Button
                type="primary"
                style={{ margin: '1rem 0 0 0.5rem' }}
                htmlType="submit"
                onClick={handleSubmit}
              >
                Continue
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default Initial
