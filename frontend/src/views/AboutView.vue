<template>
    <div class="company-list">
        <h1>Empresas Cadastradas</h1>
        <div v-if="loading">Carregando...</div>
        <div v-if="error">{{ error }}</div>

        <div v-if="companies.length" v-for="company in companies" :key="company.id" class="company-card">
            <h2>{{ company.nome }} ({{ company.cnpj }})</h2>
            <p><strong>Status:</strong> {{ company.status }}</p>
            <p><strong>Última Atualização:</strong> {{ new Date(company.ultima_atualizacao).toLocaleString() }}</p>
            <p><strong>Porte:</strong> {{ company.porte }}</p>
            <p><strong>Tipo:</strong> {{ company.tipo }}</p>
            <p><strong>Abertura:</strong> {{ company.abertura }}</p>
            <p><strong>Natureza Jurídica:</strong> {{ company.natureza_juridica }}</p>
            <p><strong>Endereço:</strong> {{ company.logradouro }}, {{ company.numero }} {{ company.complemento }} - {{
                company.bairro }}, {{ company.municipio }} - {{ company.uf }}</p>
            <p><strong>CEP:</strong> {{ company.cep }}</p>
            <p><strong>Email:</strong> {{ company.email }}</p>
            <p><strong>Telefone:</strong> {{ company.telefone }}</p>
            <p><strong>Capital Social:</strong> R$ {{ parseFloat(company.capital_social).toLocaleString('pt-BR') }}</p>

            <!-- Main Activity -->
            <h3>Atividade Principal</h3>
            <ul>
                <li v-for="activity in company.mainActivities" :key="activity.id">
                    {{ activity.code }} - {{ activity.text }}
                </li>
            </ul>

            <!-- Secondary Activities -->
            <h3>Atividades Secundárias</h3>
            <ul>
                <li v-for="activity in company.secondaryActivities" :key="activity.id">
                    {{ activity.code }} - {{ activity.text }}
                </li>
            </ul>

            <!-- QSA -->
            <h3>Quadro de Sócios e Administradores (QSA)</h3>
            <ul>
                <li v-for="person in company.qsa" :key="person.id">
                    {{ person.nome }} - {{ person.qual }}
                </li>
            </ul>

            <!-- Simples -->
            <h3>Simples Nacional</h3>
            <p v-if="company.simples.optante">Optante desde: {{ new
                Date(company.simples.data_opcao).toLocaleDateString() }}</p>
            <p v-else>Não Optante</p>

            <!-- Simei -->
            <h3>Simei</h3>
            <p v-if="company.simei.optante">Optante</p>
            <p v-else>Não Optante</p>

            <hr />
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const companies = ref([]);
const loading = ref(true);
const error = ref('');

// Função que consulta as empresas na API
const fetchCompanies = async () => {
    try {
        const response = await fetch('http://localhost:4000/api/companies'); // Substitua pela sua URL da API
        const data = await response.json();
        companies.value = data;
    } catch (err) {
        error.value = 'Erro ao carregar empresas.';
    } finally {
        loading.value = false;
    }
};

onMounted(() => {
    fetchCompanies();
});
</script>

<style scoped>
.company-list {
    max-width: 800px;
    margin: 0 auto;
}

.company-card {
    border: 1px solid #ccc;
    padding: 16px;
    margin-bottom: 16px;
}

h1,
h2,
h3 {
    color: #333;
}

hr {
    margin-top: 20px;
}
</style>