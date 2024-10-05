"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Companies", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      status: {
        type: Sequelize.STRING,
      },
      ultima_atualizacao: {
        type: Sequelize.DATE,
      },
      cnpj: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      tipo: {
        type: Sequelize.STRING,
      },
      porte: {
        type: Sequelize.STRING,
      },
      nome: {
        type: Sequelize.STRING,
      },
      fantasia: {
        type: Sequelize.STRING,
      },
      abertura: {
        type: Sequelize.STRING,
      },
      natureza_juridica: {
        type: Sequelize.STRING,
      },
      logradouro: {
        type: Sequelize.STRING,
      },
      numero: {
        type: Sequelize.STRING,
      },
      complemento: {
        type: Sequelize.STRING,
      },
      cep: {
        type: Sequelize.STRING,
      },
      bairro: {
        type: Sequelize.STRING,
      },
      municipio: {
        type: Sequelize.STRING,
      },
      uf: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      telefone: {
        type: Sequelize.STRING,
      },
      efr: {
        type: Sequelize.STRING,
      },
      situacao: {
        type: Sequelize.STRING,
      },
      data_situacao: {
        type: Sequelize.STRING,
      },
      motivo_situacao: {
        type: Sequelize.STRING,
      },
      situacao_especial: {
        type: Sequelize.STRING,
      },
      data_situacao_especial: {
        type: Sequelize.STRING,
      },
      capital_social: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Companies");
  },
};
