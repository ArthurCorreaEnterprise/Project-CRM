<template>
    <div class="signup-container">
      <h2>Sign Up</h2>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="name">Name:</label>
          <input
            type="text"
            id="name"
            v-model="formData.name"
            placeholder="Enter your name"
            required
          />
        </div>
  
        <div class="form-group">
          <label for="email">Email:</label>
          <input
            type="email"
            id="email"
            v-model="formData.email"
            placeholder="Enter your email"
            required
          />
          <p v-if="emailError" class="error">{{ emailError }}</p>
        </div>
  
        <div class="form-group">
          <label for="password">Password:</label>
          <input
            type="password"
            id="password"
            v-model="formData.password"
            placeholder="Enter your password"
            required
          />
        </div>
  
        <div class="form-group">
          <label for="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            v-model="formData.confirmPassword"
            placeholder="Confirm your password"
            required
          />
          <p v-if="passwordError" class="error">{{ passwordError }}</p>
        </div>
  
        <button type="submit" :disabled="isSubmitting">Sign Up</button>
        <p v-if="submissionError" class="error">{{ submissionError }}</p>
      </form>
    </div>
  </template>
  
  <script setup>
  import { reactive, ref } from 'vue';
  import axios from 'axios';
  
  // Dados do formulário
  const formData = reactive({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  
  // Controle de estados
  const isSubmitting = ref(false);
  const emailError = ref(null);
  const passwordError = ref(null);
  const submissionError = ref(null);
  
  // Função para enviar os dados para a API
  const handleSubmit = async () => {
    // Limpar os erros anteriores
    emailError.value = null;
    passwordError.value = null;
    submissionError.value = null;
  
    // Validação simples de email e senha
    if (!validateEmail(formData.email)) {
      emailError.value = 'Invalid email format.';
      return;
    }
  
    if (formData.password !== formData.confirmPassword) {
      passwordError.value = 'Passwords do not match.';
      return;
    }
  
    isSubmitting.value = true;
  
    try {
      const response = await axios.post('http://localhost:4000/api/users/register', {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });
  
      console.log('User registered successfully:', response.data);
      alert('User registered successfully!');
      // Redirecionar ou limpar o formulário após o registro
    } catch (error) {
      console.error('Error registering user:', error);
      submissionError.value = 'Failed to register. Please try again.';
    } finally {
      isSubmitting.value = false;
    }
  };
  
  // Validação de email simples
  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };
  </script>
  
  <style scoped>
  .signup-container {
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
  