import React, { useState } from 'react';
import UpperGuestForm from '../components/GuestForm';

interface UpperGuest {
  id: number;
  nome: string;
  email: string;
  telefone: string;
  dataVisita: string;
}

const UpperGuestPage: React.FC = () => {
  const [upperGuests, setUpperGuests] = useState<UpperGuest[]>([]);

  const handleSubmit = (novoUpperGuest: Omit<UpperGuest, 'id'>) => {
    const upperGuestComId = { ...novoUpperGuest, id: Date.now() };
    setUpperGuests(prev => [...prev, upperGuestComId]);
    // Aqui você faria uma chamada à API para salvar o upper guest no backend
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gerenciamento de Upper Guests</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Cadastrar Novo Upper Guest</h2>
          <UpperGuestForm onSubmit={handleSubmit} />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Lista de Upper Guests</h2>
          <ul className="space-y-4">
            {upperGuests.map(guest => (
              <li key={guest.id} className="bg-white shadow rounded-lg p-4">
                <h3 className="text-lg font-medium">{guest.nome}</h3>
                <p>Email: {guest.email}</p>
                <p>Telefone: {guest.telefone}</p>
                <p>Data da Visita: {guest.dataVisita}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UpperGuestPage;