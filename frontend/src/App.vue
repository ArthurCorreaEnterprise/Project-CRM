<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

// Importa os layouts
import DefaultLayout from './layouts/DefaultLayout.vue';
import AuthLayout from './layouts/AuthLayout.vue';

// Pega a rota atual
const route = useRoute();

// Computa qual layout usar com base no meta das rotas
const layout = computed(() => {
  return route.meta.layout === 'auth' ? AuthLayout : DefaultLayout;
});
</script>
