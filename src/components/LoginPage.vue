<template>
  <form @submit.prevent="login">
    <div>
      <label for="email">Email:</label>
      <input type="text" id="email" v-model="email" required>
    </div>
    <div>
      <label for="password">Senha:</label>
      <input type="password" id="password" v-model="password" required>
    </div>
    <button type="submit">Entrar</button>
    <div v-if="loginError" class="error-message">{{ loginError }}</div>
    <p class="create-account-text">Ainda não tem uma conta? <RouterLink to="/signup">Crie uma conta</RouterLink>.</p>
  </form>
</template>

<script>
import loginService from '@/services/LoginService'
export default {
  data() {
    return {
      email: '',
      password: '',
      loginError: ''
    };
  },
  methods: {
    login() {            
      loginService.authenticate(this.email, this.password)
        .then(token => {
          loginService.setToken(token);
          this.$router.push("/contacts");
        })        
        .catch(() => this.loginError = "Usuário inválido");      
        
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
input[type="password"] {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box; /* Garante que o padding não aumente a largura do input */
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

.create-account-text {
  text-align: center;
  margin-top: 10px;
}
</style>
