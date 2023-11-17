const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getAllLeiloes(req, res) {
    const leiloes = await prisma.leilao.findMany();
    res.json(leiloes);
  }

  async function JobFechaLeilao(req, res){
    res.json({message: 'Fechado'});
  }
  module.exports = {
    getAllLeiloes,
    JobFechaLeilao,
  };
  