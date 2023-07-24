<template>
  <div class="container">
    <div class="list-container">
      <h2 class="title">Lista de Elementos</h2>
      <table class="item-table" v-if="items.length > 0">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items" :key="item.id">
            <td>{{ item.name }}</td>
            <td>{{ item.email }}</td>
            <td>
              <button class="delete-btn" @click="deleteItem(item.id)">Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>
      <p v-else>No hay elementos en la lista.</p>
      <p>Total de elementos: {{ itemCount }}</p>
    </div>

    <div class="form-container">
      <div class="form-wrapper">
        <form @submit.prevent="addItem" class="add-form">
          <h3 class="title">Ingresa Personas a Lista</h3>
          <label for="name">Nombre:</label>
          <input type="text" id="name" v-model="newItem.name" />
          <label for="email">Email:</label>
          <input type="text" id="email" v-model="newItem.email" />
          <button type="submit" class="add-btn">Agregar</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      items: [], // Array para almacenar los elementos obtenidos desde la API
      newItem: { name: "", email: "" }, // Nuevo elemento a agregar
    };
  },
  created() {
    this.fetchData();
  },
  computed: {
    itemCount() {
      return this.items.length;
    },
  },
  methods: {
    fetchData() {
      axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
          this.items = response.data;
        })
        .catch((error) => {
          console.error('Error al obtener los datos:', error);
        });
    },
    addItem() {
      if (this.newItem.name && this.newItem.email) {
        const newItemId = this.items.length + 1;
        this.items.push({ ...this.newItem, id: newItemId });
        this.newItem = { name: "", email: "" };
      }
    },
    deleteItem(itemId) {
      this.items = this.items.filter((item) => item.id !== itemId);
    },
  },
};
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  font-family: "Arial", sans-serif;
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
}

.list-container {
  border: 1px solid #ccc;
  padding: 20px;
  width: 80%;
  margin-bottom: 20px;
}

.item-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 10px;
}

.item-table th,
.item-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.delete-btn {
  padding: 5px 10px;
  background-color: #ff0000;
  color: #fff;
  border: none;
  cursor: pointer;
}

.delete-btn:hover {
  background-color: #cc0000;
}

.form-container {
  border: 1px solid #ccc;
  padding: 20px;
  width: 80%;
  display: flex;
  justify-content: center;
}

.add-form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.add-form label {
  display: block;
  margin-bottom: 5px;
}

.add-form input {
  padding: 5px;
  margin-bottom: 10px;
}

.list-item button {
  padding: 5px 10px;
  background-color: #1295c9;
  color: #fff;
  border: none;
  cursor: pointer;
  margin-left: 10px;
}

.add-btn {
  padding: 5px 10px;
  background-color: #109fd8f5;
  color: #fff;
  border: none;
  cursor: pointer;
}

.add-btn:hover {
  background-color: #0056b3;
}

.form-wrapper {
  border: 1px solid #ccc;
  padding: 20px;
  display: flex;
  align-items: center;
}
</style>