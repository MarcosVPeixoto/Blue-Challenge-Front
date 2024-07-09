import axios from '@/axios'
export default {
  async authenticate(email, password) {
    try {
      console.log(axios)
      const response = await axios.post('/account/login', {
        email,
        password
      });
      
      return response.data.accessToken;
    } catch (error) {
      return Promise.reject("Usuário inválido");
    }
  },
  setToken(token) {
    localStorage.setItem('token', token);
  }
};