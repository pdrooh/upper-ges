import React, { useState } from 'react';
import EscalaForm from '../components/EscalaForm';

interface Escala {
  id: number;
  data: string;
  ministerio: string;
  responsavel: string;
}

const EscalasPage: React.FC = () => {
  const [escalas, setEscalas] = useState<Escala[]>([]);

  const handleSubmit = (novaEscala: Omit<Escala, 'id'>) => {
    const escalaComId = { ...novaEscala, id: Date.now() };
    setEscalas(prev => [...prev, escalaComId]);
    // Aqui você faria uma chamada à API para salvar a escala no backend
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gerenciamento de Escalas</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Adicionar Nova Escala</h2>
          <EscalaForm onSubmit={handleSubmit} />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Escalas Atuais</h2>
          <ul className="space-y-4">
            {escalas.map(escala => (
              <li key={escala.id} className="bg-white shadow rounded-lg p-4">
                <h3 className="text-lg font-medium">{escala.ministerio} - {escala.data}</h3>
                <p>Responsável: {escala.responsavel}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EscalasPage;