const { Company, Main_Activities, Secondary_Activities, QSA, Simples, Simei } = require("../models");

exports.createCompany = async (companyData) => {
  const company = await Company.create({
    status: companyData.status,
    ultima_atualizacao: companyData.ultima_atualizacao,
    cnpj: companyData.cnpj,
    tipo: companyData.tipo,
    porte: companyData.porte,
    nome: companyData.nome,
    fantasia: companyData.fantasia,
    abertura: companyData.abertura,
    natureza_juridica: companyData.natureza_juridica,
    logradouro: companyData.logradouro,
    numero: companyData.numero,
    complemento: companyData.complemento,
    cep: companyData.cep,
    bairro: companyData.bairro,
    municipio: companyData.municipio,
    uf: companyData.uf,
    email: companyData.email,
    telefone: companyData.telefone,
    efr: companyData.efr,
    situacao: companyData.situacao,
    data_situacao: companyData.data_situacao,
    motivo_situacao: companyData.motivo_situacao,
    situacao_especial: companyData.situacao_especial,
    data_situacao_especial: companyData.data_situacao_especial,
    capital_social: companyData.capital_social,
  });

  // Criação das atividades principais
  if (companyData.atividade_principal) {
    await Promise.all(
      companyData.atividade_principal.map((activity) =>
        Main_Activities.create({
          code: activity.code,
          text: activity.text,
          company_id: company.id,
        })
      )
    );
  }

  // Criação das atividades secundárias
  if (companyData.atividades_secundarias) {
    await Promise.all(
      companyData.atividades_secundarias.map((activity) =>
        Secondary_Activities.create({
          code: activity.code,
          text: activity.text,
          company_id: company.id,
        })
      )
    );
  }

  // Criação dos QSA
  if (companyData.qsa) {
    await Promise.all(
      companyData.qsa.map((qsaItem) =>
        QSA.create({
          nome: qsaItem.nome,
          qual: qsaItem.qual,
          pais_origem: qsaItem.pais_origem,
          nome_rep_legal: qsaItem.nome_rep_legal,
          qual_rep_legal: qsaItem.qual_rep_legal,
          company_id: company.id,
        })
      )
    );
  }

  // Criação do Simples
  if (companyData.simples) {
    await Simples.create({
      optante: companyData.simples.optante,
      data_opcao: companyData.simples.data_opcao,
      data_exclusao: companyData.simples.data_exclusao,
      ultima_atualizacao: companyData.simples.ultima_atualizacao,
      company_id: company.id,
    });
  }

  // Criação do Simei
  if (companyData.simei) {
    await Simei.create({
      optante: companyData.simei.optante,
      data_opcao: companyData.simei.data_opcao,
      data_exclusao: companyData.simei.data_exclusao,
      ultima_atualizacao: companyData.simei.ultima_atualizacao,
      company_id: company.id,
    });
  }

  return company; // Retorna a empresa criada
};
