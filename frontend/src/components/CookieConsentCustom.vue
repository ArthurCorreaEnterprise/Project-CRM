<template>
    <div v-if="!cookiesAccepted" class="cookie-consent">
        <p>Este site usa cookies para melhorar sua experiência. Ao continuar, você aceita o uso de cookies.</p>
        <button @click="acceptCookies">Aceitar</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Cookies from 'js-cookie';

const cookiesAccepted = ref(Cookies.get('cookiesAccepted') === 'true');

const acceptCookies = () => {
    Cookies.set('cookiesAccepted', 'true', { expires: 365 });
    cookiesAccepted.value = true;
};
</script>

<style scoped>
.cookie-consent {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 10px;
    z-index: 1000;
}

button {
    margin-left: 15px;
    padding: 5px 10px;
    background-color: #42b983;
    border: none;
    color: white;
    cursor: pointer;
}
</style>