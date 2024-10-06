const paymentService = require('../services/paymentService');

const paymentController = {
  async createSubscription(req, res) {
    try {
      const { userId, planId, cardInfo } = req.body;

      // Validação básica dos campos
      if (!userId || !planId || !cardInfo) {
        return res.status(400).json({
          message: 'Parâmetros inválidos. Certifique-se de fornecer userId, planId e cardInfo.',
        });
      }

      // Cria a assinatura através do serviço de pagamento
      const subscription = await paymentService.createSubscription(cardInfo, userId, planId);

      return res.status(201).json({
        message: 'Assinatura criada com sucesso!',
        subscription,
      });
    } catch (error) {
      // Diferenciar os tipos de erro para respostas mais específicas
      if (error.message.includes('Usuário ou plano não encontrado')) {
        return res.status(404).json({
          message: 'Usuário ou plano não encontrado. Verifique os dados fornecidos.',
        });
      }

      if (error.message.includes('Pagamento não foi concluído com sucesso')) {
        return res.status(402).json({
          message: 'Falha no pagamento. Por favor, tente novamente com outra forma de pagamento.',
        });
      }

      // Erro genérico
      return res.status(500).json({
        message: 'Erro ao criar assinatura',
        error: error.message,
      });
    }
  },
};

module.exports = paymentController;
