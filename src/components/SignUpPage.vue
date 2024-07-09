<template>
    <form @submit.prevent="register">
      <div>
        <label for="name">Nome:</label>
        <input type="text" id="name" v-model="name" required>
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required>
      </div>
      <div>
        <label for="password">Senha:</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <button type="submit">Cadastrar</button>
      <div v-if="registerError" class="error-message">{{ registerError }}</div>
      <p class="login-text">Já possui uma conta? <router-link to="/login">Faça login</router-link>.</p>
    </form>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        email: '',
        password: '',
        registerError: ''
      };
    },
    methods: {
      async register() {
        
        try {          
          await this.$axios.post('/account/user', {
            name: this.name,
            email: this.email,
            password: this.password
          });                                  
          this.$router.push("/login")
        } catch (error) {          
          this.registerError = 'Erro ao cadastrar. Por favor, tente novamente.';
        }
      }
    }
  };
  </script>
  
  <style scoped>
  form {
    max-width: 300px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f9f9f9;
  }
  
  label {
    display: block;
    margin-bottom: 10px;
  }
  
  input[type="text"],
  input[type="email"],
  input[type="password"] {
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
  
  button {
    width: 100%;
    padding: 10px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .error-message {
    color: red;
    margin-top: 10px;
  }
  
  .login-text {
    text-align: center;
    margin-top: 10px;
  }
  </style>