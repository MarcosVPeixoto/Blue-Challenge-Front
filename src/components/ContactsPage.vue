<template>
  <div class="container">
    <h2>Lista de Contatos</h2>
    <div class="header">
      <h3>Contatos</h3>
      <router-link to="/contactForm" class="btn new-contact">
        Novo Contato
        <font-awesome-icon :icon="['fas', 'plus']" />
      </router-link>
    </div>
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Email</th>
          <th>Telefone</th>
          <th class="actions-column"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="contact in contacts" :key="contact.id">
          <td>{{ contact.name }}</td>
          <td>{{ contact.email }}</td>
          <td>{{ contact.phone }}</td>
          <td class="actions-column">            
            <button class="btn delete" @click="deleteContact(contact.id)">
              <font-awesome-icon :icon="['fas', 'trash']" />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    
  </div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import contactService from '@/services/ContactService';
library.add(faEdit, faTrash);
export default {
  components:{
    FontAwesomeIcon
  },
  data() {
    return {
      contacts: [],
      showContactForm: false,
      formTitle: 'Novo Contato',
      submitButtonText: "Criar",
      initialData: null
    };
  },
  mounted(){
    this.fetchContacts()
  },
  methods:{
    fetchContacts(){          
      contactService.getAll()
        .then(contacts => this.contacts = contacts)
        .catch(error => console.log(error))
    },
    deleteContact(id){
      contactService.delete(id)
      .then(contacts => this.contacts = contacts)
      .catch(error => console.log(error));
    }
  }
};
</script>
<style scoped>
.container {
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f9f9f9;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

h2 {
  text-align: center;
  color: #333;
  margin-bottom: 20px;
}

h3 {
  color: #555;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  background-color: #fff;
}

th, td {
  border: 1px solid #ccc;
  padding: 12px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
  color: #333;
}

td {
  color: #555;
}

.actions-column {
  width: 100px;
  text-align: center; /* Centraliza o conteúdo da coluna de ações */
}

td.actions-column {
  display: flex;
  justify-content: center; /* Centraliza os botões na coluna de ações */
  gap: 5px;
}

.btn {
  padding: 6px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #007bff;
  color: white;
  font-size: 14px;
  font-weight: bold;
}

.btn:hover {
  background-color: #0056b3;
}

.btn.new-contact {
  background-color: #28a745;
}

.btn.new-contact:hover {
  background-color: #218838;
}

.btn.update {
  background-color: #ffc107;
  color: #333;
}

.btn.update:hover {
  background-color: #e0a800;
}

.btn.delete {
  background-color: #dc3545;
}

.btn.delete:hover {
  background-color: #c82333;
}

.btn > .svg-inline--fa {
  margin-right: 5px;
}
</style>