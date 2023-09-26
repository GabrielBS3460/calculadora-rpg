<!-- App.vue -->
<template>
  <Navbar />
  <section class="section">
    <div class="container">
      <router-view></router-view>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Navbar from './components/Navbar.vue';

export default defineComponent({
  name: 'App',
  components: {
    Navbar,
  },
});
</script>

<style>
.box {
  width: 100%;
  height: 30%;
  font-family: 'Arial', sans-serif;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0px 0px 40px rgba(0, 0, 0, 5);
  text-align: center;
}

body {
  background: url('./assets/fundo-rpg.png') no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  margin: 0;
}

.container{
  max-width: 27%;
  max-height: 50%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.titulo {
  font-family: 'Arial', sans-serif;
  text-align: center;
  text-shadow: 2px 2px 4px #ffffff;
}

.pontos{
  font-family: 'Arial', sans-serif;
  text-align: right;
  font-weight: bolder;
  text-shadow: 2px 2px 4px #ffffff;
}
.button {
  margin: 0.5rem 0;
}

.title{
  margin-top: 20px;
}

.title, .subtitle {
  font-size: 0.9rem;
  margin-bottom: 0rem;
  font-weight: bold;
}

.button.is-primary{
  border-radius: 10%;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  font-weight: bold;
  margin-right: 30%;
  font-family: 'Arial', sans-serif;
}

.button.is-danger{
  border-radius: 10%;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  font-family: 'Arial', sans-serif;
  font-weight: bold;
}
</style>