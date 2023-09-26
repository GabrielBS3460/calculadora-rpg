<!-- Tormenta.vue -->
<template>
    <div>
      <h1 class="titulo">Calculadora de Atributos Tormenta</h1>
      <div class="box" v-for="(value, attribute) in attributes" :key="attribute">
        <h2 class="title is-4">{{ attribute }}</h2>
        <p class="subtitle is-6">Valor atual: {{ value }}</p>
        <div class="botoes">
          <button class="button is-primary" @click="increaseAttribute(attribute)" :disabled="points <= 0 || value >= 4 || (value >= 2 && points < 2) || (value === 3 && points < 3)">Aumentar</button>
          <button class="button is-danger" @click="decreaseAttribute(attribute)" :disabled="value <= -1">Reduzir</button>
        </div>
      </div>
      <p  class="pontos">Pontos restantes: {{ points }}</p>
    </div>
  </template>
  
<script lang="ts">
  import { ref } from 'vue';
  
  export default {
    name: 'TormentaRpg',
    setup() {
      const attributes = ref({
        Força: 0,
        Destreza: 0,
        Constituição: 0,
        Inteligência: 0,
        Sabedoria: 0,
        Carisma: 0
      });
      const points = ref(10);
  
      function increaseAttribute(attribute: keyof typeof attributes.value) {
        const cost = attributes.value[attribute as keyof typeof attributes.value] >= 2 ? (attributes.value[attribute as keyof typeof attributes.value] === 3 ? 3 : 2) : 1;
        if (points.value >= cost && attributes.value[attribute as keyof typeof attributes.value] < 4) {
          points.value -= cost;
          attributes.value[attribute as keyof typeof attributes.value]++;
        }
      }
  
      function decreaseAttribute(attribute: keyof typeof attributes.value) {
        const gain = attributes.value[attribute as keyof typeof attributes.value] > 2 ? (attributes.value[attribute as keyof typeof attributes.value] === 3 ? 2 : 3) : 1;
        if (attributes.value[attribute as keyof typeof attributes.value] > -1) {
          points.value += gain;
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
  
  