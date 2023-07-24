<template>
  <div class="home-container">
    <div class="background-image"></div>
    <div class="home-content">
      <h2>Bienvenido a nuestra página de inicio</h2>
      <p>¡Gracias por visitarnos! Aquí encontrarás información sobre nuestros productos y servicios.</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.home-container {
  position: relative;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("/src/assets/fondo.png.jpg");
  background-size: cover;
  background-position: center;
  opacity: 0.7;
}

.home-content {
  position: relative;
  z-index: 1;
  background-color: rgba(255, 255, 255, 0.7);
  padding: 20px;
  max-width: 500px;
  text-align: center;
}

.home-content h2 {
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
}

.home-content p {
  font-size: 16px;
  color: #333;
  line-height: 1.6;
}
</style>
