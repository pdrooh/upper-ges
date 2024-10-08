exports.getUpperguests = (req, res) => {
    // Lógica para buscar upperguests
    res.json({ message: 'Lista de upperguests' });
  };
  
  exports.createUpperguest = (req, res) => {
    // Lógica para criar um novo upperguest
    res.json({ message: 'Upperguest criado com sucesso' });
  };
  
  // Adicione mais funções conforme necessário
  