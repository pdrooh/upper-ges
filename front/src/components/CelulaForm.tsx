import React, { useState } from 'react';

interface Celula {
  nome: string;
  lider: string;
  dia: string;
  horario: string;
}

interface CelulaFormProps {
  onSubmit: (celula: Celula) => void;
}

const CelulaForm: React.FC<CelulaFormProps> = ({ onSubmit }) => {
  const [celula, setCelula] = useState<Celula>({
    nome: '',
    lider: '',
    dia: '',
    horario: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCelula(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(celula);
    setCelula({ nome: '', lider: '', dia: '', horario: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="nome" className="block text-sm font-medium text-gray-700">Nome da Célula</label>
        <input
          type="text"
          id="nome"
          name="nome"
          value={celula.nome}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div>
        <label htmlFor="lider" className="block text-sm font-medium text-gray-700">Líder</label>
        <input
          type="text"
          id="lider"
          name="lider"
          value={celula.lider}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div>
        <label htmlFor="dia" className="block text-sm font-medium text-gray-700">Dia da Semana</label>
        <input
          type="text"
          id="dia"
          name="dia"
          value={celula.dia}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div>
        <label htmlFor="horario" className="block text-sm font-medium text-gray-700">Horário</label>
        <input
          type="time"
          id="horario"
          name="horario"
          value={celula.horario}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <button type="submit" className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        Cadastrar Célula
      </button>
    </form>
  );
};

export default CelulaForm;