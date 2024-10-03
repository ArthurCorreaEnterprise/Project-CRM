<template>
    <NavBarCustom />
    <CookieConsentCustom />
    <router-view />
  </template>
  
  <script setup>
  import NavBarCustom from '../components/NavBarCustom.vue';
  import CookieConsentCustom from '../components/CookieConsentCustom.vue';
  </script>
  