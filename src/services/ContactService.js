import axios from '@/axios'
export default {
  async getAll() {
    try {      
      const response = await axios.get('/contact');      
      return response.data;
    } catch (error) {
      return Promise.reject("Usuário inválido");
    }
  },
  async create(user) {
    try{
        const response = await axios.post('/contact', user);
        return response;
    }catch(error){
        return Promise.reject("Erro ao cadastrar contato");
    }
  },
  async delete(id){
    try{
        const response = await axios.delete(`/contact/${id}`)
        return response.data;
    } catch(error){
        return Promise.reject("Error ao deletar");
    }
  }
};