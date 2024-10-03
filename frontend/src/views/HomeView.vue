<template>
    <div class="home">
        <h1>Home</h1>

        <div v-if="isAuthenticated">
            <h2>Bem-vindo, {{ user.name }}!</h2>
            <p>Email: {{ user.email }}</p>
            <p>ID: {{ user.id }}</p>
        </div>

        <div v-else>
            <h2>Ninguém está logado no momento.</h2>
            <p>Por favor, faça login para acessar as funcionalidades restritas.</p>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

// Computed para verificar se alguém está autenticado e pegar os dados do usuário
const isAuthenticated = computed(() => store.getters.isAuthenticated);
const user = computed(() => store.getters.getUser);
</script>

<style scoped>
.home {
    text-align: center;
    margin-top: 50px;
}

h1 {
    font-size: 2rem;
    margin-bottom: 20px;
}

h2 {
    font-size: 1.5rem;
    color: #42b983;
}

p {
    font-size: 1.1rem;
}
</style>