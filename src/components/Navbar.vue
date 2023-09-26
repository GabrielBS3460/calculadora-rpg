<template>
    <nav class="navbar" style="text-align: center;">
        <div class="navbar-brand">
          <router-link to="/"><button class="buttonNavBar">Home</button></router-link>
          <router-link to="/dnd"><button class="buttonNavBar">D&D</button></router-link>
          <router-link to="/tormenta"><button class="buttonNavBar">Tormenta</button></router-link>
          <router-link to="/ordem-paranormal"><button class="buttonNavBar">Ordem Paranormal</button></router-link>
        </div>
    </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NavBar',
});

</script>

<style>
.buttonNavBar{
    margin: 0.5%;
    width: 11%;
    background-color: #fff;
    box-shadow: 0px 0px 10% rgba(0, 0, 0, 5);
    font-family: 'Arial', sans-serif;
    font-weight: bold;
}
  
.navbar-logo{
    height: 10%;
    width: 10%;
}

.navbar {
    display: block;
    background-color: #800020;
    padding: 1.5rem 1rem;
    text-align: center;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 1);
}
</style>