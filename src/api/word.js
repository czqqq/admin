import axios from '@/libs/api.request'

export const generate = () => {
  return axios.request({
    url: 'word/generate',
    method: 'post'
  })
}
