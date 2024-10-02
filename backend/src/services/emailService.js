const nodemailer = require('nodemailer');

// Configurações do Nodemailer usando SMTP
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com', // Servidor SMTP do Gmail
  port: 587, // Porta para conexão SMTP
  secure: false, // Defina como true para porta 465, caso contrário false
  auth: {
    user: 'arthurcorreaenterprise@gmail.com', // seu e-mail
    pass: 'vysj xgof fzwk hadd',  // sua senha ou senha de aplicativo
  },
});

// Função para enviar o e-mail de confirmação
const sendConfirmationEmail = async (to, confirmationLink) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject: 'Confirmação de E-mail',
    text: `Por favor, clique no seguinte link para confirmar seu e-mail: ${confirmationLink}`,
  };

  return transporter.sendMail(mailOptions);
};

module.exports = {
  sendConfirmationEmail,
};
