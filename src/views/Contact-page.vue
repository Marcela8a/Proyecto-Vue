<template>
  <div class="contact-container">
    <div class="image-background"></div>
    <div class="content">
      <h2>Contáctenos por acá</h2>
      <br>
      <p>Si tienes alguna pregunta o consulta, no dudes en
        ponerte en contacto con nosotros.</p>
      <form class="contact-form">
        <div class="form-group">
          <label for="name">Nombre:</label>
          <input type="text" id="name" placeholder="Ingresa tu nombre">
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" placeholder="Ingresa tu email">
        </div>
        <div class="form-group">
          <label for="message">Mensaje:</label>
          <textarea id="message" placeholder="Escribe tu mensaje"></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>

    <div class="social-icons">
      <a href="#" class="icon-link"><i class="fab fa-facebook fa-3x"></i></a>
      <a href="#" class="icon-link"><i class="fab fa-twitter fa-3x"></i></a>
      <a href="#" class="icon-link"><i class="fab fa-instagram fa-3x"></i></a>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style>
.contact-container {
  position: relative;
  text-align: center;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
}

.image-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/src/assets/fondo3.png');
  background-size: cover;
  background-repeat: no-repeat;
  opacity: 0.5;
}

h2 {
  font-size: 24px;
  color: #333;
}

p {
  font-size: 16px;
  color: #666;
  margin-bottom: 20px;
}

.contact-form {
  max-width: 400px;
  margin: 0 auto;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 5px;
  background-color: #fff;
  margin-top: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  font-size: 16px;
  color: #333;
  margin-bottom: 5px;
}

input,
textarea {
  width: 100%;
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

button {
  background-color: #007BFF;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;
}

button:hover {
  background-color: #0056b3;
}

.social-icons {
  margin-top: 30px;
}

.icon-link {
  font-size: 24px;
  color: #333;
  margin: 0 10px;
  text-decoration: none;
}

.icon-link i {
  transition: color 0.3s ease;
}

.icon-link i:hover {
  color: #007BFF;
}

.content {
  position: relative;
  z-index: 1;
  background-color: rgba(255, 255, 255, 0.7);
  padding: 20px;
  border-radius: 5px;
}

.social-icons {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  background-color: rgba(255, 255, 255, 0.7);
  padding: 10px;
  border-radius: 5px;
}
</style>