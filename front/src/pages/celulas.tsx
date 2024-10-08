import React, { useState } from 'react';
import CelulaForm from '../components/CelulaForm';

interface Celula {
  id: number;
  nome: string;
  lider: string;
  dia: string;
  horario: string;
}

const CelulasPage: React.FC = () => {
  const [celulas, setCelulas] = useState<Celula[]>([]);

  const handleSubmit = (novaCelula: Omit<Celula, 'id'>) => {
    const celulaComId = { ...novaCelula, id: Date.now() };
    setCelulas(prev => [...prev, celulaComId]);
    // Aqui você faria uma chamada à API para salvar a célula no backend
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gerenciamento de Células</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Cadastrar Nova Célula</h2>
          <CelulaForm onSubmit={handleSubmit} />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Lista de Células</h2>
          <ul className="space-y-4">
            {celulas.map(celula => (
              <li key={celula.id} className="bg-white shadow rounded-lg p-4">
                <h3 className="text-lg font-medium">{celula.nome}</h3>
                <p>Líder: {celula.lider}</p>
                <p>Dia: {celula.dia}</p>
                <p>Horário: {celula.horario}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CelulasPage;