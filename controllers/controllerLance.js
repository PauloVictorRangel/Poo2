const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getAllLances(req, res) {
    const lances = await prisma.lance.findMany();
    res.json(lances);
  }
  
  // Adicione outras funções de controle conforme necessário
  
  module.exports = {
    getAllLances,
  };
