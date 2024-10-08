import React, { useState } from 'react';
import ContagemCultoForm from '../components/ContagemCultoForm';

interface ContagemCulto {
  id: number;
  data: string;
  culto: string;
  totalPresentes: number;
  novosConvertidos: number;
  visitantes: number;
}

const ContagemCultoPage: React.FC = () => {
  const [contagens, setContagens] = useState<ContagemCulto[]>([]);

  const handleSubmit = (novaContagem: Omit<ContagemCulto, 'id'>) => {
    const contagemComId = { ...novaContagem, id: Date.now() };
    setContagens(prev => [...prev, contagemComId]);
    // Aqui você faria uma chamada à API para salvar a contagem no backend
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Contagem de Culto</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Registrar Nova Contagem</h2>
          <ContagemCultoForm onSubmit={handleSubmit} />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Histórico de Contagens</h2>
          <ul className="space-y-4">
            {contagens.map(contagem => (
              <li key={contagem.id} className="bg-white shadow rounded-lg p-4">
                <h3 className="text-lg font-medium">{contagem.culto} - {contagem.data}</h3>
                <p>Total de Presentes: {contagem.totalPresentes}</p>
                <p>Novos Convertidos: {contagem.novosConvertidos}</p>
                <p>Visitantes: {contagem.visitantes}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContagemCultoPage;