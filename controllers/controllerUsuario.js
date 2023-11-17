const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getAllUsuarios(req, res) {
    const usuarios = await prisma.usuario.findMany();
    res.json(usuarios);
  }
  
  // Adicione outras funções de controle conforme necessário
  
  module.exports = {
    getAllUsuarios,
  };
