<template>
    <div>
        <h1>Consultar CNPJ</h1>

        <!-- Input para digitar o CNPJ -->
        <input v-model="cnpj" placeholder="Digite o CNPJ" @input="clearResults" />

        <!-- Botão para consultar a ReceitaWS -->
        <button @click="fetchCnpjData">Consultar</button>

        <!-- Exibição dos resultados da consulta -->
        <div v-if="companyData">
            <h2>Dados da Empresa:</h2>
            <p><strong>Nome:</strong> {{ companyData.nome }}</p>
            <p><strong>CNPJ:</strong> {{ companyData.cnpj }}</p>
            <p><strong>Fantasia:</strong> {{ companyData.fantasia }}</p>
            <p><strong>Atividade Principal:</strong> {{ companyData.atividade_principal[0].text }}</p>
            <!-- Adicione mais campos conforme necessário -->
        </div>

        <!-- Botão para salvar os dados no banco de dados -->
        <button v-if="companyData" @click="saveCompanyData">Save</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const cnpj = ref('');
const companyData = ref(null);

// Função para consultar o CNPJ no backend
const fetchCnpjData = async () => {
    try {
        const response = await axios.get(`http://localhost:4000/api/cnpj/${cnpj.value}`);
        companyData.value = response.data;
        console.log(companyData.value)
    } catch (error) {
        console.error("Erro ao buscar dados da ReceitaWS:", error);
    }
};

// Função para salvar os dados no banco de dados
const saveCompanyData = async () => {
    try {
        const response = await axios.post('http://localhost:4000/api/companies/register', companyData.value);
        console.log("Dados salvos com sucesso:", response.data);
    } catch (error) {
        console.error("Erro ao salvar dados:", error);
    }
};

// Função para limpar os resultados ao modificar o input
const clearResults = () => {
    companyData.value = null;
};
</script>

<style scoped>
input {
    margin-bottom: 10px;
    padding: 5px;
    width: 200px;
}

button {
    margin-top: 10px;
    padding: 5px 10px;
}

div {
    margin-top: 20px;
}
</style>