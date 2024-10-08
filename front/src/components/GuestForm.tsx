import React, { useState } from 'react';

interface UpperGuest {
  nome: string;
  email: string;
  telefone: string;
  dataVisita: string;
}

interface UpperGuestFormProps {
  onSubmit: (upperGuest: UpperGuest) => void;
}

const UpperGuestForm: React.FC<UpperGuestFormProps> = ({ onSubmit }) => {
  const [upperGuest, setUpperGuest] = useState<UpperGuest>({
    nome: '',
    email: '',
    telefone: '',
    dataVisita: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUpperGuest(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(upperGuest);
    setUpperGuest({ nome: '', email: '', telefone: '', dataVisita: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="nome" className="block text-sm font-medium text-gray-700">Nome</label>
        <input
          type="text"
          id="nome"
          name="nome"
          value={upperGuest.nome}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={upperGuest.email}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div>
        <label htmlFor="telefone" className="block text-sm font-medium text-gray-700">Telefone</label>
        <input
          type="tel"
          id="telefone"
          name="telefone"
          value={upperGuest.telefone}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div>
        <label htmlFor="dataVisita" className="block text-sm font-medium text-gray-700">Data da Visita</label>
        <input
          type="date"
          id="dataVisita"
          name="dataVisita"
          value={upperGuest.dataVisita}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <button type="submit" className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        Cadastrar Upper Guest
      </button>
    </form>
  );
};

export default UpperGuestForm;