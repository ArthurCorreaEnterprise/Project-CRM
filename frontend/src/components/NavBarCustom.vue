<template>
    <nav>
        <ul class="nav-list">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/about">About</router-link></li>
        </ul>
        <ul v-if="isAuthenticated" class="auth-buttons">
            <li>
                <button @click="logout">Logout</button>
            </li>
        </ul>
        <ul v-else class="auth-buttons">
            <li>
                <RouterLink to="/signin">Sign In</RouterLink>
            </li>
            <li>
                <RouterLink to="/signup">Sign Up</RouterLink>
            </li>
        </ul>
    </nav>
</template>

<script setup>
import { useStore } from 'vuex';
import { computed } from 'vue';
import { useRouter } from 'vue-router';

const store = useStore();
const router = useRouter();

// Computed property para verificar se o usuário está autenticado
const isAuthenticated = computed(() => store.getters.isAuthenticated);

// Função para fazer logout
const logout = () => {
    store.dispatch('logout');
    router.push('/signin');
};
</script>

<style scoped>
nav {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    background-color: #333;
}

.nav-list,
.auth-buttons {
    list-style: none;
    display: flex;
    gap: 1rem;
}

a {
    color: white;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}
</style>