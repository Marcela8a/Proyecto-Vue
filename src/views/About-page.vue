<template>
  <div class="about-container">
    <div class="about-content">
      <h2>Acerca de Nosotros</h2>
      <p>Somos una empresa dedicada a ofrecer soluciones Tecnológicas para nuestros clientes.</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.about-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 600px;
  background-image: url("/src/assets/fondo2.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.about-content {
  max-width: 600px;
  padding: 20px;
  text-align: center;
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
}

.about-content h2 {
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
}

.about-content p {
  font-size: 16px;
  color: #333;
  line-height: 1.6;
}
</style>