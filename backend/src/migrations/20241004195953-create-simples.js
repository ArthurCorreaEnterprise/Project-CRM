"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Simples", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      optante: {
        type: Sequelize.BOOLEAN,
      },
      data_opcao: {
        type: Sequelize.DATE,
      },
      data_exclusao: {
        type: Sequelize.DATE,
      },
      ultima_atualizacao: {
        type: Sequelize.DATE,
      },
      company_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Companies", // Nome da tabela
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
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
    await queryInterface.dropTable("Simples");
  },
};
