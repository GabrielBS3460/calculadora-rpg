<!-- OrdemParanormal.vue -->
<template>
    <div>
      <h1 class="titulo">Calculadora de Atributos Ordem Paranormal</h1>
      <div class="box" v-for="(value, attribute) in attributes" :key="attribute">
        <h2 class="title is-4">{{ attribute }}</h2>
        <p class="subtitle is-6">Valor atual: {{ value }}</p>
        <div class="botoes">
          <button class="button is-primary" @click="increaseAttribute(attribute)" :disabled="points <= 0 || value >= 3">Aumentar</button>
          <button class="button is-danger" @click="decreaseAttribute(attribute)" :disabled="value <= 0">Reduzir</button>
        </div>
      </div>
      <p  class="pontos">Pontos restantes: {{ points }}</p>
    </div>
  </template>
  
  <script lang="ts">
  import { ref } from 'vue';
  
  export default {
    name: 'OrdemParanormal',
    setup() {
      const attributes = ref({
        Força: 1,
        Agilidade: 1,
        Intelecto: 1,
        Presença: 1,
        Vigor: 1
      });
      const points = ref(4);
  
      function increaseAttribute(attribute: keyof typeof attributes.value) {
        if (points.value > 0 && attributes.value[attribute as keyof typeof attributes.value] < 3) {
          points.value--;
          attributes.value[attribute as keyof typeof attributes.value]++;
        }
      }
  
      function decreaseAttribute(attribute: keyof typeof attributes.value) {
        if (attributes.value[attribute as keyof typeof attributes.value] > 0) {
          points.value++;
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