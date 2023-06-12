"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "alunos",
      [
        {
          nome: "Ian",
          sobrenome: "Ian Anderson Lopes",
          email: "ian_ian_lopes@sebrace.com.br",
          idade: "35",
          peso: "73",
          altura: "1.80",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "Henrique",
          sobrenome: "Paulo Danilo da Mota",
          email: "paulo@sgmail.com.br",
          idade: "50",
          peso: "79",
          altura: "1.69",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "Luciana",
          sobrenome: "Helena Fogaça",
          email: "luciana-fogaca98@valedesign.com.br",
          idade: "26",
          peso: "52",
          altura: "1.55",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "Daniel",
          sobrenome: "Iago Santos",
          email: "daniel.iago.santos@taclog.com.br",
          idade: "28",
          peso: "107",
          altura: "1.97",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down() {},
};
