import axios from 'axios'

const BASE_URL = process.env.VUE_APP_BASEURL

export async function sendImage(file, id) {
  const formData = new FormData()
  formData.append('file', file)
  const endpoint = `${BASE_URL}/image/${id}`

  axios.put(endpoint, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
}
