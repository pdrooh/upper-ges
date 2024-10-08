import React, { useState } from 'react';

interface ContagemCulto {
  data: string;
  culto: string;
  totalPresentes: number;
  novosConvertidos: number;
  visitantes: number;
}

interface ContagemCultoFormProps {
  onSubmit: (contagem: ContagemCulto) => void;
}

const ContagemCultoForm: React.FC<ContagemCultoFormProps> = ({ onSubmit }) => {
  const [contagem, setContagem] = useState<ContagemCulto>({
    data: '',
    culto: '',
    totalPresentes: 0,
    novosConvertidos: 0,
    visitantes: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setContagem(prev => ({ ...prev, [name]: name.includes('total') || name.includes('novos') || name.includes('visitantes') ? parseInt(value) : value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(contagem);
    setContagem({ data: '', culto: '', totalPresentes: 0, novosConvertidos: 0, visitantes: 0 });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="data" className="block text-sm font-medium text-gray-700">Data do Culto</label>
        <input
          type="date"
          id="data"
          name="data"
          value={contagem.data}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div>
        <label htmlFor="culto" className="block text-sm font-medium text-gray-700">Tipo de Culto</label>
        <select
          id="culto"
          name="culto"
          value={contagem.culto}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        >
          <option value="">Selecione o tipo de culto</option>
          <option value="Domingo">Domingo</option>
          <option value="Quarta-feira">Quarta-feira</option>
          <option value="Especial">Especial</option>
        </select>
      </div>
      <div>
        <label htmlFor="totalPresentes" className="block text-sm font-medium text-gray-700">Total de Presentes</label>
        <input
          type="number"
          id="totalPresentes"
          name="totalPresentes"
          value={contagem.totalPresentes}
          onChange={handleChange}
          required
          min="0"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div>
        <label htmlFor="novosConvertidos" className="block text-sm font-medium text-gray-700">Novos Convertidos</label>
        <input
          type="number"
          id="novosConvertidos"
          name="novosConvertidos"
          value={contagem.novosConvertidos}
          onChange={handleChange}
          required
          min="0"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div>
        <label htmlFor="visitantes" className="block text-sm font-medium text-gray-700">Visitantes</label>
        <input
          type="number"
          id="visitantes"
          name="visitantes"
          value={contagem.visitantes}
          onChange={handleChange}
          required
          min="0"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <button type="submit" className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        Registrar Contagem
      </button>
    </form>
  );
};

export default ContagemCultoForm;