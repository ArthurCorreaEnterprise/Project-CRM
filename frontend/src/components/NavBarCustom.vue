<template>
    <nav>
        <ul class="nav-list">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/about">About</router-link></li>
        </ul>
        <ul class="auth-buttons">
            <li><router-link to="/signin">Sign In</router-link></li>
            <li><router-link to="/signup">Sign Up</router-link></li>
        </ul>
    </nav>
</template>

<script setup>
// Script setup não requer lógica específica aqui
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