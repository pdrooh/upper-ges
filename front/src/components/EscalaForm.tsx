import React, { useState } from 'react';

interface Escala {
  data: string;
  ministerio: string;
  responsavel: string;
}

interface EscalaFormProps {
  onSubmit: (escala: Escala) => void;
}

const EscalaForm: React.FC<EscalaFormProps> = ({ onSubmit }) => {
  const [escala, setEscala] = useState<Escala>({
    data: '',
    ministerio: '',
    responsavel: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setEscala(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(escala);
    setEscala({ data: '', ministerio: '', responsavel: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="data" className="block text-sm font-medium text-gray-700">Data</label>
        <input
          type="date"
          id="data"
          name="data"
          value={escala.data}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div>
        <label htmlFor="ministerio" className="block text-sm font-medium text-gray-700">Ministério</label>
        <select
          id="ministerio"
          name="ministerio"
          value={escala.ministerio}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        >
          <option value="">Selecione o ministério</option>
          <option value="Louvor">Louvor</option>
          <option value="Infantil">Infantil</option>
          <option value="Recepção">Recepção</option>
          <option value="Mídia">Mídia</option>
        </select>
      </div>
      <div>
        <label htmlFor="responsavel" className="block text-sm font-medium text-gray-700">Responsável</label>
        <input
          type="text"
          id="responsavel"
          name="responsavel"
          value={escala.responsavel}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <button type="submit" className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        Adicionar à Escala
      </button>
    </form>
  );
};

export default EscalaForm;