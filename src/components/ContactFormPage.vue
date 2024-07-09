<template>
  <div class="contact-form">
    <h2>{{ formTitle }}</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="name" class="label">Nome:</label>
        <input type="text" id="name" v-model="formData.name" class="input" required>
      </div>
      <div class="form-group">
        <label for="email" class="label">Email:</label>
        <input type="email" id="email" v-model="formData.email" class="input" required>
      </div>
      <div class="form-group">
    <label for="phone" class="label">Telefone:</label>
    <input type="tel" id="phone" v-model="formData.phone" class="input" required @input="validatePhone"/>
  </div>
      <button type="submit"> Cadastrar</button>
    </form>
  </div>
</template>

<script>
import contactService from '@/services/ContactService'
export default {
  props: {
    formTitle: String,
    submitButtonText: String
  },
  data() {
    return {
      formData: {
        name: '',
        email: '',
        phone: ''
      }
    };
  },
  methods: {
    handleSubmit() {
      contactService
        .create(this.formData)
        .then(() => {
          this.$router.push('/contacts');          
        })
        .catch(error => console.log(error))      
    },
    validatePhone(event) {      
      const numericInput = event.target.value.replace(/\D/g, '');      
      this.formData.phone = numericInput;
    }
  }
};
</script>

<style scoped>
.contact-form {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

form {
  display: flex;
  flex-direction: column;
}

.form-group {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.label {
  width: 80px; /* Largura fixa para todos os rótulos */
  margin-right: 10px; /* Espaçamento entre rótulo e campo */
}

.input {
  flex: 1; /* Campo de entrada ocupa todo o espaço restante */
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

button {
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%; /* Botão ocupa toda a largura disponível */
}

button:hover {
  background-color: #45a049;
}
</style>