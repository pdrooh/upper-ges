const express = require('express');
const cors = require('cors');
const celulasRoutes = require('./routes/celulas');
const contagemRoutes = require('./routes/contagem');
const escalasRoutes = require('./routes/escalas');
const upperguestRoutes = require('./routes/upperguest');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Rotas
app.use('/api/celulas', celulasRoutes);
app.use('/api/contagem', contagemRoutes);
app.use('/api/escalas', escalasRoutes);
app.use('/api/upperguest', upperguestRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
