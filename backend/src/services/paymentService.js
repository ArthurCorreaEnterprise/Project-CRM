const pagarme = require("pagarme"); // Certifique-se de instalar o pagarme SDK: npm install pagarme
const { Plan, Subscription, User } = require("../models"); // Models relacionadas
const dotenv = require("dotenv");
dotenv.config();

const paymentService = {
  async createTransaction(cardInfo, userId, planId) {
    try {
      // Buscar o usuário e o plano selecionado
      const user = await User.findByPk(userId);
      const plan = await Plan.findByPk(planId);

      if (!user || !plan) {
        throw new Error("Usuário ou plano não encontrado");
      }

      // Conectar ao pagar.me e criar transação
      const client = await pagarme.client.connect({
        api_key: "sk_test_685kpaipMSnpVwqo",
      });
      const transaction = await client.transactions.create({
        amount: plan.price * 100, // valor em centavos
        card_number: cardInfo.cardNumber,
        card_cvv: cardInfo.cvv,
        card_expiration_date: cardInfo.expirationDate,
        card_holder_name: cardInfo.cardHolderName,
        customer: {
          external_id: user.id.toString(),
          name: user.name,
          email: user.email,
          type: "individual",
          country: "br",
          phone_numbers: [user.phone],
          documents: [
            {
              type: "cpf",
              number: user.cpf, // certifique-se de ter o CPF do usuário
            },
          ],
        },
        billing: {
          name: user.name,
          address: {
            country: "br",
            state: user.state,
            city: user.city,
            neighborhood: user.neighborhood,
            street: user.street,
            street_number: user.streetNumber,
            zipcode: user.zipcode.replace("-", ""),
          },
        },
        items: [
          {
            id: plan.id.toString(),
            title: plan.name,
            unit_price: plan.price * 100,
            quantity: 1,
            tangible: false,
          },
        ],
      });

      console.log("Transação criada com sucesso:", transaction);
      return transaction;
    } catch (error) {
      // Logue o erro completo para entender o que está acontecendo
      console.error(
        "Erro ao criar transação:",
        error.response ? error.response : error
      );
      throw new Error("Erro ao processar a transação, tente novamente.");
    }
  },

  async createSubscription(cardInfo, userId, planId) {
    try {
      // Primeiro, cria a transação
      const transaction = await this.createTransaction(
        cardInfo,
        userId,
        planId
      );

      // Se a transação foi bem sucedida, cria a assinatura
      if (transaction.status === "paid") {
        const subscription = await Subscription.create({
          userId,
          planId,
          startDate: new Date(),
          status: "active",
        });
        console.log("Assinatura criada com sucesso:", subscription);
        return subscription;
      } else {
        throw new Error("Pagamento não foi concluído com sucesso");
      }
    } catch (error) {
      console.error("Erro ao criar assinatura:", error);
      throw new Error(`Erro ao criar assinatura: ${error.message}`);
    }
  },
};

module.exports = paymentService;
