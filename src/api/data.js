import axios from '@/libs/api.request'

export const getTableData = () => {
  return axios.request({
    url: 'test/get_table_data',
    method: 'get'
  })
}

export const getDragList = () => {
  return axios.request({
    url: 'test/get_drag_list',
    method: 'get'
  })
}

export const errorReq = () => {
  return axios.request({
    url: 'error_url',
    method: 'post'
  })
}

export const saveErrorLogger = info => {
  return axios.request({
    url: 'test/save_error_logger',
    data: info,
    method: 'post'
  })
}
