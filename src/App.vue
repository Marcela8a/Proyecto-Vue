<template>
  <div id="app">
    <nav>
      <ul class="menu">
        <router-link to="/">Inicio</router-link>
        <router-link to="/ItemList">Detalle de Personas</router-link>
        <router-link to="/about"> Información</router-link>
        <router-link to="/contact">Contáctenos</router-link>
      </ul>
    </nav>
    <ItemList />
    <router-view></router-view>
  </div>
</template>

<script>

export default {

};

</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: Arial, sans-serif;
}
nav {
  background-color: #333;
}
.menu {
  list-style: none;
  display: flex;
  justify-content: space-between;
  padding: 10px;
}
.menu li {
  margin-right: 20px;
}
.menu li:last-child {
  margin-right: 0;
}
.menu a {
  color: #fff;
  text-decoration: none;
  padding: 5px 10px;
  border-radius: 5px;
}
.menu a:hover {
  background-color: #555;
}
#app {
  margin: 20px;
}
</style>