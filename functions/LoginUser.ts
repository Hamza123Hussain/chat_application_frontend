import axios from 'axios'
export const HandleLogin = async (inputVal: any) => {
  try {
    const Response = await axios.post('http://localhost:5000/api/Auth/Login', {
      inputVal,
    })
    if (Response.status === 200) {
      console.log(`log in : ${Response.data}`)

      return Response.data
    }
  } catch (error) {
    console.log('ERROR IN API ', error)
  }
}
