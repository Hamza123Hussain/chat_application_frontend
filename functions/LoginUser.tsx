import axios from 'axios'
export const HandleLogin = async (inputVal: any, Router: any) => {
  try {
    const Response = await axios.get(
      'http://localhost:5000/api/User/Login',
      inputVal
    )
    if (Response.status === 200) {
      Router.push('/')
    }
  } catch (error) {
    console.log('ERROR IN API ', error)
  }
}
