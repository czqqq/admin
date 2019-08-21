import axios from '@/libs/api.request'

export const doUploadExcel = file => {
  let formData = new FormData()
  formData.append('file', file)
  return axios.request({
    url: 'upload/uploadExcel',
    method: 'post',
    data: formData
  })
}
