<!-- DnD.vue -->
<template>
    <div>
      <h1 class="titulo">Calculadora de Atributos D&D 5ª Edição</h1>
      <div class="box" v-for="(value, attribute) in attributes" :key="attribute">
        <h2 class="title is-4">{{ attribute }}</h2>
        <p class="subtitle is-6">Valor atual: {{ value }}</p>
        <div class="botoes">
          <button class="button is-primary" @click="increaseAttribute(attribute)" :disabled="points <= 0 || value >= 15">Aumentar</button>
          <button class="button is-danger" @click="decreaseAttribute(attribute)" :disabled="value <= 8">Reduzir</button>
        </div>
      </div>
      <p class="pontos">Pontos restantes: {{ points }}</p>
    </div>
  </template>
  
  <script lang="ts">
  import { ref } from 'vue';
  
  export default {
    name: 'DnD',
    setup() {
      const attributes = ref({
        Força: 8,
        Destreza: 8,
        Constituição: 8,
        Inteligência: 8,
        Sabedoria: 8,
        Carisma: 8
      });
      const points = ref(27);
  
      function increaseAttribute(attribute: keyof typeof attributes.value) {
        const cost = attributes.value[attribute as keyof typeof attributes.value] >= 13 ? 2 : 1;
        if (points.value >= cost && attributes.value[attribute as keyof typeof attributes.value] < 15) {
          points.value -= cost;
          attributes.value[attribute as keyof typeof attributes.value]++;
        }
      }
  
      function decreaseAttribute(attribute: keyof typeof attributes.value) {
        const cost = attributes.value[attribute as keyof typeof attributes.value] > 13 ? 2 : 1;
        if (attributes.value[attribute as keyof typeof attributes.value] > 8) {
          points.value += cost;
          attributes.value[attribute as keyof typeof attributes.value]--;
        }
      }
  
      return {
        attributes,
        points,
        increaseAttribute,
        decreaseAttribute
      };
    }
  }
  </script>

<style scoped>
.botoes{
  display: flex;
  justify-content: center;
}

</style>
  