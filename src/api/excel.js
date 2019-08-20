import axios from '@/libs/api.request'

export const doUploadExcel = file => {
  return axios.request({
    url: 'upload/uploadExcel',
    method: 'post',
    data:{
      file: file
    }
  })
};
