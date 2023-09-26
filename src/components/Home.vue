<!-- Home.vue -->
<template>
    <div class="container" style="text-align: center;">
      <h1>Bem-vindo à Calculadora de Atributos de RPG!</h1>
      <p>Escolha um dos RPGs no menu acima para começar a calcular seus atributos.</p>
      <img src="../assets/d20-logo.png" alt="Dado de 20 lados">
    </div>
</template>
  
<script lang="ts">
export default {
  name: 'HomePage'
}
</script>

<style scoped>
h1{
  font-size: 40px;
  width: 500%;
  font-family: 'Arial', Helvetica, sans-serif;
  text-shadow: 2px 2px 4px #ffffff;
}
p{
  font-size: 20px;
  width: 500%;
  font-family: 'Arial', Helvetica, sans-serif;
  font-weight: 600;
  text-shadow: 2px 2px 4px #ffffff;
}
img{
  width: 200%;
  height: 200%;
}
</style>
  