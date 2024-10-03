<template>
    <div class="signin-container">
      <h2>Sign In</h2>
      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label for="email">Email:</label>
          <input
            type="email"
            id="email"
            v-model="email"
            placeholder="Enter your email"
            required
          />
        </div>
  
        <div class="form-group">
          <label for="password">Password:</label>
          <input
            type="password"
            id="password"
            v-model="password"
            placeholder="Enter your password"
            required
          />
        </div>
  
        <div class="form-group">
          <input
            type="checkbox"
            id="rememberMe"
            v-model="rememberMe"
          />
          <label for="rememberMe">Remember Me</label>
        </div>
  
        <button type="submit" :disabled="isSubmitting">Sign In</button>
        <p v-if="error" class="error">{{ error }}</p>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useStore } from 'vuex';
  import { useRouter } from 'vue-router';
  
  const email = ref('');
  const password = ref('');
  const rememberMe = ref(false); // Estado para o checkbox "Remember Me"
  const isSubmitting = ref(false);
  const error = ref(null);
  
  const store = useStore();
  const router = useRouter();
  
  const handleLogin = async () => {
    error.value = null;
    isSubmitting.value = true;
  
    try {
      await store.dispatch('login', {
        email: email.value,
        password: password.value,
        rememberMe: rememberMe.value, // Passa o valor do checkbox
      });
      router.push('/');
    } catch (err) {
      error.value = 'Login failed. Please check your credentials.';
    } finally {
      isSubmitting.value = false;
    }
  };
  </script>
  
  <style scoped>
  .signin-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    background-color: #f9f9f9;
  }
  
  h2 {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
  }
  
  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  button {
    width: 100%;
    padding: 10px;
    background-color: #42b983;
    border: none;
    border-radius: 5px;
    color: white;
    font-size: 16px;
    cursor: pointer;
  }
  
  button:disabled {
    background-color: #ccc;
  }
  
  .error {
    color: red;
    font-size: 14px;
  }
  </style>
  